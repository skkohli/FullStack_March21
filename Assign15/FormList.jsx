import React from 'react'
import FormOne from './FormOne';
import FormTopic from "./FormTopic";
function FormList({formdata, removeForm }) {
    return (
        <div>
            <FormTopic formdata={ formdata } removeForm = {removeForm } />
            {/* {
                formdata.map((val, index) => {
                    return (
                        <FormOne formdata={formdata} val={val} />
                    )
                })
            } */}
        </div>
    )
}

export default FormList
