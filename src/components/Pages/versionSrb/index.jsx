import React from 'react';
import { useEffect } from 'react';
import Header from '../../componentsSRB/header';
import Hero from '../../componentsSRB/hero';
import GreenBubble from '../../componentsSRB/GreenBubble';
import Clients from '../../componentsSRB/Clients';
import PromoSection from '../../componentsSRB/PromoSection'
import AboutSection from '../../componentsSRB/AboutSection';
import CalendlySection from '../../componentsSRB/CalendlySection';
import CalendlyMobileSection from '../../componentsSRB/CalendlySectionMobile';
import Offers from '../../componentsSRB/Offers'
import ReasonsSection from '../../componentsSRB/ReasonsSection'
import Testimonials from '../../componentsSRB/Testinomials';


function LandingSrb() {
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
      <span>Sarađivali smo sa preko <span className="alen">40 internacionalnih</span></span>
      <span>klijenata kojima smo za 3 meseca </span>
      <span>povećali prodaju za <span className='alen'>33%</span> u proseku!</span>
    </GreenBubble>
    <Offers/>
    <GreenBubble>
      <span>Naši klijenti</span>
    </GreenBubble>
   <Clients />
    <GreenBubble>
      <span>Prihvatamo <span className="underlined">samo jednog</span> </span>
      <span>novog klijenta mesečno!</span>
    </GreenBubble>
    <PromoSection />
  <GreenBubble>
      <span>Kako postižemo rezultate?</span>
    </GreenBubble>  
    <ReasonsSection/>
     <GreenBubble>
      <span>O nama</span>
    </GreenBubble>
    <AboutSection />
      <Testimonials/>
    <CalendlyMobileSection />
  </>


  );
}

export default LandingSrb;
