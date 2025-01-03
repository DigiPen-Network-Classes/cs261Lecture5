"use strict"
let x = 500;
//delete x; // not allowed!

// duplicate param name not allowed:
/*
function foo(x, x) {
    console.log(`hi ${x}?!`);
}
*/

function foo(x) { return x; }
delete foo; //  nope
