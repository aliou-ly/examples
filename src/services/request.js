import axios from 'axios';


const request = (pathUrl, options) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    return axios(`${baseUrl}${pathUrl}`, { ...defaultOptions, ...options })
}

export { request }