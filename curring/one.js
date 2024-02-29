// Curring is the function that takes one argument at a time and returning function that expects another argument

// Example f(a,b) into f(a)(b)

function foo(x) {
  return function (y) {
    return `${x} ${y}`;
  };
}

console.log(foo("hello")); //  returns a function that takes one argument
console.log(foo("hello")("world")); 
