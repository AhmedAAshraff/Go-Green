import './About.css';
import imgabout from "../assets/Vector.png";
import { Fade, Zoom,Rotate,Flip,Roll,Bounce} from 'react-reveal';

function About(){
    return(
        <div className="about container-fluid  ">
          <div className='about-component '>
            <div className='About-text'>
              <Roll left>
              <h1> About <span>Us</span></h1>
              <p>our mission is simple. we want to make a positive impact on the <span>environment</span> and save money at the same time.</p>
              </Roll>
            </div>
            <div className='about-img '>
              <Roll right>
              <img src={imgabout}></img>
              </Roll>
            </div>
          </div>



     <br></br>
        </div>
 
    )
}
export default About;