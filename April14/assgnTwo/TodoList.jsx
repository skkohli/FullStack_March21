import React from 'react';
import TodoComponent from "./TodoComponent";

function TodoList({ products , deleteProduct}) {
    return (
        <div>
            <h1>Todos:</h1>  
          {
              products.map(function(val, index){
                  return <TodoComponent val={val} index={index} deleteProduct={deleteProduct}/>
                  
                  
              })
          }
        </div>
    )
}

export default TodoList
