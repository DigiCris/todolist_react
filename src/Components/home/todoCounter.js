import React from "react";

function TodoCounter({completedTodos, totalTodos})
{
    return(
        <h2> Completaste {completedTodos} de {totalTodos}</h2>
    );
}

export {TodoCounter};