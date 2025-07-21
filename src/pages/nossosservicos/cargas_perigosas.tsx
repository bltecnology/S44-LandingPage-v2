import "../../styles/styles_nossosServicos/cargas_perigosas.css";
import coletas_exportacao from "../../assets/eighth-section-caminhao.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";
import { Link } from "react-router-dom";

export function CargasPerigosas() {
    return (
        <section className="perigosa-section">
            <div className="perigosa-section-container">
                <div className="perigosa-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="perigosa-truck-image" />
                </div>

                <div className="perigosa-text-content">
                    <h3 className="perigosa-highlight-box">Transporte de Cargas Perigosas</h3>
                    <p className="perigosa-description">
                        A S44 é especializada no transporte de cargas perigosas, como produtos químicos, inflamáveis,
                        tóxicos e outros materiais que exigem manuseio cuidadoso e conformidade com regulamentos específicos.
                        Seguimos todos os protocolos de segurança e regulamentação internacional para garantir que o transporte
                        seja realizado de forma segura, minimizando riscos e garantindo a segurança das pessoas, da carga e do meio ambiente.
                        Utilizamos equipamentos adequados e motoristas treinados para garantir a excelência no serviço.
                    </p>
                    <Link to="#" className="perigosa-btn">
                        Saiba mais sobre Transporte de cargas perigosas ↗
                    </Link>
                </div>
            </div>

            <div className="perigosa-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="perigosa-triangle-image" />
            </div>
        </section>
    );
}
