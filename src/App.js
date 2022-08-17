import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoCounter} from './Components/home/todoCounter';
import {TodoSearch} from  './Components/home/todoSearch';
import {TodoList} from  './Components/home/todoList/todoList';
import {CreateTodoButton} from  './Components/home/createTodoButton';


function App() {
  return (
    <div className="content">
      <TodoCounter />
      <TodoSearch />
      <TodoList />
  <CreateTodoButton />{/**/}
    </div>
  );
}

export default App;
