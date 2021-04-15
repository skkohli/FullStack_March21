import React, { useState, useEffect } from 'react';
import axios from "axios";

function Name() {
    const [products, setProducts] = useState({ products: []})
    useEffect(()=> {
        axios.get("productname.json")
        .then(res => {
            setProducts(res.data)
        })
    }, [])
    return ( 
        <div>
            <h1>The product names are: </h1>
            Product name: {products.products}<br/>
        </div>
    )
}

export default Name
