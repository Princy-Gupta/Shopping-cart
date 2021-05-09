/* eslint-disable import/no-anonymous-default-export */
import React  from 'react'

const navbar=(props)=>{
    

    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/3144/3144456.svg?token=exp=1620552804~hmac=7252a9f8c9b12f8d7ef0267fd5d7e99b" alt="cart-icon"/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    )
  }



const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };

  export default navbar;