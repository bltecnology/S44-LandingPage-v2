import "../../styles/eighth-section.css";
import coletas_exportacao from "../../assets/eighth-section-caminhao.png";
import { Link } from "react-router-dom";

export function EighthSection() {
    return (
        <section className="eighth-section">
            <div className="eighth-section-container">
                <div className="eighth-image-container">
                    <img src={coletas_exportacao} alt="Caminhão na estrada" className="eighth-truck-image" />
                </div>

                <div className="eighth-text-content">
                    <h3 className="eighth-highlight-box">Transporte de Cargas Perigosas</h3>
                    <p className="eighth-description">
                        A S44 é especializada no transporte de cargas perigosas, como produtos químicos, inflamáveis,
                        tóxicos e outros materiais que exigem manuseio cuidadoso e conformidade com regulamentos específicos.
                        Seguimos todos os protocolos de segurança e regulamentação internacional para garantir que o transporte
                        seja realizado de forma segura, minimizando riscos e garantindo a segurança das pessoas, da carga e do meio ambiente.
                        Utilizamos equipamentos adequados e motoristas treinados para garantir a excelência no serviço.
                    </p>
                    <Link to="#" className="eighth-btn">
                        Solicite nossos serviços ↗
                    </Link>
                </div>
            </div>
        </section>
    );
}