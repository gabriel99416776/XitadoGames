import Carousel1 from "../../assets/carousel1.jpg";
import Carousel2 from "../../assets/carousel2.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./styles.module.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function SectionMain() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src={Carousel1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
