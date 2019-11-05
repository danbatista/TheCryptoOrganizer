import axios from 'axios';

const api = axios.create({baseURL: "http://3.230.111.111:7777/api/"});

export default api;