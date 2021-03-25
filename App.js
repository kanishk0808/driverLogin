/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Homescreen from './src/screens/Homescreen'
import DisplayScreen from './src/screens/DisplayScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Homescreen" component={Homescreen} />
          <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
