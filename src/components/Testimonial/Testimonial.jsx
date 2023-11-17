

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './Testimonial.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SectionTitle from "../SectionTtile/SectionTitle";

import ReactStarsRating from "react-awesome-stars-rating";


const Testimonial = () => {
    const [reviews,setReviews] = useState(null);
    useEffect(() =>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(result => setReviews(result))
    },[])

    

    return (
      <section className="py-8">
        <SectionTitle
          heading={"TESTIMONIALS"}
          subHeading={"---What Our Clients Say---"}
        ></SectionTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews?.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="text-center mx-32 py-8 space-y-2">
                  <div>
                    <ReactStarsRating className="rating"  value={review.rating} />
                  </div>
                  <p>{review.details}</p>
                  <h3 className="text-[#CD9003] font-bold text-3xl">
                    {review.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};

export default Testimonial;