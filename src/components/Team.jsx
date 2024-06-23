import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import '../styles/reviews.css';
import 'swiper/css/pagination';

import './Team.css';

import Marim from'../assets/marim1.jpeg';
import Ahmed from '../assets/ahmed.jpg';
import AhmedH from '../assets/ahmedh.jpeg';
import nada from '../assets/nada.jpeg';
import mona from '../assets/mona.jpeg';
import yosab from '../assets/yosab.jpeg';
import Rectangle1 from'../assets/Rectangle 2.png';
import Rectangle2 from'../assets/Rectangle 3.png';
import Rectangle3 from'../assets/Rectangle 4.png';
import vadio2 from'../assets/recycle vadio.mp4';


import { Fade, Zoom } from "react-reveal";
function Team() {
  const Data = [
    {
        img : Marim,
        h2 : "Mariam Fawzy",
    },
    {
        img : Ahmed,
        h2 : "Ahmed AShraf",
    },
    {
      img : AhmedH,
      h2 : "Ahmed Hesham ",
    },
    {
      img : yosab,
      h2 : "Yosab Esaa",
    },
    {
      img : nada,
      h2 : "Nada Ali ",
  },
  {
    img : mona,
    h2 : "Mona Abdelfatah ",
},
{
  img : Ahmed,
  h2 : "Makary Gamal ",
},
]
  return (
    < div className="team ">
      <Fade>
      <div className="team-text">
        <h1>Discover more <span className='underline'>Creative</span> Idea about our App</h1>
      </div>
      </Fade>
      <Fade top distance="20%">
      <div className='vadio-team row-8  col-12 w-100 ' >
        <div className='3vadio'>
          <div className="2vadio">
            <img className=' col-3  row-4 p-2 vadio1' src={Rectangle3} alt="" srcset="" />
            <img className=' col-3  row-4 p-2 vadio2'src={Rectangle2} alt="" srcset="" />
        </div>
        <div className="1vadio">
        <video className='col-6 row-8 p-2 vadio4 ' autostart autoPlay muted loop src={vadio2} type="video/mp4" />

       </div>
        </div>
        <img className=' col-6  row-4 p-2 vadio3'src={Rectangle1} alt="" srcset="" />   

      </div>
      </Fade>
      <Zoom>
    <div className="team-text">
      <h1>our <span className='underline'>Team</span></h1>
    </div>
    </Zoom>
    <Zoom top distance="22%">
    <div className="team-img">
    <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {Data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='img-team'>
                                <img src={item.img}></img>
                                <h2>{item.h2}</h2>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>        
    </div>
    </Zoom>
    <br></br><br></br><br></br>

        </div>
    
  );
}

export default Team;
