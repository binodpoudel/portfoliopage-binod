import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Sidebar from "../../img/94.png";
import Ecommerce from "../../img/E-commerce.png";
import Online from "../../img/online12.png";
import Pizza from "../../img/pizza.png";
import Eco2 from "../../img/online2.png";
import Travel from "../../img/travel.png";
import { ThemeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode ? 'white' : ''}}>Golden Projects from the Past</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        <SwiperSlide>
          <img src={Sidebar} alt="Sidebar Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="E-commerce Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Eco2} alt="E-commerce 2 Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Online} alt="Online Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Pizza} alt="Pizza Project" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Travel} alt="Travel Project" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;