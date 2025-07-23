import "../../styles/quemsomos_.css";
import bannerQuemSomos from "../../assets/caminhao-quem-somos.png"; // <- imagem única com vetores + caminhões

export function QuemSomos() {
  return (
    <section className="quem-somos-section">
      <div className="overlay" />
      <div className="quem-somos-content">
        <span className="subtitulo">Saiba mais sobre a S44!</span>
        <h1 className="titulo">
          <span className="destaque-amarelo">Quem</span> <span className="destaque-branco">Somos?</span>
        </h1>

        <div className="imagem-caminhoes">
          <img src={bannerQuemSomos} alt="Caminhões S44 com vetores" />
        </div>

        <a href="#sobre" className="btn-conheca">Conheça melhor a S44!</a>

        <p className="descricao">
          Na S44 Logística e Transporte, somos especializados em oferecer soluções completas e eficientes para o transporte de cargas. Com mais de 10 anos de experiência no mercado, nossa missão é proporcionar aos nossos clientes a segurança e a agilidade necessárias para que seus produtos cheguem ao destino com pontualidade e confiança.
        </p>
      </div>
    </section>
  );
}
