import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CarAbout from './CarAbout';
import CarContact from './CarContact';
import CarEmployee from './CarEmployee';

function CarHome() {
    return (
        <div>
          
            <Router>
          
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/employees">Employees</Link>
                <Route path="/about">
                <CarAbout/>
                </Route>
                <Route path="/contact" component={CarContact} />
                <Route path="/employees" component={CarEmployee} />
              
            </Router>
        </div>
       
    )
}

export default CarHome
