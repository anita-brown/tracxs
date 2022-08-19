import React from "react";
import styles from "./TablePagination.module.scss";

const TablePagination = (props: any) => {
  return (
    <div className={styles.tablePagination}>
      <div className={styles.navigationButtonsContainer}>
        <button onClick={props.previousPage} disabled={!props.canPreviousPage}>
          {" "}
          Back
        </button>
        <p>Page {props.pageIndex + 1} </p>
        <button onClick={props.nextPage} disabled={!props.canNextPage}>
          Next
        </button>
      </div>
      <div>
      Show  {props.pageIndex + 1} of {props.pageOptions.length}
      </div>
    </div>
  );
};

export default TablePagination;
