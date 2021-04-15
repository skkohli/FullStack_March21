import React,{ useEffect, useState } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"
import axios from "axios";

function CarEmployee() {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('table.json')
        .then(res=> {
            setData(res.data)
        })
    }, [])


    const columns = [{
        Header: "Name",
        accessor: "name"
    },{
        Header: "Location",
        accessor:"loc"
    }]

    return (
        <div>
            <ReactTable
            data={data}
            columns={columns}
            defaultPageSize={1}
            pageSizeOptions={[2,4,6]} 
            />
        </div>
    )
}

export default CarEmployee



