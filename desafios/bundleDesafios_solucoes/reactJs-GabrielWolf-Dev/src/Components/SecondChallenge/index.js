import { useEffect, useState } from 'react';
import Header from '../Header';
import './chess.css';

export default function SecondChallenge() {
    const [matrix, setMatrix] = useState([
        "0 0 0 0 0 0 0 0",
        "0 0 0 0 0 0 0 0",
        "0 0 0 0 0 0 0 0",
        "0 0 0 1 1 0 0 0",
        "0 0 0 1 1 0 0 0",
        "0 0 0 0 0 0 0 0",
        "4 0 0 0 0 0 0 4",
        "0 0 0 0 0 6 0 0",
    ]);
    const objPieces = {
        peao: 0,
        bispo: 0,
        cavalo: 0,
        torre: 0,
        rainha: 0,
        rei: 0,
    };
    const [pieces, setPieces] = useState(objPieces);

    useEffect(() => {
        matrix.forEach(matrix => {
            const row = matrix.split(' ');

            row.forEach(row => {
                if(row === '1')
                    setPieces({ ...pieces, peao: pieces.peao += 1 });

                if(row === '2')
                    setPieces({ ...pieces, bispo: pieces.bispo += 1 });

                if(row === '3')
                    setPieces({ ...pieces, cavalo: pieces.cavalo += 1 });

                if(row === '4')
                    setPieces({ ...pieces, torre: pieces.torre += 1 });

                if(row === '5')
                    setPieces({ ...pieces, rainha: pieces.rainha += 1 });

                if(row === '6')
                    setPieces({ ...pieces, rei: pieces.rei += 1 });
            })
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [matrix]);

    function newMatrix() {
        const newMatrix = [];
        matrix.forEach(matrix => {
            const arrMatrix = [];
            for(let i = 1; i <= 4; i++) {
                const randomNum = Math.floor(Math.random()* 7);
                if(randomNum === 1){
                    arrMatrix.push(0);
                    arrMatrix.push(randomNum);
                } else {
                    arrMatrix.push(randomNum);
                    arrMatrix.push(0);
                }
            }
            

            newMatrix.push(arrMatrix.join(' '));
        });
        setPieces({...objPieces});
        setMatrix(newMatrix);
    }

    return(
        <>
            <Header />
            <main className="container chess-box">
                <h1 className="title">Contando peças de xadrez</h1>
                <table className="chess-box__table-chess">
                    <thead>
                        <tr>
                            <th colSpan="8">Tabuleiro</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        matrix.map((matrix, index) => {
                            const numbersMatrix = matrix.split(' ');
                            return (
                                <tr key={index}>
                                    {numbersMatrix.map((numbers, index) => numbers !== '0' 
                                    ? (<td key={index} style={{ color: "var(--blue-light)" }}>{numbers}</td>)
                                    : (<td key={index}>{numbers}</td>))}
                                </tr>
                            );
                        })
                    }
                    </tbody> 
                </table>

                <button className="btn-random-matrix" onClick={newMatrix}>Gerar novo tabuleiro</button>

                <footer className="chess-box__result">
                    <h3 className="subtitle">Resultado</h3>
                    <ul className="chess-box__list-pieces">
                        <li>Peão: {pieces.peao}</li>
                        <li>Bispo: {pieces.bispo}</li>
                        <li>Cavalo: {pieces.cavalo}</li>
                        <li>Torre: {pieces.torre}</li>
                        <li>Rainha: {pieces.rainha}</li>
                        <li>Rei: {pieces.rei}</li>
                    </ul>
                </footer>
            </main>
        </>
    );
}