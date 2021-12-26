import React, { useState } from 'react';

// Header e Footer
import Footer from '../../componentes/Footer/Footer';
import Header from '../../componentes/Header/Header';

// Imagens Menu
import Menu from './../../imagens/site/menu.png';
import Fechar from './../../imagens/site/cancel-branco.png';

// Páginas
import LogoHeader from '../../componentes/Logos/LogoHeader';
import QuemSou from '../QuemSou/QuemSou';
import MeusConhecimentos from '../Conhecimentos/MeusConhecimentos';
import Servicos from '../Servicos/Servicos';
import MenuItem from '../../componentes/Navbar/MenuItem';
import MeusProjetosReduzido from '../MeusProjetos/MeusProjetosReduzido';
import MeusProjetosCompleto from '../MeusProjetos/MeusProjetosCompleto';

// CSS
import './../../css/index.css';
import './../../css/home.css';
import './../../css/navbar.css';
import './../../css/header.css';
import './../../css/sobre.css';
import './../../css/projetos.css';
import './../../css/conhecimentos.css';
import './../../css/servicos.css';
import './../../css/footer.css';


const Home = () => {

    // Menu
    const [abrirMenu, setAbrirMenu] = useState("div-menu");
    const [imagemMenu, setImagemMenu] = useState(Menu);

    // Exibe / Oculta Projetos
    const [mostraProjeto, setMostraProjeto] = useState(<MeusProjetosReduzido />);
    const [botãoProjeto, setBotãoProjeto] = useState(true);

    // Função para abrir e fechar Menu Mobile
    const abrir_menu = () => {
        setAbrirMenu(!abrirMenu);
        if (!abrirMenu) {
            setImagemMenu(Menu);            
        }
        else {
            setImagemMenu(Fechar);
        }
    }

    // Função para Exibir mais Projetos
    const abrirProjetos = () => {
        if(mostraProjeto) {
            setMostraProjeto(<MeusProjetosCompleto />);
            setBotãoProjeto(false)
        }
        else {
            setMostraProjeto(<MeusProjetosReduzido/>);
            setBotãoProjeto(true);
        }
    }

    return (
        <div id="pagina">
            
            <nav id="nav">

                <LogoHeader />
                
                <section id="nav-imagens">

                    <button onClick={() => abrir_menu()}>

                        <img id="nav-imagem-menu" src={imagemMenu} alt="imagem"/>

                    </button>

                </section>

                <section id="nav-itens">

                    <div className={abrirMenu ? "div-menu-esconde" : "div-menu"}>

                        <MenuItem />

                    </div>

                </section>

            </nav>

            <Header />

            <section id="conteudo">

                <aside id="quem-sou">

                    <QuemSou />

                </aside>

                <aside id="meus-projetos">   

                    <section id="projetos-titulo" className="titulo">
                        <h2>Meus Projetos</h2>
                    </section>

                    {mostraProjeto}

                    <section id="conteudo-button">

                        {botãoProjeto ? 

                            <button onClick={() => abrirProjetos()}>Veja mais Projetos</button>

                        : <div></div>}

                    </section>

                </aside>

                <aside id="conhecimentos">

                    <section id="conhecimentos-titulo" className="titulo">
                        <h2>Conhecimentos</h2>
                    </section>

                    <MeusConhecimentos />

                </aside>

                <aside id="servicos">

                    <section id="servico-titulo" className="titulo">
                        <h2>Serviços</h2>
                    </section>

                    <Servicos />

                </aside>

            </section>

            <Footer />

        </div>
    );
}

export default Home;
