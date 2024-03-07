// call bind and apply on explicit binding
// what is call

var obj = { name: "Anikesh Sahai" };

function sayMyName(age) {
  return `Hello ${this.name} is ${age} years old`;
}

console.log(sayMyName(24)); // calling where we get hello undefined only
console.log(sayMyName.call(obj, 24)); // using call method, passing object now this  will point to that object
// so it will print hello  Anikesh sahai

// what is apply
// the both are same but the only diffrence is that they arguments in form of array

function sayHello(age, proffession) {
  return `Hello ${this.name} is ${age} years old and is ${proffession}`;
}
console.log(sayHello.apply(obj, [24, "software engineer"]));

// what is bind
const bindFunction = sayMyName.bind(obj);
console.log(bindFunction(24));
