import axios from 'axios';

const token = localStorage.getItem('user_token')

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: `Barer ${token}`
  }
});

export default api;