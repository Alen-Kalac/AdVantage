import React from "react";
import "./styles.scss";
import mediaIcon from "./img/Media.png"
import AdsIcon from "./img/Ads.png"
import ShortVideoIcon from "./img/ShortVideo.png"
import ContentIcon from "./img/Content.png"


const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-content">
        <div className="service">
         <div className="img-container">
         <div >
            <svg height="50" width="50">
              <circle
                cx="25"
                cy="25"
                r="25"
                opacity={0.2}
                stroke-width="3"
                fill="rgb(202, 224, 31)"
              />
            </svg>
            <img src={mediaIcon} alt="" />
          </div>
          <p className="service-title">Media management</p>
         </div>
         
          <div className="service-desc">
          Boost your brand online with our Social Media Management: we create, schedule, and analyze content across platforms for maximum impact
          </div>
        </div>
        <div className="service">
          <div className="img-container">
          <div >
            <svg height="50" width="50">
              <circle
                cx="25"
                cy="25"
                r="25"
                opacity={0.2}
                stroke-width="3"
                fill="rgb(202, 224, 31)"
              />
            </svg>
            <img src={ContentIcon} alt="" />
          </div>
          <p className="service-title">Content creation </p>
          </div>
          <div className="service-desc">
          We design engaging posts to fuel your online presence and connect with your audience effectively.
          </div>
        </div>
        <div className="service">
        <div className="img-container">
        <div >
            <svg height="50" width="50">
              <circle
                cx="25"
                cy="25"
                r="25"
                opacity={0.2}
                stroke-width="3"
                fill="rgb(202, 224, 31)"
              />
            </svg>
            <img src={ShortVideoIcon} alt="" />
          </div>
          <p className="service-title">Short-form video</p>
        </div>
          <div className="service-desc">
          Our snappy videos quickly convey messages, perfect for today's fast-paced digital world.
          </div>
        </div>
        <div className="service">
         <div className="img-container">
         <div >
            <svg height="50" width="50">
              <circle
                cx="25"
                cy="25"
                r="25"
                opacity={0.2}
                stroke-width="3"
                fill="rgb(202, 224, 31)"
              />
            </svg>
            <img src={AdsIcon} alt="" />
          </div>
          <p className="service-title">Paid Ads</p>
         </div>
          <div className="service-desc">
          Reach your ideal audience precisely with our targeted advertisements, making your investment count.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
