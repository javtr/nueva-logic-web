import React from "react";
import avatar from "../../assets/img/avatar.png";

export default function TestimonialSec() {
  return (
    <div className="testimonialSec">
      <div className="testimonialSec__container">
        <h2 className="testimonialSec__container--h2">Experiencias Exitosas</h2>
        <h3 className="testimonialSec__container--h3">
          Descubre cómo nuestros usuarios han transformado su trading con éxito
          gracias a nuestras herramientas avanzadas.
        </h3>
        <div className="testimonialSec__container--content">
          <div className="testimonialSec__container--content-testimonial">
            <p className="testimonialSec__container--content-testimonial-text">
              Mike's creativity and thought leadership have made him an
              inspiring voice in online business. There's no doubt he can teach
              fellow creators how to turn their craft into cash.
            </p>
            <div>
              <img src={avatar} alt="avatar"></img>
              <h4> Mandi Lynne</h4>
              <p>Organizer, Hummingbird</p>
            </div>
          </div>
        
          <div className="testimonialSec__container--content-testimonial">
            <p className="testimonialSec__container--content-testimonial-text">
              Mike's creativity and thought leadership have made him an
              inspiring voice in online business. There's no doubt he can teach
              fellow creators how to turn their craft into cash.
            </p>
            <div>
              <img src={avatar} alt="avatar"></img>
              <h4> Mandi Lynne</h4>
              <p>Organizer, Hummingbird</p>
            </div>
          </div>

          <div className="testimonialSec__container--content-testimonial">
            <p className="testimonialSec__container--content-testimonial-text">
              Mike's creativity and thought leadership have made him an
              inspiring voice in online business. There's no doubt he can teach
              fellow creators how to turn their craft into cash.
            </p>
            <div>
              <img src={avatar} alt="avatar"></img>
              <h4> Mandi Lynne</h4>
              <p>Organizer, Hummingbird</p>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
}
