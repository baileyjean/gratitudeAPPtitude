import axios from 'axios'

export const BASE_URL = axios.create({ baseURL: 'http://localhost:3001/api' })
export const IMAGE_PATH = '#'