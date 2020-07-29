import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/image/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={Logo} alt="techflixlogo" width="200" height="50" />
      </a>
      <p>
        Orgulhosamente desenvolvido por {' '} <a href="https://www.linkedin.com/in/amanda-monteiro-b45aaa181/"> Amanda Monteiro</a> durante a Imersão React da Alura
      </p>
    </FooterBase>
  );
}

export default Footer;
