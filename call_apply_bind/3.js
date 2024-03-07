// question : append an array to the another array

const array = ["a", "b"];
const array1 = [1, 2, 3, 4];

array.push.apply(array, array1); // ere we pass the context that means we have to work on array or tkaing this as array
console.log(array);

// using apply to enhance built in function
// question : find min and max in array

const numbers = [1, 84, 44, 85, 8, 5, 87, 6, 8, 56, 45, 4];
console.log(Math.max(...numbers)); // one way of doing this
console.log(Math.max.apply(null, numbers)); // null is because we dont need to provide any context

// same for min

//question : bound function

function fn() {
  console.log(this);
}

let user = {
  g: fn.bind(null),
};

user.g(); // gives global object

// question : bind chaining

function f() {
  console.log(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Alex" });
f();
// here alex alex will print  as it has been overridden by the last bind and this point  to Alex obj not John

//  question : fix the last line to run this code properly

function checkPassword(success, failed){
    let pass = promt("pass? ","")
    if(pass === "sword") success()
    else failed()
}

let user1 = {
    name: "anikesh",

    loginSuccess(){
        console.log(`${this.name} logged in`)
    },

    loginFailed(){
        console.log(`failed ${this.name} for login`)
    }
}

// checkPassword(user1.loginSuccess, user1.loginFailed) // wrong
checkPassword(user1.loginSuccess.bind(user1), user1.loginFailed.bind(user1)) // correct


// question: explicit binding with arrow function 

const age = 10

var person ={
    name:"John",
    age:25,
    getAgeArrow : ()=> console.log(this.age),
    getAge: function(){
        console.log(this.age)
    }
}

var person2 = {age:24}
person.getAge.call(person2)
person.getAgeArrow.call(person2) // this will point to the global object this will take this of the parent normal function