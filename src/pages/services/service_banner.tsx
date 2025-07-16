import "../../styles/services/service-banner.css";
import backgroundImage from "../../assets/banners.png";
import { ContTransito } from "./conteudo_transito";
import { MaisCont } from "./maisCont";

export function ServiceBanner() {
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
            <span className="highlight-yellow">Trânsito</span>{" "}
            <span className="highlight-white">Aduaneiro</span>
          </h1>
        </div>
      </div>
    </section>
    <ContTransito/>
    <MaisCont/>
    </>
  );
}
