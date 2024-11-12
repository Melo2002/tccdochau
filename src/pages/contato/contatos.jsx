import React from 'react';
import './contatos.scss';
import Cabecalho from '../cabegalho/cabegalho';
import logo from '../image/Sabores da rua.png';
import x from '../image/x.png';
import wats from '../image/wetz.png';
import face from '../image/face.png';


const Contato = () => {
  return (
    <>
   
      <div className='contato-home'>
        <div className='logo1'>
          <img src={logo} alt="Logo da Confeitaria" />
        </div>

        <div className='contato-links'>
          <div className='face'>
            <a 
              href="https://facebook.com/confeitaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook da Confeitaria"
            >
              <img src={face} alt="Facebook" />
              <p>Facebook</p>
            </a>
          </div>

          <div className='x'>
            <a 
              href="https://twitter.com/confeitaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter da Confeitaria"
            >
              <img src={x} alt="X" />
              <p>X</p>
            </a>
          </div>

          <div className='wats'>
            <a 
              href="https://wa.me/5511939493119" target="_blank" rel="noopener noreferrer" 
              aria-label="WhatsApp da Confeitaria"
            >
              <img className='whats' src={wats} alt="WhatsApp" />
             <p>WhatsApp</p> 
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contato;