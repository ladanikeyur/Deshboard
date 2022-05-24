import React, { Component } from "react";
import DropDown from "../../Assets/image/DropDown.png";
import PageIndex from "../../Assets/image/PAGEINDEX.png";
import USEFULLINKS from "../../Assets/image/USEFULLINKS.png";

const SideBar = ({Side}) => {
    return (
      <div
        class={
          Side
            ? "card img-fluid card-AnimationClose"
            : "card img-fluid card-AnimationOpen"
        }
      >
        {/* card-AnimationClose */}
        <img src={DropDown} className="img card-img-top" />
        <div class="card-img-overlay">
          <ul className="list-unstyled">
            <li className="btn-text">
              + <br />
              PAGE INDEX
            </li>
            <li className="btn-text">WHAT IS EXPO?</li>
            <li className="btn-text">WHAT IS FAAS?</li>
            <li className="btn-text">ROADMAP</li>
            <li className="btn-text">BLOGS</li>
            <li className="btn-text">FAQs</li>
            <li className="btn-text">CONTACT</li>
            <li className="btn-text">
              + <br />
              SOCIALS
            </li>
            <li className="btn-text">TWITTER</li>
            <li className="btn-text">TELEGRAM</li>
            <li className="btn-text">
              + <br />
              USEFUL LINKS
            </li>
            <li className="btn-text">PODCAST</li>
            <li className="btn-text">CHARTS</li>
          </ul>
        </div>
      </div>
    );
}


export default SideBar