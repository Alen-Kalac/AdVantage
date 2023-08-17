import React from "react";
import Testimonial from "../Testimonal";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imgOne from './Logo/One.png'
import imgTwo from './Logo/Two.png'
import imgThree from './Logo/Three.png'
import imgFour from './Logo/Four.png'
import imgFive from './Logo/Five.png'


function Testimonials() {
  return (
    <div className="testimonials-srb">
      <Carousel
        className="shadow-xl"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="false"
        interval={3000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
       <div className="imgContainer"> <img src={imgOne} alt="" /></div>
       <div className="imgContainer"><img src={imgTwo} alt="" /></div> 
       <div className="imgContainer"><img src={imgThree} alt="" /></div> 
       <div className="imgContainer"><img src={imgFour} alt="" /></div> 
       <div className="imgContainer"><img src={imgFive} alt="" /></div> 
      </Carousel>

      {/* <Carousel
        className="shadow-xl"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="false"
        interval={2000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </Carousel>
      <Carousel
        className="shadow-xl"
        infiniteLoop="true"
        emulateTouch="true"
        autoPlay="false"
        interval={2000}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
      >
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </Carousel> */}
    </div>
  );
}

export default Testimonials;
