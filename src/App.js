import React, {useState} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  const [presupuesto,setPresupuesto] = useState(0);
  const [restante,setRestante] = useState(0);
  const [mostrarPregunta,setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);


  const agregarGasto = (g) => {
    setGastos([
      ...gastos,
      g
    ])
  }

  return (
    <div className="container">
        <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">

            { mostrarPregunta 
              ?
              (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
              )
              :
              (
                <div className="row">

                  <div className="one-half column">
                    <Formulario
                      agregarGasto={agregarGasto}
                      restante={restante}
                      setRestante={setRestante}
                    />
                  </div>

                  <div className="one-half column">

                    <ListadoGastos
                        gastos={gastos}
                    />

                    <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                    />

                  </div>

                </div>
              )
            }


          </div>
        </header>
    </div>
  );
}

export default App;
