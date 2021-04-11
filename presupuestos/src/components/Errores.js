import React from 'react';
import PropTypes from 'prop-types';

const Errores = ({mensaje}) => (
     <p className="alert alert-danger error">{mensaje}</p>
     
);

Errores.propTypes = {
     mensaje: PropTypes.string.isRequired
}

 
export default Errores;