import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";

import { ContactSection } from "../home/contact-section";
import { ConteudoCapacidade } from "./capacidade";


export function ArmazenamentoBanner() {
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
              <span className="highlight-yellow">Capacidade de </span>{" "}
              <span className="highlight-white">Armazenagem</span>
            </h1>
          </div>
        </div>
      </section>
        <ConteudoCapacidade />
      <ContactSection/>
    </>
  );
}
