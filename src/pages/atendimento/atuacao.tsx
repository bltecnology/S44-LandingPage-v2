import "../../styles/atendimento/atuacao.css";
import atuacaoImage from "../../assets/atuacao.png";

export function Atuacao() {
  return (
    <section className="atuacao-section">
      <div className="atuacao-image">
        <img src={atuacaoImage} alt="Mapa com Caminhão" />
      </div>
      <div className="atuacao-text">
        <h4>Onde atuamos?</h4>
        <h2>
          Atuamos nos principais <strong>varejos e atacados</strong> do estado
          de <strong>São Paulo!</strong>
        </h2>
        <p>
          Somos a S44, uma empresa especializada em soluções logísticas que atua
          com excelência nas principais frentes do atacado e varejo em todo o
          estado de São Paulo. Com uma estrutura operacional robusta, equipe
          altamente capacitada e frota própria, desenvolvemos um modelo de
          trabalho ágil, seguro e adaptável às diferentes demandas do mercado.
        </p>
        <p>
          Nosso compromisso é conectar marcas, distribuidores, pontos de venda e
          consumidores de forma inteligente, garantindo eficiência em cada etapa
          da cadeia de suprimentos. Atendemos desde pequenas operações até
          grandes volumes, com flexibilidade, tecnologia e foco em resultados.
        </p>
        <p>
          Valorizamos parcerias de longo prazo, construídas com base na
          confiança, no cumprimento de prazos e na constante busca por melhoria
          contínua!
        </p>
        <a href="/contato" className="atuacao-button">
          Entre em Contato conosco →
        </a>
      </div>
    </section>
  );
}
