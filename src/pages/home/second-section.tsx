import { Handshake, PackageSearch, ShieldCheck, UserCheck } from "lucide-react";
import "./../../styles/second-section.css";

export function SecondSection() {
  return (
    <section className="second-section">
      <h2 className="section-title">
        O que temos a oferecer em <strong>nossa plataforma?</strong>
      </h2>

      <div className="card-grid">
        <div className="card card--highlight">
          <div className="icon-circle">
            <Handshake size={28} strokeWidth={2} />
          </div>
          <h3>Serviço de Agregamento</h3>
          <p>
          Caminhoneiros autônomos com veículo próprio são integrados à frota da S44, com fretes constantes, suporte e autonomia.
          </p>
        </div>

        <a href="/banner-operacoes" className="card">
          <div className="icon-circle">
            <PackageSearch size={28} strokeWidth={2} />
          </div>
          <h3>Especialização em Cargas Complexas</h3>
          <p>
            Oferecemos soluções para cargas perigosas e coletas de exportação com infraestrutura adequada.
          </p>
        </a>


        <div className="card">
          <div className="icon-circle">
            <ShieldCheck size={28} strokeWidth={2} />
          </div>
          <h3>Segurança e Conformidade</h3>
          <p>
            Cumprimos todas as normas legais e regulatórias no transporte de cargas e processos aduaneiros.
          </p>
        </div>

        <div className="card">
          <div className="icon-circle">
            <UserCheck size={28} strokeWidth={2} />
          </div>
          <h3>Atendimento Personalizado</h3>
          <p>
            Adaptamos nossos serviços às necessidades específicas de cada cliente.
          </p>
        </div>
      </div>
    </section>
  );
}