
import {React,useEffect} from 'react';
import SectionInfo from "../SectionInfo/sectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import InfoComponent from '../InfoComponent'
  import "./aboutUs.css"
  import { useLocation } from "react-router-dom";
  // import BackgroundVideoA from "../../assets/img/test-img/BackgroundVideo.mp4"
  import Ren55 from "../../assets/img/test-img/ren_55.png"
  import Monkey1 from "../../assets/img/test-img/Monkey1.jpg"
  import Image from "../../assets/img/test-img/1.jpg"
  import WorkImage from "../../assets/img/test-img/WorkImage.png"



  import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";




const  AboutUs=()=> {

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
              titleLg=' 	How we work
              '
              text=' We source the most valuable assets
              '
            />
            </div>

            <div className="about-content-pad">
            <MindSectionInfo
        img={<img src={WorkImage} alt="monkey1"/>}

        titleSmTwo=" Source "
        contentTwo="We source the most valuable assets and memorabilia around the globe for our wide range of collectors."
        titleSmThree=" Share "
        contentThree="Each asset is then digitalised into 500 unique NFTs. Making it easier for you to own a piece of the asset.
"
        titleSmFour=" Sell "
        contentFour="All 500 pieces are then listed on www.opensea.io available for public sale. We are changing the future of fractional ownership.
"
      />
</div>
      </>
  );
}

export default AboutUs;
