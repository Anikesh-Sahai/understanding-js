// question : what is the output

var length = 10;

function callback() {
  console.log(this.length);
}

const object = {
  length: 5,
  method(fn) {
    fn();
  },
};

object.method(callback); // 10 as this callback target to the global scope and it's not defined in the function

const object1 = {
  length: 5,
  method(fn) {
    // arguments: [callback, 1, 2]
    arguments[0]();
  },
};

object1.method(callback, 1, 2); //  the answer will be three as the array is itsel object and this this argument point it to the array and array has property of lenth that prints size

// question: implement calc

const cal = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  mul(a) {
    this.total *= a;
    return this;
  },
  sub(a) {
    this.total -= a;
    return this;
  },
};

const result = cal.add(10).mul(5).sub(30).add(10);
console.log(result.total);
