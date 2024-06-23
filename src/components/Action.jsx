import "./Action.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Fade, Zoom } from "react-reveal";
import Rectangle8 from "../assets/Rectangle 8.png";
import Rectangle9 from "../assets/Rectangle 9.png";
import Rectangle10 from "../assets/Rectangle 10.png";
import Rectangle17 from "../assets/Rectangle 17.png";
import Re3 from "../assets/re3.png";
import Ree3 from "../assets/ree3.png";
import Re4 from "../assets/re4.jpeg";
import Re5 from "../assets/re5.jpeg";
import Re6 from "../assets/re6.png";
import Re8 from "../assets/re8.png";
import Re7 from "../assets/re7.png";

function Action() {
  return (
    <>
      <section className="main">
        <Fade>
          <h1>
            Take Action <span>For a</span> Better World
          </h1>
          <br></br>
        </Fade>
        <Zoom top distance="22%">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Rectangle8}></img>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle9}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Rectangle17}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re3}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re4}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Ree3}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re7}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re6}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re8}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={Re5}></img>
            </SwiperSlide>
          </Swiper>
        </Zoom>
      </section>
    </>
  );
}
export default Action;
