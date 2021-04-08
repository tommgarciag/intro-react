import React, { useState } from "react";

const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus gastos aqui</h2>

      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
        />

        <label>Cantidad gasto</label>
        <input 
            type="number" 
            className="u-full-width" 
            placeholder="Ej. 300" 
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Añadir gasto"
        />
      </div>
    </form>
  );
};

export default Formulario;
