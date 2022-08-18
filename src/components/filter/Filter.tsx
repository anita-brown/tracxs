import React, {useState} from 'react'
import DatePickerCalendar from '../datepicker/DatePickerCalendar'
import { AiOutlineSync } from "react-icons/ai";
import { useAsyncDebounce } from "react-table";

const Filter = (props: any) => {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [categoryFilterValue, setCategoryFilterValue] = useState(null);
    const [value, setValue] = useState(props.globalFilter);
    // const count = props.preGlobalFilteredRows.length;

     const onChange = useAsyncDebounce((value) => {
       props.setGlobalFilter(value || undefined);
     }, 200);
       const handleStartDate = (date: any) => {
         setStartDate(date);
       };
      const handleEndDate = (date: any) => {
        setEndDate(date);
      };

      const handleCategoryOptionsChange = (event:any) => {
        setCategoryFilterValue(event.target.value);
      };
    const autoResetFilter = () => {
      setStartDate(null);
      setEndDate(null);
      setCategoryFilterValue(null);
      props.dispatch({ type: "resetFilters" });
      let radios: any = document.querySelectorAll('input[name="category-Filters"]');
      for (let i of radios) {
        if (i.checked) {
          i.checked = false;
          break;
        }
      }
    };
      const handleFilterByCategory = () => {
        props.setFilter("check_in", categoryFilterValue);
      };
       const handleFilterByDate = () => {
         if (startDate && endDate) {
           props.setFilter("booked_on", [startDate, endDate]);
         }
       };
    
      const applyFilter = () => {
        if (startDate && endDate && categoryFilterValue) {
          handleFilterByDate();
          handleFilterByCategory();
        }
        if (startDate && endDate && !categoryFilterValue) {
          handleFilterByDate();
        }
        if (!startDate && !endDate && categoryFilterValue) {
          handleFilterByCategory();
        }
        if ((!startDate && endDate) || (startDate && !endDate)) {
          window.alert("Please Make sure you select start-date and end-date");
        }
      };

    return (
      <div>
        <div className="filterParameters" id="filterParameters">
          <div className="datePickerWrapper">
            <div className="Datepicker-grid-container">
              <div>Filter </div>
              <div className="startDate">
                From: <div className="datePickerLabel">{startDate ? startDate : null}</div>
                <DatePickerCalendar />
                {/* <DatePickerCalendar handleDateChange={handleStartDate} date={startDate} /> */}
              </div>
              <div className="verticalLine"></div>
              <div className="endDate">
                To: <div className="datePickerLabel">{endDate ? endDate : null}</div>
                <DatePickerCalendar />
                {/* <DatePickerCalendar handleDateChange={handleEndDate} date={endDate} /> */}
              </div>
            </div>
          </div>
          <div className="resetFilter" onClick={autoResetFilter}>
            <span>Reset</span>
            <AiOutlineSync className="resetFilter_icon" />
          </div>
        </div>
        <div className="filterByCategoryOptions" id="filterByCategory">
          <div onChange={handleCategoryOptionsChange} className="filterBy-RecievedMoney">
            <input type="radio" value="recieved" name="category-Filters" id="recievedMoney" />
            <label htmlFor="recievedMoney">Payment recieve</label>
          </div>
          <div onChange={handleCategoryOptionsChange} className="filterBy-moneySent">
            <input type="radio" value="sent" name="category-Filters" id="moneySent" />
            <label htmlFor="moneySent">Money Sent</label>
          </div>
          <div onChange={handleCategoryOptionsChange} className="filterBy-pendingTran">
            <input type="radio" value="pending" name="category-Filters" id="pendingTran" />
            <label htmlFor="pendingTran">Pending</label>
          </div>
          <div onChange={handleCategoryOptionsChange} className="filterBy-failedTran">
            <input type="radio" value="fail" name="category-Filters" id="failedTran" />
            <label htmlFor="failedTran">Failed</label>
          </div>
        </div>
        <div className="apply-filter">
          <h3>All Transactions</h3>
          <button onClick={applyFilter} className="applyFilter-btn" id="applyFilter-btn">
            Apply Filter
          </button>
        </div>
        {/* <span className="globalFilterInput">
          Search:{" "}
          <input
            type="text"
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder={`records by user name`}
            style={{
              fontSize: "1rem",
              border: "2px solid #32E0C4",
            }}
          ></input>
        </span> */}
      </div>
    );
}

export default Filter
