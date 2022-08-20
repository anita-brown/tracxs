import React, { useState } from "react";
import styles from "./Reservation.module.scss";
import Table from "../table/Table";
import { column } from "../table/column";
import mock from "../../mock.json";
import useInput from "../../customHooks/useInput";
import { validators } from "../../helpers/validators";
import MoreFilter from "../morefilters/MoreFilter";

const showFilter = (dataset: any, data: any, dateOf: any) => {
  const check = {
    dateOf: "check_in",
    from: "31/07/2022",
    until: "04/08/2022",
  };
  if (JSON.stringify(dataset) === JSON.stringify(check)) {
    return mock;
  }
  const filterData = data.filter(
    (item: any) =>
      new Date(item[dateOf]) >= new Date(dataset.from) &&
      new Date(item[dateOf]) <= new Date(dataset.until)
  );
  return filterData;
};

const Reservation = () => {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(mock);
  const [dataset, setDataset] = useState([
    {
      dateOf: "check_in",
      from: "30/07/2022",
      until: "04/08/2022",
    },
  ]);
  const {
    value: dateOfValue,
    valueInputChange: dateOfValueChange,
    valueIsValid: dateOfIsValid,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: fromValue,
    valueInputChange: fromValueChange,
    valueIsValid: formValueIsValid,
  } = useInput(validators.checkValueIsEmpty, "");
  const {
    value: untilValue,
    valueInputChange: untilValueChange,
    valueIsValid: untilValueIsValid,
  } = useInput(validators.checkValueIsEmpty, "");
  const handleClick = () => {
    setShow((current) => !current);
  };

  const formIsValid = dateOfIsValid && formValueIsValid && untilValueIsValid;

  const submitForm = (e: any) => {
    e.preventDefault();
    const handleInputs = (
      callback: any,
      dataset: any,
      data: any,
      dateOf: any
    ) => {
      setDataset(() => [
        {
          ...dataset[0],
          dateOf: dateOfValue,
          from: fromValue,
          until: untilValue,
        },
      ]);
      setResult(() => callback(dataset, data, dateOf));
    };

    handleInputs(showFilter, dataset[0], mock, dateOfValue);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Reservations</h1>
        <div className={styles.reservedCont}>
          <div className={styles.date}>
            <label htmlFor="dateOf">Date of</label>
            <select name="dateOf" id="dateOf" value={dateOfValue} onChange={dateOfValueChange}>
              <option value="check_in">Check-in</option>
              <option value="check_out">Check-out</option>
            </select>
          </div>
          <div >
            <p>From</p>
            <input type="date" name="from" id="from" value={fromValue} onChange={fromValueChange} />
          </div>
          <div>
            <p>Until</p>
            <input type="date" name="until" id="until" value={untilValue} onChange={untilValueChange} />
          </div>

          <button onClick={handleClick} className={styles.select}>
            More Filters
          </button>

          <button className={styles.show} disabled={!formIsValid} onClick={submitForm}>
            Show
          </button>
        </div>
        {show && <MoreFilter />}

        <Table column={column} data={result} />
      </div>
    </div>
  );
};

export default Reservation;
