import "../../styles/styles_nossosServicos/services.css";
import caminhao from "../../assets/fourth-section-caminhao-estrada.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function Services() {
  return (
    <section className="transito-section">
      <div className="transito-section-header">
        <h2 className="transito-title" style={{ visibility: "hidden" }}>Aqui oferecemos o serviço perfeito para suas necessidades!</h2>
        <p className="transito-subtitle" style={{ visibility: "hidden" }}>
          Explore nossos serviços e escolha a solução que melhor atende aos seus objetivos.
        </p>
      </div>

      <div className="transito-section-container">
        <div className="transito-image-container">
          <img src={caminhao} alt="Caminhão na estrada" className="transito-truck-image" />
        </div>

        <div className="transito-text-content">
          <h3 className="transito-highlight-box">Trânsito Aduaneiro</h3>
          <p className="transito-description">
            Realizamos a movimentação de mercadorias sob controle da Receita Federal, garantindo que as cargas
            sejam transportadas de um ponto para outro sem a cobrança de tributos até chegarem ao destino final. Esse
            serviço assegura que todas as exigências legais sejam cumpridas, mantendo a conformidade com as normas
            fiscais e aduaneiras, facilitando o transporte internacional e a movimentação interna de mercadorias.
          </p>
          <Link to="#" className="transito-btn">
            Saiba mais sobre Trânsito Aduaneiro ↗
          </Link>
        </div>
      </div>

      <div className="transito-triangle-container">
        <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="transito-triangle-image" />
      </div>
    </section>
  );
}
