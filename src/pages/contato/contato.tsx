import "../../styles/contato/service_contato.css";
import backgroundImage from "../../assets/banner_principal.png";
import truckImage from "../../assets/contato.png";

export function ServiceForm() {
  return (
    <section
    className="service-form-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
    <div className="form-content">
      <h1>
        Solicite um dos <span className="highlight">nossos serviços!</span>
      </h1>

      <form>
        <div className="form-group">
          <input type="text" placeholder="Nome Completo" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Telefone" />
        </div>

        <div className="form-group">
          <select defaultValue="">
            <option value="" disabled>Tipo de Serviço</option>
            <option value="frete">Frete</option>
            <option value="logistica">Logística</option>
          </select>
          <input type="text" placeholder="Data de Início" />
        </div>

        <textarea
          placeholder="Descrição da solicitação"
          rows={4}
        />

          <div className="form-buttons">
            <button type="submit" className="submit">Enviar formulário</button>
            <button type="reset" className="clear">Limpar formulário</button>
          </div>
        </form>
      </div>

      <div className="truck-wrapper">
        <img src={truckImage} alt="Caminhão" className="truck-image-contato" />
      </div>
    </section>

  );
}
