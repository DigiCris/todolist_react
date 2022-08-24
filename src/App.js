import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoCounter} from './Components/home/todoCounter';
import {TodoSearch} from  './Components/home/todoSearch';
import {TodoList} from  './Components/home/todoList/todoList';
import {CreateTodoButton} from  './Components/home/createTodoButton';




function useLocalStorage(itemName, initialValue)
{
  const [items,setItems]=React.useState(initialValue);
  const [loading, setLoading]=React.useState(true);
  const [error, setError]=React.useState(false);

  React.useEffect( () => {

    setTimeout( () => {

      try {
        let defaultItems = initialValue;

        if(!localStorage.getItem(itemName))
        {
            defaultItems = initialValue; /*[ 
            {text:'Cortar cebolla', completed:false},
            {text:'Tormar el curso de intro a react', completed:false},
            {text:'Llorar con la llorona', completed:false}
          ];*/
          localStorage.setItem(itemName,JSON.stringify(defaultItems));
        }
        else
        {
          defaultItems= JSON.parse(localStorage.getItem(itemName));
        }
        setItems(defaultItems);
        setLoading(false);       
      } catch (error) {
        setError(error);    
      }
    } , 2000 );
  },[]);


  function saveItems(newItems)
  {
    try {
      if(items!=newItems)
      {
        setItems(newItems);
        localStorage.setItem(itemName,JSON.stringify(newItems));      
      }      
    } catch (error) {
      setError(error); 
    }
  }

  return{items, saveItems, error, loading};

}




function App() {


  const [searchValue, setSearchValue]=React.useState('');

  const {items:todos, saveItems:setTodos, error, loading}=useLocalStorage('MyTodos',[]);


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

  function completeTodos(text)
  {
    const todoIndex=searchTodos.findIndex(todo=> todo.text===text);
    let newTodos=[...searchTodos];
    newTodos[todoIndex].completed=true;
    console.log(newTodos);
    //saveTodos(newTodos);
    setTodos(newTodos);
  }

  function deleteTodos(text)
  {
    const todoIndex=searchTodos.findIndex(todo=> todo.text===text);
    let newTodos=[...searchTodos];
    newTodos.splice(todoIndex,1);
    console.log(newTodos);
    //saveTodos(newTodos);
    setTodos(newTodos);
  }


  return (
    <div className="content">
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      {error && <p>Hubo un error al cargar la pagina. vuelve a intentarlo</p>}
      {loading && <p>Estamos cargando...</p>}
      {(!loading && !searchTodos.length) && <p>Crea tu primer todo.</p>}

      <TodoList todos={searchTodos} setTodos={setTodos} onComplete={completeTodos} onDelete={deleteTodos} />
  <CreateTodoButton />{/**/}
    </div>
  );
}

export default App;
