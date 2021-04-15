import React,{ useState, useEffect} from 'react';
import axios from "axios";

function NamesINfo() {
    const [ product, setProduct] = useState({products:[], brand:"default",delivery:"default"});
    const [no, setNo] = useState([])
    const [ title, setTitle] = useState([])
    useEffect(()=>{
        axios.get('productnamedetails.json')
        .then(function(res){
            console.log(res);
            setProduct(res.data);
            setNo(res.data.products);
            setTitle(res.data.brand);
        })
    },[])
    const removeElement = (indextodelete)=>{
        let vals  = no.filter(function(val,index){
            if(index == indextodelete)
                return false;
            return true;
        })
        setNo(vals);
    }       
    const removeAll =()=>{
        setNo([])
    } 
    function changeTitle (event){
        event.preventDefault();
        let titl = event.target.title.value;
        setTitle(titl);
    }

    return(
        <div>
            <h1>The product details are:</h1>
            <button onClick={removeAll}>delete all</button>
            <h1>brand: {title}</h1>
            <div>delivery: {product.delivery}</div>
            <strong>products: </strong> <br></br>
            {
                no.map(function(val,index){
                    return <ul><li>{val} <button onClick={()=>{removeElement(index)
                    } }> delete</button></li></ul>;
                })
            }
            <form onSubmit={changeTitle}>
            <input type="text" name="title" placeholder="enter new title"></input>
            <button>change title</button>
            </form>
        </div>
    )
}

export default NamesINfo
