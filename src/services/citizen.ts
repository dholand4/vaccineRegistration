import type { AxiosResponse } from 'axios';
import { Alert } from 'react-native';

import type { ECitizens } from '~/@types/ECitizens';

import { api } from './api';

const AUTHORIZATION = 'Authorization';

export interface DataCitizensProps {
  name: string;
  cpf: string;
  birthDate: Date;
  vaccineName: string;
  vaccineDose: string;
}

export async function getCitizensService(userToken: string) {
  console.log({ userToken });
  try {
    api.defaults.headers.common[AUTHORIZATION] = `Bearer ${userToken}`;
    const response = await api.get('/citizens');
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
export async function registerCitizensService(
  userToken: string,
  data: DataCitizensProps,
) {
  console.log({ userToken });
  try {
    api.defaults.headers.common[AUTHORIZATION] = `Bearer ${userToken}`;
    const response: AxiosResponse<ECitizens> = await api.post(
      '/citizens',
      data,
    );

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
}
