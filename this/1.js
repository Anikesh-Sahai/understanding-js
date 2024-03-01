// this keyword in js (implicit binding)
// this in js just like windows in browser

let user = {
  name: "anikesh",
  age: 23,
  getDetails() {
    console.log(this.name, this.age);
  },
  childObj: {
    newName: "Sahai",
    getChildObj() {
      console.log(this.newName, this.name, this.age); // name and age is undefined
    },
  },
};

let user1 = {
  name: "anikesh new",
  age: 24,
  getDetails: () => {
    console.log(this.name, this.age); // both undefined bot are pointing to the wundows object
  },
};

user.getDetails();
user.childObj.getChildObj();

user1.getDetails();

class UserClass {
  constructor(n) {
    this.name = n;
  }

  getname() {
    console.log(this.name);
  }
}

const User = new UserClass("Anikesh");
User.getname();

//----------------------------------------------------------------------------------------------//
// question : what is output

const UserNew = {
  firstName: "Anikesh",

  getname() {
    const firstName = "new Anikesh";

    console.log(this.firstName); // Anikesh will print
  },
};

UserNew.getname();

// question : what is the result of accesing its refrence ? why ?

function makwUser() {
  return {
    name: "jhon",
    ref: this,
  };
}

let user3 = makwUser();
console.log(user3.ref.name); // undefined , when we are calling the makwUser() its parent is windows

// how to correct this so that we get the name

function makeUser() {
  return {
    name: "jhon",
    ref() {
      return this;
    },
  };
}

let user4 = makeUser();
console.log(user4.ref().name); 

