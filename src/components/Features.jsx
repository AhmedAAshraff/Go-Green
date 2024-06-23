import "./Features.css";
import img1 from "../assets/Location.png";
import img2 from "../assets/Ai.png";
import img3 from "../assets/Support.png";
import img4 from "../assets/Idea.png";
import { Fade, Zoom } from "react-reveal";
function Features() {
  return (
    <>
      <section className="features">
        <div className="heading">
          <Fade>
            <h1>
              <span>Our</span> features
            </h1>
            <p>Benefits You Get When Using <span>Our</span> Application</p>
          </Fade>
        </div>
        <div className="all-card ">
          <div className="cards   ">
            <Fade top distance="20%">
              <div className="feat-img">
                <img src={img1}></img>
              </div>
              <div className="feat-text">
                <h1>Location</h1>
                <p>
                  You can find your nearest <span>Locations</span> for pick-up,
                  and manage your waste
                </p>
              </div>
            </Fade>
          </div>
          <div className="cards   down ">
            <Zoom top distance="20%">
              <div className="feat-img">
                <img src={img4}></img>
              </div>
              <div className="feat-text">
                <h1>Learn</h1>
                <p>
                  You can <span>Read</span> articals to Know more about recycle
                </p>
              </div>
            </Zoom>
          </div>

          <div className="cards">
            <Fade top distance="20%">
              <div className="feat-img">
                <img src={img3}></img>
              </div>
              <div className="feat-text">
                <h1>Community </h1>
                <p>
                  You can <span>Connect</span> with other people and take action
                  for a better world{" "}
                </p>
              </div>
            </Fade>
          </div>
          <div className="cards  down  ">
            <Zoom top distance="20%">
              <div className="feat-img">
                <img src={img1}></img>
              </div>
              <div className="feat-text">
                <h1>chat gpt</h1>
                <p>
                  Create your own <span>Magic</span> recycle by AI
                </p>
              </div>
            </Zoom>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
