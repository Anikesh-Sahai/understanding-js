// question : pollyfill of apply method

Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== "function"){
        throw new Error(this + ' is not a Function');
    }
    if(!Array.isArray(args)){
        throw new TypeError(`createListFromArrayLike called on non-object`)
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

purchasedCar.apply(cars, ["$", 100]); // i have purchased red - ferrari for $1

purchasedCar.myApply(cars, ["$", 100]);