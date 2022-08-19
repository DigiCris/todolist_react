import React from "react";
import './css/todoItem.css';

function TodoItem(props)
{
    function onComplete()
    {
        alert('Completaste '+props.text);
    }

    function onDelete()
    {
        alert('Borraste '+props.text);
    }

    return(
        <li className="TodoItem">
            <span className="tick" onClick={onComplete}>✔</span> {props.text} <span className="cross" onClick={onDelete}>❎</span>
        </li>
    );
}

export {TodoItem};