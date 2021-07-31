import { useState } from 'react';
import Header from '../Header';
import './calc.css';

export default function FourthChallenge() {
    const [formDatas, setFormDatas] = useState();

    function formCalc(e) {
        e.preventDefault();
        const [priceString, tipPercentString, peopleSplitString] = document.querySelectorAll('.form-calc__input');
        let price = Number(priceString.value);
        const tipPercent = Number(tipPercentString.value);
        const peopleSplit = Number(peopleSplitString.value);
        const tipValue = calcTip(price, tipPercent);

        setFormDatas({
            price: calcTotalPrice(price, tipValue),
            tip: tipValue.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
            perPerson: calcPersonSplit(price, peopleSplit),
            peoples: peopleSplit
        });

        // Clear inputs
        priceString.value = '';
        tipPercentString.value = '';
        peopleSplitString.value = '1';
    }

    function calcTip(price, percent) {
        return Math.round((price / 100) * percent);
    }

    function calcTotalPrice(price, tipPercent){
        return (price + tipPercent).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }
      
    function calcPersonSplit(price, peopleSplit){
      return (price / peopleSplit).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
    }

    return(
        <>
            <Header />
            <main style={{ margin: '48px auto' }} className="container">
                <h2 className="title">Calculadora de contas</h2>

                <form className="form-calc" onSubmit={formCalc}>
                    <fieldset className="form-calc-box">
                        <label className="form-calc__label" htmlFor="price">Valor da conta:</label>
                        <input className="form-calc__input" min="5" required type="number" id="price" name="price" placeholder="Valor da conta" />
                    </fieldset>
                    <fieldset className="form-calc-box">
                        <label className="form-calc__label" htmlFor="tip">Gorjeta do garçom(%):</label>
                        <input className="form-calc__input" required type="number" id="tip" name="tip" placeholder="Gorjeta do garçom" />
                    </fieldset>
                    <fieldset className="form-calc-box">
                        <label className="form-calc__label" htmlFor="peopleSplit">Quantos dividem a conta?:</label>
                        <input className="form-calc__input" min='1' required type="number" id="peopleSplit" name="peopleSplit" placeholder="Quantos dividem a conta?" />
                    </fieldset>

                    <input className="form-calc__sub" type="submit" value="Calcular" />
                </form>

                <aside className="result-form">
                    <h3 className="subtitle">Resultado da conta:</h3>
                        {
                            formDatas === undefined
                            ? <p style={{color: "var(--black)", marginTop: '8px'}} className="paragraph">Faça o cálculo para descobrir o resultado</p>
                            : (
                                <ul className="result-form__list-results">
                                    <li style={{color: "var(--black)", marginBottom: '8px'}} className="paragraph">
                                        {"Valor total: " + formDatas.price}
                                    </li>
                                    <li style={{color: "var(--black)", margin: '8px 0'}} className="paragraph">
                                        {"Valor da gorjeta: " + formDatas.tip}
                                    </li>
                                    <li style={{color: "var(--black)", marginTop: '8px'}} className="paragraph">
                                        {
                                            formDatas.peoples > 1
                                            ? "Cada pessoa vai pagar: " + formDatas.perPerson
                                            : "Você vai pagar: " + formDatas.perPerson
                                        }
                                    </li>
                                </ul>
                            )
                        }
                </aside>
            </main>
        </>
    );
}