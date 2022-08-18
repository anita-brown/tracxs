import React, { useState, forwardRef, createRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiCalendar } from "react-icons/fi";
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

// const DatePickerCustomInput = forwardRef(({ onClick }: any, ref) => (
//   <div className="calendar_icon">
//     <FiCalendar onClick={onClick} />
//   </div>
// ));
// const ref = createRef();

// const DatePickerCalendar = (props: { date: Date | null | undefined; handleDateChange: (date: Date | null, event: React.SyntheticEvent<any, Event> | undefined) => void; }) => {
//   return (
//     <div className={styles.datepicker}>
//       <DatePicker selected={props.date} onChange={props.handleDateChange} customInput={<DatePickerCustomInput ref={ref} />} dateFormat="yyyy/MM/dd" />
//     </div>
//   );
// };

// export default DatePickerCalendar;
