import React from "react";
import "./picture-gold.css";

import AugIcon from "../assets/aug-comp-icon.svg";
import CashIcon from "../assets/cash-comp-icon.svg";
import NpcIcon from "../assets/npc-comp-icon.svg";
import SonaBackgroundIcon from '../assets/sona-background-icon.svg';
import SonaLogo from '../assets/sona-pic-icon.svg';

import FeathredIcon from '../assets/featured-in-icon.svg';
import CompListIcon from '../assets/company-list-icon.svg';

const PictureGold = () => {
  const compIcons = [AugIcon, CashIcon, NpcIcon];

  return (
    <div>
    <div className="pic-gold-container">
      <div className="save-in-container semibold">
        <div className="flex align-center">
          <span style={{ marginRight: "4px" }}>Save in </span>
          <span style={{ color: "#DAAB47" }}>GOLD</span>
        </div>
        <div>with 21%* Extra</div>
        <div className="flex align-center btn-sat">
          <button className="start-saving-now">Start Saving Now</button>
          <button className="trusted-by">Trusted By 3Lakh + Indians</button>
        </div>
        <div className="flex align-center">
          <div className="powered-by">Powered by</div>
          <div className="flex align-center">
            {compIcons.map((item, itemIndex) => (
              <img key={itemIndex} src={item} alt="company-logo" style={{ width: "70px", marginLeft: '10px' }} />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
      <img src={SonaBackgroundIcon} className="sona-backgroun-icon" alt="Sona Background Icon" />
      <img src={SonaLogo} className="sona-backgroun-icon absolute" alt="Sona Background Icon" />
      </div>
    </div>
    <div className="flex align-center jutify-between feature-div">
      <div>
      <img src={FeathredIcon} style={{ width: '100px' }} alt="Sona Background Icon" />

      </div>
      <div>
      <img src={CompListIcon} className="sona-backgroun-icon" alt="Sona Background Icon" />
      </div>
    </div>
    </div>
  );
};

export default PictureGold;
