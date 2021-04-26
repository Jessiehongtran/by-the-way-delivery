import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AppNavigator from './components/noti';

export default class Map extends React.Component {
    constructor(props){
        super(props);
        state = {
            location: null,
            curPos: {
              latitude : 37.6187 , 
              longitude : -122.4924,
            },
            displayMap: false,
            accuracy: 0,
            markers: [
              {
                id: 1,
                latitude : 37.6187 , 
                longitude : -122.4924,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
              },
              {
                id: 2,
                latitude : 37.6287 , 
                longitude : -122.5924,
                title: 'Foo Place',
                subtitle: '1234 Foo Drive'
              }
            ]
        }
      
        findCoordinates = () => {
          navigator.geolocation.getCurrentPosition(
            position => {
              const myCurPos = {
                id: 3,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                title: 'my place',
                subtitle: ''
              }
              const markers  = this.state.markers;
              markers.push(myCurPos)
              this.setState({ 
                  location: JSON.stringify(position),
                  curPos: myCurPos,
                  markers: markers,
                  displayMap: true,
                  accuracy: position.coords.accuracy
              });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          )
      
        }
    }

    render(){

        return (
            <View style={styles.container}>
                {this.state.displayMap
                ? <MapView 
                style={styles.map} 
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.603550,
                    longitude: -122.054250,
                    latitudeDelta: 0.522,
                    longitudeDelta: 0.11,
                }}
                >
                {this.state.markers.map(marker =>
                <MapView.Marker
                    key={marker.id}
                    coordinate={{
                        latitude: marker.latitude,
                        longitude: marker.longitude}}
                    title= {marker.title}
                    pinColor = {"red"}
                    description={marker.subtitle}
                />
                )}
                </MapView>
                : null }
                <TouchableOpacity onPress={this.findCoordinates}>
                    <Text>Find My Coords?</Text>
                    <Text>Location: { this.state.location }</Text>
                    <Text>Accuracy: { this.state.accuracy }</Text>
                </TouchableOpacity>
                <AppNavigator />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      position: 'absolute',
      zIndex: 10
    }
  });