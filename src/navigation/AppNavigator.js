import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen.js';
import LoginScreen from '../screens/LoginScreen.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
