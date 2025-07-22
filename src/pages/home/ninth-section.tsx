import "../../styles/ninth-section.css";
import coletas_exportacao from "../../assets/ninth-section-image.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function NinthSection() {
    return (
        <section className="ninth-section">
            <div className="ninth-section-container">
                <div className="ninth-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="ninth-truck-image" />
                </div>

                <div className="ninth-text-content">
                    <h3 className="ninth-highlight-box">Capacidade de Armazenagem</h3>
                    <p className="ninth-description">
                        A S44 conta com estrutura própria de armazenagem, com galpão exclusivo e totalmente preparado para receber,
                        organizar e proteger cargas de diferentes perfis. Ter um espaço dedicado garante mais controle, agilidade e
                        segurança no processo logístico. Com ambiente adequado e equipe qualificada, é possível manter a organização
                        ideal das mercadorias, evitando perdas, extravios e otimizando o fluxo de entregas. Além disso, a armazenagem
                        própria permite economia com terceiros, maior integração com os serviços de transporte e uma operação mais eficiente do início ao fim.
                    </p>
                    <div>
                        <a href="/banner-armazenamento" className="ninth-btn">Solicite nossos serviços ↗</a>
                    </div>
                </div>
            </div>

            <div className="ninth-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="ninth-triangle-image" />
            </div>
        </section>
    );
}