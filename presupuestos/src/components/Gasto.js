import React from 'react';

const Gasto = ({gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}
            <span className="gasto">
                $ {gasto.cantidad}
            </span>
        </p>
    </li>
    // console.log(gasto)
 );

 
export default Gasto;