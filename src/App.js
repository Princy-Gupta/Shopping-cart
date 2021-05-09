/* eslint-disable no-lone-blocks */

import React from 'react';
import './App.css';
import Cart from './Cart';
import Nav from './Navbar'
class App extends React.Component {

  constructor()
  {   super();
      this.state={
          products:[
              {
                  price:10000,
          title:'Phone',
          qty:1,
          img:'https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
          id:1
              },
              {
                  price:5000,
          title:'Smart Watch',
          qty:2,
          img:'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80',
          id:2
              },
              {price:50000,
                  title:'Laptop',
                  qty:1,
                  img:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                  id:3},
                  {
                      price:150,
          title:'Chocolates',
          qty:30,
          img:'https://images.unsplash.com/photo-1586400928533-da0dbdca07fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          id:4
                  },
                  {price:1200,
                      title:'School Bag',
                      qty:4,
                      img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
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



   getCount=()=>{
    const {products}=this.state;
    let c=0;
   products.forEach((p)=>{
     c=c+p.qty;
   })
   return c;
   }

    
   getvalue=()=>{
    const {products}=this.state;
    let c=0;
    products.forEach((p)=>{
      c=c+(p.price*p.qty);
    })
    return c;
   }


  render(){
  return (
    <div className="App">
    <Nav count={this.getCount()}/>
      <Cart increase={this.increase} decrease={this.decrease} delete={this.delete} products={this.state.products}/>
      <h1>Total:{this.getvalue()}</h1>
      <br></br>
    </div>
  );
}
}

export default App;
