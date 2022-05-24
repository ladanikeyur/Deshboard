import React, { Component } from "react";
import Home from "../../Assets/image/HOME.png";
import Menu from "../../Assets/image/Menu.png";
import MENU from "../../Assets/image/MENU.png";
import up from "../../Assets/image/up.png";
import Down from "../../Assets/image/Down.png";
const BgLayout = ({ onClick, Side }) => {
  return (
    <>
      <img src={Home} className="home-img mt-2" />
      <div className="menu-div">
        <button className="btn-menu">
          <img src={Menu} className="menu-img" />
        </button>
        <button className="btn-menu" onClick={onClick}>
          <img src={Side ? up : Down} className="menu-text" />
          <img src={MENU} className="menu-text" />
        </button>
      </div>
    </>
  );
};

export default BgLayout;
