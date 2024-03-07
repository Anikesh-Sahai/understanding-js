// question : pollyfill for bind method

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + ' cannnot be bound as this is not callable');
    }

    context.fn = this
    return function(...newArg){
        return context.fn(...args, ...newArg)
    }
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

// const BindPurchasedCar = purchasedCar.bind(cars)
// BindPurchasedCar( "$", 1000)
// const BindPurchasedCar = purchasedCar.bind(cars,"$", 1000)
// BindPurchasedCar()

// const BindPurchasedCar = purchasedCar.myBind(cars,"$", 1000)
// BindPurchasedCar()

const BindPurchasedCar = purchasedCar.myBind(cars)
BindPurchasedCar("$", 1000)