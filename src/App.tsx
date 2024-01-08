import { useState } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

function App() {

  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  type FrasesTipo1 = {
    id: number;
    categoria: string;
    frases: string[];
  };
  
  type FrasesTipo2 = {
    id: number;
    categoria: string;
    frases: string[];
  };

  type allFrasesProps = FrasesTipo1 | FrasesTipo2;

  const allFrases: allFrasesProps[]  = [
    {
      id:1,
      categoria: "Motivação",
      frases:[
        'Siga os bons e aprenda com eles.',
        'Veja o que diz seu coração',
        'Sempre saiba que tudo será difícil, mas não impossível!'
      ]
    },
    {
      id:2,
      categoria: "Bem Estar",
      frases:[
        'Siga o que seu coração mandar',
        'Esteja sempre em paz com Deus',
        'Nunca escute estranhos!'
      ]
    }
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)

  }

  return (
    <>
      <div className='container'>
        <img src={logoImg} alt="Logo frases" className='logo' />
        <h2 className="title">Categorias</h2>
        <section className='category-area'>
          {allFrases.map((item, index)=> (
            <button className='category-button' key={item.id} style={{ 
                borderWidth: item.categoria === allFrases[categoriaSelecionada].categoria ? 2 : 0,
                borderColor: "#1fa4db"
             }}
             onClick={()=> handleSwitchCategory(index)}
              >{item.categoria}
            </button>
          ))}
        </section>

        <button className="button-frase" onClick={()=> gerarFrase()}>Gerar frase</button>

        { textoFrase !== '' && <p className="textoFrase">{textoFrase}</p> }
        
      </div>
    </>
  )
}

export default App
