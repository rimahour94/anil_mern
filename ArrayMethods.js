// Map,Filter,Slice,Split,forEach,Reduce

let arr = [2, 9, 8, 5, 6];
//         0  1  2  3  4

// output array=[4,81,64,25,36]

//  output1=[0,9,16,15,24]

let newArr = arr.map((a, i) => {
  return a * a;
});

console.log(newArr);

function newFun() {
  return {
    text: "hellto Pillars",
  };
}

const str = new newFun();

console.log(str);

// reduce

let numarray = ["A", "B", "C", "D"];

const reduceOutput = numarray.reduce((total, num) => {
  return total + " " + num;
}, " ");

console.log(reduceOutput);

// reduce function Syntax

// array.reduce(() => {}, "optional:initialValues");
