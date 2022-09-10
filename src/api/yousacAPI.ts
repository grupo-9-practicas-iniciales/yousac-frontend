import axios from 'axios'

// Change this for env variables
const api_url = import.meta.env.VITE_API_URL

const yousacApi = axios.create({
    baseURL: api_url
})

yousacApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'auth-token': localStorage.getItem('auth-token') || ''
    }

    return config
})

export default yousacApi;