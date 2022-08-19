import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { BiHome, BiHeart, BiBarChartAlt2 } from "react-icons/bi";
import { BsTag, BsListTask, BsPencil } from "react-icons/bs";
import { IoRocketOutline } from "react-icons/io5";
import { RiFile4Line } from "react-icons/ri";
import { IoMdMenu, IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineEventAvailable, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { appRoutePath } from "../../models/routes";

const NavBar = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <div className={styles.container}>
      <Link to={appRoutePath.home} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BiHome />
        </i>
        <span>Home</span>
      </Link>
      <Link to={appRoutePath.availability} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <MdOutlineEventAvailable />
        </i>
        <span>Rates & Availability</span>
      </Link>
      <Link to={appRoutePath.promotions} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BsTag />
        </i>
        <span>Promotions</span>
      </Link>
      <Link to={appRoutePath.reservations} onClick={toggleNav} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BsListTask />
        </i>
        <span>Reservations</span>
      </Link>
      <Link to={appRoutePath.property} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BsPencil />
        </i>
        <span>Property</span>
      </Link>
      <Link to={appRoutePath.opportunities} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <IoRocketOutline />
        </i>
        <span>Opportunities</span>
      </Link>
      <Link to={appRoutePath.inbox} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <MdOutlineEmail />
        </i>
        <span>Inbox</span>
      </Link>
      <Link to={appRoutePath.reviews} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BiHeart />
        </i>
        <span>Guest reviews</span>
      </Link>
      <Link to={appRoutePath.finance} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <RiFile4Line />
        </i>
        <span>Finance</span>
      </Link>
      <Link to={appRoutePath.analytics} className={`${styles.nav} + ${styles.open}`}>
        <i>
          <BiBarChartAlt2 />
        </i>
        <span>Analytics</span>
      </Link>
      <button onClick={toggleNav} className={styles.menu}>
        <IoMdMenu />
      </button>
    </div>
  );
};

export default NavBar;
