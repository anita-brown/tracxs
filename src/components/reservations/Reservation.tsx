import React, { useState } from "react";
import styles from "./Reservation.module.scss";
import Table from "../table/Table";
import DatePickerCalendar from "../datepicker/DatePickerCalendar";
import MoreFilter from "../morefilters/MoreFilter";
const Reservation = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow((current) => !current);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Reservations</h1>
        <div className={styles.reservedCont}>
          <div className={styles.date}>
            <label htmlFor="">Date of</label>
            <select name="" id="">
              <option value="">Reservation</option>
              <option value="">Check-in</option>
              <option value="">Check-out</option>
              <option value="">Invoice</option>
              <option value="">Stay</option>
            </select>
          </div>
          <DatePickerCalendar />

          <button onClick={handleClick} className={styles.select}>
            More Filters
          </button>

          <button className={styles.show}>Show</button>
        </div>

        {show && <MoreFilter />}

        <Table />
      </div>
    </div>
  );
};

export default Reservation;
