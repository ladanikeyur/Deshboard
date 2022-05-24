import React, { Component, useState } from "react";
import Home from "../../Assets/image/HOME.png";
import Menu from "../../Assets/image/Menu.png";
import MENU from "../../Assets/image/MENU.png";
import { SideBar } from "../../Component";
import Logo from "../../Assets/image/LOGO.png";
const DashboardPage = () => {
  const [Side, setSide] = useState(false);
  return (
    <div className="main-bg">
      <div className="grid-bg">
        <div className="border-bg">
          <img src={Home} className="home-img" />
          <div className="menu-div">
            <button
              className="btn-menu"
              onClick={() => {
                setSide(!Side);
              }}
            >
              <img src={Menu} className="menu-img" />
            </button>
            <button className="btn-menu">
              <img src={MENU} className="menu-text" />
            </button>
          </div>
          <div className="main-body row">
            <div className="sidebar col-sm-3">
              <SideBar Side={Side} />
            </div>
            <div className="mt-5 col-sm-9">
              <img src={Logo} className="img-fluid m-auto d-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
