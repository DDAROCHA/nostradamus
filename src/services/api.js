import axios from 'axios';

const API_URL = 'https://tu-backend.onrender.com';

export const getPrediction = prompt => {
  return axios.post(`${API_URL}/predict`, { prompt });
};
