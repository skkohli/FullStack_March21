import React from 'react'

function FormOne({ formData, val, removeForm, index}) {
    return (
        <div>
           {/* Name: {val.Area}
           User:{val.User}
           Date: {val.Date}
           Tiem: {val.Time} */}
           <tr>
                                <td>{val.Area}</td>
                                <td>{val.User} </td>
                                <td>{val.Date} </td>
                                <td> {val.Time} </td>
                                <td><button onClick={()=>{removeForm(index)}} >Delete</button></td>
                                </tr>
        </div>
    )
}

export default FormOne
