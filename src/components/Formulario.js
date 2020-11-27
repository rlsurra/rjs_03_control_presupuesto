import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

const Formulario = ({agregarGasto,restante,setRestante}) => {

    const [nombreGasto,setNombreGasto] = useState('');
    const [cantidadGasto,setCantidadGasto] = useState(0);
    const [error,setError] = useState(false);

    const actualizarPresupuesto = (e) => {
        e.preventDefault();
        //Validar
        if(nombreGasto.trim() === '' || cantidadGasto <= 1 || isNaN(cantidadGasto)){
            setError(true);
            return;
        }
        setError(false);
        //Constuimos el gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }
        agregarGasto(gasto);
        //Actualizo el restante
        setRestante(restante-gasto.cantidadGasto)
        //Reiniciar Form
        setNombreGasto('');
        setCantidadGasto(0);

    }

    return ( 
        <form
            onSubmit={actualizarPresupuesto}
        >
            <h2>Agregar gastos</h2>

            <div className="campo">
                <label>Nombre del gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange = { e => setNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 100"
                    value = {cantidadGasto}
                    onChange = { e => setCantidadGasto(parseInt(e.target.value,10))}
                />
            </div>

            <input
                className="button button-primary u-full-width"
                type="submit"
            />

            { error ? <Error msg="El gasto no es valido" />: null}

        </form>
     );
}

Formulario.propTypes = {
    agregarGasto: PropTypes.func.isRequired,
    restante: PropTypes.number.isRequired,
    setRestante: PropTypes.func.isRequired
}

export default Formulario;