import React from 'react';
import "./comingSoon.css"
import Image from "../../assets/img/test-img/1.jpg"

const ComingSoon=()=> {
  return (
      <>
<div className="col-md-12 comingSoon-main-style">
    <div className="col-md-6 comingSoon-content-style">
<h1>Coming Soon...?</h1>
    </div>
    <div className="col-md-6 ">
        <div className="image-section-outer-style">
<img  className="image-section-inner-style" src={Image} alt=""/>
</div>
    </div>

</div>
      </>
  );
}

export default ComingSoon;
