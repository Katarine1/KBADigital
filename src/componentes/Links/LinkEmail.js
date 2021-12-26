import React from 'react';

import ImagemMensagem from './../../imagens/site/envelope-branco.png';

const LinkEmail = () => {
    return (
        <a id="email" href="mailto:kba.2879@gmail.com">
            <img id="imagem-email" src={ImagemMensagem} alt="imagem"/>
            <h6>kba.2879@gmail.com</h6>
        </a>
    );
}

export default LinkEmail;
