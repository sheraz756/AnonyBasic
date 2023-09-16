import React,{useState} from 'react'
import Otp from '../../Steps/Otp'
import Phone from '../../Steps/Phone'
const step ={
    1:Phone,
    2:Otp
 }
const Authenticate = () => {
    const [changeStep,setChangeStep] = useState(1)

 const Go = step[changeStep]
 console.log(Go)
 const next =()=>{
    setChangeStep(changeStep+1)
 }
 return <Go onNext={next} />
}

export default Authenticate