import React from "react";
import styles from "./Reservation.module.scss";
import Table from "../table/Table";
import DatePickerCalendar from "../datepicker/DatePickerCalendar";
const Reservation = () => {
  return (
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

        <button className={styles.select}> More Filters</button>

        <button className={styles.show}>Show</button>
      </div>

      <Table />
    </div>
  );
};

export default Reservation;
