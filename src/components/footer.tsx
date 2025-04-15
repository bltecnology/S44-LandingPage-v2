import "../styles/footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiSearch, FiInfo, FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom"; // Importando o Link do react-router-dom
import logo from "../assets/logo-s44.png";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo S44" className="logo" />
          <p>
            O objetivo da empresa S44 é fornecer soluções eficientes e confiáveis
            de transporte e logística, atendendo às necessidades dos clientes com
            qualidade e inovação.
          </p>
        </div>

        {/* Colunas de informações */}
        <div className="footer-columns">
          <div className="footer-col">
            <h4>
              Dúvidas Frequentes <FiSearch />
            </h4>
            <ul>
              <li>Como posso acompanhar o status das minhas mercadorias?</li>
              <li>Como solicito um orçamento para transporte?</li>
              <li>A S44 oferece suporte para problemas com entregas?</li>
              <li>Onde posso encontrar informações sobre a S44 e seus serviços?</li>
              <li>Como posso acessar conteúdos sobre logística?</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>
              Contato <FiPhone />
            </h4>
            <ul>
              <li>
                <FiMail /> 
                <a href="mailto:TransportadoraS44@gmail.com">TransportadoraS44@gmail.com</a>
              </li>
              <li><FiPhone /> 55 (11) 987 654 321</li>
              <li>
                <Link to="https://www.instagram.com/S44_Logistica" target="_blank" rel="noopener noreferrer">
                  <FaInstagram /> S44_Logistica
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/S44_Logistica" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF /> S44_Logistica
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/company/S44_Logistica-tech" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn /> S44_Logistica.tech
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>
              Acessar <FiLogIn />
            </h4>
            <ul>
              <li><Link to="/entrar">Entrar/cadastre-se</Link></li>
              <li><Link to="/categorias">Categorias</Link></li>
              <li><Link to="/contato">Contato</Link></li>
              <li><Link to="/ajuda">Ajuda</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>
              Institucional <FiInfo />
            </h4>
            <ul>
              <li><Link to="/politica-privacidade">Política de privacidade</Link></li>
              <li><Link to="/termos-uso">Termos de uso</Link></li>
              <li><Link to="/duvidas-frequentes">Dúvidas Frequentes</Link></li>
              <li><Link to="/acessibilidade">Acessibilidade</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <Link to="https://www.linkedin.com/company/S44_Logistica-tech" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </Link>
          <Link to="https://www.facebook.com/S44_Logistica" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link to="https://www.instagram.com/S44_Logistica" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
        </div>
        <p>© todos os direitos reservados Transportadora e logística S44</p>
      </div>
    </footer>
  );
}
