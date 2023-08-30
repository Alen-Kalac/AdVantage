import React, { useRef,useState,useEffect} from "react";
import "./styles.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Testimonial from "./Testimonal";


function Clients() {
 
  return (
<>
<Carousel
className="testimonials-carousel"
infiniteLoop={true}
autoPlay={true}
showStatus={false}
interval={3000}
>
<Testimonial
          imageSrc="https://www.w3schools.com/howto/img_avatar.png"
          name="Demir Spica."
          title="osnivač “MorrisonGym-a"
          comment="Kada je reč o marketingu teretana, AdVantage je neprikosnoven. Mare i njegov tim su stvorili marketinšku strategiju koja je našoj teretanj donela veliku vidljivost i nove članove. Usluga je personalizovana i profesionalna. Siguran sam da bez njih ne bismo postigli ovakav uspeh."
        />
        <Testimonial
          imageSrc="https://www.w3schools.com/howto/img_avatar.png"
          name="Ana Petrović"
          title="Vlasnica butika “LadiesFirst”"
          comment="Zahvaljujući AdVantage timu, moj mali butik je postao poznat širom interneta. Mare i ekipa su mi pomogli da pronađem pravu publiku i povećam prodaju 3x za samo 3 meseca saradnje. Oduševljena sam rezultatima, a tek sada počinjemo!"
        />
        <Testimonial
          imageSrc="https://www.w3schools.com/howto/img_avatar.png"
          name="Maja Novak"
          title="vlasnica restorana “StaraPravda”"
          comment="Saradnja sa AdVantage-om je bila ključna za uspeh mog restorana. Ekipa iz AdVantage-a je stvorila marketinšku strategiju koja je dočarala dušu našeg restorana. Zahvaljujući njima, naš restoran je postao omiljeni kutak za sve ljubitelje fine hrane, a pogotovo bifteka. Sada planiramo da ubacimo i TikTok marketing i jedva čekamo te rezultate!"
        />
        <Testimonial
          imageSrc="https://www.w3schools.com/howto/img_avatar.png"
          name="Marko Nikolić"
          title="CEO u TechSolutions"
          comment="Kako poslujemo u B2B sektoru i nemamo dodira sa kupcima bio sam vrlo skeptičan u početku, ali sam ipak prihvatio saradnju zbog garancije koju sam dobio da će marketing dati rezultate. Trenutno poslujemo 8 meseci i kajem se što nismo počeli i ranije! Dopirem do novih kupaca a posao raste konstantno 10% svakog meseca!"
        />
                
           
</Carousel>
</>
  );
}

export default Clients;
