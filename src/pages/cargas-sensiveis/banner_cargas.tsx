import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/novo-banner.png";

import { ContactSection } from "../home/contact-section";
import { ConteudoExportacao } from "./conteudo-cargas";
import { ContCargas } from "./beneficios-cargas";

export function CargasBanner() {
  return (
    <>
      <section
        className="service-banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="banner-overlay">
          <div className="banner-content">
            <a href="/servicos" className="back-link">← Voltar para serviços</a>
            <h1>
              <span className="highlight-yellow">Transporte de </span>{" "}
              <span className="highlight-white">Cargas sensíveis</span>
            </h1>
          </div>
        </div>
      </section>
      <ConteudoExportacao />
      <ContCargas />
      <ContactSection/>
    </>
  );
}
