import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Quiz({
    question,
    answer,
    alternatives,
    currentQuest,
    setCurrentQuest,
    questions,
    setUser,
    user,
    image,
    alt,
    setsStarted,
    isStarted,
    setBestUsers
}) {
    const [animResUser, setAnimResUser] = useState(false);
    const usersStorage = localStorage.getItem('users') !== null 
    ? JSON.parse(localStorage.getItem('users')) : [];

    function questionSub(e) {
        e.preventDefault();
        const formDatas = new FormData(e.target);
        const userRes = Number(formDatas.get('questions'));
        isCorrect(userRes);

        setTimeout(() =>
            currentQuest + 1 === questions.length ? resultQuiz()
            :  setCurrentQuest(currentQuest + 1)
        , 2000);
    }

    function isCorrect(value) {
        if(value === answer) {
            setUser({
                name: user.name,
                score: user.score += 10
            });
            setAnimResUser(process.env.REACT_APP_LOTTIE_CORRECT);
        } else { setAnimResUser(process.env.REACT_APP_LOTTIE_FAIL); }
    }

    function resultQuiz() {
        localStorage.setItem('users', JSON.stringify([
            user,
            ...usersStorage
        ]));

        setCurrentQuest(0);
        setsStarted(!isStarted);
    }

    useEffect(() => {
        setBestUsers(usersStorage.sort((a, b) => a.score - b.score).reverse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
            <aside className="quiz__question-box">
                <h2 className="subtitle">{question}</h2>
                <div className="quiz__question-box__flex">
                    <form onSubmit={questionSub} className="quiz__question-box__form">
                        {
                            alternatives.map((alternative, index) => {
                                return(
                                    <fieldset key={index} className="question-box__form__alternatives">
                                        <input
                                            type="radio" 
                                            id={index}
                                            className="form__alternatives__radio"
                                            name="questions"
                                            value={answer === index ? answer : false}
                                        />
                                        <label htmlFor={index}>{alternative}</label>
                                    </fieldset>
                                )
                            })
                        }
                        {
                            <input 
                                className="question-box__form__sub"
                                type="submit"
                                value={currentQuest + 1 === questions.length ? "Finalizar" : "Confirmar"}
                            />
                        }
                    </form>

                    <img className="quiz__question-box__img" src={image} alt={alt} />
                </div>
            </aside>
            <Player
                autoplay
                src={animResUser}
                className="anim-true"
                speed="1.5"
            ></Player>
        </>
    );
}