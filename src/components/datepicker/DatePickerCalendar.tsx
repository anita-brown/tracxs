import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";

const DatePickerCalendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className={styles.date}>
      <div className={styles.cal}>
        <p>From</p>
        <DatePicker className={styles.datepicker} selected={startDate} onChange={(date: any) => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} dateFormat="d MMMM yyyy" />
      </div>
      <div className={styles.cal}>
        <p>Until</p>
        <DatePicker className={styles.datepicker} selected={endDate} onChange={(date: any) => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} dateFormat="d MMMM yyyy" />
      </div>
    </div>
  );
};

export default DatePickerCalendar;



export const DatePickerRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return <DatePicker className={styles.daterange} selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange dateFormat="d MMM yyyy" />;
}



