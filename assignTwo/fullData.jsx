import {useEffect, useState} from 'react';
import axios from 'axios';

export default function FullData(){
    const [product, setProduct] = useState({products:[],brand:"default", delivery:[]})
    const [no, setNo] = useState([])
    useEffect(()=>{
        axios.get('productsfulldata.json')
        .then(function(res){
            console.log(res);
            setProduct(res.data);
            setNo(res.data.products)
        })
    },[])
    console.log(no);
    const removeElement = (indextodelete)=>{
        let vals  = no.filter(function(val,index){
            if(index == indextodelete)
                return false;
            return true;
        })
        setNo(vals);
    }     
    return(
        <div>
            <strong><p>The product details are: </p></strong>
            <strong>products: </strong> <br></br>
            {
                no.map(function(val,index){
                    return <ul><li>Name: {val.name}</li>
                    <li> Price: {val.price}</li>
                    <li>available: {val.available}</li><button onClick={()=>{removeElement(index)
                    } }> delete product</button></ul>;
                })
            }
             <strong>Deliverymode: </strong> <br></br>
            {
                product.delivery.map(function(val){
                    return <ul><li> {val}</li></ul>
                })
            }
                
        </div>
    )
}