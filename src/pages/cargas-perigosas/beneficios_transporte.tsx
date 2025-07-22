import "../../styles/services/maisCont.css";

import { FaExclamationTriangle ,FaUserCog, FaRegStar, FaCheckCircle } from "react-icons/fa";

export function ContCargas() {
  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
        <div className="benefits-column">
          <div className="benefit-card yellow">
            <FaExclamationTriangle  size={24} />
            <span>Segurança e Integridade das Mercadorias</span>
          </div>
          <div className="benefit-card white">
            <FaUserCog size={24} />
            <span>Equipe Especializada e Treinada</span>
          </div>
        </div>

        <div className="benefits-center">
          <h2>
            <span className="number">02</span> Benefícios do Transporte de Cargas perigosas S44
          </h2>
          <p>
            O transporte de cargas perigosas é um serviço essencial para garantir a movimentação segura de mercadorias que apresentam riscos à saúde, segurança ou ao meio ambiente, como produtos químicos, gases e materiais radioativos. Esse processo oferece benefícios como:
          </p>
        </div>

        <div className="benefits-column">
          <div className="benefit-card white">
            <FaRegStar  size={24} />
            <span>Soluções Personalizadas e Flexibilidade</span>
          </div>
          <div className="benefit-card yellow">
            <FaCheckCircle  size={24} />
            <span>Cumprimento Rigoroso das Normas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
