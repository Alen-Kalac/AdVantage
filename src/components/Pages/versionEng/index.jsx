import React from 'react';
import { useEffect } from 'react';
import Header from '../../componentsENG/header'
import Hero from '../../componentsENG/hero';
import GreenBubble from '../../componentsENG/GreenBubble';
import Testimonials from '../../componentsENG/Testimonials';
import ReasonsSection from '../../componentsENG/ReasonsSection';
import AboutSection from '../../componentsENG/AboutSection';
import PoolSection from '../../componentsENG/PoolSection';
import CalendlySection from '../../componentsENG/CalendlySection';
import CalendlyMobileSection from '../../componentsENG/CalendlySectionMobile';
import Offers from '../../componentsENG/Offers'


function LandingEng() {
  useEffect(() => {
    const handleScroll = () => {
      const tags = document.querySelectorAll('.animated');

      tags.forEach((tag) => {
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;
        const screenHeight = window.innerHeight;

        if (tagTop < screenHeight && tagBottom >= 0) {
          tag.style.opacity = 1;
          tag.style.transform = 'translateY(0)';
        } else {
          tag.style.opacity = 0;
          tag.style.transform = 'translateY(50px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <>
    <Header />
    <Hero />
    <GreenBubble>
      <span>We've helped 25 gyms to triple the</span>
      <span>amount of customers in just <span className="underlined-green">3 months!</span></span>
      <span> and we can do the same for you too!</span>
    </GreenBubble>
    <Offers/>
    <GreenBubble>
      <span>We let our success stories </span>
      <span>speak for themselves!</span>
    </GreenBubble>
   <Testimonials />
    <GreenBubble>
      <span>4 reasons why you </span>
      <span><span className="underlined-green">should</span> work with us</span>
    </GreenBubble>
    <ReasonsSection />
     <GreenBubble>
      <span>Our Story</span>
    </GreenBubble>
    <AboutSection />
   <GreenBubble>
      <span>Chinese Pool Guarantee</span>
    </GreenBubble>
    <PoolSection />
      <CalendlySection />
    <CalendlyMobileSection />
  </>


  );
}

export default LandingEng;
