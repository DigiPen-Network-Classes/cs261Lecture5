// create a variable -- it is undefined
let foo;
console.log(`foo is initialized as ${typeof(foo)}`);

foo = 42;
console.log(`foo is now ${foo}, a ${typeof(foo)}`);

foo = "blargh!";
console.log(`foo is now a string: ${foo}, a ${typeof(foo)}`);

foo += 42;
console.log(`foo is now ${foo}, a ${typeof(foo)}`);