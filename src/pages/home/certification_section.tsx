import "../../styles/certification_section.css";
import centerTruck from "../../assets/certificacoes-atualizadas.png";

export function CertificationsSection() {
  return (
    <section className="certifications-section">
      <div className="container">
        <div className="textLeft">
          <div className="item">
            <span className="number">01</span>
            <p>Frota com 120 veículos entre Sideres, Baús e Contêiner 100% rastreados.</p>
          </div>
          <div className="item">
            <span className="number">02</span>
            <p>Motoristas treinados, cadastrados nas principais gerenciadoras de risco.</p>
          </div>
        </div>

        <div className="centerContent">
          <img src={centerTruck} alt="Teste Caminhão" className="truckImage" />
        </div>

        <div className="textRight">
          <div className="item">
            <span className="number">03</span>
            <p>Licenças ANVISA de Cosméticos, Saneantes e Alimentício.</p>
          </div>
          <div className="item">
            <span className="number">04</span>
            <p>
              Atendimento de operações de Inbound, Outbound, Distribuição, Transferência,
              Importação e Exportação, DTA e Frete Dedicado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
