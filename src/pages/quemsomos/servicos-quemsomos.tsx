// src/components/Servicos.tsx
import {
  FaShieldAlt,
  FaFileInvoice,
  FaBoxOpen,
  FaWineGlassAlt,
  FaExclamationTriangle,
  FaWarehouse,
} from "react-icons/fa";
import "../../styles/quemsomos/servicos-quemsomos.css";

export const ServicosQuemsomos = () => {
  return (
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
              controle, agilidade e segurança no processo logístico. Com galpão
              exclusivo e equipe qualificada, otimiza o fluxo de entregas e
              reduz custos com terceiros.
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
  );
};
