async function retryPromise(promiseFunc, retries = 3) {
  let attemptCompleted = 0;

  while (attemptCompleted < 3) {
    try {
      const result = await promiseFunc();
      console.log(result);
      return;
    } catch (error) {
      attemptCompleted++;
      console.log(`Count : ${attemptCompleted}`);

      if (attemptCompleted === 3) {
        console.error(error);
      }
    }
  }

  function createRandomPromise() {
    const randomDecimal = Math.random();

    return new Promise((resolve, reject) => {
      if (randomDecimal >= 0.7) {
        resolve("Success!");
      } else {
        reject("Failer!");
      }
    });
  }
}
retryPromise(createRandomPromise);
