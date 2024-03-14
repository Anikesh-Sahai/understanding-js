// question: promise all polyfill

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

Promise.allPoly = (promises) => {
  return new Promise((resolve, reject) => {
    const results = [];
    if (!promises.length) {
      resolve(results);
      return;
    }

    let counter = promises.length;

    promises.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((res) => {
          results[i] = res;
          counter--;
          if (counter === 0) {
            resolve(results);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise
  .allPoly([
    importantQuestion("What's your favorite color"),
    importantVideo("The meaning of life"),
    importantName("John Doe"),
  ])
  .then((res) => {
    console.log(res);
  }).catch(err=>console.error(err));
