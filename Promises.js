const pr = new Promise((resolve, reject) => {
  console.log("Quick Start");
  let arr = [];
  setTimeout(() => {
    for (let i = 0; i < 4; i++) {
      arr.push("Ritesh");
    }

    if (arr.length > 0) {
      resolve(arr);
    } else {
      reject("empty array");
    }
  }, 2000);

  console.log("end", arr);
});

function funPromises(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("My name is " + str);
    }, 3000);
  });
}

// pr.then((res) => {
//   console.log(res, "success");
//   const v1 = funPromises(res[2]);
//   v1.then((res) => {
//     console.log(res, "success");
//   }).catch((err) => {
//     console.log(err, "failure");
//   });
// }).catch((err) => {
//   console.log(err, "failure");
// });

// await async
const PromiseHandling = async () => {
  try {
    const res = await pr;
    const str = res[2];
    console.log(res, "success 43");
    const res1 = await funPromises(str);
    console.log(res1, "success 45");
  } catch (err) {
    console.log(err, "49");
  }
};

PromiseHandling();
