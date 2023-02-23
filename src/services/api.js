import axios from 'axios';
//const apiKey = require('./controladores/apiKey')

export default axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    headers: { 'Content-type': 'application/json' },
})