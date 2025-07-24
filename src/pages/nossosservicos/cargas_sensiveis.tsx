import "../../styles/styles_nossosServicos/cargas_sensiveis.css";
import coletas_exportacao from "../../assets/seventh-section-caminhao.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function CargasSensiveis() {
    return (
        <section className="sensivel-section">
            <div className="sensivel-section-container">
                <div className="sensivel-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="sensivel-truck-image" />
                </div>

                <div className="sensivel-text-content">
                    <h3 className="sensivel-highlight-box">Transporte de Cargas Sensíveis</h3>
                    <p className="sensivel-description">
                        Com expertise no transporte de cargas delicadas, oferecemos soluções especializadas para o transporte de mercadorias sensíveis.
                        Cuidamos de itens como produtos eletrônicos, equipamentos médicos, alimentos perecíveis e outros produtos de alto valor ou fragilidade.
                        Garantimos que as mercadorias sejam manuseadas, embaladas e transportadas com o máximo de segurança, evitando danos e assegurando sua integridade durante todo o trajeto.
                    </p>
                    <div>
                        <a href="/banner-carga" className="sensivel-btn">Saiba mais sobre Transporte de Cargas Sensíveis ↗</a>
                    </div>
                </div>
            </div>

            <div className="sensivel-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="sensivel-triangle-image" />
            </div>
        </section>
    );
}
