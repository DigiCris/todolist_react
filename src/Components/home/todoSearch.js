import React from "react";
import './css/todoSearch.css';

function TodoSearch()
{
    function buscar(event)
    {
        console.log(event.target.value);
    }
    return(
            <input placeholder="Cebolla"  className="TodoSearch" onChange={buscar}></input>
    );
}

export {TodoSearch};