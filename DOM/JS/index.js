const headingId = document.getElementById("text-id");
const chngBtn = document.getElementById("chg-text");

console.log(chngBtn);
let bool = true;
const handleClick = (e) => {
  e.preventDefault();
  if (bool) {
    headingId.style.color = "White";
    bool = false;
  } else {
    headingId.style.color = "black";
    bool = true;
  }
};

// home.html

const sumid = document.getElementById("sum");

// sumid.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("sum ");
// });

const sumFun = (e) => {
  e.preventDefault();
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const output = document.getElementsByClassName("output");
  console.log(Number.isInteger(parseInt(input1.value)), "all");
  const isNumber1 = Number.isInteger(parseInt(input1.value));
  const isNumber2 = Number.isInteger(parseInt(input2.value));
  // "24"+"24"
  // 24   +24
  if (input1.value !== "" && input2.value !== "") {
    if (isNumber1 & isNumber2) {
      let num1 = input1.value;
      let num2 = input2.value;
      let add = parseInt(num1, 10) + parseInt(num2);
      output[0].innerText = add;
      console.log("sum");
    } else {
      alert("Please enter the valid value");
    }
  } else {
    alert("Please fill the input field first");
  }
};

sumid.onclick = sumFun;
