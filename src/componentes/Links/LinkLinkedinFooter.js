import React from 'react';

import ImagemLinkedin from './../../imagens/site/linkedin.png';

const LinkLinkedinFooter = () => {
    return (
        <a id="imagem-linkedin" href="https://www.linkedin.com/in/nome-perfil" target="_blank">
            <img id="footer-linkedin" src={ImagemLinkedin} alt="imagem"/>
        </a>
    );
}

export default LinkLinkedinFooter;
