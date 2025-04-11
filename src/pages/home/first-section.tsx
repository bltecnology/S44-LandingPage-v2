import banner from "../../assets/first-section-banner.png";
// import caminhao from "../../assets/first-section-caminhao.png";
// import { Truck } from "lucide-react";
// import "../../styles/first-section.css";

export function FirstSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${banner})` }}
    > 
    <div>
      <span> A maior transportadora para grandes conquistas!</span>
      <h1>Logística e Transporte S44</h1>
      <p>A S44 é uma empresa especializada no transporte de cargas, oferecendo soluções logísticas seguras e eficientes, atendendo tanto ao mercado interno quanto ao internacional.
      </p>
    </div>
      <div>

      </div>
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
    </section>
  );
}