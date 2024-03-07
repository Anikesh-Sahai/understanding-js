// question : pollyfill of call method

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + ' is not a Function');
    }
    context.fn = this
    context.fn(...args)
}

let cars = {
  color: "red",
  company: "ferrari",
};

function purchasedCar(currency, price) {
  console.log(
    `i have purchased ${this.color} - ${this.company} for ${currency}${price}`
  );
}

purchasedCar.call(cars, "$", 100); // i have purchased red - ferrari for $1

purchasedCar.myCall(cars, "$", 100);