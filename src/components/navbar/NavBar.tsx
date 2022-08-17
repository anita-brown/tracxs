import React from 'react'
import styles from './Navbar.module.scss'
import { BiHome, BiHeart, BiBarChartAlt2 } from "react-icons/bi";
import { BsTag, BsListTask, BsPencil } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { RiFile4Line } from "react-icons/ri";

import { MdOutlineEventAvailable, MdOutlineEmail } from "react-icons/md";


const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <i>
          <BiHome />
        </i>
        <span>Home</span>
      </div>
      <div className={styles.nav}>
        <i>
          <MdOutlineEventAvailable />
        </i>
        <span>Rates & Availability</span>
      </div>
      <div className={styles.nav}>
        <i>
          <BsTag />
        </i>
        <span>Promotions</span>
      </div>
      <div className={styles.nav}>
        <i>
          <BsListTask />
        </i>
        <span>Reservations</span>
      </div>
      <div className={styles.nav}>
        <i>
          <BsPencil />
        </i>
        <span>Property</span>
      </div>
      <div className={styles.nav}>
        <i>
          <IoRocketOutline />
        </i>
        <span>Opportunities</span>
      </div>
      <div className={styles.nav}>
        <i><MdOutlineEmail/></i>
        <span>Inbox</span>
      </div>
      <div className={styles.nav}>
        <i><BiHeart/></i>
        <span>Guest reviews</span>
      </div>
      <div className={styles.nav}>
        <i><RiFile4Line/></i>
        <span>Finance</span>
      </div>
      <div className={styles.nav}>
        <i><BiBarChartAlt2/></i>
        <span>Analytics</span>
      </div>
    </div>
  );
}

export default NavBar
