import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCVtTuosK3ekuPXh0ZxoEX9_C4Csi7RdTo",
  authDomain: "cart-9c1fd.firebaseapp.com",
  databaseURL: "https://cart-9c1fd.firebaseio.com",
  projectId: "cart-9c1fd",
  storageBucket: "cart-9c1fd.appspot.com",
  messagingSenderId: "954297336082",
  appId: "1:954297336082:web:891c51673a5027ed8173cb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(

  <App />

  , document.getElementById('root')
);


