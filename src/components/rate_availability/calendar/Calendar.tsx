import React from "react";
import { BiErrorCircle } from "react-icons/bi";
import { DatePickerRange } from "../../datepicker/DatePickerCalendar";
import styles from "./Calendar.module.scss";
const Calendar = () => {
  return (
    <div className={styles.calContainer}>
      <div className={styles.notification}>
        <i>
          <BiErrorCircle />
        </i>
        <p>We have temporarily disabled the non-refundable and prepayment policies. As soon as we can give you access to them, we'll let you know.</p>
      </div>
      <h1>Calendar</h1>
      <div className={styles.room}>
        <select name="" id="">
          <option value="">All rooms</option>
        </select>
        <div className={styles.iconflex}>
          <select className={styles.list} name="" id="">
            <option value="">List view</option>
          </select>
          <i>
            <BiErrorCircle />
          </i>
        </div>
      </div>
      <div className={styles.column}>
        <div>
          <DatePickerRange />
          {/* <DateCalendar/> */}
        </div>
        <div className={styles.box}>
          <input type="checkbox" />
          <span>Pricing per guest</span>
        </div>
        <div className={styles.box}>
          <input type="checkbox" />
          <span>Restrictions</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
