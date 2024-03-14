// question: crete first prommise resolve it t first then crete another promise reolve it to the first promise

const first = new Promise((resolve, reject) => {
  resolve("First!!");
});

const second = new Promise((resolve, reject) => {
  resolve(first);
});

second
  .then((res) => res)
  .then((res) => {
    console.log(res);
  });

// question : re write the exmaple using async/await instead of .then/.cath

function loadJason(url) {
  return fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json;
    } else {
      throw new Error(response.status);
    }
  });
}

loadJason("junfglasfdnafadsfasdf").catch((ERR) => console.error(ERR));

// answer

async function loadJasonAsyncAwait(url) {
  const response = await fetch(url);
  if (response.status === 200) {
    return response.json;
  } else {
    throw new Error(response.status);
  }
}

// question : saolve promise recursively ,takes input in form of array

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

function promRecurse(funcPromises) {
  if (funcPromises.length === 0) return;
  const currentFunc = funcPromises.shift(); // shift will take out the first index from  array
  currentFunc
    .then((res) => console.log(res))
    .catch((err) => console.error(err));

  promRecurse(funcPromises);
}

promRecurse([
  importantQuestion("who are you"),
  importantName("Anikesh"),
  importantVideo("JS for beginners"),
]);
