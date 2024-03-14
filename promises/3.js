// question: what is the output

console.log("start");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((data) => console.log(data));

console.log("end");

// question what is the output

function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise
  .then(function () {
    console.log("success");
  })
  .then(function () {
    console.log("success 1");
  })
  .then(function () {
    console.log("success 2");
  })
  .catch(function () {
    console.log("error 1");
  })
  .then(function () {
    console.log("success 3");
  });

// error 1   success 3     its is because of the promise chaning promise enter in catch because of reject and the enter in then as it return nothing

// question : what is the output

function work(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve("yes here");
    } else {
      reject("not here");
    }
  });
}

let working = work(true);

working.then(function (data) {
  console.log(data);
  return work(false);
})
  .catch(function (err) {
    console.log(err);
    return "ERRR caught";
  })
  .then(function (data) {
    console.log(data);

    return work(true);
  })
  .catch(function (err) {
    console.log(err);
  });

// yes here  not here  ERRR caught
