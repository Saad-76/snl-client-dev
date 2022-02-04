import React from 'react';
import "./comingSoon.css"
import Image from "../../assets/img/test-img/1.jpg"

const ComingSoon=()=> {
    
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
}
  return (
      <>
<div className="col-md-12 comingSoon-main-style">
    <div className="container">
    <div className="col-md-6 comingSoon-content-style">
<h5>COMING SOON...</h5>
    </div>
    <div >
        <div className="image-section-outer-style">
{/* <img  className="image-section-inner-style" src={Image} alt=""/> */}
<div class="card-style">
              <div id="front" class="card-side front ">
                {/* <div>Front Side</div> */}
                {/* <img src={Image} alt="monkey1" height="700px" width="700px" /> */}
              </div>
              <div id="back" class="card-side back ">
                {/* <div>Back Side</div> */}
              </div>
            </div>
</div>
    </div>
    </div>

</div>
      </>
  );
}

export default ComingSoon;
