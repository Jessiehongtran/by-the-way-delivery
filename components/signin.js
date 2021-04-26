import React from 'react';
import {AppRegistry, Text, View, TextInput, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';

export default class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <View
                style={styles.loginComponent}
            >
                <Text 
                    class="header" 
                    style={styles.header}
                >
                    Hello Again ! {"\n"}Welcome {"\n"}back
                </Text>
                <TextInput 
                    type="text"
                    placeholder="Email Address"
                    placeholderTextColor="#565656" 
                    style={styles.input}
                />
                <TextInput 
                    type="text"
                    placeholder="Password"
                    placeholderTextColor="#565656" 
                    style={styles.input}
                />
                <TouchableOpacity 
                    style={styles.logInButton}
                >
                    <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>
                <View style={styles.reminder}>
                    <Text class="message">
                        Forgot Your Password?
                    </Text>
                    <Text 
                        style={{ color: 'blue'}}
                        onPress={() =>
                            this.props.navigation.navigate('SignUp')
                          }
                    >
                        Signup
                    </Text>
                </View>
                <Image alt="delivery guy" source={{ uri: 'https://i.pinimg.com/originals/18/c6/8a/18c68a37140cce76fc0041cbef1baf5b.gif'}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginComponent: {
        padding: 20,
        fontFamily: 'AppleSDGothicNeo-Bold'
    },
    header: {
        fontSize: 40, 
        marginBottom: 20,
        fontFamily: 'AppleSDGothicNeo-Bold'
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    logInButton: {
        borderRadius: 8,
        backgroundColor: '#000000',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 16
    },
    loginText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'AppleSDGothicNeo-Bold',
        fontSize: 16
    },
    reminder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        fontFamily: 'AppleSDGothicNeo-Bold'
    }
})
