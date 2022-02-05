import { React, useEffect } from "react";
import SectionInfo from "../SectionInfo/sectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import InfoComponent from "../InfoComponent";
import "./getStarted.css";
import { useLocation } from "react-router-dom";
// import BackgroundVideoA from "../../assets/img/test-img/BackgroundVideo.mp4"
import Ren55 from "../../assets/img/test-img/ren_55.png";
import Monkey1 from "../../assets/img/test-img/Monkey1.jpg";
import Image from "../../assets/img/test-img/1.jpg";
import GetStartedVideo from "../../assets/img/test-img/GetStartedVideo.mp4";

// import CardNft from "../../assets/img/test-img/CardNft.jpg"

import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import Subscribe from "../Subscribe/subscribe";
import ComingSoon from "../ComingSoon/comingSoon";


const GetStarted = () => {
  let angle = 0;
  let angle2 = 180;

  window.onfocus = () => {
    console.log("Got focused!!!")
    angle = 0
    angle2 = 180
  }

  function anim() {
    const front = document.getElementById("front");
    const back = document.getElementById("back");

    console.log("Angle Values")
    console.log(angle, " ", angle2);
    front.style.transform = "rotateY(" + angle2 + "deg)";
    back.style.transform = "rotateY(" + angle + "deg)";
    angle += 180;
    angle2 += 180;
    // if (angle >= 999999) {
    //   // console.log(angle, " ", angle2);
    //   angle = 0;
    //   angle2 = 180;
    // }

    // if (front.style.transform === '') {
    // }
    // else if (front.style.transform === 'rotateY(180deg)') {
    //     front.style.transform = "rotateY(360deg)";
    //     back.style.transform = "rotateY(180deg)";
    // } else {
    //     front.style.transform = "rotateY(540deg)";
    //     back.style.transform = "rotateY(360deg)";

    // }
  }

  setInterval(() => anim(), 2000);

  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <>
      <div className="about-top-pad">
        <InfoComponent
          // titleSm='About Us.'
          titleLg=" 	GET STARTED
              "
          text=" We have different assets in our collection 
              "
        />
      </div>

      <div className="row">
        <div className="container">
          <div className="col-md-6">


          {/* <video
            className="video_section-style"
            src={GetStartedVideo}
            loop={true}
            muted={true}
            autoPlay={true}
          /> */}

            <div class="card-style">
              <div id="front" class="card-side front ">
              </div>
              <div id="back" class="card-side back ">
              </div>
            </div>
          </div>
          <div className=" get-Started-content">
            <h3> Browse Our Collections</h3>
            <p>
              We have different assets in our collection ranging from Sports
              memorabilia and coins to trading cards.{" "}
            </p>
            <h3> Pick Your Number</h3>
            <p>
              Each fractionalised piece is uniquely numbered out of 500. Each
              one is different from the other.
            </p>
            <h3>OpenSea</h3>
            <p>
              OpenSea is the biggest NFT marketplace in the world. All of our
              collections are exclusively on OpenSea. Click this link to sign up
              now! (link to opensea/latest collection){" "}
            </p>
          </div>
        </div>
      </div>
      <div className="about-content-pad">
        {/* <MindSectionInfo
        img={<img src={Image} alt="monkey1"/>}

        titleSmTwo=" Browse our collections"
        contentTwo="We have different assets in our collection ranging from Sports memorabilia and coins to trading cards. "
        titleSmThree=" Pick your number "
        contentThree="Each fractionalised piece is uniquely numbered out of 500. Each one is different from the other. 
"
        titleSmFour=" OpenSea "
        contentFour="OpenSea is the biggest NFT marketplace in the world. All of our collections are exclusively on OpenSea. Click this link to sign up now! (link to opensea/latest collection) 
"
      /> */}
      </div>
<ComingSoon/>
      <Subscribe />
    </>
  );
};

export default GetStarted;
