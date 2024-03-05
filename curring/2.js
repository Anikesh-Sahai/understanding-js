// 1. sum(2)(3)(4)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(sum(2)(3)(4)); //9

/*
Question:
    evaluate("sum")(4)(5) =>  9
    evaluate("multiply")(4)(5) =>  20
    evaluate("subtract")(5)(4) =>  1
    evaluate("divide")(4)(2) =>  2
*/

function evaluate(operation) {
  return function (a) {
    return function (b) {
      switch (operation) {
        case "sum":
          return a + b;
        case "multiply":
          return a * b;
        case "subtract":
          return a - b;
        case "divide":
          return a / b;
        default:
          return "Invalid operation";
      }
    };
  };
}

// console.log(evaluate("sum")(4)(5));
// console.log(evaluate("multiply")(4)(5));
// console.log(evaluate("subtract")(5)(4));
// console.log(evaluate("divide")(4)(2));

// question: infinite currying -> infiniteAdd(1)(2)(3)...n

function infiniteAdd(a){
    return  function(b){
        if(b) return infiniteAdd(a+b);
        else return a;
    }
}


console.log(infiniteAdd(1)(2)(3)(5)(6)()); 