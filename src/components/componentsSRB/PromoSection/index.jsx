import React from 'react';
import './styles.scss'
function PromoSection() {
    return (
      <div className="promo-section">
        <span className='title animated'>Ovog meseca čekamo Vas!</span>
        <div className="promo animated">
          <p className="promo-description">
          Tokom tog meseca naš tim stručnjaka posvećuje svoje vreme, znanje i resurse <span className="underlined-thin">isključivo vama</span>. Počinjemo sa temeljnim istraživanjem kako bismo razumeli vaš brend, ciljnu publiku i konkurenciju. 
          </p>
        </div>
        <div className="promo animated"> 
          <p className="promo-description">
          Naša posvećenost personalizovanom pristupu ne završava se nakon jednog meseca. Nakon što postanete naš klijent, pružamo kontinuiranu podršku kako bismo osigurali da ostvarite dugoročan uspeh. 
          </p>
        </div>
        <div className="promo animated">
          <p className="promo-description">
          Ograničenje na samo jednog novog klijenta mesečno omogućava nam da pružimo individualnu pažnju i posvećenost koju zaslužujete.
          </p>
        </div>
      </div>
    );
  }
  export default PromoSection;