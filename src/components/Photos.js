import React, { useState } from "react";

import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "./Data";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { EffectCoverflow } from "swiper";

const SwiperTop = ({ prevEl, nextEl, movies }) => {
  return (
    <Swiper
      slidesPerView={3}
      autoplay={true}
      speed={1000}
      loop={true}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      modules={[Autoplay]}
      className="swiper_container"
    >
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280966/Picture1_bgoqrv.jpg"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280967/Picture2_fsyfb8.jpg"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280970/Picture3_l652ry.jpg"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280972/Picture4_lvhbxs.jpg"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280974/Picture5_njv7hq.png"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280976/Picture6_c7z40l.jpg"
          alt="slide_image"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://res.cloudinary.com/pro-solve/image/upload/v1702280978/Picture7_ippmh1.jpg"
          alt="slide_image"
        />
      </SwiperSlide>

      {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
    </Swiper>
  );
};
const Photos = ({ movies, isLoading }) => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);
  const className =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-primary text-white";
  return (
    <div className="my-16">
      {/* <Titles title="Top Rated Internships" Icon={BsBookmarkStarFill} /> */}

      <div className="mt-10">
        {isLoading ? (
          //   <Loader />
          <div></div>
        ) : Data?.length > 0 ? (
          <SwiperTop nextEl={nextEl} prevEl={prevEl} Data={Data} />
        ) : (
          //   <Empty message="It seem's like we dont have any movie" />
          <div></div>
        )}

        <div className="w-full px-1 flex-rows gap-6 pt-12">
          {/* <button className={className} ref={(node) => setPrevtEl(node)}>
              <BsCaretLeftFill />
            </button> */}

          {/* <button className={className} ref={(node) => setNextEl(node)}>
              <BsCaretRightFill />
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Photos;
