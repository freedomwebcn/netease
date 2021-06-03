import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://82.156.218.182:3000/',
     timeout: 5000,
});

instance.interceptors.request.use(function (config) {

    config.withCredentials = true
    
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    return response.data
}, function (error) {
    alert(error)
    console.log(error);
});


export default instance