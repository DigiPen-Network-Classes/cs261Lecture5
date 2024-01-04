
// let's declare some variables!
let str = "this is a string";
let otherStr = 'this is also a string';
let evenMoreStr = 'this "is a string" that has quotes';

// we can also declare constants:
const className = "Digipen CS261";
//className += " 2024"; // TypeError: Assignment to constant variable.


// variables are typed, but their type can be changed at runtime!
let someNumber = 42;
someNumber = "asdf"; // some number is a string now!
someNumber = 42;

// 'var' is the old way of declaring variables, you'll certainly 
// see it used lots of places.
{
    let hidden = "scoped"; 
    var secretGlobal = "global";
}
//console.log(`${hidden} ${secretGlobal}`); // ReferenceError: hidden is not defined

// this is a comment
/* this is also a comment */

console.log("Hello, World!"); // semicolons are optional, but you should use them.
// (or at least consistently NOT use them!)
console.log(`Backticks allow you do to this: ${str}, ${someNumber}`);
