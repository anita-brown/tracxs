import React from 'react'
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import styles from './NavSection.module.scss';

const NavSection = () => {
  return (
    <div className={styles.hero}>
          <Header />
          <NavBar/>
    </div>
  )
}

export default NavSection
