import axios from 'axios'

// Change this for env variables
const api_url = 'http://localhost:4000/api'

const yousacApi = axios.create({
    baseURL: api_url
})

yousacApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'auth-token': localStorage.getItem('token') || ''
    }

    return config
})

export default yousacApi;