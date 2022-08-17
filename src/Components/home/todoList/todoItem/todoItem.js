import React from "react";
import './css/todoItem.css';

function TodoItem(props)
{
    return(
        <li className="TodoItem">
            <span className="tick">✔</span> {props.text} <span className="cross">❎</span>
        </li>
    );
}

export {TodoItem};