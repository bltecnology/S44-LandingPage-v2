import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";

import { ContactSection } from "../home/contact-section";
import { ConteudoExportacao } from "./coletas";
import { ContExportacao } from "./beneficios";


export function ExportacaoBanner() {
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
              <span className="highlight-yellow">Coletas de </span>{" "}
              <span className="highlight-white">Exportação</span>
            </h1>
          </div>
        </div>
      </section>
      <ConteudoExportacao />
      <ContExportacao />
      <ContactSection/>
    </>
  );
}
