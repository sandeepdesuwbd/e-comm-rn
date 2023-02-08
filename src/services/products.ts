import axios, {AxiosResponse} from 'axios';
import {BASE_URL, APP_URL} from '../app.constants';

export const getProducts = (cat: string): Promise<AxiosResponse> => {
  let url = `${BASE_URL}${APP_URL.products}`;
  if (cat && cat !== 'All') {
    url += `${APP_URL.category}/${cat}`;
  }
  return axios.get(url);
};
