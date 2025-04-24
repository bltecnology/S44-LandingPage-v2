import banner from "../../assets/first-section-banner.png";
import caminhao from "../../assets/caminhão fundo amarelo banner.png";
import { Truck } from "lucide-react";
import "../../styles/first-section.css";

export function FirstSection() {
  return (
    <section
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="section-container">
        <div>
          <span> A maior transportadora para grandes conquistas!</span>
          <h1>
            Logística e Transporte <span className="highlight">S44</span>
          </h1>
          <p>A S44 é uma empresa especializada no transporte de cargas, oferecendo soluções logísticas seguras e eficientes para atender com excelência às demandas do mercado nacional.
          </p>
          <div className="section-button">
            <button className="btn">
              Saiba mais ↗
            </button >
            <button className="btn-outline-white">
              Acesse a plantaforma
              <Truck size={20} style={{ marginLeft: "0.125rem" }}></Truck>
            </button>
          </div>
        </div>
        <div>
          <img src={caminhao} alt="Caminhão"></img>
        </div>
      </div>
    </section>

  );
}