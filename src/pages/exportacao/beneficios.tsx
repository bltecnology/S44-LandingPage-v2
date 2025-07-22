import "../../styles/services/maisCont.css";

import { FaAngleDoubleRight, FaDollarSign, FaShieldAlt, FaFileAlt } from "react-icons/fa";

export function ContExportacao() {
  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
        <div className="benefits-column">
          <div className="benefit-card yellow">
            <FaAngleDoubleRight size={24} />
            <span>Agilidade no Processo de Exportação</span>
          </div>
          <div className="benefit-card white">
            <FaDollarSign size={24} />
            <span>Redução de Custos Logísticos</span>
          </div>
        </div>

        <div className="benefits-center">
          <h2>
            <span className="number">02</span> Benefícios das Coletas de Exportação
          </h2>
          <p>
            A coleta de exportação é um serviço essencial para o transporte eficiente de mercadorias destinadas ao comércio internacional, garantindo que as mercadorias sejam retiradas no local de origem e transportadas para os portos ou aeroportos. Esse processo oferece benefícios como:
          </p>
        </div>

        <div className="benefits-column">
          <div className="benefit-card white">
            <FaShieldAlt  size={24} />
            <span>Segurança no Transporte</span>
          </div>
          <div className="benefit-card yellow">
            <FaFileAlt  size={24} />
            <span>Conformidade com as Normas de Exportação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
