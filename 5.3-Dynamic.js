// create a variable -- it is undefined
let foo;
console.log(`foo is initialized as ${typeof(foo)}`);

foo = 42;
console.log(`foo is now ${foo}, a ${typeof(foo)}`);

foo = "blargh!";
console.log(`foo is now a string: ${foo}, a ${typeof(foo)}`);

foo += 42;
console.log(`foo is now ${foo}, a ${typeof(foo)}`);

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
// global is global (because var)
// hidden falls out of scope (because let)
//console.log(`${hidden} ${secretGlobal}`); // ReferenceError: hidden is not defined

// this is a comment
/* this is also a comment */

console.log("no semicolons!")
console.log("Hello, World!"); // semicolons are optional, but you should use them.
console.log(`Backticks allow you do to this: ${str}, ${someNumber}`);
