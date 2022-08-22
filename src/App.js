import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoCounter} from './Components/home/todoCounter';
import {TodoSearch} from  './Components/home/todoSearch';
import {TodoList} from  './Components/home/todoList/todoList';
import {CreateTodoButton} from  './Components/home/createTodoButton';


const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:true},
  {text:'Llorar con la llorona', completed:true}
];

function App() {


  const [searchValue, setSearchValue]=React.useState('');
  const [todos,setTodos]=React.useState(defaultTodos);

  const completedTodos=todos.filter( todo => todo.completed==true ).length;
  const totalTodos=todos.length;

  let searchTodos = [];

  if (!searchValue.length >= 1) 
  {
    searchTodos = todos;
  } 
  else 
  {
    searchTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }


  return (
    <div className="content">
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList todos={searchTodos} setTodos={setTodos}/>
  <CreateTodoButton />{/**/}
    </div>
  );
}

export default App;
