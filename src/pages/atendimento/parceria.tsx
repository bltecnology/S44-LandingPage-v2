import "../../styles/atendimento/parceria.css";
import parceriaImage from "../../assets/parceria.png";

export function Parceria() {
  return (
    <section className="parceria-container">
      <div className="parceria-texto">
        <h5>Parceria com grandes marcas!</h5>
        <h2>Confiada por quem move o mercado.</h2>
        <p>
          Na S44, temos orgulho de ser a escolha de grandes empresas que movimentam o mercado nacional.
          Atuamos com excelência no suporte logístico de marcas líderes em seus segmentos, desenvolvendo
          soluções sob medida para atender operações complexas e de alta demanda.
        </p>
        <p>
          Nossa estrutura é preparada para atender com eficiência desde a coleta até a entrega, sempre com
          foco em qualidade, segurança e agilidade. Essa capacidade nos permite operar ao lado de companhias
          que exigem padrões elevados de desempenho, prazos rigorosos e total confiabilidade.
        </p>
        <p>
          Mais do que prestadores de serviço, somos parceiros estratégicos dessas empresas, contribuindo
          diretamente para o seu crescimento e presença nos principais canais de atacado e varejo do estado
          de São Paulo. Cada entrega é resultado de um trabalho técnico, comprometido e orientado por
          resultados reais.
        </p>
      </div>
      <div className="parceria-imagem">
        <img src={parceriaImage} alt="Caminhões S44" />
      </div>
    </section>
  );
}
