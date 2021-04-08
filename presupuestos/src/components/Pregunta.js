import React, { Fragment, useState } from 'react';
import Errores from './Errores';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

    // Definir state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10));
    }

    // Submit para definir presupuesto

    const agregarPresupusto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // Si pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
        
    }


    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Errores mensaje="El presupuesto es Incorrecto" /> : null}

            <form 
                onSubmit={agregarPresupusto}
            >

                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                
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
 
export default Pregunta
;