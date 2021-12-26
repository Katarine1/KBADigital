import React from 'react';

import { Conhecimentos } from './Conhecimentos';

const MeusConhecimentos = () => {
    return (
        <section id="conhecimentos-itens">
            {Conhecimentos.map((item) => {
                return (
                    <a key={item.id} className="conhecimentos-item" >
                        <h3>{item.titulo}</h3>
                        <img src={item.imagem} alt="imagem" />
                    </a>
                )
            })}
        </section >
    );
}

export default MeusConhecimentos;
