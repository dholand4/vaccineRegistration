import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  HOME_STACK,
  LOGIN_SCREEN,
  REGISTER_SREEN,
} from '../../constants/routes';
import Home from '../../view/Home';

import Login from '../../view/Login';
import Register from '../../view/Register';

const Stack = createNativeStackNavigator();

export default function LoginStack() {

  return (

    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={LOGIN_SCREEN}
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}

        name={REGISTER_SREEN}
        component={Register}
      />

    <Stack.Screen
  options={{ headerShown: false }}
        name={HOME_STACK}
        component={Home}
      />
    </Stack.Navigator>

  );
}
