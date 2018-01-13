import { setTimeout } from "timers";


//  [ let ]
// With 'let' we can declare same vars inside diferent scopes
let a = 'Hello';
console.log(a);

{
  let a = 'Hello from another scope!';
  console.log(a);
}

// [ const ]
//With 'const' ours vars can not be re-assigned
const array = [1, 2, 3];

array.push(4);
console.log(array);

// [ Template Literals / Strings ]
// best way to concatenate strings
  let w = 'World';
  let h = `Hello ${w}`;
  
  console.log(h);

// [ Spread Operator ]
// Concatenating arrays

let array1 = [2, 3];
let array2 = [1, ...array1, 4];
console.log(array2);

function print(...z) {
  console.log(z);
}

print(10, 11, 12, 13, 14);

// [ Destructuring Assignment Array ]
{
  let array = [100, 200, 300];
  let [a, b, c] = array;
  console.log(a, b, c);
}

// [ Destructuring Assignment Objects ]
{
  let wizard = { magical: true, power: 10 };
  let { magical, power } = wizard;
  console.log(magical, power);
}

// [ Arrow Functions ]
{
 setTimeout(() => {
   console.log('Write from an anonimous arrow function');
 }, 1000);

 const myArrow = () => {
   console.log('Write from a named arrow function');
 }
 myArrow();
}

{
  this.a = 50;
  let f = () => {
    console.log(this.a);
  }
  f();
}

// [ Array manipulation with Arrow function ]
{
  let points = [10, 20, 30];
  points = points.map(element => element + 1);
  console.log(points);
}

// [ Filter Method ]
{
  let winner = (result) => {
    return result >= 100; 
  }
  let points = [100, 190, 89, 11, 677, 33];
  console.log(points.filter(winner));
}

// [Modules]
  import { students, total } from './students';
import entity from "./entity";
  console.log(students, total);

// [ Classes ]
import Entity from "./entity";

  class Hobbit extends Entity{
    constructor(name, height){
      super(name, height);
    }
  }

  let Frodo = new Hobbit("Frodo", 5.5);
  Frodo.greet(); 

// [ React ]

import React, { Component } from "react";
import ReactDOM from "react-dom";

  class App extends Component {
    render(){
      return (
        <div>React JS and JSX working!</div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('root'));
  
