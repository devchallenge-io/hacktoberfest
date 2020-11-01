import React from 'react';
import logo from '../../assets/logo.png';
import horizontal1 from '../../assets/horizontal1.png';
import horizontal2 from '../../assets/horizontal2.png';
import horizontal3 from '../../assets/horizontal3.png';
import horizontal4 from '../../assets/horizontal4.png';
import vertical1 from '../../assets/vertical1.png';
import vertical2 from '../../assets/vertical2.png';
import vertical3 from '../../assets/vertical3.png';
import vertical4 from '../../assets/vertical4.png';
import './styles.css';

function Home(){
    return(
        <div className="App">
            <section className="header">
                <img src={logo} alt="Galeria" />
                <div className="menu">
                    <a href="https://www.linkedin.com/in/lorenagmontes/">Obras</a>
                    <a href="https://www.linkedin.com/in/lorenagmontes/">Artistas</a>
                    <a href="https://www.linkedin.com/in/lorenagmontes/">Contato</a>
                </div>
                <a className="button" href="https://github.com/Lorenalgm">Entrar</a>
            </section>
            <section className="hero">
                <div className="hero-title">
                    <h1>Crie.</h1>
                    <h1>Inspire.</h1>
                    <h1>Surpreenda.</h1>
                </div>
            </section>
            <section className="works">
                <div className="vertical-images">
                    <div id="vertical-images1">
                        <img src={vertical1} alt="Galeria" />
                        <img src={vertical2} alt="Galeria" />
                        <img src={vertical3} alt="Galeria" />
                        <img src={vertical4} alt="Galeria" />
                        <a href="#vertical-images2">></a>
                    </div>
                    <div id="vertical-images2">
                        <img src={vertical4} alt="Galeria" />
                        <img src={vertical1} alt="Galeria" />
                        <img src={vertical2} alt="Galeria" />
                        <img src={vertical3} alt="Galeria" />
                        <a href="#vertical-images3">></a>
                    </div>
                    <div id="vertical-images3">
                        <img src={vertical3} alt="Galeria" />
                        <img src={vertical4} alt="Galeria" />
                        <img src={vertical1} alt="Galeria" />
                        <img src={vertical2} alt="Galeria" />
                        <a href="#vertical-images1">></a>
                    </div>
                </div>
                <div className="horizontal-images">
                    <img src={horizontal1} alt="Galeria" />
                    <img src={horizontal2} alt="Galeria" />
                    <img src={horizontal3} alt="Galeria" />
                    <img src={horizontal4} alt="Galeria" />
                </div>
            </section>
            <section className="highlight">
                <div className="week-left">
                    <div className="week-content">
                        <h1>Obras<br></br>Da Semana</h1>
                        <p>Conheça os destaques mais visualizados no momento</p>
                    </div>
                </div>
                <div className="week-images">
                    <img src={vertical1} alt="Galeria" />
                    <img src={vertical2} alt="Galeria" />
                </div>
                <div className="week-right">

                </div>
            </section>
        </div>
    )
}

export default Home;