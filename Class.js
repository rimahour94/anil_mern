class Parent {
  a = "GOOGLE";

  constructor(name, city) {
    console.log("Parent constructor called", name, city);
    this.name = name;
    this.city = city;
  }

  method1() {
    console.log("In Method 1", this.city);
  }

  method2() {
    console.log("in Method 2", this.name);
  }

  add = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
  };
}

class Child extends Parent {
  constructor() {
    super("OM", "Noida");
    console.log("Child Constructor called");
  }
  method3() {
    console.log("method 3 called in Child class", this.a);
    const sumOutput = this.add(4, 7);
    console.log(sumOutput);
  }
}

// const obj = new Parent("Ritesh", "Noida");
// const obj1 = new Parent("Anil", "Pune");
const obj3 = new Child();
// console.log(obj);
// obj.method1();
// obj1.method2();
obj3.method3();
// const sumOutput = obj.add(2, 3);
// console.log(obj.a);
// console.log(sumOutput);
