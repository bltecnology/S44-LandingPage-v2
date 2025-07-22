import "../../styles/quemsomos.css";
import banner from "../../assets/banner_principal.png";
import caminhao_header from "../../assets/banner_quemsomos.png";
import driver from "../../assets/Group_101.png";
import imgleft from "../../assets/Group_102.png";
import imgright from "../../assets/Group_103.png";
import {
  FaStar,
  FaShieldAlt,
  FaBolt,
  FaLightbulb,
  FaArrowRight,
  FaFileInvoice,
  FaBoxOpen,
  FaWineGlassAlt,
  FaExclamationTriangle,
  FaWarehouse,
} from "react-icons/fa";
import caminhao from "../../assets/Group_100.png";

export const QuemSomos = () => {
  return (
    <>
      <section
        className="section-quemsomos"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div>
          <span>Saiba mais sobre a S44!</span>
          <h1>
            <span className="highlight">Quem</span> Somos?
          </h1>
        </div>
        <div className="image-wrapper">
          <img src={caminhao_header} alt="Caminhão" />
        </div>
      </section>

      <section className="values">
        <h2>
          Quais são <span>Nossos Valores</span>
        </h2>
        <div className="values-container">
          <div className="value-card highlight">
            <div className="value-icon">
              <FaStar />
            </div>
            <h3 className="value-title">Compromisso com a Qualidade</h3>
            <p className="value-description">
              Buscamos sempre oferecer o melhor serviço, com atenção aos
              detalhes e foco na excelência.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaShieldAlt />
            </div>
            <h3 className="value-title">Segurança em Primeiro Lugar</h3>
            <p className="value-description">
              A segurança das operações e das cargas é a nossa prioridade.
              Garantimos que todos os processos sejam feitos com rigor e
              conformidade.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaBolt />
            </div>
            <h3 className="value-title">Agilidade e Eficiência</h3>
            <p className="value-description">
              Trabalhamos para garantir que suas entregas sejam feitas dentro do
              prazo e com máxima eficiência.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">
              <FaLightbulb />
            </div>
            <h3 className="value-title">Inovação</h3>
            <p className="value-description">
              Investimos constantemente em novas tecnologias para aprimorar
              nossos processos e oferecer soluções mais rápidas e seguras.
            </p>
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-left">
          <h2>
            Qual é a nossa <span>Visão?</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac vitae mi turpis sapien.
            Mi neque convallis augue et mi. Aliquet elit nulla enim a a tempus
            ut vitae. Sed non lacinia lacus amet eget nisi sit nibh hac. Donec
            egestas a id facilisis a ea.
          </p>
          <p>
            Quis arcu massa arcu ipsum turpis dictum enim id. Sit pulvinar nam
            varius adipiscing aliquam risus. Montes scelerisque cum dignissim
            non sit sapien purus sit morbi. Id nisl facilisis justo urna risus.
            Gravida eget adipiscing suspendisse odio eget. Enim commodo ut
            feugiat elit fermentum blandit arcu. Eu vel tortor consectetur
            scelerisque aliquet vestibulum volutpat nunc nulla. Interdum congue
            gravida eu tortor amet.
          </p>
          <a href="/contato" className="btn-contact">
            Entre em Contato conosco <FaArrowRight />
          </a>
        </div>
        <img
          src={caminhao}
          className="img-right"
          alt="Caminhão de transporte"
        />
      </section>

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

      <section className="history" id="historia">
        <figure className="side-img side-img--left">
          <img src={imgleft} />
        </figure>

        <figure className="side-img side-img--right">
          <img src={imgright} />
        </figure>

        <div className="history__inner">
          <span className="history__index">03</span>
          <h2 className="history__title">Nossa História</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur. Non ac sapien morbi nascetur
            commodo tempor vel neque integer. Felis gravida habitant lectus
            neque molestie suscipit leo elementum. Consectetur sollicitudin
            risus sagittis imperdiet velit dictum sit quis. Venenatis nulla
            egestas tristique arcu.
          </p>

          <p>
            Aliquam in. Lacus et viverra hac turpis ornare. Pellentesque lacus
            in rhoncus quam sodales urna et. Ultrices metus tellus at gravida
            blandit volutpat mattis. At aliquam adipiscing faucibus aliquet.
            Tempus massa proin fermentum sed purus diam arcu sapien. Commodo
            enim proin justo ut odio lectus duis eget interdum. Amet id felis
            urna metus sit natoque tristique urna. Platea nisl semper arcu
            aliquam. Est interdum vitae lacus lacus. In scelerisque scelerisque
            pellentesque nibh lobortis.
          </p>

          <a href="#contato" className="btn btn--dark mt-5">
            Entre em Contato conosco →
          </a>
        </div>
      </section>

      <section className="services" id="servicos">
        <div className="services__head">
          <span className="services__subtitle">Conheça também</span>
          <h2 className="services__title">Nossos Serviços</h2>
        </div>

        <div className="services__grid">
          <a href="#">
            <article className="service-card service-card--featured">
              <div className="service-card__icon">
                <FaShieldAlt size={32} />
              </div>
              <h3 className="service-card__title">Trânsito Aduaneiro</h3>
              <p className="service-card__text">
                Transportamos mercadorias sob controle da Receita Federal,
                garantindo a isenção de tributos até o destino final. Cumprimos
                todas as exigências legais, facilitando o transporte
                internacional e a movimentação interna.
              </p>
            </article>
          </a>

          <a href="#">
            <article className="service-card">
              <div className="service-card__icon">
                <FaFileInvoice size={32} />
              </div>
              <h3 className="service-card__title">Entrega de DI's</h3>
              <p className="service-card__text">
                A S44 garante a entrega correta das DI's para a liberação das
                mercadorias na alfândega. Facilitamos o processo de importação,
                eliminando burocracias nos estágios seguintes.
              </p>
            </article>
          </a>

          <a href="#">
            <article className="service-card">
              <div className="service-card__icon">
                <FaBoxOpen size={32} />
              </div>
              <h3 className="service-card__title">Coletas de Exportação</h3>
              <p className="service-card__text">
                Realizamos a coleta de mercadorias para exportação, cuidando de
                toda a logística e documentação necessária. Garantimos o
                transporte até portos ou aeroportos, respeitando prazos e
                regulamentações internacionais.
              </p>
            </article>
          </a>

          <a href="#">
            <article className="service-card">
              <div className="service-card__icon">
                <FaWineGlassAlt size={32} />
              </div>
              <h3 className="service-card__title">
                Transporte de cargas Sensíveis
              </h3>
              <p className="service-card__text">
                Oferecemos soluções especializadas para o transporte de cargas
                delicadas, como eletrônicos e equipamentos médicos. Garantimos
                segurança no manuseio, embalagem e transporte, assegurando a
                integridade das mercadorias.
              </p>
            </article>
          </a>

          <a href="#">
            <article className="service-card">
              <div className="service-card__icon">
                <FaExclamationTriangle size={32} />
              </div>
              <h3 className="service-card__title">
                Transporte de cargas perigosas
              </h3>
              <p className="service-card__text">
                A S44 transporta cargas perigosas com segurança, seguindo
                protocolos e regulamentações internacionais. Utilizamos
                equipamentos adequados e motoristas treinados para garantir a
                segurança da carga e do meio ambiente.
              </p>
            </article>
          </a>

          <a href="#">
            <article className="service-card">
              <div className="service-card__icon">
                <FaWarehouse size={32} />
              </div>
              <h3 className="service-card__title">Capacidade de Armazenagem</h3>
              <p className="service-card__text">
                A S44 possui estrutura própria de armazenagem, garantindo
                controle, agilidade e segurança no processo logístico. Com
                galpão exclusivo e equipe qualificada, otimiza o fluxo de
                entregas e reduz custos com terceiros.
              </p>
            </article>
          </a>
        </div>

        <div className="services__cta">
          <a href="#servicos-detalhes" className="btn btn--dark">
            Saiba mais sobre →
          </a>
        </div>
      </section>
    </>
  );
};
