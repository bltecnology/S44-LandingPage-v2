import "../../styles/fourth-section.css"; // Certifique-se de importar o CSS corretamente
import caminhao from "../../assets/fourth-section-caminhao-estrada.png"; // Caminho da imagem que você forneceu
import { Link } from "react-router-dom";

export function FourthSection() {
  return (
    <section className="fourth-section">
      <div className="section-container">
        <div className="image-container">
          <img src={caminhao} alt="Caminhão na estrada" className="truck-image" />
        </div>
        <div className="text-content">
          <h3 className="highlight-box">Trânsito Aduaneiro</h3>
          <p>
            Realizamos a movimentação de mercadorias sob controle da Receita Federal, garantindo que as cargas
            sejam transportadas de um ponto para outro sem a cobrança de tributos até chegarem ao destino final. Esse
            serviço assegura que todas as exigências legais sejam cumpridas, mantendo a conformidade com as normas
            fiscais e aduaneiras, facilitando o transporte internacional e a movimentação interna de mercadorias.
          </p>
          <Link to="#" className="btn">
            Solicite nossos serviços
          </Link>
        </div>
      </div>
    </section>
  );
}
