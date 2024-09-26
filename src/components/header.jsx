import React from "react";
import SharkTankBanner from "../assets/shark-tank-banner.svg";  // Fixed typo: Banner -> Banner
import ComponyLogo from "../assets/logo.svg";
import SharkIcon from "../assets/shark.svg";

import "./header.css";
const Header = () => {
  // header menu
  const menu = [
    "Start Saving",
    "Shark Tank",
    "Gold Rush Festival",
    "Partner with us",
  ];

  return (
    <div>
      <img src={SharkTankBanner} alt="banner" style={{ width: "100%" }} />
      <div className="flex jutify-between align-center menu-div">
        <div>
          <img src={ComponyLogo} alt="logo" style={{ width: "200px" }} />
        </div>
        <div className="flex align-center">
          <div className="flex align-center m-r-20">
            {menu.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="menu-text relative"
                style={{ color: item === "Shark Tank" ? "#0926c0" : "" }} // Highlight "Shark Tank"
              >
                <span>{item}</span>
                {item === "Shark Tank" && (  // Conditional rendering for Shark Tank icon
                  <>
                    <img src={SharkIcon} alt="shark" className="shart-1" />
                    <img src={SharkIcon} alt="shark" className="shart-2" />
                  </>
                )}
              </div>
            ))}
          </div>
          {/* Download App Button */}
          <button className="download-button">Download App</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
