// src/components/CustomsTransit.tsx
import "../../styles/services/conteudo-transito.css";

import truck1 from "../../assets/caminhao_menor.png"; // ← imagem do caminhão branco (canto superior direito)
import truck2 from "../../assets/caminhao_movimento.png"; // ← imagem do caminhão em movimento (inferior direito)
import iconArrow from "../../assets/seta.png"; // ← ícone da seta branca com fundo amarelo

export function ContTransito() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">O que é o trânsito Aduaneiro?</span>
        </h2>
        <p>
          O trânsito aduaneiro é um procedimento que possibilita o transporte de
          mercadorias entre diferentes países ou regiões aduaneiras com a
          suspensão de tributos e impostos enquanto as mercadorias estão em
          trânsito. Isso facilita o comércio internacional, permitindo que as
          cargas transitem por diferentes áreas antes de serem submetidas à
          fiscalização e ao pagamento de impostos no destino final. Durante o
          processo, as mercadorias podem passar por pontos de controle e
          armazenagem, mas os impostos são adiados até que a carga chegue ao
          destino ou a uma zona de livre comércio. Esse serviço é essencial para
          otimizar a logística internacional, reduzir custos operacionais e
          garantir o cumprimento das exigências legais em todo o percurso.
        </p>
        <button className="customs-button">Entre em Contato conosco →</button>
      </div>

      <div className="customs-images">
        <img src={truck1} alt="Caminhões estacionados" className="img-small" />
        <img src={iconArrow} alt="Ícone seta" className="img-icon" />
        <img src={truck2} alt="Caminhão em movimento" className="img-large" />
      </div>
    </section>
  );
}
