import { Link } from "react-router-dom";
import logo from "../assets/logo-s44.png";
import whatsapp from "../assets/whatsapp.png"; 
import "../styles/header.css";

export const Header: React.FC = () => {
  return (
    <div className="navbar-wrapper">
      <header className="navbar">
        <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-left">
            <img src={logo} alt="Logo S44" className="logo" />
          </div>

          {/* Menu */}
          <nav className="navbar-menu">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/quem-somos" className="navbar-link">Quem somos</Link>
            <Link to="/nossa-frota" className="navbar-link">Nossa Frota</Link>
            <Link to="/servicos" className="navbar-link">Nossos Serviços</Link>
          </nav>

          {/* Botão WhatsApp */}
          <div className="navbar-right">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-wrapper"
            >
                <span className="whatsapp-button">Entre em contato conosco ↗</span>
              <img
                src={whatsapp}
                alt="WhatsApp"
                className="whatsapp-icon-outside"
              />
            </a>
          </div>

        </div>
        </div>
      </header>
    </div>
  );
};
