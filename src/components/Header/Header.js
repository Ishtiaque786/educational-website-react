import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navDesign = {
    textDecoration: "none",
    color: "#f5f6fa",
    padding: "13px",
  };

  const marqueeStyle = {
    fontSize: "19px",
    color: "#f1f2f6",
  };
  return (
    <>
      <div className="navbar">
        <div>
          <h1>
            <span>EasyLearn</span>{" "}
          </h1>
        </div>
        <div className="menu-link">
          <NavLink
            style={navDesign}
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            className="menu-item"
            to="/home"
          >
            Home{" "}
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            style={navDesign}
            className="menu-item"
            to="/about"
          >
            About Us{" "}
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            style={navDesign}
            className="menu-item"
            to="/courses"
          >
            Courses{" "}
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            style={navDesign}
            className="menu-item"
            to="/teachers"
          >
            Teachers{" "}
          </NavLink>
          <NavLink
            activeStyle={{
              fontWeight: "bold",
              color: "#b8e994",
            }}
            style={navDesign}
            className="menu-item"
            to="/contact"
          >
            Contact{" "}
          </NavLink>
        </div>
        <marquee
          activeStyle={{
            fontWeight: "bold",
            color: "#b8e994",
          }}
          style={marqueeStyle}
          direction="left"
        >
          Enroll in any of our courses before 10th oct to get 50% discount.
        </marquee>
      </div>
    </>
  );
};
export default Header;
