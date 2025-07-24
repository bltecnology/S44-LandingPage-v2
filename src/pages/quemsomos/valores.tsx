// src/components/Valores.tsx
import { FaStar, FaShieldAlt, FaBolt, FaLightbulb } from "react-icons/fa";
import "../../styles/quemsomos/valores.css"

export const Valores = () => {
  return (
    <section className="values">
      <h2>
        Quais são <span>Nossos Valores</span>
      </h2>
      <div className="values-container">
        <div className="value-card highlight">
          <div className="value-icon">
            <FaStar />
          </div>
          <h3 className="value-title">Compromisso com a Qualidade</h3>
          <p className="value-description">
            Buscamos sempre oferecer o melhor serviço, com atenção aos
            detalhes e foco na excelência.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <FaShieldAlt />
          </div>
          <h3 className="value-title">Segurança em Primeiro Lugar</h3>
          <p className="value-description">
            A segurança das operações e das cargas é a nossa prioridade.
            Garantimos que todos os processos sejam feitos com rigor e
            conformidade.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <FaBolt />
          </div>
          <h3 className="value-title">Agilidade e Eficiência</h3>
          <p className="value-description">
            Trabalhamos para garantir que suas entregas sejam feitas dentro do
            prazo e com máxima eficiência.
          </p>
        </div>

        <div className="value-card">
          <div className="value-icon">
            <FaLightbulb />
          </div>
          <h3 className="value-title">Inovação</h3>
          <p className="value-description">
            Investimos constantemente em novas tecnologias para aprimorar
            nossos processos e oferecer soluções mais rápidas e seguras.
          </p>
        </div>
      </div>
    </section>
  );
};
