import "../styles/App.scss"
import data from "../services/data.json"
import { useState } from "react";

function App() {

  const [index, setIndex] = useState(null);

  function getRandomNum() {
    const num = Math.floor(Math.random() * data.length);
    setIndex(num)
  }

  return (
    <>
      <main className="main">
        <section className="main__container">
          <div className="main__container--title">
            <h1 className="title">Perla Shumajer</h1>
            <p className="subtitle">y sus perlas de sabiduría</p>
          </div>
          <div className="card-container">
          <div className="card">
            <p className="card__quote">{index === null ? "Pulsa el botón para generar una frase." : `"${data[index]}".`}</p>
            <p className="card__author">{index === null ? "" : "-Perla Shumajer"}</p>
          </div>
          </div>
          <button className="button" onClick={getRandomNum}>GENERAR</button>
          <div className="main__credits">
            <p><a href="https://github.com/aidanarr/frases-shumajer" target="_blank">Repositorio</a></p>
            <div>
            <p className="main__credits--author">¿Quién es Perla Shumajer?</p>
            <p className="main__credits--bio hidden">Pamela Muñoz Muñoz Gonzales Pardo Sarmiento, más conocida como Perla Shumajer, es una prolífica escritora de fanfic que estuvo activa en internet durante los años 2006-2010. En ocasiones calificada como "la reina del badfic", es conocida por su estilo estrambótico y redundante y sus largas descripciones. Durante sus años de actividad, escribió numerosas historias ambientadas en el universo de <span>Harry Potter</span>, aunque también exploró otras ficciones como <span>El Señor de los Anillos</span> o <span>Super Mario Bros</span>. Shumajer nos ha dejado todo un legado de frases icónicas y, sin duda, ha marcado tendencia entre quienes escriben badfic de forma irónica.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
