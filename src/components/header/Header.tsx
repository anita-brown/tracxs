import React from "react";
import styles from "./Header.module.scss";
import { BiSearch, BiHelpCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <h1>
          Booking.<span>com</span>
        </h1>
        <span>Argakhanchi Hotel - 8706497</span>
      </div>

      <div className={styles.rightHeader}>
        <div className={styles.input}>
          <input type="search" name="search" placeholder="Search for reservations" />
          <i>
            <BiSearch />
          </i>
        </div>

        <div className={styles.profile}>
          {/* <img src="" alt="" /> */}
          <i>
            <CgProfile />
          </i>
          <span>Argakhanchi</span>
        </div>
        <div className={styles.profile}>
          <i>
            <BiHelpCircle />
          </i>
          <span>Help</span>
        </div>
        <div className={styles.profile}>
          <i>
            <CgProfile />
          </i>
          <span>Account</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
