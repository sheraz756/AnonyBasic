import React, { useState } from 'react'
import Card from '../components/Card/Card'
// import sendOtp from '../http/index'
import Button from '../components/Button/Button'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {setAuth} from '../store/AuthSlice'
const Phone = ({onNext}) => {
  const dispatch = useDispatch()
  const [otp,setOtp]  = useState('')
  const sumbit = async()=>{
    try{
      const {data} = await axios.post('http://localhost:5000/api/sendOtp',{otp})
      dispatch(setAuth(data))
      console.log(data)
    }catch(e){console.log(e)}
  }
  return (
    <div>
        <Card heading='Enter Phone Number' icon='phone.png'>
        <input type="text" value={otp} onChange={(e)=>{setOtp(e.target.value)}}  />
        <Button onNext={sumbit} />
        </Card>
    </div>
  )
}

export default Phone