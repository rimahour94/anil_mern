function funCallBack(a) {
  return a;
}

const func = funCallBack(function () {
  let num1 = 30;
  let num2 = 40;
  let sum = num1 + num2;
  return sum;
});

let add = func();
console.log(add);
