import React from 'react';

import ImagemMensagem from './../../imagens/site/envelope-branco.png';

const LinkEmail = () => {
    return (
        <a id="email" href="mailto:seu email">
            <img id="imagem-email" src={ImagemMensagem} alt="imagem"/>
            <h6>Seu email</h6>
        </a>
    );
}

export default LinkEmail;
