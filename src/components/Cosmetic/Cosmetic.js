import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const {id, picture, price, name, brand} = props.product;
    const addToCart=(id)=>{
        addToDb(id);
    }
    return (
          <div className='grid-item'>
          <img src={picture} alt="" />
            <h1>Product Name: {name}</h1>
            <p>Brand: {brand}</p>
            <h3>price: ${price}</h3>
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
            <p>id:{id}</p>
          </div>
            
            

        
    );
};

export default Cosmetic;