import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { HOME_STACK, LOGIN_STACK } from '../constants/routes';
import { useUserContext } from '../providers/user';

import LoginStack from './LoginStack';
import HomeStack from './HomeStack';
import Loading from '../components/Loading';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const { isLoggedIn, dataLoaded } = useUserContext();
  
  if (!dataLoaded) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name={HOME_STACK}
          component={HomeStack}
        />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={LOGIN_STACK}
        component={LoginStack}
      />
    </Stack.Navigator>
  );
}
