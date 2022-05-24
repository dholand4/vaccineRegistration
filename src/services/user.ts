import type { AxiosResponse } from 'axios';
import { Alert } from 'react-native';

import type { EUser } from '~/@types/EUser';

import { api } from './api';

export interface DataLoginProps {
  email: string;
  password: string;
}

export interface DataUserProps {
  email: string;
  password: string;
  name: string;
}

export async function loginUserService(data: DataLoginProps) {
  try {
    const response = await api.post('/sessions/login', data);
    return response;
  } catch (error) {
    console.error(error);
    Alert.alert('', 'E-mail ou senha inválidos');
    return null;
  }
}

export async function registerUserService(data: DataUserProps) {
  try {
    const response: AxiosResponse<EUser> = await api.post('/users', data);

    return response;
  } catch (error) {
    console.log({ error });
    Alert.alert('', 'Email informado já está em uso');
    return null;
  }
}
