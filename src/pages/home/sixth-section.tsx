import "../../styles/sixth-section.css";
import coletas_exportacao from "../../assets/sixth-section-image.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";

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
                    <div className="fifth-btn">
                        <a href="/banner-exportacao" className="eighth-btn">Solicite nossos serviços ↗</a>
                    </div>
                </div>
            </div>

            <div className="sixth-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="sixth-triangle-image" />
            </div>
        </section>
    );
}
