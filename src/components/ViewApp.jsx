import "./ViewApp.css";
import { Fade, Zoom } from "react-reveal";
import imggg1 from '../assets/sss1.png';
import imggg2 from '../assets/sss2.png';
import imggg3 from '../assets/sss3.png';
import imggg5 from '../assets/sss5.png';
import imggg4 from '../assets/sss4.png';
function ViewApp(){
    return(
        <div className="view w-100">
            <Fade>
            <div className="view-text">
                <h1>View our <span className="underline">App Demo</span> </h1>
            </div>
            </Fade>
            <Fade top distance="22%">
            <div className="img-view">
                <img src={imggg3} id="c5"/>
                <img src={imggg4} id="c1"/>
                <img src={imggg1} id="c3"/>
                <img src={imggg2} id="c2"/>
                <img src={imggg5} id="c4"/>
            </div>
            </Fade>
        </div>

    )
}  

export default ViewApp;