import {React, useState} from "react";
import "./subscribe.css";
import {Link} from "react-router-dom"

const Subscribe = () => {
	const[ user, setUser]= useState({
		email:"",
	})
  return (
    <>
      {/* <div className="  col-sm-12 col-xs-12"> */}
      <div className=" display-style-subscribe">
        <div className="footer-widget newsletter-widget">
          <h3 className="has-line-center">Newsletter</h3>
          <div className="widget-content">
            <div className="text subscribe-text-style">
              Stay Updated with our latest news. We promise not to spam
            </div>
            <div className="newsletter-form">
              <form method="post">
                <div className="form-group subscribe-display">
                  <input
                    className="input-email-style-subscribe"
                    type="email"
                    name="field-name"
                    placeholder="Your Email"
                    required=""
					value={user.email}
onChange={(e)=>{
	setUser({...user, email:e.target.value})
}}
                  />

             <Link to="/home">     <button
                    className="subscribe-button-style-subscribe"
                   
                  >
                    Subscribe
                  </button>
                  </Link>
                  {/* <span className="fa fa-paper-plane-o"> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Subscribe;
