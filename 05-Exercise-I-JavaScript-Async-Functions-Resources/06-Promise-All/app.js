function allPromise() {
  let promis1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  });

  let promis2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 seconds");
    }, 2000);
  });

  let promis3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 seconds");
    }, 3000);
  });

  Promise.all([promis1, promis2, promis3])
  .then((result) => {
    console.log(result); // Output: ["1 second", "2 seconds", "3 seconds"]
  });
}

allPromise();
