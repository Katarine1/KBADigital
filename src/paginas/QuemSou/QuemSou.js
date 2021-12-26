import React from 'react';
import LinkCurriculo from '../../componentes/Links/LinkCurriculo';
import TextoSobre from '../../componentes/Textos/TextoSobre';
import ImagemDesenvolvedor from '../../imagens/site/desenvolvedor.png';

const QuemSou = () => {
    return (
        <div>
            <article id="sobre-imagem">

                <img src={ImagemDesenvolvedor} alt="imagem"/>
                
            </article>
            <article id="sobre">

                <TextoSobre />
                
                <LinkCurriculo />

            </article>
        </div>
    );
}

export default QuemSou;
