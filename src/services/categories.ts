import axios, {AxiosResponse} from 'axios';
import {BASE_URL, APP_URL} from '../app.constants';

export const getCategories = (): Promise<AxiosResponse> => {
  return axios.get(`${BASE_URL}${APP_URL.productCategories}`);
};
