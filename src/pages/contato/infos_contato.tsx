import "../../styles/contato/infos_contato.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export function SocialMediaLinks() {
  return (
    <div className="social-media-container">
      <div className="social-box">
        <a
          href="https://www.instagram.com/s44logistica"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper instagram"
        >
          <FaInstagram />
        </a>
        <span>@S44Logistica</span>
      </div>

      <div className="social-box">
        <a
          href="https://www.facebook.com/people/S44-logística/61564087014362"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper facebook"
        >
          <FaFacebookF />
        </a>
        <span>@S44Logistica</span>
      </div>

      <div className="social-box">
        <a
          href="https://www.linkedin.com/company/s44-transportes"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper linkedin"
        >
          <FaLinkedinIn />
        </a>
        <span>@S44Logistica</span>
      </div>
    </div>
  );
}
