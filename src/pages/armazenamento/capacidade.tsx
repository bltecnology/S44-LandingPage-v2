import "../../styles/services/conteudo-transito.css";
import mosaicoImage from "../../assets/6.png"; 

export function ConteudoCapacidade() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">Como é a Capacidade de Armazenagem da S44?</span>
        </h2>
        <p>
          A capacidade de armazenagem da S44 Logística é adaptável e eficiente, com espaços bem organizados para diferentes tipos de mercadorias e volumes. A empresa garante controle preciso de estoques e oferece serviços de crossdocking, agilizando o fluxo de mercadorias e reduzindo custos. Com tecnologia avançada e equipe treinada, a S44 proporciona soluções logísticas personalizadas e seguras.
        </p>
        <button
          className="customs-button"
          onClick={() => (window.location.href = "/contato")}
        >
          Entre em Contato conosco →
        </button>
      </div>

      <img
        src={mosaicoImage}
        alt="Caminhões e ícone"
        className="customs-mosaic"
      />

    </section>
  );
}
