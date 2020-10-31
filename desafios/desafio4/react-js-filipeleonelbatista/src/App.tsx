import React, { useEffect, useState } from 'react';
import { FaAdjust,
         FaShareAlt, 
         FaInstagram, 
         FaLinkedinIn, 
         FaGithub, 
         FaDiscord } from 'react-icons/fa';
import './App.css';

function App() {
  const [valor, setValor] = useState("0,00");
  const [percentual, setPercentual] = useState(0);
  const [pessoas, setPessoas] = useState(1);

  const [valorTotal, setValorTotal] = useState("0,00");
  const [gorjeta, setGorjeta] = useState("0,00");

 
  useEffect(() => {

    let value = valor.replaceAll(".", "");
    value = value.replace(",", ".");

    let result = parseFloat(value);

    let x = percentual === 0 ? 0 : ((result*percentual)/100) / pessoas
    let y = result/pessoas;
    console.log({result, x,y})
    setValorTotal(y.toFixed(2).toString().replace('.',','))
    setGorjeta(x.toFixed(2).toString().replace('.',','))
    
  }, [valor, percentual, pessoas]);

  function handleKeyUp(e: React.FormEvent<HTMLInputElement>){
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value;
    setValor(value);
  }
  function handleAddPercentual(){
    if(percentual < 100){
      setPercentual(percentual+1);
    }
  }
  function handleRemovePercentual(){
    if(percentual >= 1){
      setPercentual(percentual-1);
    }
  }  

  function handleAddPessoas(){
      setPessoas(pessoas+1);
  }
  function handleRemovePessoas(){
    if(pessoas > 1){
      setPessoas(pessoas-1);
    }
  }

  return (
    <div className="container">
      <header>        
        <button type="button" className="btn-share" style={{ opacity: 0 }}>
          <FaAdjust color="#FFF" size={16} />
        </button>
        <h2>Tip Calculator</h2>
        <button type="button" className="btn-share" style={{ opacity: 0 }}>          
          <FaShareAlt color="#FFF" size={16} />
        </button>
      </header>
      <main>

        <div className="input-group">
          <label htmlFor="valor">Valor</label>
          <input 
            type="text" 
            name="valor" 
            id="valor" 
            onKeyUp={handleKeyUp}
            value={valor}
            onChange={ (e) => {setValor(e.target.value)} }
            />
        </div>

        <div className="input-group">
          <label htmlFor="valor">Percentual</label>
          <div className="input-button-group">
            <button onClick={handleRemovePercentual} type="button" className="btn-share" >
              -
            </button>
            <input 
              type="number" 
              name="percentual" 
              id="percentual"
              value={percentual}
              onChange={ (e) => { ( parseInt(e.target.value) <= 100 && parseInt(e.target.value) >= 0) ? setPercentual(parseInt(e.target.value)) : setPercentual(0) } }
               />
            <button onClick={handleAddPercentual} type="button" className="btn-share">
              +
            </button>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="valor">Pessoas</label>
          <div className="input-button-group">
            <button onClick={handleRemovePessoas} type="button" className="btn-share">
              -
            </button>
            <input 
              type="number" 
              name="valor" 
              id="valor" 
              value={pessoas}
              onChange={ (e) => { parseInt(e.target.value) > 0  ? setPessoas(parseInt(e.target.value)) : setPessoas(0) } }
              />
            <button onClick={handleAddPessoas} type="button" className="btn-share">
              +
            </button>
          </div>
        </div>

        <div className="result">
          <div className="totalTip">
              Valor Gorjeta: R$ {gorjeta}
          </div>
          <div className="totalPrice">
            Valor: R$ {valorTotal}
          </div>
        </div>

      </main>
      <footer>
        <div className="social">
            <a href="https://instagram.com/filipegaucho22" target="_blank" rel="noopener noreferrer">                      
              <FaInstagram color="#FFF" size={16} />
            </a>
            <a href="https://www.linkedin.com/in/filipelbatista/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn color="#FFF" size={16} />
            </a>
            <a href="https://github.com/filipeleonelbatista/" target="_blank" rel="noopener noreferrer">
              <FaGithub color="#FFF" size={16} />
            </a>
            <a href="https://discord.gg/yvYXhGj" target="_blank" rel="noopener noreferrer">
              <FaDiscord color="#FFF" size={16} />
            </a>
        </div>
        <div className="footer">
          <strong>Desenvolvido com por Filipe Batista</strong>
          <p>Hacktoberfest 2020</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
