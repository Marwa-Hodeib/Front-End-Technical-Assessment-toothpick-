import React from "react";
import Slider from "react-slick";
import "./Home.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  className: "slider variable-width",
  centerMode: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  
};

const Home = () => (
  <div id='home' className='home-wrapper'>
    <div className='main-container'>
      <div className='home-wrapper-text'>
        <div className='home-title'>The Dental Ecosystem</div>
        <p className='home-paragraph'>
          Toothpick allows you to easily find,order and track all of your dental
          products in 3 easy steps.
        </p>
        <img
          className='home-app-image'
          src='/Images/app-store-black.svg'
          alt='app store'
        />
        <img
          className='home-app-image'
          src='/Images/google-play-black.svg'
          alt='google play'
        />
      </div>
      <div className='home-wrapper-image'>
        <Slider {...settings}>
          <div className='slide'>
            <img
              className='home-mobile-image'
              src='/Images/img_hero_1.png'
              alt='app store'
            />
          </div>

          <div className='slide'>
            <img
              className='home-mobile-image'
              src='/Images/img_hero_1.png'
              alt='app store'
            />
          </div>

          <div className='slide'>
            <img
              className='home-mobile-image'
              src='/Images/img_hero_1.png'
              alt='app store'
            />
          </div>
        </Slider>
      </div>
    </div>
    <img
      src='/Images/home-background.svg'
      className='home-background'
      alt='home background'
    />
  </div>
);

export default Home;