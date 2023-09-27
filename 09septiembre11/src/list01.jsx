// Siempre debe ir este import de React
import React from "react";

// El componente responde a una Lista de ul
function List(){
    // En este lugar se nos permite 
    return (
        // En este lugar colocamos código de HTML
        <>
        <ul>
            <li><b>Producto:</b> Teclado. </li>
            <li><b>Precio:</b> $1250. </li>
            <li><b>Marca:</b> Genius</li>
        </ul>
        </>
    )
}

export default List;