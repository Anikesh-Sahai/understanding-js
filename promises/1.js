// callback

console.log("start");

function important(username, cb) {
  setTimeout(() => {
    cb("subscrib to " + username);
  }, 1000);
}

important("anieksh", function (message) {
  console.log(message);
});
// important is async function it will print at last

console.log("end");

// promise is the best way to solve callback hell
// promises
// promise are also async operation

console.log("start");

const sub = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) resolve("subscribed");
    else reject(new Error("unable to subscribe"));
  }, 2000);
});

sub
  .then((res) => {
    //if promise is fullfilled the result will be in the
    console.log(res);
  })
  .catch((err) => {
    // if promise is failed the result is here.
    console.error(err);
  });

console.log("end");

function importantQuestion(question) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`the question is ${question}`));
    }, 1000);
  });
}

function importantVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`the video is ${video}`));
    }, 1000);
  });
}

function importantName(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`the name is ${name}`));
    }, 1000);
  });
}

// promise chaning example

importantQuestion("What is JavaScript?")
  .then((res) => {
    console.log(res);
    return importantVideo("The Definitive Guide to JavaScript and Node.js");
  })
  .then((res) => {
    console.log(res);
    return importantName("Anikesh");
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

// promise combinators

// promise.all it take all the promise in array and execute all of them if the err occurs any one of them then it will not execute
Promise.all([
  importantQuestion("What is the capital of France?"),
  importantVideo("Learn You a Haskell for Great Good!"),
  importantName("Richard Stallman"),
])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.error(err));

// Promise.race it reurns the  first resolved or rejected promise from array give
Promise.race([
  importantQuestion("What is the capital of Australia?"),
  importantVideo("JavaScript: The Good Parts"),
  importantName("Alice"),
])
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// Promise.allSettled return all the promise that resolved and also the the promise that rejected
Promise.allSettled([
  importantQuestion("What is the capital of Australia?"),
  importantVideo("JavaScript: The Good Parts"),
  importantName("Alice"),
])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));

// Promise.any return any first resolved promise
Promise.any([
  importantQuestion("What is the capital of Australia?"),
  importantVideo("JavaScript: The Good Parts"),
  importantName("Alice"),
])
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));
