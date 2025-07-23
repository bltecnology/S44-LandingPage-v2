import "../../styles/services/conteudo-transito.css";
import mosaicoImage from "../../assets/5.png"; 

export function ConteudoCargasPerigosas() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">Como é o transporte de cargas Perigosas da S44?</span>
        </h2>
        <p>
          O transporte de cargas perigosas pela S44 Logística é realizado com foco total na segurança e conformidade com as normas internacionais. A empresa utiliza veículos especializados e equipamentos de segurança adequados para o transporte de mercadorias que oferecem riscos à saúde, segurança ou ao meio ambiente. As cargas são devidamente embaladas e identificadas conforme as regulamentações, e o processo é monitorado durante todo o trajeto. Além disso, a S44 conta com uma equipe treinada para manuseio e transporte de materiais perigosos, garantindo o cumprimento de todas as exigências legais e a proteção das mercadorias e das pessoas envolvidas no transporte.
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
