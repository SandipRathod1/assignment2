import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

import "./Main.css";
import logo0 from "../assets/asset0.png";
import logo1 from "../assets/asset1.png";
import logo2 from "../assets/asset2.png";
import logo3 from "../assets/asset3.png";
import logo4 from "../assets/asset4.png";
import logo5 from "../assets/asset5.png";
import logo6 from "../assets/asset21.svg";

const Main = () => {
  return (
    <>
      <section className="main">
        <div className="main-nav">
          <div className="main-nav-left">
            <img src={logo6} alt="image" />
            <h1>FigJam templates</h1>
          </div>
          <div className="main-nav-center">
            <AiOutlineSearch />
            <h2>Brainstorm</h2>
            <h2>Diagram</h2>
            <h2>Planning</h2>
            <h2>meetings</h2>
          </div>
          <div className="main-nav-right">
            <AiOutlineClose />
          </div>
        </div>

        <div className="main-one">
          <div className="images">
            <img src={logo0} alt="images" />
            <h3>Brainstorming Template</h3>
          </div>
          <div className="images">
            <img src={logo1} alt="images" />
            <h3>Reverse Brainstorming</h3>
          </div>
          <div className="images">
            <img src={logo2} alt="images" />
            <h3>Brainstorm crazy 8s Template</h3>
          </div>
          <div className="images">
            <img src={logo3} alt="images" />
            <h3>Ideation Template</h3>
          </div>
          <div className="images">
            <img src={logo4} alt="images" />
            <h3>Mindmap</h3>
          </div>
          <div className="images">
            <img src={logo5} alt="images" />
            <h3>Brainstorming Template</h3>
            <span>More templates</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
