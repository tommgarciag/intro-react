import React, { useState } from "react";
import Errores from './Errores';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

  // State

  const [ nombre, guardarNombre ] = useState('');
  const [ cantidad, guardarCantidad ] = useState(0);
  const [ error, guardarError ] = useState(false);

  // Cuando el usuario agrega un gasto
  const agregarGasto = e => {
    e.preventDefault();

    // Validar
    if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
      guardarError(true);
      return;
    }

    // Si pasa la validacion
    guardarError(false);

    // Construir gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    
    // Pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true);


    // Limpiar formulario
    guardarNombre('');
    guardarCantidad(0);
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
          value={nombre}
          onChange={e => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label>Cantidad gasto</label>
        <input 
            type="number" 
            className="u-full-width" 
            placeholder="Ej. 300" 
            value={cantidad}
            onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
            
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
