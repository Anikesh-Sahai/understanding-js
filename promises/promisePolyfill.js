// question : create polyfill for promise

function promiseePolyfill(exexcuter) {
  let onResolved,
    onReject,
    isFullfilled = false,
    isRejected = false,
    isCalled = false,
    value;

  function resolve(val) {
    isFullfilled = true;
    value = val;
    if (typeof onResolved === "function") {
      isCalled = true;
      onResolved(val);
    }
  }

  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      isCalled = true;
      onReject(val);
    }
  }

  this.then = function (callback) {
    onResolved = callback;

    if (isFullfilled && !isCalled) {
      isCalled = true;
      onResolved(value);
    }

    return this;
  };

  this.catch = function (callback) {
    onReject = callback;

    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }

    return this;
  };

  try {
      exexcuter(resolve, reject);
  } catch (error) {
    reject(error)    
  }

}

const examplePromise = new promiseePolyfill((resolve, reject) => {
  setTimeout(() => {
    reject(2);
  }, 1000);
});

examplePromise
  .then((value) => console.log(`the value is ${value}`))
  .catch((error) => console.log("there was an error", error));

  // for async function the then function runs first 
  // for sync the resolved part runs first
  

  promiseePolyfill.resolve =(val)=>{
    return new promiseePolyfill(function exexcuter(resolve,reject){
        resolve(val)
    })
  }

  promiseePolyfill.reject =(val)=>{
    return new promiseePolyfill(function exexcuter(resolve,reject){
        reject(val)
    })
  }