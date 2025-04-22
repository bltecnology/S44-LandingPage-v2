import background from "../../assets/contact-section-banner.png";
import truck from "../../assets/contact-section-caminhao.png";
import "../../styles/contact-section.css";

export function ContactSection() {
  return (
    <section
      className="contact-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="contact-form-box">
        <div className="contact-header">Interessado na plataforma? Contate-nos!</div>
        <form className="contact-form">
          <div className="contact-row">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Telefone" required />
          </div>
          <textarea placeholder="Assunto" required></textarea>
          <button type="submit">Contate-nos</button>
        </form>
      </div>
      <div className="contact-image">
        <img src={truck} alt="Caminhão" />
      </div>

    </section>
  );
}