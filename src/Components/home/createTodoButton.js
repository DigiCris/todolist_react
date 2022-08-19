import React from "react";
import './css/createTodoButton.css';

function CreateTodoButton()
{
    function onClickButton(msg)
    {
        alert(msg);
    }
    return(
        <button className="CreateTodoButton" onClick={()=>onClickButton("AddTodo")}>+</button>
    );
}

export {CreateTodoButton};