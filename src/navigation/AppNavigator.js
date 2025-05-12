import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen/index.js';
import LoginScreen from '../screens/LoginScreen/index.js';
import AuthChoiceScreen from '../screens/AuthChoiceScreen/index.js';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen  name="AuthChoice"  component={AuthChoiceScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
