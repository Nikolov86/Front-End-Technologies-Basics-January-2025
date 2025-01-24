async function chainedPromisesAsync() {
  const promis1 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, 1000);
  });

  const promis2 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Second");
    }, 2000);
  });

  const promis3 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Third");
    }, 3000);
  });

  console.log(promis1, promis2, promis3);
}

chainedPromisesAsync();
