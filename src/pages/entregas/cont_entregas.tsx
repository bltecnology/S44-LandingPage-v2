import "../../styles/services/maisCont.css";

import { Truck, Globe, ClipboardCheck, ShieldCheck   } from 'lucide-react'

export function ContEntregas() {
  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
        <div className="benefits-column">
          <div className="benefit-card yellow">
            <Truck size={24} />
            <span>Liberação Rápida de Cargas</span>
          </div>
          <div className="benefit-card white">
            <Globe size={24} />
            <span>Otimização do Comércio Internacional</span>
          </div>
        </div>

        <div className="benefits-center">
          <h2>
            <span className="number">02</span> Benefícios das Entregas de DI’s
          </h2>
          <p>
            A entrega de DI's (Declaração de Importação) é um serviço essencial para a regularização de mercadorias importadas, garantindo que elas sejam formalmente registradas junto à Receita Federal. Esse processo oferece benefícios como:
          </p>
        </div>

        <div className="benefits-column">
          <div className="benefit-card white">
            <ClipboardCheck  size={24} />
            <span>Conformidade Legal</span>
          </div>
          <div className="benefit-card yellow">
            <ShieldCheck  size={24} />
            <span>Segurança no Processo de Importação</span>
          </div>
        </div>
      </div>
    </section>
  );
}
