import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";

import { ContactSection } from "../home/contact-section";
import { ServicoCarga } from "./servicos_carga";
import { TransporteContainer } from "./transporte_containers";


export function BannerOperacoes() {
  return (
    <>
      <section
        className="service-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <a href="/" className="back-link">← Voltar para Home</a>
            <h1>
              <span className="highlight-yellow">Nossas </span>{" "}
              <span className="highlight-white">Operações</span>
            </h1>
          </div>
        </div>
      </section>
      <ServicoCarga/>
      <TransporteContainer/>
      <ContactSection/>
    </>
  );
}
