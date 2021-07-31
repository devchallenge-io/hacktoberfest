import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faArrowLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './header.css';

export default function Header() {
    const [dropDown, setDropDown] = useState(false);

    return(
        <header className="header">
            <div className="container">
                <Link className="header__home-link" to="/"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                <h1 className="header__title">DevChallenge Hacktoberfest</h1>


                <button 
                    onClick={() => setDropDown(!dropDown)}
                    className="paragraph"
                >
                    Outros Desafios <FontAwesomeIcon icon={faChevronDown} />
                </button>
                <ul className={`header__dropdown ${dropDown === true ? 'header__dropdown--active' : ''}`}>
                    <li className="header__links"><Link className="header__link" to="/challenge1">Desafio 1</Link></li>
                    <li className="header__links"><Link className="header__link" to="/challenge2">Desafio 2</Link></li>
                    <li className="header__links"><Link className="header__link" to="/challenge3">Desafio 3</Link></li>
                    <li className="header__links"><Link className="header__link" to="/challenge4">Desafio 4</Link></li>
                </ul>
            </div>
        </header>
    );
}