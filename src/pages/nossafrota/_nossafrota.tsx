import { useRef } from 'react';
import '../../styles/nossa-frota/nossa-frota.css';

import bannerPrincipal from '../../assets/nossafrota-banner.png';
import caminhaoFrotaPrincipal from '../../assets/img_nossa-frota/3caminhao.svg';
import veiculo1000kg from '../../assets/img_nossa-frota/card1.png';
import veiculo2500kg from '../../assets/img_nossa-frota/card2.png';
import veiculo5000kg from '../../assets/img_nossa-frota/card3.png';
import veiculo7000kg from '../../assets/img_nossa-frota/card4.png';
import veiculo10000kg from '../../assets/img_nossa-frota/card5.png';
import veiculo15000kg from '../../assets/img_nossa-frota/card6.png';
import veiculo20000kg from '../../assets/img_nossa-frota/card7.png';
import { ContactSection } from '../home/contact-section';

export const NossaFrota = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector('.carousel-card') as HTMLElement;
    if (!card) return;

    const scrollAmount = card.offsetWidth + 30;
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bannerPrincipal})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
      <div className="section-container">
        <div>
          <span>Saiba mais sobre</span>
            <h1>
              Nossa <span className="highlight">Frota</span>
            </h1>
          <p>
            A frota da S44 é composta por caminhões especializados para atender às diversas
            necessidades de transporte de cargas. A empresa oferece serviços de transporte de
            cargas gerais, incluindo coleta, entrega de DI's (Declaração de Importação),
            transporte de cargas perigosas e operações de armazém. Além disso, a frota é bem
            manufaturada e adaptada para garantir segurança e eficiência nas operações logísticas,
            com foco na pontualidade e conformidade com as exigências do setor.
          </p>
        </div>

      <div className="tucker-image-wrapper-frotas" style={{ alignSelf: 'flex-start' }}>
        <img src={caminhaoFrotaPrincipal} alt="Caminhões S44" />
      </div>
    </div>
  </section>


      <section className="frota-carousel-limited">
        <div className="bg-yellow-square left"></div>
        <div className="bg-yellow-square right"></div>

        <span>7 modelos de veículos</span>
        <h2>Conheça nossos veículos S44!</h2>

        <div className="carousel-buttons">
          <button onClick={() => scrollByCard('left')} className="carousel-arrow left">‹</button>
          <button onClick={() => scrollByCard('right')} className="carousel-arrow right">›</button>
        </div>

        <div className="carousel-track-wrapper" ref={carouselRef}>
          <div className="carousel-track">
            <div className="carousel-card"><img src={veiculo1000kg} alt="Veículo 1000 kg" /></div>
            <div className="carousel-card"><img src={veiculo2500kg} alt="Veículo 2500 kg" /></div>
            <div className="carousel-card"><img src={veiculo5000kg} alt="Veículo 5000 kg" /></div>
            <div className="carousel-card"><img src={veiculo7000kg} alt="Veículo 7000 kg" /></div>
            <div className="carousel-card"><img src={veiculo10000kg} alt="Veículo 10000 kg" /></div>
            <div className="carousel-card"><img src={veiculo15000kg} alt="Veículo 15000 kg" /></div>
            <div className="carousel-card"><img src={veiculo20000kg} alt="Veículo 20000 kg" /></div>
          </div>
        </div>
      </section>
      <ContactSection/>
    </>
  );
};