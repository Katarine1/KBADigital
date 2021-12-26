import React from 'react';
import { Link } from 'react-router-dom';
import LogoImagemFooter from './../../imagens/site/logo.png';

const LogoFooter = () => {
    return (
        <section id="footer-logo">
            <Link to="/"><img src={LogoImagemFooter} alt="imagem" /></Link>
        </section>
    );
}

export default LogoFooter;
