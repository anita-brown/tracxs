import React from 'react'
import styles from './Navbar.module.scss'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <i></i>
        <span>Home</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Rates and Availability</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Promotions</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Reservations</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Property</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Opportunities</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Inbox</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Guest reviews</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Finance</span>
      </div>
      <div className={styles.nav}>
        <i></i>
        <span>Analytics</span>
      </div>
    </div>
  );
}

export default NavBar
