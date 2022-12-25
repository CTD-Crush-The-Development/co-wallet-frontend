import axios from 'axios';
import mocking from './mocking';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});

mocking(API);

export const getExample = API.get('/');
export const getExchange = API.get('/exchange');
