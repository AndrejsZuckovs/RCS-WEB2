// variables

var name = "Andrejs";
let age = 30;
const pi = 3.14;

let person = { name: "Andrejs", age: 30 };

let colors = ["red", "black", "white"];

let a = 10;
let b = 5;
let result = a + b;

let isEqual = a === b;
let isNotEqual = a !== b;

let isGreaterOrEqual = a >= b;

let isTrue = a > 0 && b > 0;
let iseitherTrue = a > 0 || b > 0;

let isNotTrue = !(a > 0);

let x = 10;

if (a > b) {
  console.log("#1");
} else if (a == b) {
  console.log("#2");
} else {
  console.log("#3");
}

for (let i = 0; i < a; i++) {
  console.log("i: " + i);
}

let i = 0;
while (a < 15) {
  a = a + i;
  i++;
  console.log("a: " + a + " - i: " + i);
}

funMy(1);

function funMy(numbert) {
  console.log("funMy: " + numbert);
}

let cars = ["Volvo", "BMW", "Porsche", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

let objectX = {
  firstName: "Andrejs",
  lastName: "Žučkovs",
  age: "30",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(objectX.fullName());
