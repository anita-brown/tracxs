import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.scss";

export const DatePickerRange = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates: [any, any]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return <DatePicker className={styles.daterange} selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange dateFormat="d MMM yyyy" />;
};
