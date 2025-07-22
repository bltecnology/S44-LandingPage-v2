import "../../styles/contato/infos_contato.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export function SocialMediaLinks() {
  return (
    <div className="social-media-container">
      <div className="social-box">
        <div className="icon-wrapper instagram">
          <FaInstagram />
        </div>
        <span>@S44Logistica</span>
      </div>

      <div className="social-box">
        <div className="icon-wrapper facebook">
          <FaFacebookF />
        </div>
        <span>@S44Logistica</span>
      </div>

      <div className="social-box">
        <div className="icon-wrapper linkedin">
          <FaLinkedinIn />
        </div>
        <span>@S44Logistica</span>
      </div>
    </div>
  );
}
