import "../../styles/nossasoperacoes/servicos-cargas.css";
import mosaicoImage from "../../assets/9.jpg";

import { FiRefreshCcw } from "react-icons/fi";
import { FaUsers, FaGlobeAmericas } from "react-icons/fa";  

export function TransporteContainer() {
  return (
    <section className="carga-lotacao">
  <div className="main-content invertida">
    <div className="image-column">
      <img src={mosaicoImage} alt="Mosaico de transporte" />
    </div>

    <div className="text-column">
      <h2 className="title">
        <span className="number">02</span> Transporte  <strong>de containers</strong>
      </h2>
      <p className="description">
        A S44 oferece soluções especializadas no transporte de containers, garantindo segurança e eficiência para o transporte de mercadorias por grandes distâncias. Com nossa frota equipada, proporcionamos logística de ponta para empresas que precisam de transporte de carga internacional ou doméstica.      </p>

      <div className="benefits">
        <h3>O que oferecemos:</h3>
        <ul>
          <li><strong>Transporte de Containers:</strong> Transporte seguro de containers de 20’, 40’ e outros tipos..</li>
          <li><strong>Carga e Descarga:</strong> Serviços completos de carga e descarga com equipamentos especializados.</li>
          <li><strong>Atendimento Ágil:</strong> Planejamento de rotas, otimização de tempo e segurança garantida durante todo o processo.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="ideal-para">
    <p className="ideal-title">Ideal para:</p>
    <div className="ideal-options">
      <div className="ideal-box">
        <div className="icon-text">
          <FiRefreshCcw size={24} />
          <span>Importação e Exportação</span>
        </div>
      </div>
      <div className="ideal-box destaque">
        <div className="icon-text">
          <FaUsers size={24} />
          <span>Empresas com alto volume de carga</span>
        </div>
      </div>
      <div className="ideal-box">
        <div className="icon-text">
          <FaGlobeAmericas size={24} />
          <span>Transporte de itens que necessitam de cuidado especial</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}