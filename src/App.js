import { useState } from 'react';
import Addtodolist from './components/Addtodolist';
import Listcontainer from './components/listcontainer';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  var [state,setState] = useState({
    todos: [
      { id: 1, title: "My first state", completed: false },
      { id: 2, title: "My second state", completed: false },
      { id: 3, title: "My third state", completed: false },
      { id: 4, title: "My fourth state", completed: false },
      { id: 5, title: "My fifth state", completed: false },
    ],
  });
  function addtodo(newTask) {
    var x = state.todos.length+1;
    setState({
      todos: state.todos.concat({
        id: x,
        title: newTask,
        completed: false
      }),
    });
  }
  function updateStatus(id) {
    setState({
      todos: state.todos.map((todo)=>{
        if(todo.id==id){
          todo.completed=!todo.completed;
        }
        return todo;
      })
    })
  }
  function removeItem(id) {
    setState({
      todos: state.todos.filter((todo)=>{
        return todo.id!==id;
      })
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
        <Addtodolist add={addtodo}/>
        <Listcontainer 
        todos={state.todos} 
        toggleMark={updateStatus}
        deleteItem={removeItem}/>
      </div>
    </div>
  );
}

export default App;