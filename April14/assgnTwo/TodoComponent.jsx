import React from 'react'

function TodoComponent({val, index, deleteProduct}) {
    return (
        <div>
            <div>Name: {val.name}, Status: {val.status} <button onClick={()=>{deleteProduct(index)}} >Delete</button> </div>
        </div>
    )
}

export default TodoComponent
