import "../../styles/sixth-section.css";
import coletas_exportacao from "../../assets/sixth-section-image.png";
import { Link } from "react-router-dom";

export function SixthSection() {
    return (
        <section className="sixth-section">
            <div className="sixth-section-container">
                <div className="sixth-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="sixth-truck-image" />
                </div>

                <div className="sixth-text-content">
                    <h3 className="sixth-highlight-box">Coletas de Exportação</h3>
                    <p className="sixth-description">
                        Oferecemos um serviço especializado de coleta de mercadorias para exportação, com foco em atender às necessidades específicas de nossos clientes.
                        Coletamos as mercadorias no local indicado e cuidamos de todo o processo logístico, incluindo o preparo da documentação necessária para exportação
                        e o transporte para os portos ou aeroportos, sempre respeitando os prazos e as regulamentações do comércio internacional.
                    </p>
                    <Link to="#" className="sixth-btn">
                        Solicite nossos serviços ↗
                    </Link>
                </div>
            </div>
        </section>
    );
}