import React from "react";
import styles from './TablePagination.module.scss'

const TablePagination = (props: any) => {
  return (
    <div className={styles.TablePagination}>
      <div className="table-pagesIndexing">
        {props.pageIndex + 1} out of {props.pageOptions.length}
      </div>
      <div className="navigationButtonsContainer">
        <button onClick={props.previousPage} disabled={!props.canPreviousPage}>
          {" "}
          Previous
        </button>

        <button onClick={props.nextPage} disabled={!props.canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
