import './index.css';
import inverter from '../../service/1';
import { useEffect } from 'react';

export default function Inverter() {
  const [conteudo, setConteudo] = useState([]);
  const [resposta, setResposta] = useState([]);
  const [numberone, setNumberone] = useState(0)
  useEffect(() => {
  }, []);

  function adicionar(value) {
    setConteudo([...conteudo, value]);
  }

  function concluir(){
    setResposta(inverter(conteudo));
  }

  return (
    <div>
      <header className="App-header">
        <h1>Menu</h1>
      </header>
      <div className='div'>
        <label>Número</label>
        <input type='number' value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
        <button onClick={adicionar(numberone)}>Add</button>
        <button onClick={concluir}>Inverter</button>
        </div>
      <div>
        {resposta.map((resposta)=>(<p>{resposta}</p>))}
      </div>      
    </div>
  )
}

