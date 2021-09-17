import React from "react"
import { Route, Redirect } from "react-router-dom";
import { NavBarImg } from "./nav/NavBarImg"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { ApplicationViews } from "./ApplicationViews";
import "./Baboon.css"

export const Baboon = () => {
    return (
        <>
        <Route
        render={() => {
          if (localStorage.getItem("baboon_user")) {
            return (
              <>
                <NavBarImg />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
        </>
    )
}
