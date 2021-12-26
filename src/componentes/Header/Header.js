import React from 'react';
import LinkGitHub from '../Links/LinkGitHub';
import LinkLinkedinHeader from '../Links/LinkLinkedinHeader';
import ImagemHeader from './../../imagens/site/imagem.png';
import ImagemMouse from './../../imagens/site/mouse.png';

const Header = (props) => {
    return (
        <header id="header">
            <aside id="header-aside">
                <section id="header-apresenta">
                    <aside id="apresenta">
                        <h2>Olá, eu sou</h2>
                        <h1 className="cor-azul">Katarine Albuquerque.</h1>
                        <h3>Desenvolvedora Front-end.</h3>
                        <aside id="links">
                            <LinkLinkedinHeader logo={props.logo} />
                            <LinkGitHub />
                        </aside>
                    </aside>
                </section>
                <section id="header-imagem">
                    <img src={ImagemHeader} alt="imagem" />
                </section>
            </aside>
            <aside id="desenvolvedora">
                <img src={ImagemMouse} alt="imagem" />
            </aside>
        </header>
    );
}

export default Header;
