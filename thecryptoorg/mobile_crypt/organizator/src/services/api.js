import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.0.100:7777/api'
});

export default api;