import Carousel1 from "../../assets/carousel1.jpg";
import Carousel2 from "../../assets/carousel2.jpg";
import Carousel3 from "../../assets/carousel3.jpg";
import Carousel4 from "../../assets/carousel4.jpg";
import Carousel5 from "../../assets/carousel5.jpg";
import Carousel6 from "../../assets/carousel6.jpg";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import styles from "./styles.module.css";

// import required modules
import { EffectCards } from "swiper/modules";
import TextMain from "./TextMain";

export default function SectionMain() {
  return (
    <div className={styles.SectionMain}>
      <TextMain></TextMain>
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
        <SwiperSlide>
          <img src={Carousel3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel6} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
}
