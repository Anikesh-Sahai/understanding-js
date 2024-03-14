// using promises with async and await is the best approach when we want to execute the promise one after the other

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

// await gives us weather the resolved state or rejected state and this will run one after another
const result = async () => {
  try {
    const message = await importantQuestion("What's your favorite color?");
    const message1 = await importantVideo("Youtube Link");
    const message2 = await importantName("John Doe");
  } catch (error) {
    console.error(error);
  }
};

// result();

// question: what is the output
console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// start 1 end 2    the console was in the synchronus code thats why its print in line

// question : what is the output

console.log("start");

const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise.then((res) => {
  console.log(res);
});

console.log("end");

// start 1 3 end 2 