import React from "react";
import './css/todoSearch.css';

function TodoSearch({searchValue, setSearchValue})
{
    //const [searchValue, setSearchValue]=React.useState('');

    function buscar(event)
    {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
        <div>
            <input placeholder="Cebolla"  className="TodoSearch" onChange={buscar}></input>
        </div>  
    );
}

export {TodoSearch};