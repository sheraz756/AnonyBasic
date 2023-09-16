import axios from 'axios'

const api = axios.create({
    baseURL:'http://locahost:5000',
   header:{
    'Content-Type':'application/json',
    'accept':'application/json'
   }
})

export const sendOtp = (data)=>api.post('/api/sendOtp',data)