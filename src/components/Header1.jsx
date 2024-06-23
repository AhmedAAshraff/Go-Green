import "./Header1.css";
// import {flower} from"../assets/Flower1.png"
import Navbar from "./Navbar";
import { Fade, Zoom } from "react-reveal";

function Header1(){
    return(
        < div className="header1">
            <br></br>
            <Navbar />
        <Zoom>
      <section className="header1-text">
        <h1>Go Green </h1>
        
        <p>Your Daily<span> Recycle</span> Application </p>
        
      </section>
        </Zoom>
      
      </div>
    )
}

export default Header1;