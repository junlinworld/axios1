import Axios from "axios";


const httpAxios = Axios.create({
    baseURL:'http://localhost:8090/',
    timeout:5000,
});


httpAxios.interceptors.request.use(config=>{
    return config;
},err=>{
    return Promise.reject(err);
});

httpAxios.interceptors.response.use(response=>{
    return response;
},function(err){
    return err;
})

export default httpAxios