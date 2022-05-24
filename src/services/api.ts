import axios from 'axios';

import { PATH } from '~/constants/api';

export const api = axios.create({
  baseURL: PATH,
});
