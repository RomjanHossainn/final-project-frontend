import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import slide image 

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'


// import required modules
import { Pagination } from 'swiper/modules';
import SectionTitle from '../SectionTtile/SectionTitle';
const CategoryesFood = () => {
   
  return (
    <div className="py-10">
      <SectionTitle
        heading={"ORDER ONLINE"}
        subHeading={"---From 11:00am to 10:00pm---"}
      ></SectionTitle>
      <Swiper
        style={{
          "--swiper-pagination-color": "#0080FF",
          "--swiper-pagination-bullet-inactive-color": "#1F2937",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full " src={slide1} alt="" />
          <h2 className="absolute top-2/3 left-[155px] text-gray-100 font-bold   text-3xl">
            Testy Foods
          </h2>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full " src={slide2} alt="" />
          <h2 className="absolute top-2/3 left-[155px]  text-gray-100 font-bold   text-3xl">
            Testy Foods
          </h2>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full " src={slide3} alt="" />
          <h2 className="absolute top-2/3 left-[155px]  text-gray-100 font-bold   text-3xl">
            Testy Foods
          </h2>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full" src={slide4} alt="" />
          <h2 className="absolute top-2/3 left-[155px]  text-gray-100 font-bold   text-3xl">
            Testy Foods
          </h2>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full" src={slide5} alt="" />
          <h2 className="absolute top-2/3 left-[155px]  text-gray-100 font-bold text-3xl">
            Testy Foods
          </h2>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryesFood;
