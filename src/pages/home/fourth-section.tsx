import "../../styles/fourth-section.css";
import caminhao from "../../assets/fourth-section-caminhao-estrada.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";


export function FourthSection() {
  return (
    <section className="fourth-section">
      <div className="fourth-section-header">
        <h2 className="fourth-title">Aqui oferecemos o serviço perfeito para suas necessidades!</h2>
        <p className="fourth-subtitle">
          Explore nossos serviços e escolha a solução que melhor atende aos seus objetivos.
        </p>
      </div>

      <div className="fourth-section-container">
        <div className="fourth-image-container">
          <img src={caminhao} alt="Caminhão na estrada" className="fourth-truck-image" />
        </div>

        <div className="fourth-text-content">
          <h3 className="fourth-highlight-box">Trânsito Aduaneiro</h3>
          <p className="fourth-description">
            Realizamos a movimentação de mercadorias sob controle da Receita Federal, garantindo que as cargas
            sejam transportadas de um ponto para outro sem a cobrança de tributos até chegarem ao destino final. Esse
            serviço assegura que todas as exigências legais sejam cumpridas, mantendo a conformidade com as normas
            fiscais e aduaneiras, facilitando o transporte internacional e a movimentação interna de mercadorias.
          </p>
          <div className="fourth-btn">
            <a href="/service" className="btn-servicos">Solicite nossos serviços ↗</a>
          </div>
        </div>
      </div>

      <div className="fourth-triangle-container">
          <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="fourth-triangle-image" />
        </div>
    </section>
  );
}
