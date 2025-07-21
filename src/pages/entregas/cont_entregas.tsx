import "../../styles/services/maisCont.css";

import { FaDollarSign } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { BiShieldQuarter } from "react-icons/bi";
import { MdSpeed } from "react-icons/md";

export function ContEntregas() {
  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
        <div className="benefits-column">
          <div className="benefit-card yellow">
            <FaDollarSign size={24} />
            <span>Redução de custos com Tributos e Impostos</span>
          </div>
          <div className="benefit-card white">
            <BsClipboardCheck size={24} />
            <span>Conformidade com as normas aduaneiras</span>
          </div>
        </div>

        <div className="benefits-center">
          <h2>
            <span className="number">02</span> Benefícios do Trânsito aduaneiro
          </h2>
          <p>
            Trânsito Aduaneiro é um serviço essencial para a movimentação de mercadorias entre países,
            permitindo que os produtos transitem de forma rápida e segura enquanto aguardam a liberação fiscal.
            Esse processo oferece benefícios como:
          </p>
        </div>

        <div className="benefits-column">
          <div className="benefit-card white">
            <BiShieldQuarter size={24} />
            <span>Maior controle e segurança no processo logístico</span>
          </div>
          <div className="benefit-card yellow">
            <MdSpeed size={24} />
            <span>Agilidade na liberação de mercadorias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
