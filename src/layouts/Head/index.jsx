import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import $ from "jquery";
import "jquery-syotimer";

import jQueryBridget from "jquery-bridget";
import jQuery from "jquery";
import SnlLogo from "../../assets/img/test-img/SnlLogo.png";
import LogoText from "../../assets/img/test-img/LogoText.png";


import "./script.js";
import "./navbar.css";
import { NavbarLogo } from "../../utils/allImgs";
import HeroContainer from "../../containers/Home/Hero/index";
import TopCollectionsContainer from "../../components/TopCollections/index";
import ListedItemsContainer from "../../components/ListedItems/index";
import Footer from "../Footer/index";
import AboutUs from "../../components/About/aboutUs";
import Subscribe from "../../components/Subscribe/subscribe";
import ComingSoon from "../../components/ComingSoon/comingSoon";


import GetStarted from "../../components/getStarted/getStarted";
import Logo from "../../assets/img/test-img/Logo.jpg";

// import MindMapCards from "../../components/mindMapCards/mindMapCards";
// import TeamSection from "../../components/Team-Section/teamSection";

import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";
import data from "../../data/data-layouts/data-Head.json";

function Head({ Title }) {
  useEffect(() => {
    Addshrink();
  }, [window.pageYOffset]);

  const homeRef = useRef();
  const manifestoRef = useRef();

  const teamRef = useRef();
  const mindmapRef = useRef();
  const aboutusRef = useRef();
  const contactusRef = useRef();
  const teamSectionRef = useRef();

  const { anchorId } = useParams();
  console.log(anchorId);

  const slideOpen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  useEffect(() => {
    if (anchorId === "homey") homeRef.current.scrollIntoView();
    if (anchorId === "manifesto") manifestoRef.current.scrollIntoView();
    if (anchorId === "team") teamRef.current.scrollIntoView();
    if (anchorId === "mindmap") mindmapRef.current.scrollIntoView();
    if (anchorId === "aboutus") aboutusRef.current.scrollIntoView();
    if (anchorId === "contactus") contactusRef.current.scrollIntoView();
    if (anchorId === "teamSection") teamSectionRef.current.scrollIntoView();
  }, [anchorId]);

  return (
    <>
      <nav
        className=" navbar navbar-expand-lg background-color  navbar-white  fixed-top"
        id="banner"
      >
        <div className="container">
          <AnchorLink className="navbar-brand">
            <span className="logo-outer-style">
            <img src={SnlLogo} alt="logo" height="50px" width="70px" />
            <img src={LogoText} alt="logo" height="300px" width="200px" />

            {/* <p className="logo-text-style">COAST<br/> COLLECTIBLES</p> */}
            </span>
          </AnchorLink>

          <button
            onClick={slideOpen}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mySidebar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item closeData">
                <button className="nav-link close-button" onClick={slideClose}>
                  Close
                </button>
              </li>

              <li className="nav-item">
                <AnchorLink className="nav-link" href="#home">
                  Home
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#aboutus">
                  Work
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#team">
                  Collection
                </AnchorLink>
              </li>
              <li className="nav-item">
                <AnchorLink className="nav-link" href="#getstarted">
                  Get Started
                </AnchorLink>
              </li>

              <li className="nav-item">
                <AnchorLink className="nav-link" href="#contactus">
                  Contact Us
                </AnchorLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <section id="home">
          <HeroContainer />
        </section>
        <section id="aboutus">
          <AboutUs />
        </section>

        <section id="team">
          <ListedItemsContainer />
        </section>
        <section id="getstarted">
          <GetStarted />
        </section>

        <section id="contactus">
          {/* <Subscribe /> */}
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Head;
