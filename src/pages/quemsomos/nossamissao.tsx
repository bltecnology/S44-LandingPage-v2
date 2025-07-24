import "../../styles/quemsomos/nossamissao.css";
import driver from "../../assets/missao.png";
import { FaArrowRight } from "react-icons/fa";

export const NossaMissao = () => {
  return (
    <section className="mission-section">
      <div className="mission-left">
        <div className="decor-rect"></div>
        <div className="image-main">
          <img src={driver} alt="Caminhão com motorista" />
        </div>
      </div>

      <div className="mission-right">
        <h2>
          <span className="section-num">02</span>
          Qual é a nossa Missão?
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Non ac sapien morbi nascetur
          commodo tempor vel neque integer. Felis gravida habitant lectus
          neque molestie suscipit leo elementum. Consectetur sollicitudin
          risus sagittis imperdiet velit dictum sit quis.
        </p>
        <p>
          Venenatis nulla egestas tristique arcu aliquam in. Lacus et viverra
          hac turpis ornare. Pellentesque lacus in rhoncus quam sodales urna
          et. Ultrices metus tellus at gravida blandit volutpat mattis. At
          aliquam adipiscing faucibus aliquet.
        </p>
        <a href="/contato" className="btn-contact-dark">
          Entre em Contato conosco <FaArrowRight />
        </a>
      </div>
    </section>
  );
};
