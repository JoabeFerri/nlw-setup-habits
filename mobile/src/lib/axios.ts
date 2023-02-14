import axios from 'axios'

export const api = axios.create({
    // baseURL: 'http://192.168.15.57:3333'
    baseURL: 'http://192.168.0.92:3333' // Minha casa URL
})