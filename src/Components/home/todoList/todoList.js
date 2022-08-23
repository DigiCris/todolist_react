import React from "react";
import {TodoItem} from './todoItem/todoItem';
import './css/todoList.css';



function TodoList({todos,setTodos,onComplete, onDelete})
{
    var i=0;
    return(
            <section className="TodoList">
                <ul>
                    {todos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={onComplete} onDelete={onDelete}/>
                    ))}
                </ul>
            </section>
    );
}

export {TodoList};