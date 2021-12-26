import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../../imagens/site/logo.png';

const LogoHeader = () => {

    return (
        <section id="nav-logo">
            <Link to="/">
                <img src={Logo} alt="imagem" />
            </Link>
        </section>
    );
}

export default LogoHeader;
