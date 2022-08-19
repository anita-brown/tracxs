export const column = [
    {
        Header: 'Guest name',
        accessor: 'full_name'
    },
    {
        Header: 'Check-in',
        accessor: 'check_in',
        filter: "dateFilter",
    },
    {
        Header: 'Check-out',
        accessor: 'check_out',
        filter: "dateFilter",
    },
    {
        Header: 'Rooms',
        accessor: 'rooms'
    },
    {
        Header: 'Booked on',
        accessor: 'booked_on',
        filter: "dateFilter",

    },
    {
        Header: 'Status',
        accessor: 'status'
    },
    {
        Header: 'Price',
        accessor:'price'
    },
    {
        Header: 'Commission',
        accessor: 'commission'
    },
    {
        Header: 'Booking number',
        accessor: 'booking_number'
    },


]