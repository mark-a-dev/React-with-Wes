// alert("What up");
// let's go!
// console.log("react is not here")


// Webpack - Module Bundler
// npm install -g create-react-app

// create-react-app
//npm start to kickstart webpack and strat servers

//npm install react --save
//First we will import REact from React library using ES6

// import React from "react"


// First - import react, react dom, etc

console.log("importing react")
import React from 'react';
// import {render} from 'react-dom'
import ReactDOM from 'react-dom';

// Then import styles here
import './css/style.css';

//Could write your component here but we will import it from components folder

// class StorePicker extends React.Component {
//   render() {
//     return <p>Hello World</p>
//   }
// }

import App from "./components/App";
import StorePicker from "./components/StorePicker";

ReactDOM.render(
  <App />, document.querySelector('#main')
);
