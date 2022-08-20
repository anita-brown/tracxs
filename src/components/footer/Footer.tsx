import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHead}>
        <div className={styles.content}>
          <p>About Us</p>
          <p>Privacy and Cookie Statement</p>
          <p>FAQs</p>
        </div>
        <p className={styles.para}>Share your feedback</p>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.content}>
          <p>&copy; Copyright Booking.com</p>
          <p> 2022</p>
        </div>
        <select name="" id="">
          <option value="">English</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
