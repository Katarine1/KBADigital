import React from 'react';

const MenuItem = () => {
    return (
        <ul id="nav-menu">
            <li id="nav-item-1" className="nav-item">
                <a id="nav-link-1" className="nav-item" href="/#desenvolvedora">Quem sou</a>
            </li>
            <li id="nav-item-2" className="nav-item">
                <a id="nav-link-2" className="nav-item" href="/#meus-projetos">Meus Projetos</a>
            </li>
            <li id="nav-item-3" className="nav-item">
                <a id="nav-link-3" className="nav-item" href="/#conhecimentos">Conhecimentos</a>
            </li>
            <li id="nav-item-4" className="nav-item">
                <a id="nav-link-4" className="nav-item" href="/#servicos">Serviços</a>
            </li>
            <li id="nav-item-5" className="nav-item">
                <a id="nav-link-5" className="nav-item" href="/#footer-contato">Contato</a>
            </li>
        </ul>
    );
}

export default MenuItem;
