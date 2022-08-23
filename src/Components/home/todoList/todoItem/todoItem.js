import React from "react";
import './css/todoItem.css';

function TodoItem(props)
{
    function onComplete()
    {
        //alert('Completaste '+props.text);
        //const ComplitedText=props.text;
        props.onComplete(props.text);
    }

    function onDelete()
    {
        //alert('Borraste '+props.text);
        props.onDelete(props.text);
    }

    return(
        <li className="TodoItem">
            <span className="tick" onClick={onComplete}>✔</span> <span className={props.completed ? 'TodoItem-complete' : undefined} >{props.text}</span> <span className="cross" onClick={onDelete}>❎</span>
        </li>
    );
}

export {TodoItem};