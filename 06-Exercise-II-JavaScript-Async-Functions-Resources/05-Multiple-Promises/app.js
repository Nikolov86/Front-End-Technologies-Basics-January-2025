async function multiplePromises() {
  const responses = await Promise.allSettled([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ate pizza - promise kept");
      }, 1000);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("Ate chips - promise kept");
      }, 2000);
    }),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Failed to eat vegetables - promise failed");
      }, 3000);
    }),
  ]);

  console.log(responses);
}

multiplePromises();
