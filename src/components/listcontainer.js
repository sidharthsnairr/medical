import { useSelector } from "react-redux";
import Listitem from "./listitem";
import React from "react";

function Listcontainer(props) {
    var todos = useSelector((store)=>{return store.todos})

    return <div className="col-md-12">
      {todos.map((todo)=>(
        <Listitem
            key={todo.id} 
            todoitem={todo}/>
      ))}
    </div>;
}
export default Listcontainer;