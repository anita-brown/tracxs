import React from "react";
import Calendar from "./calendar/Calendar";
import styles from "./calendar/Calendar.module.scss";

const Availability = () => {
  return (
    <div className={styles.availability}>
      <Calendar />
    </div>
  );
};

export default Availability;
