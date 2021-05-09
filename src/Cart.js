/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import Cartitem from './Cartitem'
import './App.css';
export default class  extends Component {


    constructor()
    {   super();
        this.state={
            products:[
                {
                    price:10000,
            title:'Phone',
            qty:1,
            img:'',
            id:1
                },
                {
                    price:5000,
            title:'Smart Watch',
            qty:2,
            img:'',
            id:2
                },
                {price:50000,
                    title:'Laptop',
                    qty:1,
                    img:'',
                    id:3},
                    {
                        price:500,
            title:'Chocolates',
            qty:30,
            img:'',
            id:4
                    },
                    {price:3000,
                        title:'School Bag',
                        qty:4,
                        img:'',
                        id:5}
            ]
            
        }
    }


  render() {
      const {products}= this.state;
    return (
      <div className="cart">
       {products.map((item)=>{
           return <Cartitem product={item} key={item.id} />
       })}
      </div>
    )
  }
}
