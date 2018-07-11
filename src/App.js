import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { prototype } from 'events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ES6 Javascript Problems</h1>
        </header>
        <p className="App-intro">
          Checkout the code and console to see problems listed.
        </p>
      </div>
    );
  }
}

//How do you make the below variable, x, into an array without keys?
let x = {
  a: 1,
  b: 2
};
//answer
const xArr = Object.values(x);
console.log(xArr);

//How do you print the below string, x2, into it's reverse string such as what is see in y2.
let x2 = "hello";
let y2 = "olleh";
//answer
const revString = x2.split('').reverse().join('');
console.log(revString);

//How do you print both methods without touching the execute line.
const obj = {
  a: 1,
  b: 2,
  getA(){
    console.log(this.a);
    return this; //this line is the answer
  },
  getB(){
    console.log(this.b);
  }
}

obj.getA().getB(); //getA returns nothing so this.b is undefined.b rather.

//Print 1,2 from this method. As it it would not work. Get it to work without changing the below line. 
//Unfortunately you can't actually change modify methods of prototype arrayt.
[1,2].print(); //1,2

Array.prototype.print = () => {console.log(`${this[0]},${this[1]}`)};

export default App;
