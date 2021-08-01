/* eslint-disable no-restricted-globals */
import { useEffect, useState } from 'react';

import Header from '../Header';
import Quiz from './Quiz';
import './quiz.css';

require('dotenv').config();

export default function FirstChallenge() {
    const [questions, setQuestions] = useState([]);
    const [currentQuest, setCurrentQuest] = useState(0);
    const [dataMenu, setDataMenu] = useState({});
    const [isStarted, setsStarted] = useState(false);
    const [user, setUser] = useState({});
    const [bestUsers, setBestUsers] = useState([]);
    
    const url = "https://raw.githubusercontent.com/GabrielWolf-Dev/Hacktoberfest_DevChallenge/main/project_challenge/api/quiz.json";

    useEffect(() => {
        (async function(){
            const res = await fetch(url);
            const data = await res.json();

            setQuestions(data.questions);
            setDataMenu(data.quiz);
        })();
    }, []);

    function backMenu() {
        const message = confirm('ATENÇÃO: Você perderá todo o seu progresso se voltar no menu.');
        
        if(message) {
            setUser({});
            setsStarted(!isStarted);
        }
    }

    function clearStorage() {
        localStorage.clear();
        setBestUsers([]);
    }

    return(
        <>
            <Header />
            <section className="quiz-content">
                <h2 className="quiz-content__title title">{isStarted ? 'Nome: ' + user.name : dataMenu.title}</h2>
                <p className="paragraph">{isStarted ? 'Pontuação: ' + user.score : dataMenu.desc}</p>
            </section>

            <section className={isStarted ? 'menu-quiz--hide' : 'menu-quiz'}>
                <main className="menu-quiz__main">
                    <form 
                        className="menu-quiz__form"
                        onSubmit={e => {
                            e.preventDefault();

                            setUser({
                                name: e.target[0].value,
                                score: 0
                            });
                            setsStarted(!isStarted);
                            e.target[0].value = '';
                        }}
                    >
                        <label className="menu-quiz__label-name" htmlFor="name">Digite o seu nome</label>
                        <input
                            className="menu-quiz__input-name" 
                            title="O nome deve conter somente letras e no máximo 15 caracteres" 
                            pattern="[A-Za-zçã\s]{1,15}"
                            required 
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Digite o seu nome"
                        />
                        <input className="menu-quiz__input-sub" type="submit" value="Começar" />
                    </form>

                    <img className="menu-quiz__img" src={dataMenu.img} alt="Logo da linguagem JavaScript" />
                </main>

                {
                    bestUsers.length >= 2 ?
                    <>
                        <table className="menu-quiz__table">
                            <thead className="menu-quiz__table__box">
                                <tr>
                                    <th>Posição</th>
                                    <th>Nome</th>
                                    <th>Pontos</th>
                                </tr>
                            </thead>
                            <tbody className="menu-quiz__table__box">
                                {bestUsers.map((bestUser, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{index+1 +'ª'}</td>
                                            <td>{bestUser.name}</td>
                                            <td>{bestUser.score}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        <button onClick={clearStorage} className="menu-quiz__loaderboards-clear">Limpar placar</button>
                    </>
                    : <article className="menu-quiz__warning-loaderboards">Junte mais pessoas para competir no placar de jogadores :)</article>
                }
            </section>

            <main className={isStarted ? 'quiz quiz--active' : 'quiz'}>
                <button onClick={backMenu} className="quiz__btn-back">Voltar no Menu</button>

                <article className="quiz__box-progress">
                    <label className="quiz__label-progress" htmlFor="progressBar">Progresso</label>
                    <progress className="quiz__progress" id="progressBar" value={(currentQuest + 1) * 10} max={questions.length * 10} />
                </article>
                
                {
                    questions.map((question, index) => index === currentQuest 
                    ? <Quiz
                        key={question.id}
                        alternatives={question.alternatives}
                        id={question.id}
                        question={question.question}
                        answer={question.answer}
                        image={question.image}
                        alt={question.alt}
                        setCurrentQuest={setCurrentQuest}
                        setUser={setUser}
                        user={user}
                        currentQuest={currentQuest}
                        questions={questions}
                        setsStarted={setsStarted}
                        isStarted={isStarted}
                        setBestUsers={setBestUsers}
                      /> 
                    : false)
                }
            </main>
        </>
    );
}