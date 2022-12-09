// let num = 12;
// const name = "ritesh";

// let bool = true;

// let arr = [3, 4, 6, 67, 7];  Object

// let obj(variable name) = {
//   (key is always unique) key : value (String,number,boolean,array,object,function)
// }

// How to access objects values Syntax
//  (variable name) obj.key

let anilObj = {
  name: "Anil",
  empId: 32,
  status: true,
  array: ["Noida", "Delhi", "Pune"],
  trainee: {
    name: "XYZ",
    traineeID: 231,
  },
  funObj: function () {
    console.log("Function in Object");
  },
  funObjArrow: () => {
    console.log("Function Arrow in Object");
  },
};

// How to access objects values Syntax
//  (variable name) obj.key

// console.log(anilObj.name);
// console.log(anilObj.empId);
// console.log(anilObj.status);
// console.log(anilObj.array);
// console.log(anilObj.trainee);
// anilObj.funObj();
// anilObj.funObjArrow();

// destructuring

const { name, empId, status, array, funObj, funObjArrow } = anilObj;
const { name: name1, traineeID } = anilObj.trainee;
// console.log(name);
// console.log(empId);

// funObj();

// funObjArrow();

// console.log(name1);
// console.log(traineeID);

// console.log(name);
// console.log(name1);

//
let newObj = { ...anilObj, status: true };

newObj.name = "Anil Arya";
newObj.company = "GOOGLE";

anilObj.company = "FACEBOOK";

anilObj = { ...anilObj, statusbar: "45%" };

// console.log(newObj);
// console.log(anilObj);

// get keys from the Object

const keys = Object.keys(anilObj);
const values = Object.values(anilObj);
// console.log(keys);

// console.log(values);

let numKeyObj = {
  0: "Abhishek",
  1: "Noida",
};

// console.log(numKeyObj[0]);
// console.log(anilObj["empId"]);

function getDataFromObject(key) {
  console.log(anilObj[key]);
}

// getDataFromObject("trainee");

const assignObj = ({ name, city, id, bookName }) => {
  // console.log(userObj);
  // const { name, city, id, bookName } = userObj;
  console.log(name, id, city, bookName);
};

let obj = {
  name: "Amit",
  city: "Noida",
  id: "10",
  bookName: "JS",
};

assignObj(obj);
