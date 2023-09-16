import React from 'react'
import logo from '../../assets/logo.png'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={styles.Main}>
      <span className={styles.heading}>
      Anony
      </span>
      <img src={logo}alt="" />
    </div>
  )
}

export default NavBar