import React from 'react'

function TodoForm({ addProducts }) {
    return (
        <div>
            <form onSubmit = {addProducts}>
            <input type="text" name="name" placeholder="Enter the Name"/><br/>
            <input type="text" name="status" placeholder="Enter the Status"/>
            <button >Add </button>
        </form>
        </div>
    )
}

export default TodoForm
