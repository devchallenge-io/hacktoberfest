import React, { useEffect, useState } from 'react'

import { FaItunesNote, FaGithub, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import './App.css'
import api from './services/api';

interface Image {
    urls: {
        regular: string;
    };
    alt_description: string;
    description: string;
    width: number;
    height: number;

}

export default function App() {
    const access_key = process.env.REACT_APP_ACCESS_KEY;

    const [photos, setPhotos] = useState<Image[]>();

    useEffect(() => {
        api.get(`topics/6sMVjTLSkeQ/photos/?client_id=${access_key}`).then(response => {
            setPhotos(response.data);
        });
    }, [])

    const [index, setIndex] = useState(0);
    const [statusPlay, setStatusPlay] = useState(false);

    if (!photos) {
        return null;
    }

    function handlePreviosImage() {
        if (!photos) {
            return null;
        }
        if(index > 0){            
            setIndex(index -1);
        }
        if(index === 0){
            setIndex((photos.length-1));
        }
    }
    function handleNextImage() {
        if (!photos) {
            return null;
        }
        if(index < (photos.length-1)){
            setIndex(index +1);
        }
        if(index === (photos.length-1)){            
            setIndex(0);
        }
    }
    function handleMusic(){
        document.getElementById("music")?.classList.toggle("active");
        var x = document.getElementById("audio") as HTMLAudioElement;
        if(statusPlay){
            x.pause();
            setStatusPlay(false);
        }else{            
            x.play();
            setStatusPlay(true);
        }
    }
    return (
        <div>
        <audio id="audio" loop>
            <source src="Unfinished_Business.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>

        <div className="container">
            <header>
                <button id="music" onClick={handleMusic} className="nav-button">
                    <FaItunesNote size={16} color="#777" />
                </button>
                <h2>Digital Museo</h2>
                <a href="http://github.com/filipeleonelbatista" target="_blank" rel="noreferrer" className="nav-button">
                    <FaGithub size={16} color="#000" />
                </a>
            </header>
            <main>
                <div className="content">
                    <button onClick={handlePreviosImage} className="arrow-button">
                        <FaArrowLeft size={16} color="#999" />
                    </button>
                    <div className="img-container">
                        <img src={photos[index].urls.regular}
                            alt={photos[index].alt_description}
                             />
                        <div className="caption">
                            <h3>{photos[index].description === null ? "Unsplash image" : photos[index].description}</h3>
                            <p>{photos[index].alt_description === null ? "Unsplash image" : photos[index].alt_description}</p>
                        </div>
                    </div>
                    <button onClick={handleNextImage} className="arrow-button">
                        <FaArrowRight size={16} color="#999" />
                    </button>
                </div>
            </main>
            <footer>
                <p>Desenvolvido com 💜 por Filipe Batista</p>
                <p>Imagens por <a target="_blank" rel="noreferrer" href="http://unsplash.com">Unsplash</a></p>
            </footer>
        </div>
        
        </div>
    );
}