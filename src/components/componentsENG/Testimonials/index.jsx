import React from 'react';
import Testimonial from './Testimonal'
import './styles.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import TrainerOne from '../../Images/Trainer 1.png'
import TrainerTwo from '../../Images/Trainer 2.png'
import TrainerThree from '../../Images/Trainer 3.png'
function Testimonials() {
    return (
      <div className="testimonials">
        <Carousel
className="testimonials-carousel"
infiniteLoop={true}
autoPlay={true}
showStatus={false}
emulateTouch={true}
>
   <Testimonial
          imageSrc={TrainerOne}
          name="Harper S."
          title="Gym owner"
          comment="Before partnering with AdVantage, I was overwhelmed with managing my gym and trying to handle marketing on my own. It was taking a toll on my time and energy, and I wasn't seeing the results I desired. However, AdVantage stepped in and took charge of our Facebook advertising. Their expertise and understanding of the fitness industry were evident from the start. They created compelling ads that not only attracted new members but also effectively conveyed the unique experience our gym offers. Since working with them, I've been able to focus more on running my gym while seeing a significant increase in membership."
        />
        <Testimonial
          imageSrc={TrainerTwo}
          name="Arthur M."
          title="Gym owner"
          comment="Working with AdVantage has been a breath of fresh air for our gym. We had previously tried various marketing strategies with little success and wasted a lot of time and money. That all changed when we partnered with AdVantage. Their team of experts not only crafted captivating Facebook ads but also implemented a comprehensive ad management strategy. The results were beyond our expectations. Our online visibility skyrocketed, leading to a surge in inquiries and new members. AdVantage's personalized approach, industry knowledge, and unwavering support have been invaluable to our gym's growth. If you're looking for a results-driven marketing agency that truly understands the fitness industry, AdVantage is the answer."
        />
        <Testimonial
          imageSrc={TrainerThree}
          name="Noah J."
          title="Gym owner"
          comment="At first, I was skeptical about working with AdVantage, but they quickly proved me wrong. Within the first three months of partnering with them, we saw an incredible 320% increase in ROI. They not only brought in a consistent stream of highly targeted leads but also helped us nurture those leads into loyal, long-term members. Guys from AdVantage understood our gym's unique challenges and crafted compelling ads that spoke directly to our target audience's needs and aspirations. Thanks to their expertise, our gym has experienced a significant increase in membership and revenue. If you're a gym owner looking to overcome the membership hurdle, I highly recommend partnering with AdVantage."
        />
</Carousel>
       
      <div className="testimonials-bottom">
  <p> What if you could:</p>
  <span> Implement groundbreaking fitness trends before anyone else?</span>
  <span> Offer unique, jaw-dropping amenities that keep members coming back?</span>
  <span> Build a community so strong, it practically markets itself?</span>
  <span> See your profits surge as your gym becomes the go-to destination?</span>
  <p>Now you can!</p>
</div>
      </div>
    );
  }

  export default Testimonials