import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function TodoContainer() {
    const [products, setProducts] = useState([])
    
    function addProducts(e){
        e.preventDefault();
        let newProducts = products.concat({ name:e.target.name.value,  status:e.target.status.value })
        setProducts(newProducts);
        e.target.name.value = "";
        e.target.status.value = "";
    }

    function deleteProduct(indexToDelete) {
        let array =products.filter(( val, index) => {
         if(indexToDelete == index) {
             return false
         } else return true
        })
        setProducts(array)
    }
    function clearall(){
        setProducts([])
    }
    return (
        <div>
        <h3>Todo form</h3>
        <TodoForm addProducts= {addProducts} />
        <button onClick={clearall} >Clear All</button>
        <TodoList products={products} deleteProduct = {deleteProduct} />
        </div>
    )
}

export default TodoContainer
