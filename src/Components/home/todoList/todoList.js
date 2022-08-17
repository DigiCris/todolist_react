import React from "react";
import {TodoItem} from './todoItem/todoItem';
import './css/todoList.css';


const todos = [
    {text:'Cortar cebolla', completed:false},
    {text:'Tormar el curso de intro a react', completed:false},
    {text:'Llorar con la llorona', completed:false}
  ];

function TodoList()
{
    var i=0;
    return(
            <section className="TodoList">
                <ul>
                    {todos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} />
                    ))}
                </ul>
            </section>
    );
}

export {TodoList};