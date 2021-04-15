import React, { useState } from 'react'


function ForumForm({ storeLocal }) {
    

    return (
        <div>
            
           <form name="name" onSubmit={storeLocal}>
           <textarea name="area" placeholder="describtion" col="20" row="20" />
           <select id="users" name="users">
                <option value="Munna" >Munna </option>
                <option value="Ashooo" >Ashoo</option>
                <option value="Yog" >Yog</option>
                <option value="Mustak">Mustaq</option>
            </select>
            <button>Submit</button>
           </form>
          
        </div>
    )
}

export default ForumForm
