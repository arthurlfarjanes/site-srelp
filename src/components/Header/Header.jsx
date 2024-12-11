// CSS
import "./Header.css";

// Components
import Navbar from "../Navbar/Navbar";

// React
import { useState } from "react";
import { useMenu } from "../../context/MenuContext/MenuContext";

// External Libs
import { Tooltip } from "@mui/material";

// Images
import menuIcon from "../../assets/images/menu.png";
import Casa from "../../assets/images/casa.png";

function Header() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <>
      {isMenuOpen ? (
        <div className="HeaderOpened">
          <div className="alignHeader">
            <div className="align">
              <div className="divLogo">
                <img src={Casa} alt="" className="iconCasa" />
                <h1 className="h1">Strategic Real Estate Legal Partners</h1>
              </div>
              <Tooltip title="Close Menu">
                <img
                  className="iconMenu"
                  onClick={() => {
                    toggleMenu();
                  }}
                  src={menuIcon}
                  alt="Menu"
                />
              </Tooltip>
            </div>
            <Navbar />
          </div>
        </div>
      ) : (
        <div className="HeaderClosed">
          <div className="alignHeader">
            <div className="align">
              <div className="divLogo">
                <img src={Casa} alt="" className="iconCasa" />
                <h1 className="h1">Strategic Real Estate Legal Partners</h1>
              </div>
              <Tooltip title="Open Menu">
                <img
                  className="iconMenu"
                  onClick={() => {
                    toggleMenu();
                  }}
                  src={menuIcon}
                  alt="Menu"
                />
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
