// question: currying vs partial application

// partial application
function partialAdd(a) {
  return function (b, c) {
    return a + b + c;
  };
}

// currying
function curryingAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// real life example  of currying updating DOM
function updateElementText(id) {
  return function (text) {
    document.getElementById(`#${id}`).textContent = text;
  };
}

const updateHeader = updateElementText("header");

updateHeader("Hello World!");

setTimeout(() => {
  updateHeader("changed");
}, 2000);
