// console.log("kamrul hasan i am a student of rajshahi university");

// const { repeat } = require("lodash");

// let obj = {
//   start: 1,
//   end: 5,

//   [Symbol.iterator]: function* () {
//     let currentValue = this.start;
//     while (currentValue < this.end) {
//       yield currentValue++;
//     }
//   },
// };

// let iterate = obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// function* generate() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// let gen = generate();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// let person = {
//   name: "HM Nayem",
//   email: "hasan.m.nayem@gmail.com",
// };

// let name = person.name;
// let email = person.email;

// console.log(name, email);

// let { name, email } = person;
// console.log("Name: " + name, "Email: " + email);

// var arr = [1, 2, 3];

// let [first, second, last] = arr;

// console.log(first, second, last);

// var age = 13;
// var name = "HM Nayem";

// console.log("My name is" + name + " and I am " + age + " Years old");

// console.log(
//   `My name is ${name} and I am ${age} Years Old. I am ${
//     age < 18 ? "not" : ""
//   } adult`
// );

// console.log(name.padStart(15, "6"));

// console.log(name.padEnd(12, "K"));

// console.log("S".repeat(10));

// let a = 100;
// a = 10;

// console.log(a);

// let add = (a, b) => {
//   return a + b;
// };

// console.log(add(40, 34));

// let add = (a, b) => a + b;

// console.log(add(14, 6));

// let sqr = (x) => x * x;

// console.log(sqr(5));

// console.log(this);

// let obj = {
//   name: "HM Nayem",
//   print: function () {
//     // console.log(this);
//     let self = this;
//     setTimeout(function () {
//       console.log(`Hello , ${self.name}`);
//     }, 2000);
//   },
// };

// obj.print();
function getHistory() {
  return document.getElementById("history_value").innerText;
}

function printHistory(num) {
  document.getElementById("history_value").innerText = num;
}
function getOutput() {
  return document.getElementById("output_value").innerText;
}
function printOutput(num) {
  if (num == "") {
    document.getElementById("output_value").innerText = num;
  } else {
    document.getElementById("output_value").innerText = formatNumber(num);
  }
}

function formatNumber(num) {
  let n = Number(num);
  let value = n.toLocaleString("en");
  return value;
}
function normalNumber(num) {
  return Number(num.replace(/,/, "g", ""));
}
let history;
let number = document.getElementsByClassName("number");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    history = getHistory();
    history += this.id;
    printHistory(history);
  });
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < number.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      printHistory("");
      printOutput("");
    } else if (this.id == "backspace") {
      history = getHistory();
      history = history.substr(0, history.length - 1);
      printHistory(history);
      printOutput("");
    } else if (this.id == "=") {
      history = getHistory();
      let result = eval(history);
      if (result.toString().length <= 10) {
        printOutput(result);
        printHistory(history + "=");
      } else {
        alert(
          "You must have calculate for 10 dight otherwise not showing result"
        );
      }
    } else {
      let output = getOutput();
      history = getHistory();
      if (output) {
        history = normalNumber(output) + this.id;
        printHistory(history);
      } else if (history == "") {
        printHistory("");
      } else if (isNaN(history[history.length - 1])) {
        history = history.substr(0, history.length - 1) + this.id;
        printHistory(history);
      } else {
        history += this.id;
        printHistory(history);
      }
    }
  });
}
