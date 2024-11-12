import React from 'react';
import Cabegalho from '../cabegalho/cabegalho';

import Sonho from '../image/7aadb69a-7915-4935-b1a6-635cd8e26193___4883223899b870a1c2244be6095659fb.webp';
import novo from '../image/36397263-115b-4fad-90a2-84ac9298b8ce___b303a223a4d89ad5368c99dbe464ee52.webp';
import novin from '../image/d2.webp';
import novao from '../image/d3.webp';

import mel from '../image/podemel.webp';
import brow from '../image/brownie.webp';
import van from '../image/brisadeiro.webp';
import bolo from '../image/trufas.webp';
import i11 from '../image/kit.webp';
import i12 from '../image/aluminio.jpg';
import i13 from '../image/colher.png';
import i4 from '../image/espatula.jpeg';
import './inicio.scss';
import { Link } from 'react-router-dom'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const INICIO = () => {
  return (
    <div className='inicio-container'>
      <Cabegalho/>

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
          <Link to="/Utensílios">
            <img src={novao} alt="Sonho" className="swiper-image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <img src={Sonho} alt="Salgado" className="swiper-image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Produtos">
            <img src={novin} alt="Doces Individuais" className="swiper-image" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/Utensílios">
            <img src={novo} alt="Morango" className="swiper-image" />
          </Link>
        </SwiperSlide>
      </Swiper>

      <h1 className='titulo-principal'>Sabores da Rua</h1>
      <h2 className='subtitulo'>
        Transformando cada doce em uma celebração de sabores, onde a tradição se encontra com a inovação em cada fatia!
      </h2>

      <div className="produtos">
        <h2>Mais vendidos</h2>
        <div className="produtos-container">
          
          {/* Produto 1 */}
          <div className="produto-item">
            <Link to="/Produtos">
              <img src={van} alt="Produto 1" />
            </Link>
          </div>
          
          {/* Produto 2 */}
          <div className="produto-item">
            <Link to="/Produtos">
              <img src={mel} alt="Produto 2" />
            </Link>
          </div>
          
          {/* Produto 3 */}
          <div className="produto-item">
            <Link to="/Produtos">
              <img src={bolo} alt="Produto 3" />
            </Link>
          </div>
          
          {/* Produto 4 */}
          <div className="produto-item">
            <Link to="/Produtos">
              <img src={brow} alt="Produto 4" />
            </Link>
          </div>

          {/* Produto 5 */}
          <div className="produto-item">
            <Link to="/Utensílios">
              <img src={i13} alt="Produto 5" />
            </Link>
            <p></p>
          </div>

          {/* Produto 6 */}
          <div className="produto-item">
            <Link to="/Utensílios">
              <img src={i12} alt="Produto 6" />
            </Link>
            <p></p>
          </div>

          {/* Produto 7 */}
          <div className="produto-item">
            <Link to="/Utensílios">
              <img src={i11} alt="Produto 7" />
            </Link>
            <p></p>
          </div>

          {/* Produto 8 */}
          <div className="produto-item">
            <Link to="/Utensílios">
              <img src={i4} alt="Produto 8" />
            </Link>
            <p></p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default INICIO;
