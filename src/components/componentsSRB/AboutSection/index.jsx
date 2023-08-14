import React from 'react';
import './styles.scss'
import avatarAbout from '../../Images/Marko-About.png'

function AboutSection() {
    return (
      <div className="about-section">
        <div className="about-content">
          <p className="about-text animated">
            <span>
            Ćao! Moje ime je Marko i vlasnik sam marketing agencije AdVantage. Izgradili smo poverenje kod inostranih i domaćih klijenata jer smo u proseku podigli njihovu prodaju za 33% kroz 3 meseca poslovanja!            </span>
  
            <span>
            Znam, teško je imati poverenje u nekoga mojih godina! Međutim, rad u 4 marketing agencije pre osnivanja svoje, kao i saradnja sa 40 internacionalnih klijenata ipak govore da je moguće! 
            </span>
  
            <span>
            Vaše poverenje je od suštinske važnosti za nas, i to poverenje opravdavamo kroz transparentnost, profesionalnost i posvećenost svakom detalju prilikom našeg zajedničkog poslovanja!
            </span>
          </p>
          <div className="img animated">
            <img className="about-avatar" src={avatarAbout} alt="" />
          </div>
        </div>
      </div>
    );
  }

  export default AboutSection;