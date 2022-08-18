import React from 'react'
import { Route, Routes as Switch, useLocation } from "react-router-dom";
import { appRoutePath } from './models/routes';
import Reservation from './components/reservations/Reservation';
import NavSection from './views/navSection/NavSection';
import Footer from './components/footer/Footer';
const Routes = () => {
    //  const { pathname } = useLocation();
  return (
      <>
          <NavSection />
          <Switch>
              <Route path={appRoutePath.reservations} element={<Reservation/>} caseSensitive/>
              {/* <Route path={appRoutePath.availability} element={<Availability/>} caseSensitive/> */}

      </Switch>
      <Footer/>
      
    </>
  )
}

export default Routes;
