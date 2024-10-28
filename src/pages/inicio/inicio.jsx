import React from 'react';
import Cabecalho from '../cabegalho/cabegalho'; 
import Sonho from '../image/sonho.jpg';
import salgado from '../image/salgado.jpg';
import doces from '../image/miguel.webp';
import morango from '../image/morago.webp'
import Footer from '../footer/footer';
import './inicio.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const INICIO = () => {
  return (
    <div className='inicio-container'>
      <Cabecalho />
      <h1 className='titulo-principal'>Sabores da Rua</h1>
      <h2 className='subtitulo'>
        Transformando cada doce em uma celebração de sabores, onde a tradição se encontra com a inovação em cada fatia!
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={Sonho} alt="Sonho" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={salgado} alt="Salgado" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={doces} alt="Doces Individuais" className="swiper-image"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={morango} alt="Morango" className="swiper-image"/>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};

export default INICIO;
