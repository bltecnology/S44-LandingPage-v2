import "../../styles/styles_nossosServicos/coletas.css";
import coletas_exportacao from "../../assets/sixth-section-image.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function Coletas() {
    return (
        <section className="coleta-section">
            <div className="coleta-section-container">
                <div className="coleta-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="coleta-truck-image" />
                </div>

                <div className="coleta-text-content">
                    <h3 className="coleta-highlight-box">Coletas de Exportação</h3>
                    <p className="coleta-description">
                        Oferecemos um serviço especializado de coleta de mercadorias para exportação, com foco em atender às necessidades específicas de nossos clientes.
                        Coletamos as mercadorias no local indicado e cuidamos de todo o processo logístico, incluindo o preparo da documentação necessária para exportação
                        e o transporte para os portos ou aeroportos, sempre respeitando os prazos e as regulamentações do comércio internacional.
                    </p>
                     <div>
                        <a href="/banner-exportacao" className="coleta-btn">Saiba mais sobre Coletas de Exportação ↗</a>
                    </div>
                </div>
            </div>

            <div className="coleta-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="coleta-triangle-image" />
            </div>
        </section>
    );
}
