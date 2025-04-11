import banner from "../../assets/first-section-banner.png";
// import caminhao from "../../assets/first-section-caminhao.png";
// import { Truck } from "lucide-react";
import "../../styles/first-section.css";

export function FirstSection() {
  return (
    <section
      className="w-full h-screen bg-cover bg-no-repeat relative"
      style={{ backgroundImage: `url(${banner})` }}
    >
      
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
    </section>
  );
}