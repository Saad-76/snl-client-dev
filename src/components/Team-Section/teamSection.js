import React from "react";
import "./teamSection.css";
import TopCollectionsItem from "../TopCollectionsItem";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import InfoComponent from '../InfoComponent'
import Ren46 from "../../assets/img/test-img/ren_46.png"
import Peoples from "../../assets/img/test-img/Peoples.jpg"



const TeamSection = () => {
  const Rightscrol = () => {
    document.getElementById("containe").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("containe").scrollLeft -= 430;
  };

  return(
  <>

    <div className="tes-card" id="containe">
      <button onClick={Leftscrol} className="tes-btn">
        <FaArrowLeft size={22.5} />
      </button>
      <button onClick={Rightscrol} className="tes-btn1">
        <FaArrowRight size={22.5} />
      </button>

 <div className="container">
   <div className="TeamSection-padding">
  <InfoComponent
              titleSm='Here comes a new wave…'
              titleLg='Team  '
              text='Breaking down barriers.
              Building upon communities.
              Creating magic internet money with our friends'
            />
</div>

      <TopCollectionsItem 
     img={Peoples}
     title="Mr Joe" text="Developer" />
      <TopCollectionsItem      img={Peoples}
  title="Mr Joe" text="Developer" />

      <TopCollectionsItem       img={Peoples}
 title="Mr Joe" text="Developer" />
      <TopCollectionsItem       img={Peoples}
 title="Mr Joe" text="Developer" />
 
      </div>

    </div>
  </>);
};

export default TeamSection;
