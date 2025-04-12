import truckImage from "../../assets/third-section-caminhao-amarelo.png";
import bannerImage from "../../assets/third-section-banner.png";
import "../../styles/third-section.css";
import { Check } from "lucide-react";

export function ThirdSection() {
  return (
    <section className="third-section">
      <div
        className="bg-section"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="text-content">
          <h3 className="highlight-box">
            O Que é Possível Transportar Conosco?
          </h3>

          <ul className="cargo-list">
            <li>
              <strong>Cargas Secas:</strong>
              <span>
                Produtos não perecíveis como materiais de construção e
                eletrodomésticos.
              </span>
              <Check size={16} />
            </li>
            <li>
              <strong>Cargas Perigosas:</strong>
              <span>
                Produtos químicos e inflamáveis que requerem cuidados especiais
              </span>
              <Check size={16} />
            </li>
            <li>
              <strong>Cargas de Grande Porte:</strong>
              <span>Maquinários pesados e Equipamentos Industriais</span>
              <Check size={16} />
            </li>
            <li>
              <strong>Cargas Fracionadas:</strong>
              <span>
                Pequenas quantidades de mercadorias consolidadas para eficiência
              </span>
              <Check size={16} />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="truck-image"
        style={{ backgroundImage: `url(${truckImage})` }}
      ></div>
    </section>
  );
}
