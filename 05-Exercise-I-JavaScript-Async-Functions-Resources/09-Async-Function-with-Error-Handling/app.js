async function promiseRejectionAsync() {
   try {
      await new Promise((resolve, reject) => {
         setTimeout(() => {
            reject(new Error('Opps Error'))
         }, 1000);
      })
   } catch (error) {
      console.error(error);
   }
}
promiseRejectionAsync();