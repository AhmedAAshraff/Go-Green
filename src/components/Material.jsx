import "./Material.css";
import photo1 from '../assets/maa1.png';
import photo2 from '../assets/maa2.jpeg';
import photo3 from '../assets/maa3.png';
import { Fade,Zoom } from "react-reveal";

function Material(){
    return(
        <section className="material"> 
        <Zoom>
          <h1>Our <span className="underline">Material</span></h1><br></br>
          </Zoom>
          <Fade top distance="22%">
          <div className="material-img w-100  ">
            <div className="material-card">
              <img  src={photo1}></img>
              
                <div className="material-card-text">
                    <h1>glass</h1>
                    <p>Glass bottles have a variety of closures to seal up the bottle and prevent the contents escape. Early bottles were sealed with wax, and later stoppered with a cork. More common today are screw caps and stoppers.</p>
                </div>
              </div>
              <div className="material-card ">
              <img src={photo2}></img>
                <div className="material-card-text">
                    <h1>plastic</h1>
                    <p> are a wide range of synthetic or semi-synthetic materials that use polymers as a main ingredient. Their plasticity makes it possible for plastics to be moulded, extruded or pressed into solid objects of various shapes.</p>
              </div>
                </div>
              <div className="material-card ">
              <img src={photo3}></img>
                <div className="material-card-text">
                    <h1>paper</h1>
<p>sheet material produced by mechanically or chemically processing cellulose fibres derived from wood, rags,grasses, or ither vegetable sources in water, draining the water through a fine mesh leaving the fiber evenly distributed on the surface followed by pressing and drying  </p> 
               </div>
              </div>
          
          </div>
              </Fade>
        
        
        
        
        
        </section>
    )
}
export default Material;