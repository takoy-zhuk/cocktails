import axios from 'axios';

const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
