import React from 'react'
import styles from './Logo.module.css';

const dataset = process.env.SANITY_STUDIO_API_DATASET

const Logo = () => {
  if (dataset === "development") {
    return (
      <div className={styles.container}>
        <img src="/static/logo-192.png" alt="Stille disco logo"></img>
        <div className={styles.burst}>
        <p>DEV</p>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.container}>
    <img src="/static/logo-192.png" alt="Stille disco logo" ></img>
  </div>
  )
}

export default Logo
