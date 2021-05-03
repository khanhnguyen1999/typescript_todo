import React from 'react'
import styles from './button.module.scss'
const ButtonComponent = () => {
  const check = true
  return (
    <button className={`${check ? styles.button_red : styles.button_blue}`}>
      button
    </button>
  )
}
export default ButtonComponent