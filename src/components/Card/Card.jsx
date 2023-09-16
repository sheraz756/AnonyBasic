import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
const Card = ({heading,icon,children}) => {
let logo = `/src/assets/${icon}`
  return (
    <div className={styles.card}>
      <div className={styles.cover}>
      <Link to='/'><img src={logo}alt="" /></Link>
      <span className={styles.text}>{heading}</span>
      
      </div>
      {children}
    </div>
  )
}

export default Card