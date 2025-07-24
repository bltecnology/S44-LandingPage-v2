import "../../styles/services/conteudo-transito.css";
import mosaicoImage from "../../assets/3.png"; 

export function ConteudoExportacao() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">Oque é o processo de Coletas de Exportação?</span>
        </h2>
        <p>
          A coleta de exportação é o serviço responsável por retirar as mercadorias no local de origem, como fábricas ou armazéns, e transportá-las para o destino final, como portos ou aeroportos, para que possam ser exportadas para outros países. Durante esse processo, a empresa de coleta cuida da logística, incluindo o preparo de toda a documentação necessária para garantir a conformidade com as regulamentações do comércio internacional, como a Declaração de Exportação e outras exigências aduaneiras. Esse serviço visa agilizar e tornar mais eficiente o processo de exportação, assegurando que as mercadorias sejam entregues dentro do prazo e com total segurança.
        </p>
        <button
          className="customs-button"
          onClick={() => (window.location.href = "/contato")}
        >
          Entre em Contato conosco →
        </button>

      </div>

      <img
        src={mosaicoImage}
        alt="Caminhões e ícone"
        className="customs-mosaic"
      />

    </section>
  );
}
