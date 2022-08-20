import { createContext, useContext, useMemo, useState } from "react";
import mock from "../../mock.json";

const ReservationContext = createContext();

const ReservationProvider = ({ children }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const data = useMemo(() => mock, []);

  const value = {
    data,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  };

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(ReservationContext);
};

export { ReservationContext, ReservationProvider };
