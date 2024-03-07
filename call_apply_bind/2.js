// Question : what is the output

const person = { name: "anikesh" };

function sayHi(age) {
  return `${this.name} is ${age} years old`;
}

console.log(sayHi.call(person, 25)); // this is called instantly anikesh is 25 years old
console.log(sayHi.bind(person, 24)); // return function the we  can call later

// question:  what is the output

const age = 18;

var example = {
  name: "Anikesh",
  age: 30,
  getAge: function () {
    return this.age;
  },
};

var person1 = { age: 24 };
console.log(example.getAge.call(person1)); // it will give 24 because for this the represents person1
console.log(example.getAge.apply(person1)); // with apply
console.log(example.getAge.bind(person1)()); // with bind

// question : what is the output

var status = "😃";

setTimeout(() => {
  const status = "😍";

  const date = {
    status: "😔",
    printStatus() {
      return this.status;
    },
  };

  console.log(date.printStatus()); // prints 😔
  console.log(date.printStatus.call(this)); // prints 😃
}, 0);

// question : call printAnimals such that it print all animals in the object

const animals = [
  { species: "lion", nmae: "king" },
  { species: "whale", name: "queen" },
];

function printAnimals(i){
    this.print = function(){
        console.log(`# ${i} ${this.species}: ${this.name}`)
    }
    this.print();
}

animals.forEach((animal, i) => {
    printAnimals.call(animal ,i)
});
