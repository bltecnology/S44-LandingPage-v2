import banner from "../../assets/novo-banner.png";
import caminhao_header from "../../assets/imagem-quem-somos.png";
import "../../styles/quemsomos/quemsomos-header.css";

export const QuemSomosHeader = () => {
  return (
    <section
  className="section-quemsomos"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="topo-quemsomos">
    <span>Saiba mais sobre a S44!</span>
    <h1>
      <span className="highlight">Quem</span> Somos?
    </h1>
  </div>

  <div className="quem-description-box">
    <a className="btn-outline-white">Conheça melhor a S44!</a>
    <p className="quem-description-text">
      Na S44 Logística e Transporte, somos especializados em oferecer soluções
      completas e eficientes para o transporte de cargas. Com mais de 10 anos
      de experiência no mercado, nossa missão é proporcionar aos nossos clientes
      a segurança e a agilidade necessárias para que seus produtos cheguem ao
      destino com pontualidade e confiança.
    </p>
  </div>

  <div className="image-wrapper">
    <img src={caminhao_header} alt="Caminhão" />
  </div>
</section>

  );
};

