/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import Cartitem from './Cartitem'
import './App.css';
 const cart=(props)=> {
 
      const {products}= props;
    return (
      <div className="cart">
       {products.map((item)=>{
           return <Cartitem product={item} key={item.id} increase={props.increase} decrease={props.decrease} delete={props.delete}/>
       })}
      </div>
    )
  }



export default cart;