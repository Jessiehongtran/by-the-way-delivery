import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

var markers = [
  {
    id: 1,
    latitude : 37.6187 , 
    longitude : 122.4924,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  },
  {
    id: 2,
    latitude : 37.6187 , 
    longitude : 123.4924,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive'
  }
];



export default function App() {
  const [markers, setMarkers] = useState([
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
  ]);

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
      <Text>By the way Delivery</Text>
      <StatusBar style="auto" />
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.051,
        }}
      >
      {markers.map(marker =>
        <MapView.Marker
            coordinate={{
                latitude: marker.latitude,
                longitude: marker.longitude}}
            title= {marker.title}
            pinColor = {"red"}
            description={marker.subtitle}
         />
      )}
      </MapView>
    </View>
  );
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
});
