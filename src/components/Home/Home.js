import React, { Component } from "react";
import { Route, NavLink, Routes, BrowserRouter } from "react-router-dom";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="Home">
          Home
          <div className="homeAside"></div>
          <div className="homeForm">
            <div className="pageSwitcher">
              <NavLink
                to="/sign-in"
                className={({ isActive }) => "pageSwitcherItem" + (isActive ? '-active' : '')}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/"
                className={({ isActive }) => "pageSwitcherItem" + (isActive ? '-active' : '')}
              >
                Sign Up
              </NavLink>
            </div>

            <div className="formTitle">
              <NavLink
                to="/sign-in"
                className={({ isActive }) => "formTitleLink" + (isActive ? '-active' : '')}
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                to="/"
                className={({ isActive }) => "className" + (isActive ? '-active' : '')}
              >
                Sign Up
              </NavLink>
            </div>
            <Routes>
              <Route exact path="/" element={<SignIn/>} />
              <Route path="/sign-in" element={<SignUp/>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Home;
