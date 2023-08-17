import React from 'react';
import { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
// import LandingEng from './components/Pages/versionEng';
import LandingSrb from './components/Pages/versionSrb';



function App() {
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
    <Routes>
      {/* <Route path='/' element={<LandingEng/>} /> */}
      <Route path='/srb' element={<LandingSrb/>} />
    </Routes>
    </>
  );
}

export default App;
