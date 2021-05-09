/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react'
import './App.css'
export default class  extends Component {
  render() {
    return (
      <div className="cart-item">
        <div className="left-block">
            <img style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{fontSize:25}}>Phone</div>
            <div style={{color:'#777'}}>Price:Rs 10,000 </div>
            <div style={{color:'#777'}}>Qty:1</div>
            <div className="cart-item-actions">
                {/*buttons*/}
            </div>
        </div>
      </div>
    )
  }
}

const styles={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#ccc'
    }
  }