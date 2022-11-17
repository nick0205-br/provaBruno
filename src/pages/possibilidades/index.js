import './index.css';
import { useEffect } from 'react';
import { possibilidades, Adicionar } from '../../service/2';

export default function Inverter() {
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);
  const [numberone, setNumberone] = useState(0);
  const [numbertwo, setNumbertwo] = useState(0);
  const [msg, setmsg] = useState('')
  useEffect(() => {
  }, []);

  function adicionar1() {
      let arr = Adicionar(numberone);
      let novoArr = [...array1, arr];
      setArray1(novoArr);
  }

  function adicionar2() {
    let arr = Adicionar(numbertwo);
    let novoArr = [...array2, arr];
    setArray2(novoArr);
}

  function concluir(){
    let mensagem = possibilidades(array1, array2);
    setmsg(mensagem);
  }

  return (
    <div>
      <header className="App-header">
        <h1>Menu</h1>
      </header>
      <div className='div'>
        <div>  
          Pessoa 1: <input type='number' value={numberone} onChange={e => setNumberone(Number(e.target.value))}></input>
          <button onClick={adicionar1}>Add</button>
          {array1}
        </div>
        <div>
          Pessoa 2: <input type='number' value={numbertwo} onChange={e => setNumbertwo(Number(e.target.value))}></input>
          <button onClick={adicionar2}>Add</button>
          {array2}
        </div>
        <button onClick={concluir}>Calcular</button>
        </div>
      <div>
        {msg}
      </div>      
    </div>
  )
}

