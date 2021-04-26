import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './components/signin';
import SignUp from './components/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {

  render(){

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="SignIn"
            component={SignIn}
          />
          <Stack.Screen 
            name="SignUp"
            component={SignUp}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


