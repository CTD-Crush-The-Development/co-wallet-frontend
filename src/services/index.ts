import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_SERVER_URL,
});

export const getExample = API.get('/');
