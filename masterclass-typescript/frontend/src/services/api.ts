import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:3333/api/v1/carros'
})

export default api;