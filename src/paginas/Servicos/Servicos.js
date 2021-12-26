import React from 'react';

import { ListaServicos } from './ListaServicos';

const Servicos = () => {
    return (
        <section id="servicos-itens">
            {ListaServicos.map((item) => {
                return (
                    <article key={item.id} className="servicos-item">
                        <img src={item.imagem} alt="imagem" />
                        <h4>{item.titulo}</h4>
                        <h5>{item.descricao}</h5>
                    </article>
                );
            })}
        </section>
    );
}

export default Servicos;
