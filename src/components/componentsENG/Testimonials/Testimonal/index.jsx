import React from 'react';
import './styles.scss'
import {BiSolidQuoteAltLeft,BiSolidQuoteAltRight} from "react-icons/bi";
function Testimonial({ imageSrc, name, title, comment }) {
    return (
      <div className="review-eng animated">
        <div className="review-top">
          <img src={imageSrc} alt="" />
          <p className="testimonial-name">{name}</p>
          <p className="title">{title}</p>
        </div>
        <div className="review-bottom">
          <p className="testimonial-comment">
            <BiSolidQuoteAltLeft/><i>{comment}</i><BiSolidQuoteAltRight/></p>
        </div>
      </div>
    );
  }

  export default Testimonial;