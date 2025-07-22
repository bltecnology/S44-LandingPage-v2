import "../../styles/services/conteudo-transito.css";
import mosaicoImage from "../../assets/4.png"; 

export function ConteudoExportacao() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">Como é o transporte de cargas sensíveis da S44?</span>
        </h2>
        <p>
          O transporte de cargas sensíveis na S44 Logística é realizado com cuidado e planejamento, considerando as características específicas de cada mercadoria. As cargas são embaladas com materiais adequados e transportadas em veículos especializados, como caminhões com suspensão a ar e climatizados quando necessário. O processo é monitorado em tempo real, com equipe treinada para garantir segurança e eficiência, além de contar com documentação e seguro adequados para proteção das mercadorias.
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
