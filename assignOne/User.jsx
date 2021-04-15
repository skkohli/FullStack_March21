import React, { useState, useEffect } from 'react';
import axios from "axios";
import profileimg from './profileimg.jpeg';
import loader from './loader.gif';

function User() {
    const [ info, setInfo ] = useState();
    const [personal, setPerSonal ] = useState ({ personalInfo: {} })
    const [hobbies, setHobbies ] = useState({ hobbies: [] })
    const [ showImage, setImage ] = useState(true);
    const [ load, showLoad ] = useState(true)

    useEffect(() => {
       setTimeout(() => {
        axios.get("userinfo.json")
        .then(res => {
            console.log(res.data)
            setInfo(res.data)
        })
        .finally (()=>{
            console.log('job done');
            showLoad(false);
        })
       }, 3000)
            
        
    }, [])

    const showPersonal = () => {
      setPerSonal(info.personalinfo)
    }

    const showHobbies = () => {
     setHobbies(info)
     alert("hello")
    }

    const hideImage = () => {
       setImage(false)
    }

    return (
        <>
        { load ? <img src= {loader} /> : <div className="align-middle justify-center">
            {showImage ? <img src={profileimg} />: ""}<br/>
            <button onClick={showPersonal} > Personel Info</button><br/>
            <button onClick={showHobbies} >Hobbies</button><br/>
            <button onClick={hideImage} >Image Hide</button><br/>
            <h2>The Personal Info:</h2><br/>
            <table>
                <tr>
                    <th>Age</th>
                    <th>Bank Account</th>
                    <th>Pan</th>
                </tr>
                <tr>
                    <td>{personal.age}</td>
                    <td>{personal.bankacc}</td>
                    <td>{personal.pan}</td>
                </tr>
            </table>
            <strong><p>The hobbies are: </p></strong>
            {
                hobbies.hobbies.map(val => {
                   return <ul><li>{val}</li></ul>
                })
            }
        </div>}
        </>
    )
}

export default User
