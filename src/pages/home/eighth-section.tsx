import "../../styles/eighth-section.css";
import coletas_exportacao from "../../assets/eighth-section-caminhao.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";


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
                    <div className="fifth-btn">
                        <a href="/banner-cargas-perigosas" className="eighth-btn">Solicite nossos serviços ↗</a>
                    </div>
                </div>
            </div>

            <div className="eight-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="eight-triangle-image" />
            </div>
        </section>
    );
}