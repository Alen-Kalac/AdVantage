import React, { useRef,useState,useEffect} from "react";
import "./styles.scss";
import Autoplay from "embla-carousel-autoplay"; // Make sure you've installed this package
import { Carousel } from "@mantine/carousel";
import { createStyles, getStylesRef } from '@mantine/core';
import imgOne from "./Logo/One.png";
import imgTwo from "./Logo/Two.png";
import imgThree from "./Logo/Three.png";
import imgFour from "./Logo/Four.png";
import imgFive from "./Logo/Five.png";
import imgSix from "./Logo/Six.png";
import imgSeven from "./Logo/Seven.png";
import imgEight from "./Logo/Eight.png";
import imgNine from "./Logo/Nine.png";
import imgTen from "./Logo/Ten.png";
import imgEleven from "./Logo/Eleven.png";
import imgTwelve from "./Logo/Twelve.png";
import imgThirteen from "./Logo/Thirteen.png";
import imgFourteen from "./Logo/Fourteen.png";
import imgFifteen from "./Logo/Fifteen.png";

function Clients() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [slideSize, setSlideSize] = useState("20%");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlideSize("50%");
      } else {
        setSlideSize("20%");
      }
    };

    handleResize(); // Call once to set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const useStyles = createStyles(() => ({
    controls: {
      ref: getStylesRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0,
    },
  }));

  const { classes } = useStyles();
  return (
    <div className="testimonials-srb">
   <div className="carousel-container">
   <Carousel
   classNames={classes}
slideSize={slideSize}
slideGap="xl"
loop
plugins={[autoplay.current]} // Add the autoplay plugin
withControls="false"
draggable={false}
>
<Carousel.Slide> 
  <img src={imgOne} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgTwo} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgThree} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgFour} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgFive} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgSix} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgSeven} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgEight} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgNine} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgTen} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgEleven} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgTwelve} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgThirteen} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgFourteen} alt="" />
</Carousel.Slide>
<Carousel.Slide>
  <img src={imgFifteen} alt="" />
</Carousel.Slide>
</Carousel>
   </div>
    </div>
  );
}

export default Clients;
