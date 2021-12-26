import React from 'react';
import { Link } from 'react-router-dom';

import Logo02 from './../../imagens/site/logo-footer.png';

const MenuItem = () => {

    return (
        <ul id="nav-menu">
            <section id="nav-logo-02">
                <Link to="/">
                    <img src={Logo02} alt="imagem" />
                </Link>
            </section>
            <li id="nav-item-1" className="nav-item">
                <a id="nav-link-1" className="nav-link" href="/#desenvolvedora">Quem sou</a>
            </li>
            <li id="nav-item-2" className="nav-item">
                <a id="nav-link-2" className="nav-link" href="/#meus-projetos">Meus Projetos</a>
            </li>
            <li id="nav-item-3" className="nav-item">
                <a id="nav-link-3" className="nav-link" href="/#conhecimentos">Conhecimentos</a>
            </li>
            <li id="nav-item-4" className="nav-item">
                <a id="nav-link-4" className="nav-link" href="/#servicos">Serviços</a>
            </li>
            <li id="nav-item-5" className="nav-item">
                <a id="nav-link-5" className="nav-link" href="/#contato">Contato</a>
            </li>
        </ul>
    );
}

export default MenuItem;
