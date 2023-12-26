import React from "react";
import adv1 from '../../assets/img/adv01.png';
import adv2 from '../../assets/img/adv02.png';
import adv3 from '../../assets/img/adv03.png';


export default function AdvantagerSec() {
  return (
    <div className="advantages">
      <div className="advantages__content">
        <h2 className="advantages__content--h2">
          Razones para Elegir Nuestros Indicadores
        </h2>
        <h3 className="advantages__content--h3">
          Potencia tu estrategia con herramientas avanzadas diseñadas para
          elevar tu experiencia de trading. Obtén una ventaja competitiva con
          soluciones que se adaptan a tu estilo y te guían hacia operaciones más
          informadas y exitosas.
        </h3>

        <div className="advantages__content--cards">
          <div className="advantages__content--cards-card">
            <div className="advantages__content--cards-card-img">
                <img src={adv1} alt="patterns" />
            </div>
            <div className="advantages__content--cards-card-content">
              <h3 className="advantages__content--cards-card-content-title">
                Identificación rápida de patrones
              </h3>
              <p className="advantages__content--cards-card-content-parag">
                Optimiza tu toma de decisiones al identificar fácilmente
                patrones de rupturas, agotamientos y giros. Logic Indicators te
                brinda una visión clara y rápida de las oportunidades en el
                mercado, permitiéndote actuar con confianza y precisión.
              </p>
            </div>
          </div>
          <div className="advantages__content--cards-card">
            <div className="advantages__content--cards-card-img">
                <img src={adv1} alt="patterns" />
            </div>
            <div className="advantages__content--cards-card-content">
              <h3 className="advantages__content--cards-card-content-title">
                Rendimiento optimizado
              </h3>
              <p className="advantages__content--cards-card-content-parag">
                Al prescindir del uso de tick replay, olvídate de preocuparte
                por el rendimiento lento de tu equipo. Disfruta de una
                experiencia sin interrupciones mientras te sumerges en la acción
                del mercado con total fluidez.
              </p>
            </div>
          </div>
          <div className="advantages__content--cards-card">
            <div className="advantages__content--cards-card-img">
                <img src={adv2} alt="patterns" />
            </div>
            <div className="advantages__content--cards-card-content">
              <h3 className="advantages__content--cards-card-content-title">
                Cambia de estilo con un solo clic{" "}
              </h3>
              <p className="advantages__content--cards-card-content-parag">
                Optimiza tu experiencia con un simple clic en el panel de
                plantillas, altera el modo de visualización sin recargar el
                indicador. Esto te permite adaptarte rápidamente a las
                condiciones del mercado con eficiencia y fluidez.
              </p>
            </div>
          </div>
          <div className="advantages__content--cards-card">
            <div className="advantages__content--cards-card-img">
                <img src={adv3} alt="patterns" />
            </div>
            <div className="advantages__content--cards-card-content">
              <h3 className="advantages__content--cards-card-content-title">
                Análisis personalizado
              </h3>
              <p className="advantages__content--cards-card-content-parag">
                Personaliza tu análisis adaptando el indicador a tu estilo de
                trading. Ajusta parámetros con facilidad para mayor flexibilidad
                en estrategias y decisiones seguras en cualquier situación del
                mercado.
              </p>
            </div>
          </div>

 


        </div>
      </div>
    </div>
  );
}
