import "../../styles/styles_nossosServicos/entregaDis.css";
import caminhao from "../../assets/entregaDis.png";
import trianguloAmarelo from "../../assets/triangulo-amarelo.png";


export function EntregaDis() {
    return (
        <section className="di-section">
            <div className="di-section-container">
                <div className="di-image-container">
                    <img src={caminhao} alt="Caminhão na estrada" className="di-truck-image" />
                </div>

                <div className="di-text-content">
                    <h3 className="di-highlight-box">Entrega de DI's (Declaração de Importação)</h3>
                    <p className="di-description">
                        A S44 oferece o serviço de entrega de DI's, essencial para a regularização de mercadorias importadas.
                        Garantimos que as declarações de importação sejam entregues corretamente aos órgãos responsáveis,
                        cumprindo todos os procedimentos necessários para a liberação das mercadorias na alfândega.
                        Com isso, facilitamos o processo de importação e garantimos que os produtos possam seguir para os próximos estágios do transporte sem burocracia.
                    </p>
                    <div>
                        <a href="/entrega" className="di-btn">Saiba mais sobre Entrega de DI’s ↗</a>
                    </div>
                </div>
            </div>

            <div className="di-triangle-container">
                <img src={trianguloAmarelo} alt="Triângulo Amarelo" className="di-triangle-image" />
            </div>
        </section>
    );
}
