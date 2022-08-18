import React, { useMemo } from "react";
import styles from "./Table.module.scss";
import TablePagination from "./pagination/TablePagination";
import { useTable, usePagination, useFilters } from "react-table";
import mock from "../../mock.json";
import { column } from "./column";
import Filter from "../filter/Filter";

const Table = () => {
  const columns: any = useMemo(() => column, []);
  const data = useMemo(() => mock, []);
  const filterTypes: any = useMemo(
    () => ({
      dateFilter: (rows: any[], id: any, filterValue: any) => {
        return (rows = rows.filter((row) => {
          return new Date(row.values.date) >= filterValue[0] && new Date(row.values.date) <= filterValue[1];
        }));
      },
    }),
    []
  );
  // const initialState = useMemo(()=> state, [])
  //  const {
  //    getTableProps,
  //    getTableBodyProps,
  //    headerGroups,
  //    prepareRow,
  //    rows,
  //    canPreviousPage,
  //    canNextPage,
  //    pageOptions,
  //    nextPage,
  //    previousPage,
  //    setGlobalFilter,
  //    preGlobalFilteredRows,
  //    setFilter,
  // //    dispatch,
  //    state: { pageIndex, pageSize },
  //  } = useTable(
  //    {
  //      columns,
  //      data,
  //      initialState: { pageIndex: 0, pageSize: 5 },
  //      filterTypes,
  //    },
  //    useFilters,
  // //    useGlobalFilter,
  //    usePagination
  //  );

  const tableInstance: any = useTable(
    {
      columns,
      data,
        // initialState:{ pageIndex: 0 , pageSize: 5 },
    //   filterTypes
    },
    useFilters,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,

    setGlobalFilter,
    // preGlobalFilteredRows,
    state: { pageIndex, pageSize, globalFilter },
    setFilter,
    dispatch,
  } = tableInstance;
  return (
    <div>
          {/* <Filter setFilter={setFilter} 
              globalFilter={globalFilter} setGlobalFilter={setGlobalFilter} dispatch={dispatch} /> */}
      <table className={styles.table} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row: any) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePagination pageIndex={pageIndex} pageOptions={pageOptions} previousPage={previousPage} canPreviousPage={canPreviousPage} nextPage={nextPage} canNextPage={canNextPage} />
    </div>
  );
};

export default Table;
