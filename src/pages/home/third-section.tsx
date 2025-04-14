import truckImage from "../../assets/third-section-caminhao-corrigido.png";
import bannerImage from "../../assets/third-section-banner.png";
import "../../styles/third-section.css";
import { Check } from "lucide-react";

export function ThirdSection() {
  return (
    <section className="third-section">
      <div className="bg-section" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="text-content">
          <h3 className="highlight-box">
            O Que é Possível Transportar Conosco?
          </h3>

          <ul className="cargo-list">
            <li>
              <strong>Cargas Secas:</strong>
              <div className="container-sub-list">
              <span>
                Produtos não perecíveis como materiais de construção e
                eletrodomésticos.
              </span>
              <Check size={28} />
              </div>
            </li>
            <li>
              <strong>Cargas Perigosas:</strong>
              <div className="container-sub-list">
              <span>
                Produtos químicos e inflamáveis que requerem cuidados especiais
              </span>
              <Check size={28} />
              </div>
            </li>
            <li>
              <strong>Cargas de Grande Porte:</strong>
              <div className="container-sub-list">
              <span>Maquinários pesados e Equipamentos Industriais</span>
              <Check size={28} />
              </div>
            </li>
            <li>
              <strong>Cargas Fracionadas:</strong>
              <div className="container-sub-list">
              <span>
                Pequenas quantidades de mercadorias consolidadas para eficiência
              </span>
              <Check size={28} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="truck-image" style={{ backgroundImage: `url(${truckImage})` }}></div>
    </section>
  );
}
