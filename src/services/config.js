import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://www.mocky.io/v2/'
})