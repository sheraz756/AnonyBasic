import React from 'react'
import icon from '../../assets/arrow_forward.png'
import styles from './Button.module.css'
const Button = ({onNext}) => {
  return (
    <div>
        <button onClick={onNext} className={styles.main}>
            <span>Get Your UserName</span>
            <img src={icon} alt="" />
        </button>
    </div>
  )
}

export default Button