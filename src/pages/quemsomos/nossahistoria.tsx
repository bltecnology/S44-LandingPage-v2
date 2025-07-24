import "../../styles/quemsomos/nossahistoria.css";
import imgleft from "../../assets/caminha-esquerda.png";
import imgright from "../../assets/caminhao-direita.png";

export const NossaHistoria = () => {
  return (
    <section className="history" id="historia">
      <figure className="side-img side-img--left">
        <img src={imgleft} alt="Imagem esquerda" />
      </figure>

      <figure className="side-img side-img--right">
        <img src={imgright} alt="Imagem direita" />
      </figure>

      <div className="history__inner">
        <span className="history__index">03</span>
        <h2 className="history__title">Nossa História</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur. Non ac sapien morbi nascetur
          commodo tempor vel neque integer. Felis gravida habitant lectus neque
          molestie suscipit leo elementum.
        </p>

        <p>
          Ultrices metus tellus at gravida blandit volutpat mattis. Amet id
          felis urna metus sit natoque tristique urna. Platea nisl semper arcu
          aliquam.
        </p>

        
        <a href="/contato" className="btn btn--dark mt-5">
          Entre em Contato conosco →
        </a>
      </div>
    </section>
  );
};
