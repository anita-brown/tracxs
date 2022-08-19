import React from "react";
import styles from "./MoreFilter.module.scss";
const MoreFilter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cont}>
        <h4>Reservation status</h4>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">OK</label>
        </div>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Cancelled</label>
        </div>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">No show</label>
        </div>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Corporate card</label>
        </div>
      </div>
      <div className={styles.cont}>
        <h4>Guest Communication</h4>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Pending guest request</label>
        </div>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Invoice required</label>
        </div>
      </div>
      <div className={styles.cont}>
        <h4>Invalid credit card</h4>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Updated</label>
        </div>
        <div className={styles.box}>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Pending</label>
        </div>
      </div>
      <div className={styles.cont}>
        <h4>Keywords</h4>
        <div className={styles.input}>
          <input type="text" placeholder="Keywords(optional)" />
        </div>
      </div>
    </div>
  );
};

export default MoreFilter;
