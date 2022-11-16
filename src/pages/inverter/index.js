import './index.css';
import inverter from '../../service/1';
import { useEffect } from 'react';


function Inverter() {
    const arr = [];
    const numero = 0;
    const pos = 0;

   useEffect();

   function adicionar(){
        arr[pos] = numero;
        alert("Número adicionado");
   } 
   function invert(){
        resposta = inverter(arr)
        return resp;
   }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Menu
        </h1>
      </header>
      <section>
        <div>
            <label>Insira um Número:</label>
            <input type={number}/>
            <button onClick={adicionar}>Adicionar</button>
        </div>
        <div>
            <button onClick={invert}>Inverter</button>
            *Array em Row*
        </div>
      </section>
    </div>
  );
}

export default Inverter;
