import axios from 'axios';

//const API_URL = 'https://tu-backend.onrender.com';
const API_URL = 'http://localhost:10000/api';

export const getPrediction = prompt => {
  return axios.post(`${API_URL}/nostradamus`, { prompt });
};
