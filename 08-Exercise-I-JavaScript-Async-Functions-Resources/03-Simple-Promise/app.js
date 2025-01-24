function simplePromise() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Success!");
      resolve("Promise Resolved"); // You must call resolve to complete the promise
    }, 2000);
  })
    .then((result) => {
      console.log(result); // Logs "Promise Resolved"
      console.log("After Promise");
    })
    .catch((error) => {
      console.log("Error:", error); // Optional: handles any errors
    });
}

// Call the function
simplePromise();
