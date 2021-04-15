import React, { useState } from 'react'
import ForumForm from './ForumForm';
import FormList from './FormList';

function ForumContainer() {
    const [ formdata, setForm] = useState([])
 
    const storeLocal = (e) => {
        e.preventDefault();
        
        let date = new Date().toLocaleDateString();
        let time = new Date().toLocaleTimeString();
        let newForm = formdata.concat({
            Area:e.target.area.value,
            User:e.target.users.value,
            Date:date, 
            Time:time,
            mil:new Date().getTime()
           })
        setForm(newForm)    
        localStorage.setItem("Info", JSON.stringify(newForm))
    }

    const removeForm = (indextodelete) => {
       let newArray = formdata.filter((val, index)=>{
         if(index == indextodelete)
         return false;
         return true;
       })
       let remove = window.confirm("Are sure want to Delete")
       if(remove){
        setForm(newArray)    
       }
    }
    const deleteAfterFive = () =>{
        // let dayTwo = new Date();
        // let currentTime = dayTwo.getTime();
        // let min = Math.floor(currentTime/1000/60)
        // let newArrayTwo = formdata.filter((val) => {
        //     if(Math.floor(val.Time/1000/60)<= min -5){
        //         return false
        //     } else {
        //         return true
        //     }
        // })
        let day = new Date().getTime();
        let currentday = Math.floor(day/1000/60);
        let nes = formdata.filter(function(val){
            if(Math.floor(val.mil/1000/60)<= currentday-5)
            return false
            return true
        })
        setForm(nes)
    }
    return (
        <div>
            <ForumForm storeLocal={storeLocal}/>
            <FormList formdata={formdata} removeForm={removeForm} />
            <button onClick={deleteAfterFive} >Delete Five</button>
        </div>
    )
}

export default ForumContainer
