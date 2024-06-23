import "./Header.css";
import { Fade, Flip, Roll, Rotate, Zoom } from "react-reveal";
import Navbar from "./Navbar";
function Header() {
  return (
    <div className="home  .container-fluid">
      <div className="logo">
        <br></br><br></br><br></br><br></br>
      <Navbar/>
      </div>
      <div className="text">
        <Zoom top distance="20%">
          <h1>
            First <span>Community</span> Driven recycling app
          </h1>
        </Zoom>
        <Flip top>
          <p>
            Are you sometimes feel confused about what to recycle?<br></br> Find
            the <span>Best</span> way to recycle
          </p>
        </Flip>
        <Zoom top distance="25%">
          <button className="btn ">Get the App</button>
          <br></br>
        </Zoom>
      </div>
    </div>
  );
}

export default Header;
