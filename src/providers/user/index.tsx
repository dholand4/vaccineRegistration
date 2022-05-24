/* eslint-disable react/jsx-no-constructed-context-values */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import type { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { createContext, useContext } from 'use-context-selector';

import type { ECitizens } from '~/@types/ECitizens';
import type { EUser } from '~/@types/EUser';
import type { DataCitizensProps } from '~/services/citizen';
import {
  getCitizensService,
  registerCitizensService,
} from '~/services/citizen';
import type { DataLoginProps, DataUserProps } from '~/services/user';
import { loginUserService, registerUserService } from '~/services/user';

interface UserContextProps {
  isLoggedIn: boolean;
  dataLoaded: boolean;
  userData: EUser | null;
  registerUser: (data: DataUserProps) => void;
  loginUser: (data: DataLoginProps) => void;
  LogofLogin: () => void;
  getCitizens: () => void;
  registerCitizen: (data: DataCitizensProps) => void;
  listCitizens: any;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);
function UserProvider({ children }: any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [userData, setUserData] = useState<EUser | null>(null);
  const [listCitizens, setListCitizens] = useState<any | null>(null);

  const navigation = useNavigation();

  const getData = async () => {
    const value = await AsyncStorage.getItem('@USER_IS_LOGGED_KEY');
    if (value !== null) {
      setIsLoggedIn(JSON.parse(value));
    }
    setDataLoaded(true);
  };

  async function loginUser(data: DataLoginProps) {
    const response: AxiosResponse<EUser> | null = await loginUserService(data);
    if (response && response.status >= 200 && response.status < 300) {
      setUserData(response.data);
      await AsyncStorage.setItem('@USER_IS_LOGGED_KEY', JSON.stringify(true));

      const response2 = await getCitizensService(response.data.token);

      if (response2 && response2.status >= 200 && response2.status < 300) {
        setListCitizens(response2.data);
      }

      return setIsLoggedIn(true);
    }

    return console.log('Não foi possível entrar');
  }

  async function registerUser(data: DataUserProps) {
    const response: AxiosResponse<EUser> | null = await registerUserService(
      data,
    );

    if (response && response.status >= 200 && response.status < 300) {
      return navigation.goBack();
    }

    return console.log('Não foi possível registrar o usuário');
  }

  async function getCitizens() {
    if (userData?.token) {
      const response = await getCitizensService(userData?.token);
      console.log({ response });

      if (response && response.status >= 200 && response.status < 300) {
        return setListCitizens(response.data);
      }
    }

    return console.log('Não foi possível listar');
  }

  async function registerCitizen(data: DataCitizensProps) {
    if (userData?.token) {
      const response: AxiosResponse<ECitizens> | null =
        await registerCitizensService(userData?.token, data);
      if (response && response.status >= 200 && response.status < 300) {
        if (userData?.token) {
          const response2 = await getCitizensService(userData?.token);
          if (response2 && response2.status >= 200 && response2.status < 300) {
            setListCitizens(response2.data);
            Alert.alert('', 'Cidadão cadastrado! ');
            return navigation.goBack();
          }
        }
      }
    }

    return Alert.alert(
      '',
      'Primeiro inserir o mês e depois o dia na data de nascimento.',
    );
  }

  useEffect(() => {
    getData();
  }, []);

  const LogofLogin = async () => {
    setIsLoggedIn(false);
    setUserData(null);
    await AsyncStorage.setItem('@USER_IS_LOGGED_KEY', JSON.stringify(false));
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        dataLoaded,
        userData,
        registerUser,
        LogofLogin,
        loginUser,
        getCitizens,
        registerCitizen,
        listCitizens,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserContext);
  return context;
}

export { UserProvider, useUserContext, UserContext };
