import React, { useEffect, useRef } from "react";
import "./styles.scss";
import video from "../../Images/Video.mp4";
import avatar from "../../Images/Marko-Hero.png";

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="hero-en">
      <div className="hero-content">
        <div className="hero-content-left">
          <p className="hero-text animated-onload">
            <span>We make short-form videos</span>
            <span> for long-term goals</span>
          </p>
          <div className="hero-line animated-onload"></div>
          <a href="#calendly">
            <button onClick="" className="hero-button animated-onload">
              Book a call with us
            </button>
          </a>
        </div>
        <div className="hero-content-right">
          <div className="video-wrapper">
            <video ref={videoRef} autoPlay muted playsInline loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
