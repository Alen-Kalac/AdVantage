import React from "react";
import Testimonial from "./Testimonal";
import "./styles.scss";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GiCheckMark } from 'react-icons/gi';
import TrainerOne from "../../Images/Trainer 1.png";
import TrainerTwo from "../../Images/Trainer 2.png";
import TrainerThree from "../../Images/Trainer 3.png";
function Testimonials() {
  return (
    <div className="testimonials">
      <Carousel
        className="testimonials-carousel"
        infiniteLoop={true}
        autoPlay={true}
        showStatus={false}
        emulateTouch={true}
        showThumbs={false}
      >
        <Testimonial
          imageSrc={TrainerOne}
          name="Harper S."
          title="UK UltraFlex Gym Manager"
          comment="Before teaming up with AdVantage for short-form video creation,
           I struggled to manage my gym and marketing simultaneously. It was draining
            and yielded unsatisfactory results. However, AdVantage's expertise in the fitness industry became 
            evident right away. They crafted captivating short videos that not only drew in new members but also
             highlighted our gym's unique offerings. With their support, I've reclaimed my time for gym management
              while witnessing a remarkable boost in membership."
        />
        <Testimonial
          imageSrc={TrainerTwo}
          name="Arthur M."
          title="Morrison Gym owner"
          comment="AdVantage revitalized our gym's marketing efforts. Their experts crafted captivating
           Facebook ads and implemented a winning ad strategy. The results exceeded our expectations: increased online
            visibility, more inquiries, and a surge in new members. Their personalized, industry-savvy 
            approach has been vital for our gym's growth. For a results-driven fitness marketing agency, choose AdVantage."
        />
        <Testimonial
          imageSrc={TrainerThree}
          name="Noah J."
          title="DY Nutrition manager"
          comment="Collaborating with AdVantage for our short-form video marketing has been an absolute
           game-changer for DY Nutrition. Their creative expertise and in-depth knowledge of the fitness
            industry have played a pivotal role in significantly elevating our brand presence. AdVantage's
             team possesses a unique talent for not only effectively showcasing our products but also crafting
             content that deeply resonates with our target audience. This has resulted in a substantial increase
              in engagement and heightened visibility within our market. They have gone beyond merely creating videos;
               they've helped us forge meaningful connections with fitness enthusiasts worldwide."
        />
      </Carousel>

      <div className="testimonials-bottom">
        <p> What if you could:</p>
        <span>
        <GiCheckMark className="checkmark"/>  Implement groundbreaking fitness trends before anyone else?
        </span>
        <span>
         <GiCheckMark className="checkmark"/> Offer unique, jaw-dropping amenities that keep members coming back?
        </span>
        <span>
         <GiCheckMark className="checkmark"/> Build a community so strong, it practically markets itself?
        </span>
        <span>
        <GiCheckMark className="checkmark"/>  See your profits surge as your gym becomes the go-to destination?
        </span>
        <p>Now you can!</p>
      </div>
    </div>
  );
}

export default Testimonials;
