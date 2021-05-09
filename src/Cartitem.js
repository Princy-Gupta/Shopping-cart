/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import './App.css'
export default class  extends Component {
    constructor()
    {   super();
        this.state={
            price:10000,
            title:'Phone',
            qty:1,
            img:''
        }
    }
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
            <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{fontSize:25}}>{this.state.title}</div>
            <div style={{color:'#777'}}>Price:{this.state.price} </div>
            <div style={{color:'#777'}}>Qty:{this.state.qty}</div>
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