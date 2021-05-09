/* eslint-disable no-useless-constructor */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-labels */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import './App.css'
export default class  extends Component {
    // constructor(product)
    // {
    //     super(product);
    // }
  

   inc=()=>{
       this.setState((prev)=>{
           return{
           qty:prev.qty+1
           }
       },()=>{
        console.log(this.state); {/*async, in promise set state acts like a sync call,
            When setState is called multiple times it is batched together and re render happens only once.
        The callbacks for both setStates will be fired after re render.*/}
    })
   }


   
   dec=()=>{
    const {qty}=this.state.product;
    if(qty===0)
    return;
       this.setState((prev)=>{
       return {
           qty:prev.qty-1
       }},()=>{
           console.log(this.state);
       })
   }



  render() { {/* calling setstate here results in overflow */}
  const {title,price,qty} = this.props.product;
    return (
       
      <div className="cart-item">
        <div className="left-block">
            <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'#777'}}>Price:{price} </div>
            <div style={{color:'#777'}}>Qty:{qty}</div>
            <div className="cart-item-actions">
                {/*buttons*/}
                <img alt="increase" onClick={this.inc} className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1828/1828926.svg?token=exp=1620542541~hmac=7ec6964672e0d7264b6f6dc56b7e166d"/>
                <img alt="decrease" onClick={this.dec} className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1620542338~hmac=b0cc68f0b751ae0ca23ef5992d4dbe17"/>
                <img alt="delete" onClick={this.del} className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/3096/3096673.svg?token=exp=1620542610~hmac=c5beeac097238ea43ddc8c5a79b115e9"/>
            </div>
        </div>
      </div>
    )
  }
}

const styles={
    image:{
      height:120,
      width:120,
      borderRadius:4,
      background:'#ccc'
    }
  }


  {/* batching  even if we call set state 3 times react will merge it in one*, 
eg we are calling set state 4 tyimes last set state will be considered *, 
in second from that is when prev state is taken into consideration all the three calls 
will matter as react will maintain a callback queue and make sure that prev state is upto data*/}