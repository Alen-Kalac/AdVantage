import React from 'react';
import './styles.scss'
function Testimonial({ imageSrc, name, title, comment }) {
    return (
      <div className="review-srb animated">
        <div className="review-left">
          <img src={imageSrc} alt="" />
          <p className="testimonial-name">{name}</p>
          <p className="title">{title}</p>
        </div>
        <div className="review-right">
          <p className="testimonial-comment">{comment}</p>
        </div>
      </div>
    );
  }

  export default Testimonial;