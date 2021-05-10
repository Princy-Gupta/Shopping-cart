/* eslint-disable no-lone-blocks */

import React from 'react';
import './App.css';
import Cart from './Cart';
import Nav from './Navbar'
import firebase from 'firebase';
class App extends React.Component {

  constructor()
  {   super();
      this.state={
          products:[

          ]

          
      }
      this.db = firebase.firestore()
  }
  componentDidMount()
  {
    // firebase.firestore().collection('products').get().then((snapshot)=>{
    //   console.log(snapshot);
    //   })
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     console.log(snapshot);
    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data());
    //     })
    //     const products= snapshot.docs.map((doc) => {
    //       const data= doc.data();
    //       data['id']=doc.id;
    //       return data;
    //     })

    //     this.setState({products})
    //   })


    firebase
    .firestore()
    .collection('products')
    .onSnapshot((snapshot) => {
         snapshot.docs.map((doc) => {
           console.log(doc.data());
         });
  
         const products = snapshot.docs.map((doc) => {
           const data = doc.data();
           data['id'] = doc.id;
  
           return data;
         })
  
         this.setState({products,loading:false});
        })

    
  }

 increase=(product)=>{
     console.log("increase");
     const {products}=this.state
     const index= products.indexOf(product);
    //  products[idx].qty+=1;
    //  this.setState({
    //      products:products
    //  })
    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({qty: products[index].qty+1})
    .then((s) => {
      console.log("Eddited succesfully");
    })
    .catch((err) => {
      console.log(err);
    })
 }
   
    
  decrease=(product)=>{
      const {products}=this.state
      const index= products.indexOf(product);
      const docRef = this.db.collection('products').doc(products[index].id);
      if(products[index].qty === 0)
      return;
      docRef.update({qty: products[index].qty-1})
      .then((s) => {
        console.log("Eddited succesfully");
      })
      .catch((err) => {
        console.log(err);
      })
  }

  delete=(id)=>{
      const {products}=this.state
      // const idx= product.id;
      // const items= products.filter((item)=>item.id!==idx);
      // this.setState({
      //     products:items
      // })
      const docRef = this.db.collection('products').doc(id);
      docRef.delete()
      .then(() => {
        console.log("delete successful");
      })
      .catch((err) => {
            console.log(err);
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


   addProduct = () => {
    this.db
    .collection('products')
    .add({
      img:'',
      price:500,
      qty: 0,
      title: 'Samsung Phone'
    })
    .then((docref) => {
      console.log("Product added");
    })
    .catch(err => {
      console.log(err);
    })
  }

  render(){
  return (
    <div className="App">
    <Nav count={this.getCount()}/>
    {/* <button onClick={this.addProduct}>Add Product</button> */}
      <Cart increase={this.increase} decrease={this.decrease} delete={this.delete} products={this.state.products}/>
      <h1>Total:{this.getvalue()}</h1>
      <br></br>
    </div>
  );
}
}

export default App;
