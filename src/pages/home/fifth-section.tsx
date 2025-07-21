import "../../styles/fifth-section.css";
import caminhao from "../../assets/fifth-section-caminhao.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";


export function FifthSection() {
    return (
        <section className="fifth-section">
            <div className="fifth-section-container">
                <div className="fifth-image-container">
                    <img src={caminhao} alt="Caminhão na estrada" className="fifth-truck-image" />
                </div>

                <div className="fifth-text-content">
                    <h3 className="fifth-highlight-box">Entrega de DI's (Declaração de Importação)</h3>
                    <p className="fifth-description">
                        A S44 oferece o serviço de entrega de DI's, essencial para a regularização de mercadorias importadas.
                        Garantimos que as declarações de importação sejam entregues corre     tamente aos órgãos responsáveis,
                        cumprindo todos os procedimentos necessários para a liberação das mercadorias na alfândega.
                        Com isso, facilitamos o processo de importação e garantimos que os produtos possam seguir para os próximos estágios do transporte sem burocracia.
                    </p>
                    <div className="fifth-btn">
                        <a href="/entrega" className="eighth-btn">Solicite nossos serviços ↗</a>
                    </div>
                </div>
            </div>

            <div className="fifth-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="fifth-triangle-image" />
            </div>
        </section>
    );
}