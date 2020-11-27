import React, { Fragment, useState} from 'react';
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {

    const [cantidad,setCantidad] = useState(0);
    const [error,setError] = useState(false);
    
    const definirPresupuesto = e => {
        e.preventDefault(); //Que no envíe el GET
        //Validar
        if(cantidad < 1 | isNaN(cantidad)) {
            setError(true);
            return;
        }
        //Si pasa la validacion
        setError(false);
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarPregunta(false)
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            
            { error ? <Error msg="El presupuesto no es valido" />: null}

            <form
                onSubmit={definirPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Presupuesto"
                    onChange={ e => setCantidad(parseInt(e.target.value))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarPregunta: PropTypes.func.isRequired
}

export default Pregunta;