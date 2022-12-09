let arr = [1, "Ritesh", { name: "Ritesh", city: "Noida" }, [2, 3, 4, 5, 6]];

// length = 4
// i=0  i<4
// i=1  1<4
// i=2  2<4
// i=3 3<4
// i=4 4<4
arr[0];
arr[1];
arr[2];
// for (let i = 0; i < arr.length; i++) {
//   //   console.log("hi");
//   console.log(arr[i]);
// }

// output
// 1 hi
// 2 hi
// 3 hi
// 4 hi

let newArr = [...arr, "Ritesh New"];

// newArr.shift();

const updatedArray = newArr.splice(0, 2);

// console.log(updatedArray);

let str = "Anil$Arya$xy@abhi*new";

const splitData = str.split(/[$@*]+/);
console.log(splitData);
