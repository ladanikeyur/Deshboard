import React, { Component } from "react";
import Logo from "../../Assets/image/LOGO.png";
import FarmText from "../../Assets/image/FarmText.png";
import SCROLLER from "../../Assets/image/SCROLLER.png";
import RULER from "../../Assets/image/RULER.png";
import Button from "../Button/Button";

const HomePage = () => {
    return (
      <>
        <img src={Logo} className="img-fluid m-auto d-block" height="206px" />
        <img src={FarmText} className="img-fluid FarmText" />
        <div className="Button-div">
          <Button Lable="BUY EXPO ON UNISWAP" />
          <Button Lable="DASHBOARD" />
          <Button Lable="WHITEPAPER" />
        </div>
        <img src={SCROLLER} className="mt-5" />
        <p className="Scroll">SCROLL</p>
        <img src={RULER} className="mt-5" width="90%" height="100%" />
      </>
    );
}
export default HomePage
