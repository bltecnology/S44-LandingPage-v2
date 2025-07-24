import "../../styles/styles_nossosServicos/service_section.css";
import truckImage from "../../assets/imagens_nossosServicos/nossos_servicos.png"; 
import banner from "../../assets/nossos-servicos.png"; 

export function ServicesSection() {
  return (
    <section
      style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}
    >
      <div className="section-container">
        <div>
          <span> Saiba mais sobre</span>
          <h1>
            Nossos <span className="highlight">serviços</span>
          </h1>
          <p>
            Na S44, oferecemos uma gama completa de soluções logísticas, projetadas para atender às necessidades específicas de cada cliente. Com uma plataforma integrada e serviços especializados, garantimos eficiência, segurança e agilidade em todas as etapas do transporte e movimentação de mercadorias, desde a coleta até a entrega final.
          </p>
        </div>

        <div className="tucker-image-wrapper" style={{ alignSelf: "flex-start" }}>
          <img src={truckImage} alt="Caminhão" />
        </div>
      </div>
    </section>
  );
}
