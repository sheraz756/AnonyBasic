import React from 'react'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const next = ()=>{
    navigate('/authenticate')
  }
  return (
    <div className={styles.cardWrapper}>
        <Card heading='Welcome to Anony!' icon='logo.png'>
        We’re working hard to get Anony ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)
        <Button onNext={next} />
        </Card>
    </div>
  )
}

export default Home