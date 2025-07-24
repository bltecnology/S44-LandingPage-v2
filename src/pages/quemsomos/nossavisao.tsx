import "../../styles/quemsomos/nossavisao.css";
import caminhao from "../../assets/caminhao-visao.png";
import { FaArrowRight } from "react-icons/fa";

export const NossaVisao = () => {
  return (
    <section className="vision-section">
      <div className="vision-left">
        <span className="bg-number">01</span>
        <h2>
          <span>Qual é a nossa Visão?</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ac vitae mi turpis sapien. Mi
          neque convallis augue et mi. Aliquet elit nulla enim a a tempus ut
          vitae. Sed non lacinia lacus amet eget nisi sit nibh hac. Donec
          egestas a id facilisis aca.
        </p>
        <p>
          Quis arcu massa arcu ipsum turpis dictum enim id. Sit pulvinar lorem
          risus adipiscing aliquam risus. Montes scelerisque cum dignissim non
          sit sapien purus sit morbi. Id nisl facilisis justo urna risus.
          Gravida eget adipiscing suspendisse odio eget. Enim commodo ut
          feugiat elit fermentum blandit arcu. Eu vel tortor consectetur
          scelerisque aliquet vestibulum volutpat nunc nulla. Interdum congue
          gravida eu tortor amet
        </p>
        <a href="/contato" className="btn-contact">
          Entre em Contato conosco <FaArrowRight />
        </a>
      </div>

      <div className="vision-right">
        <div className="yellow-bg"></div>
        <img src={caminhao} alt="Caminhão de transporte" />
      </div>
    </section>
  );
};
