import "../../styles/services/conteudo-transito.css";
import mosaicoImage from "../../assets/2.png"; 

export function ConteudoEntregas() {
  return (
    <section className="customs-section">
      <div className="customs-text">
        <h2>
          <span className="customs-number">01</span>
          <span className="customs-title">Oque é o processo de entrega de DI’s?</span>
        </h2>
        <p>
          A entrega de DI's (Declaração de Importação) é um serviço essencial para o processo de importação de mercadorias. Ele envolve a entrega do documento que formaliza a entrada de produtos estrangeiros no país, permitindo que as mercadorias sejam regularizadas perante a Receita Federal e demais órgãos competentes. A DI é um documento exigido pela legislação brasileira, que contém informações detalhadas sobre as mercadorias, como a classificação fiscal, o valor aduaneiro, o remetente, o destinatário, entre outros dados.
          Esse processo é fundamental para garantir a legalidade e a conformidade das importações, permitindo que as mercadorias sejam liberadas para o consumo ou distribuição. A entrega da DI deve ser realizada dentro dos prazos e de acordo com as exigências fiscais, e o serviço assegura que todo o trâmite seja realizado de maneira eficiente e sem contratempos.
        </p>
        <button className="customs-button">Entre em Contato conosco →</button>
      </div>

      <img
        src={mosaicoImage}
        alt="Caminhões e ícone"
        className="customs-mosaic"
      />

    </section>
  );
}
