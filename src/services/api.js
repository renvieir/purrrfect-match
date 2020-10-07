import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://api.thecatapi.com/v1',
});

api.defaults.headers.common['X-API-KEY'] =
  process.env.X_API_KEY || '7254a3a1-9a81-4ed7-b2dd-2124f51b5f5f';

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
