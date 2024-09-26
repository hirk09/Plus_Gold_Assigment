import React from "react";

import RightIcon from "../assets/right-arrow-icon.svg";

import HassleFreeIcon from "../assets/hassle-free-icon.svg";
import ExtraGold from "../assets/extra-gold-icon.svg";

import ConvIcon from "../assets/convenience-icon.svg";

import "./benefits-component.css";

const BenefitsComponent = () => {
  return (
    <div className="benefits-container">
      <div className="save-in-container semibold">
        <div>Benefits of buying</div>
        <div>from Plus Gold</div>
        <div className="opt-text">
          Opting for the Plus Gold Savings Scheme is a smart and easy way to
          accumulate gold. Here's why you should choose our scheme
        </div>
        <div className="flex align-center">
          <button className="start-saving-now">Start Saving Now</button>
          <img
            src={RightIcon}
            style={{ width: "44px" }}
            alt="right arrow Icon"
          />
        </div>
      </div>
      <div>
        <div className="flex">
          <div className="hassle-free">
            <img
              src={HassleFreeIcon}
              style={{ width: "200px" }}
              alt="right arrow Icon"
            />
          </div>
          <div>
            <img
              src={ExtraGold}
              style={{ width: "200px" }}
              alt="right arrow Icon"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={ConvIcon}
            style={{ width: "260px" }}
            alt="right arrow Icon"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
