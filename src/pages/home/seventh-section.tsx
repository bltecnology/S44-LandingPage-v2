import "../../styles/seventh-section.css";
import coletas_exportacao from "../../assets/seventh-section-caminhao.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function SeventhSection() {
    return (
        <section className="seventh-section">
            <div className="seventh-section-container">
                <div className="seventh-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="seventh-truck-image" />
                </div>

                <div className="seventh-text-content">
                    <h3 className="seventh-highlight-box">Transporte de Cargas Sensíveis</h3>
                    <p className="seventh-description">
                        Com expertise no transporte de cargas delicadas, oferecemos soluções especializadas para o transporte de mercadorias sensíveis.
                        Cuidamos de itens como produtos eletrônicos, equipamentos médicos, alimentos perecíveis e outros produtos de alto valor ou fragilidade.
                        Garantimos que as mercadorias sejam manuseadas, embaladas e transportadas com o máximo de segurança, evitando danos e assegurando sua integridade durante todo o trajeto.
                    </p>
                    <Link to="#" className="seventh-btn">
                        Solicite nossos serviços ↗
                    </Link>
                </div>
            </div>

            <div className="seventh-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="seventh-triangle-image" />
            </div>
        </section>
    );
}