let num = 20; // global scope

function fun() {
  var num1 = "Ritesh"; // local scope
  console.log(num);
}

// console.log(num1);

// fun();

// block scope

let n1 = 200;
let n2 = 50;

if (n1 > n2) {
  let comapany_name = "GOOGLE";
  console.log("If Block");
} else {
  console.log("else block");
}

console.log(comapany_name);

// MERN

// M- Mongo DB
// E- Express
// R- REACTJS
// N-  NodeJS
