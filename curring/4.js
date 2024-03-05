// question: curry() implementaion that converts f(a,b,c) into f(a)(b)(c)

function curry(fnc){
    return function curriedFunction(...args){
        if (args.length >= fnc.length) { 
            return fnc(...args);  
        } else {  
            return function(...nxt) {
                return curriedFunction(...args, ...nxt);
            };
        }
    } 
}

const sum = (a,b,c,d)=>a+b+c+d;

const totalSum = curry(sum);

console.log(totalSum(1)(2)(3)(4));  //10