import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import "./SecondMenu.css";
import logo0 from "../assets/asset0.png";
import logo1 from "../assets/asset1.png";
import logo2 from "../assets/asset2.png";
import logo3 from "../assets/asset3.png";

const SecondMenu = () => {
  return (
    <>
      <section className="main1">
        <div className="main-nav1">
          <div className="main-nav-left1">
            <h3>Recently Viewed</h3>
            <h3>Shared files</h3>
            <h3>Shared projects</h3>
          </div>
          <div className="main-nav-right1">
            <h3>All organizations</h3>
            <h3>All files</h3>
            <h3>Last viewed</h3>
            <CgMenuGridR />
            <AiOutlineMenu />
          </div>
        </div>

        <div className="main-one1">
          <div className="images1">
            <img src={logo0} alt="images1" />
            <h3>Brainstorming Template</h3>
          </div>
          <div className="images1">
            <img src={logo1} alt="images1" />
            <h3>Reverse Brainstorming</h3>
          </div>
          <div className="images1">
            <img src={logo2} alt="images1" />
            <h3>Brainstorm crazy 8s Template</h3>
          </div>
          <div className="images1">
            <img src={logo3} alt="images1" />
            <h3>Ideation Template</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondMenu;
