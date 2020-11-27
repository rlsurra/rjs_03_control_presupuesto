import React from 'react';
import Gasto from './Gasto'
import PropTypes from 'prop-types'

const ListadoGastos = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(g => (
                <Gasto
                    key={g.id}
                    gasto={g}
                />
            ))}
        </div>
     );

}

ListadoGastos.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default ListadoGastos;