import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from "../../assets/home/01.jpg";
import slider2 from "../../assets/home/02.jpg";
import slider3 from "../../assets/home/03.png";
import slider4 from "../../assets/home/04.jpg";

const Banner = () => {
  return (
    <div className="py-8">
      <Swiper 
        style={{
          "--swiper-pagination-color": "#0080FF",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
