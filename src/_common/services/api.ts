import axios from 'axios'
import { IAuth } from 'context/GlobalContext'

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const apiWithAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

apiWithAuth.interceptors.request.use(function (config: any) {
    const auth = localStorage.getItem("@dribbble:auth")
    
    if(auth){
        const parseAuth = JSON.parse(auth) as IAuth
        config.headers['Authorization'] = `Bearer ${parseAuth.access_token}`
    }

    return config;
  
  });

  apiWithAuth.interceptors.response.use(function (response) {

    return response;
  }, function (error) {

    if(error?.response?.status === 401){
        localStorage.removeItem("@dribbble:auth")
        window.location.href = "/login"
    }


    return Promise.reject(error);
  });


export default api