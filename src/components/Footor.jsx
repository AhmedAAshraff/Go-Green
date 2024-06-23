// import { Button } from "bootstrap";
// import { Link } from "react-router-dom";

import { Fade } from "react-reveal";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook,FaHome,FaInfo,FaCreditCard,FaPhoneAlt } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";

function Footor() {
  return (
    <>
      <div className="footor  mt-0  ms-0  w-100 ">
        <div className="all">
          <div className="text-footor col">
            <Fade left>
              <h2>Go green</h2>
              <p>We help you find the Best way to recycle</p>
              <div className="icon-so">
                <FaFacebook className="FaFacebook" />
                <FaInstagram className="FaFacebook" />
                <FaTwitter className="FaFacebook" />
              </div>
              <div className="btns">
                <button>
                  <a href="/" tabIndex="0">
                    <img
                      class="bn45"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="bn45"
                    />
                  </a>
                </button>
                <button className="btnss">
                  <a href="/" tabIndex="0">
                    <img
                      class="bn46"
                      src=" https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                      alt="bn45"
                    />
                  </a>
                </button>
              </div>
            </Fade>
          </div>
          <div className="col ">
            <Fade right>
              <ul>
                <li><FaHome/> Home</li>
                <li><FaInfo/> About</li>
                <li><LuGalleryHorizontalEnd/> Gallery</li>
                <li><FaCreditCard/> Our Features</li>
              </ul>
            </Fade>
          </div>
          <div className="col">
            <Fade right>
              <ul>
                <li><FaPhoneAlt/> Contact US</li>
                <li><MdPrivacyTip/> Privacy Policy</li>
              </ul>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footor;
