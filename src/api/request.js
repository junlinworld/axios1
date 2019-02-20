import httpAxios from '@/axios/axios.js'


export function getUserById(data){
    return httpAxios({
        method:'get',
        url:'/getUserById',
        params:data,
        // headers:{
        //     // 'Origin':'http://localhost:8090'
            
        // },
    });
}