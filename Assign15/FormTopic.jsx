import React from 'react'
import FormOne from './FormOne'

function FormTopic({ formdata, removeForm}) {
    return (
        <div>
               <table border="2|2">
                 <thead>
                     <tr>
                         <th>Text</th>
                         <th>User</th>
                         <th>Date</th>
                         <th>Time</th>
                         <th>Button</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                        formdata.map((val, index) => {
                            return (
                                <tr>
                                <td>{val.Area}</td>
                                <td>{val.User} </td>
                                <td>{val.Date} </td>
                                <td> {val.Time} </td>
                                <td><button onClick={()=>{removeForm(index)}} >Delete</button></td>
                                </tr>
                                
                                
                            )
                        })
                     }
                 </tbody>
               </table>
           </div>
    )
}

export default FormTopic
