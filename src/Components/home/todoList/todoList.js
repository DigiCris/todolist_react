import React from "react";
import {TodoItem} from './todoItem/todoItem';
import './css/todoList.css';



function TodoList({todos,setTodos})
{
    var i=0;
    return(
            <section className="TodoList">
                <ul>
                    {todos.map(todo => (
                        <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
                    ))}
                </ul>
            </section>
    );
}

export {TodoList};