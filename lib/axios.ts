import axios from 'axios'
import https from 'https'

const axiosInstance = axios.create({
    baseURL: process?.env?.NODE_ENV === 'development' ? 'http://localhost:9000' : 'https://nlb.chainleaflabs.com/',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'access-control-allow-origin, access-control-allow-headers'
        
    },
    //@ts-ignore
    mode: 'cors',
    httpsAgent: new https.Agent({  
        rejectUnauthorized: false
    })
})

export default axiosInstance
