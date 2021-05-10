import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8DFHcgitHQXVJCT0J4Vlm5XqaE0XIq64",
  authDomain: "shopping-cart-clone.firebaseapp.com",
  projectId: "shopping-cart-clone",
  storageBucket: "shopping-cart-clone.appspot.com",
  messagingSenderId: "678705124239",
  appId: "1:678705124239:web:839830ce5901b3f47071fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  
    <App />
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

