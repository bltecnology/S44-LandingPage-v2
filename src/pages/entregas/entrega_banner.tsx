import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";

import { ContactSection } from "../home/contact-section";
import { ConteudoEntregas } from "./conteudo_entrega";
import { ContEntregas } from "./cont_entregas";

export function EntregaBanner() {
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
              <span className="highlight-yellow">Entrega de </span>{" "}
              <span className="highlight-white">DI’s</span>
            </h1>
          </div>
        </div>
      </section>
      <ConteudoEntregas />
      <ContEntregas />
      <ContactSection/>
    </>
  );
}
