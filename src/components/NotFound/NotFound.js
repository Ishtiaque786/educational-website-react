import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navDesign = {
    textDecoration: "none",
    color: "black",
    padding: "13px",
    fontWeight: "600",
    border: "2px solid green",
    borderRadius: "4px",
  };
  return (
    <>
      <div>
        <div className="my-3">
          <h1>Error 404</h1>
          <h3>Your request can not be found. Please enter request.</h3>
        </div>
        <div className="my-3">
          <NavLink
            style={navDesign}
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            className="menu-item"
            to="/home"
          >
            Back to Home Page{" "}
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default NotFound;
