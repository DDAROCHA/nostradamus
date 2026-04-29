import axios from 'axios';

const API_URL = process.env.REACT_APP_API_BASE || 'http://localhost:10000/api';

export const getPrediction = prompt => {
  return axios.post(`${API_URL}/nostradamus`, { prompt });
};
