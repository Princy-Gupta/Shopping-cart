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

   increase=(product)=>{
       console.log("increase");
       const {products}=this.state
       const idx= products.indexOf(product);
       products[idx].qty+=1;
       this.setState({
           products:products
       })
   }
     
      
    decrease=(product)=>{
        const {products}=this.state
        const idx= products.indexOf(product);
        if(products[idx].qty===0)
        return;
        products[idx].qty-=1;
        this.setState({
            products:products
        })
    }

    delete=(product)=>{
        const {products}=this.state
        const idx= products.indexOf(product);
        const items= products.filter((item)=>item.id!==idx);
        this.setState({
            products:items
        })

    }


  render() {
      const {products}= this.state;
    return (
      <div className="cart">
       {products.map((item)=>{
           return <Cartitem product={item} key={item.id} increase={this.increase} decrease={this.decrease} delete={this.delete}/>
       })}
      </div>
    )
  }
}
