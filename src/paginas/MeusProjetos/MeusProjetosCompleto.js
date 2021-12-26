import React from 'react';

import { Projetos } from './Projetos';

const MeusProjetosCompleto = () => {
    return (
        <section id="conteudo-items">
            {Projetos.map((item) => {
                return (
                    <a key={item.id} className="conteudo-link" href={item.link} target="_blank">
                        <aside className="conteudo-item">
                            <img src={item.imagem} alt="imagem" />
                            <article>
                                <h5>{item.titulo}</h5>
                                <h6>{item.tipo}</h6>
                            </article>
                        </aside>
                    </a>
                );
            })}
        </section>
    );
}

export default MeusProjetosCompleto;
