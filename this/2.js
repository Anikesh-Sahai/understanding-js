// question : what is the output

const user = {
  name: "jhon",
  loadMesage() {
    console.log(this.name); // what is logged
  },
};

setTimeout(user.loadMesage, 1000); // undefined, here the whole function will passed for that the this belog to the window

// how can we fix this

setTimeout(function () {
  user.loadMesage();
}, 1000);

// QUESTION : what is the output

const xyz = {
  name: "anikesh",
  greet() {
    console.log(`hello  ${this.name}`);
  },
  farewell: () => {
    console.log(`byee ${this.name} `);
  },
};
xyz.greet();
xyz.farewell();

// question create an onject calculator

let calculator = {
  read() {
    this.a = +prompt("a = " + 0);
    this.b = +prompt("b = " + 0);
  },
  add() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.add());
console.log(calculator.mul());
