import React, { useState, useEffect } from 'react';
import axios from "axios";
import loader from './loader.gif';


export default function Details() {
    const [info, setInfo] = useState();
    const [load, setLoad] = useState(true);
    const [chennainame, setChennainame] = useState([])
    const [totalusers, setTotalusers] = useState([])
    const [hobby, setHobby] = useState([])
    useEffect(() => {
     setTimeout(() => {
         setLoad(false)
     }, 3000)
     axios.get("details.json")
        .then(res => {
            setInfo(res.data)
        })
    }, []);

    const showDetails = () => {
        axios.get("details.json")
        .then(res => {
            setInfo(res.data)
        })
    }

    const showTotalUsers = () => {
      setTotalusers(info.length)
    }

    const deleteAll = () => {
        setInfo([])
    }


    const showChennaiUsers = () => {
       let n = info.filter(function(val){
           if(val.location == "chennai" || val.location == "chennai") {
               return val;
           }
       })
       setChennainame(n)
    }


    const showHobbies = (e) => {
        e.preventDefault();
        let out = info.filter(function(val){
            if( val.hobbies[0] === e.target.hobbyname.value || 
                val.hobbies[0] === e.target.hobbyname.value || 
                val.hobbies[0] === e.target.hobbyname.value 
             ) {  return val;}
      
    })
    setHobby(out)
}

    const removeElement = (indexToDelete) => {
        let newArr = info.filter(function(val, index){
            if(index == indexToDelete)
            return false;
            return true
        })
        setInfo(newArr)
    }

    // const showChennaiUsers = () =>{
    //     setTotalusers(user.length)
    // }
    console.log(info) 
    return (
        <>
        {load ? <img src={loader} /> :  
            <div>
                <button onClick={showDetails} >Show Details</button><br/>
                <button onClick={showTotalUsers} > Show All Users</button><br/>
                <button onClick={deleteAll} > Delete All Users</button><br/>
                <button onClick={showChennaiUsers} > Show Chennai Users</button><br/>
                <form onSubmit={showHobbies}>
                <input type="text" name="hobbyname" placeholder="Enter the hobbies" /><br/>
                <button>Search Hobbies</button>
                </form><br/>

                <h2>The Datails of Students: </h2>
                {info.map((val, index) => {
                    return (
                        <div>
                            <hr/>
                            <div>
                                <strong>
                                    Name:
                                </strong>{val.name} <br/>
                            </div>
                            <div>
                                <strong>
                                    Location:
                                </strong>{val.location} <br/>
                            </div>
                            <div>
                                <strong>
                                    Hobbies:
                                </strong><p>{val.hobbies.map(a=>{
                                    <li>{a}</li>
                                })}</p> 
                            </div>
                            <div>
                                <strong>
                                    Personal Info:
                                </strong>
                                 <li>Age: {val.personalinfo.age}</li>
                                 <li>Bank Account: {val.personalinfo.bankacc}</li>
                                 <li>Pan: {val.personalinfo.pan}</li>
                            </div>
                            <button onClick={() =>{removeElement(index)}}>Delete Element</button>
                        </div>
                    )
                })}
                <strong><div>Total number of users are: {totalusers}</div></strong>
                <strong><div>Users From Chennai are: </div></strong>
                {
                    chennainame.map(function(val){
                        return <div>{val.name}</div>
                    })
                }
                <stromg><div>Search result are</div></stromg>
                {
                    hobby.map(function(val, index){
                        return <tr><td>{val.name}</td></tr>
                    })
                }
            </div>
        }
       
        </>
    )
}


