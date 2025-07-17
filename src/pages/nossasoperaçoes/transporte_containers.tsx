import "../../styles/nossasoperacoes/servicos-cargas.css";
import mosaicoImage from "../../assets/9.jpg";

// Ícones
import { FaBuilding, FaTruckMoving } from "react-icons/fa";
import { LuMic } from "react-icons/lu";

export function TransporteContainer() {
  return (
    <section className="carga-lotacao">
  <div className="main-content invertida">
    <div className="image-column">
      <img src={mosaicoImage} alt="Mosaico de transporte" />
    </div>

    <div className="text-column">
      <h2 className="title">
        <span className="number">01</span> Serviços de <strong>Carga lotação</strong>
      </h2>
      <p className="description">
        A S44 oferece serviços especializados de carga lotação, proporcionando transporte eficiente e seguro para cargas de grande volume. Com uma frota de caminhões modernos, atendemos empresas que necessitam de soluções rápidas e confiáveis para o transporte de mercadorias de forma exclusiva, com coleta e entrega programada.
      </p>

      <div className="benefits">
        <h3>O que oferecemos:</h3>
        <ul>
          <li><strong>Transporte Exclusivo:</strong> Carga única, sem divisão com outras mercadorias.</li>
          <li><strong>Maior Rapidez e Segurança:</strong> Menor tempo de trânsito e cuidados dedicados com cada carga.</li>
          <li><strong>Atendimento Personalizado:</strong> Planejamento de rotas e horários conforme a sua necessidade.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="ideal-para">
    <p className="ideal-title">Ideal para:</p>
    <div className="ideal-options">
      <div className="ideal-box">
        <div className="icon-text">
          <FaBuilding size={24} />
          <span>Empresas de grande porte</span>
        </div>
      </div>
      <div className="ideal-box destaque">
        <div className="icon-text">
          <FaTruckMoving size={24} />
          <span>Cargas pesadas ou volumosas</span>
        </div>
      </div>
      <div className="ideal-box">
        <div className="icon-text">
          <LuMic size={24} />
          <span>Transporte de itens que necessitam de cuidado especial</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}