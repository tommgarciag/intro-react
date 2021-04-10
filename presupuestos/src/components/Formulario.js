import React, { useState } from "react";
import Errores from './Errores';
import shortid from 'shortid';

const Formulario = () => {

  // State

  const [ nombreGasto, guardarNombre ] = useState('');
  const [ cantidadGasto, guardarGasto ] = useState(0);
  const [ error, guardarError ] = useState(false);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto.trim() === '') {
      guardarError(true);
      return;
    }

    // Si pasa la validacion
    guardarError(false);

    // Construir gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: shortid.generate()
    }

    console.log(gasto);

    // Pasar el gasto al componente principal


    // Limpiar formulario
  }

  
  return (
    <form
      onSubmit={agregarGasto}
    
    >
      <h2>Agrega tus gastos aqui</h2>

      {error ? <Errores mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombreGasto}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad gasto</label>
        <input 
            type="number" 
            className="u-full-width" 
            placeholder="Ej. 300" 
            value={cantidadGasto}
            onChange={e => guardarGasto(parseInt(e.target.value, 10))}
            
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Añadir gasto"          
      />
      
    </form>
  );
};

export default Formulario;
