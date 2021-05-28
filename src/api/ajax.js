import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://82.156.218.182:3000/',
});

instance.interceptors.request.use(function (config) {
    config.xhrFields = {
        withCredentials: true, //关键
    }
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data
}, function (error) {
    console.log(error);




});


export default instance