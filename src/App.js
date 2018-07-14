import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import { prototype } from 'events';

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

//Questions can be found at: https://www.youtube.com/watch?v=OOC-ypVnHAY&t=635s

//How do you make the below variable, x, into an array without keys?
// let x = {
//   a: 1,
//   b: 2
// };
// //answer
// const xArr = Object.values(x);
// console.log(xArr);

//How do you print the below string, x2, into it's reverse string such as what is see in y2.
// let x2 = "hello";
// let y2 = "olleh";
// //answer
// const revString = x2.split('').reverse().join('');
// console.log(revString);

// //How do you print both methods without touching the execute line.
// const obj = {
//   a: 1,
//   b: 2,
//   getA(){
//     console.log(this.a);
//     return this; //this line is the answer
//   },
//   getB(){
//     console.log(this.b);
//   }
// }

// obj.getA().getB(); //getA returns nothing so this.b is undefined.b rather.

//Print 1,2 from this method. As it it would not work. Get it to work without changing the below line. 
//Unfortunately you can't actually change modify methods of prototype arrayt.
// [1,2].print(); //1,2

// Array.prototype.print = () => {
//   for( let[i, elem] of this){
//     if(i=== this.length){
//       result += elem;
//     } else {
//       result += `${elem},`;
//     }
//   }
//   console.log(result);
// };


//Call x from const a in const b and create two methods inside const b getX and getY
// const a = function(x){
//   this.x = x;
// };

// const b = function(x,y){
//   this.y = y;
//   this.x = new a(a).x;  //or you can do "a.call(this,x);""
//   getX(){
//    return this.x;
//   }
//   getY(){
//     return this.y;
//   }
// }

// const newB = new b('x', 'y');

// newB.getX();
// newB.getY();



//clone the below obj and make sure the console.log does not give you the value 2
// const obj = {
//   a:{
//     b:{
//       c:1
//     }
//   }
// }

// //const clone = new obj; //my incorrect answer
// // const clone = Object.assign({},obj); //correct answer 

// //or you can use stringify and parse
// const clone = JSON.parse(JSON.stringify(obj)); //better more correct answer
 

// clone.a.b.c = 2;

// console.log(clone);
 

//combine and sort these two arrays in c.
// const a = [1,2,5,7,9];
// const b = [2,5,7,12,100];

// const c = a.concat(b).sort((a, b)=>{return a > b}); //this is a good answer but perhaps not an optimal solution
// //todo the optimal solution think about how you solve this in real life and create a program that does that. 
// //Hint: create a third array and store increment an index number after the each sort in there

// console.log(c);

//What does obj.getX() output? What should you change to get the desired result?
// const obj = {
//   x:1,
//   getX(){
//     //another answer "const that = this" then pass in that as a parameter
//     const inner = function(){  //the answer is to make this fat arrow notation so that this object is passed down ()=>{}
//       console.log(this.x);
//     }
//     inner();//another answer is to do "inner.bind(this)()" and pass in the this object
//   }
// };

// obj.getX();

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     console.log('Hi! I\'m ' + this.name + '.');
//   };
// }

// var salva = new Person('Salva');
// salva.name = "Bob";
// salva.greeting();


// var person1 = new Object({
//   name: 'Chris',
//   age: 38,
//   greeting: function() {
//     console.log('Hi! I\'m ' + this.name + '.');
//   }
// });

// var person2 = Object.create(person1);
// person2["name"] = "Tony";
// person1.greeting();
// person2.greeting();
// console.log(person2.name);


// var testObj = new Object;
// console.log(Object.getPrototypeOf(testObj));
// console.log(testObj.__proto__);
// console.log(Object.getPrototypeOf(new Object()));
// console.log(Object.prototype);

function Person(first, last, age, gender, interests) {
  
  // property and method definitions
  this.first = first;
  this.last = last;
  this.age = age;
  this.gender = gender;
  this.interests = interests;

}

var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
console.log(person1.valueOf(2));



//==============================================================================



//this is a simple async await below. Nothing particulary special. Just wrapping my head around them.
// function add(x,y){
//   return x + y;
// }
// async function add(x,y){
//   return x + y;
// }
// var resultadd = add(2,5);
// console.log("addition is:" + resultadd);

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve('resolved');
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log('calling');
//   var result = await resolveAfter2Seconds();
//   console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();
 


export default App;
