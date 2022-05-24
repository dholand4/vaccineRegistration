import type {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';

import Header from '../../components/Header';

import {HOME_SCREEN, REGISTERCITIZEN_SCREEN} from '../../constants/routes';
import Home from '../../view/Home';
import RegisterCitizen from '../../view/RegisterCitizen';

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
   return (
    <Stack.Navigator>
      <Stack.Screen
options={{headerShown: false}}
        name={HOME_SCREEN}
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={REGISTERCITIZEN_SCREEN}
        component={RegisterCitizen}
      />
    </Stack.Navigator>
  );
}
