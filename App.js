import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstTime from './screens/FirstTime';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App( ) {
  return (
    <NavigationContainer>
      <Stack.Navigator InitialRouteName="Home">
      <Stack.Screen name="Home" component={ FirstTime } options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={ SignUp } options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={ SignIn } options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
