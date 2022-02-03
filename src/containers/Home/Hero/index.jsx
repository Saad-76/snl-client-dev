import HomeImage from "../../../assets/img/test-img/HomeImage.png";
import AppleStore from "../../../assets/img/test-img/AppStore.png";
import PlayStore from "../../../assets/img/test-img/PlayStore.png";


const HeroContainer = () => {
  return (
    <>
      {/* <video
    className="Home-video_section-style"
    src={Video}
    loop={true}
    muted={true}
    autoPlay={true}
  />   */}
      {/* <div className="background-image-home-section">
        <section className="hero-section moving section-padding" id="home"> */}
          {/* <div className="moving-bg "></div> */}
{/* 
          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center home-data-align"></div>

              <div className="col-lg-6 ">
                <div >
                  < img  src={HomeImage} alt="" height="500px" width="500px"/>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content">
                  <div className="promo-section">
                    <h3 className="special-head gradient-text">
                      SNL is a brand.
                    </h3>
                  </div>
                  <h1>
                    A new kind of brand that{" "}
                    <span className="gradient-text">We build together</span>{" "}
                  </h1>
                  <p className="w-text">
                    A collection of 8888 avatars that give you membership access
                    to members-only exclusive benefits and sets up SNL as
                    next-generation fashion leaders.
                  </p>
                  <div className="dream-btn-group">
                    <button className="btn btn-explore more-btn mr-3">
                      Explore More
                    </button>
                    <button className="btn btn-Collect more-btn">
                      Collect NFT{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div  className="display-section-One">
      <div className="background-image-home-section">
        <div className="row ">
          <div className="container">
          <div className="col-md-6">
          < img  src={HomeImage} alt="" height="500px" width="500px"/>

          </div>
          <div className="col-md-6 home-content-section">
          <div className="promo-section">
                    <h3 className="special-head gradient-text">
                      SNL is a brand.
                    </h3>
                  </div>
                  <h1>
                    A new kind of brand that{" "}
                    <span className="gradient-text">We build together</span>{" "}
                  </h1>
                  <p className="w-text">
                    A collection of 8888 avatars that give you membership access
                    to members-only exclusive benefits and sets up SNL as
                    next-generation fashion leaders.
                  </p>
                  <div className="dream-btn-group">
                    <button className="buton-style-store mr-3">
                      {/* Explore More */}
                      <img src={AppleStore} alt="AppleStore" height="200px" width="200px"/>
                    </button>
                    <button className="buton-style-store ">
                      {/* Collect NFT{" "} */}
                      <img src={PlayStore} alt="AppleStore" height="200px" width="200px"/>

                    </button>
                  </div>
          </div>
          </div>
        </div>
        </div>
</div>
{/* --------------------second--------------------------------- */}

<div className="display-section-two">
        <div className="background-image-home-section-Two">
        <div className="row ">
          <div className="container">
          <div className=" home-content-section-Two">
          <div className="promo-section">
                    <h3 className="special-head gradient-text">
                      SNL is a brand.
                    </h3>
                  </div>
                  <h1>
                    A new kind of brand that{" "}
                    <span className="gradient-text">We build together</span>{" "}
                  </h1>
                  <p className="w-text">
                    A collection of 8888 avatars that give you membership access
                    to members-only exclusive benefits and sets up SNL as
                    next-generation fashion leaders.
                  </p>
                  <div className="dream-btn-group">
                    {/* <button className="btn btn-explore more-btn mr-3">
                      Explore More
                    </button>
                    <button className="btn btn-Collect more-btn">
                      Collect NFT{" "}
                    </button> */}
                     <button className="buton-style-store mr-3">
                      {/* Explore More */}
                      <img src={AppleStore} alt="AppleStore" height="200px" width="200px"/>
                    </button>
                    <button className="buton-style-store ">
                      {/* Collect NFT{" "} */}
                      <img src={PlayStore} alt="AppleStore" height="200px" width="200px"/>

                    </button>
                  </div>

          </div>
          <div className="col-md-6 home-content-section">
          < img  src={HomeImage} alt="" height="500px" width="500px"/>

          </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default HeroContainer;
