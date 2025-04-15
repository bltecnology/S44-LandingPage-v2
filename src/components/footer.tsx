// import "../styles/footer.css";
// import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FiMail, FiPhone, FiSearch, FiInfo, FiLogIn } from "react-icons/fi";
// import logo from "../assets/logo-s44.png";

// export function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-top">
//         <div className="footer-brand">
//           <img src={logo} alt="Logo S44" className="footer-logo" />
//           <p>
//             O objetivo da empresa S44 é fornecer soluções eficientes e confiáveis
//             de transporte e logística, atendendo às necessidades dos clientes com
//             qualidade e inovação.
//           </p>
//         </div>
//         <div className="footer-columns">
//           <div className="footer-col">
//             <h4>
//               DÚVIDAS FREQUENTES <FiSearch />
//             </h4>
//             <ul>
//               <li className="active">Como posso acompanhar o status das minhas mercadorias?</li>
//               <li>Como solicito um orçamento para transporte?</li>
//               <li>A S44 oferece suporte para problemas com entregas?</li>
//               <li>Onde posso encontrar informações sobre a S44 e seus serviços?</li>
//               <li>Como posso acessar conteúdos sobre logística?</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>
//               CONTATO <FiPhone />
//             </h4>
//             <ul>
//               <li><FiMail /> TransportadoraS44@gmail.com</li>
//               <li><FiPhone /> 55 (11) 987 654 321</li>
//               <li><FaInstagram /> @S44_Logistica</li>
//               <li><FaFacebookF /> @S44_Logistica</li>
//               <li><FaLinkedinIn />@S44_Logistica.tech</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>
//               ACESSAR <FiLogIn />
//             </h4>
//             <ul>
//               <li>Entrar/cadastre-se</li>
//               <li>Categorias</li>
//               <li>Contato</li>
//               <li>Ajuda</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>
//               INSTITUCIONAL <FiInfo />
//             </h4>
//             <ul>
//               <li>Política de privacidade</li>
//               <li>Termos de uso</li>
//               <li>Dúvidas Frequentes</li>
//               <li>Acessibilidade</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <div className="footer-socials">
//           <FaLinkedinIn />
//           <FaFacebookF />
//           <FaInstagram />
//         </div>
//         <p>©todos os direitos reservados Transportadora e logística S44</p>
//       </div>
//     </footer>
//   );
// }


import "../styles/footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiPhone, FiSearch, FiInfo, FiLogIn } from "react-icons/fi";
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
              <li><FiMail /> TransportadoraS44@gmail.com</li>
              <li><FiPhone /> 55 (11) 987 654 321</li>
              <li><FaInstagram /> S44_Logistica</li>
              <li><FaFacebookF /> S44_Logistica</li>
              <li><FaLinkedinIn /> S44_Logistica.tech</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>
              Acessar <FiLogIn />
            </h4>
            <ul>
              <li>Entrar/cadastre-se</li>
              <li>Categorias</li>
              <li>Contato</li>
              <li>Ajuda</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>
              Institucional <FiInfo />
            </h4>
            <ul>
              <li>Política de privacidade</li>
              <li>Termos de uso</li>
              <li>Dúvidas Frequentes</li>
              <li>Acessibilidade</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-socials">
          <FaLinkedinIn />
          <FaFacebookF />
          <FaInstagram />
        </div>
        <p>© todos os direitos reservados Transportadora e logística S44</p>
      </div>
    </footer>
  );
}
