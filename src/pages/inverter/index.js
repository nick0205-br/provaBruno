import './index.css';
import { inverter, Adicionar }from '../../service/1';
import { useEffect } from 'react';

export default function Inverter() {
  const [array, setArray] = useState([]);
  const [numberone, setNumberone] = useState(0)
  useEffect(() => {
  }, []);

  function adicionar(value) {
      let arr = Adicionar(numberone);
      let novoArr = [...array, arr];
      setArray(novoArr);
  }

  function concluir(){
    let invert = inverter(array);
    setArray(invert);
  }

  return (
    <div>
      <header className="App-header">
        <h1>Menu</h1>
      </header>
      <div className='div'>
        Número: <input type='number' value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
        <button onClick={adicionar(numberone)}>Add</button>
        <button onClick={concluir}>Inverter</button>
        </div>
      <div>
        {array.map( resposta => 
            <p>{resposta}</p>
        )}
      </div>      
    </div>
  )
}

