import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";
import { ContactSection } from "../home/contact-section";
import { Atuacao } from "./atuacao";
import { Parceria } from "./parceria";



export function BannerAtendimento() {
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
              <span className="highlight-yellow">Nosso </span>{" "}
              <span className="highlight-white">Atendimento</span>
            </h1>
          </div>
        </div>
      </section>
      <Atuacao/>
      <Parceria/>
      <ContactSection/>
    </>
  );
}
