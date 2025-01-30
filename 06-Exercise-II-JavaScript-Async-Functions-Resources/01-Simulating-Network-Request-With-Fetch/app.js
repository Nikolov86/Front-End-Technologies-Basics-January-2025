 async function fetchData() {

  const response = await fetch("https://swapi.dev/api/people/1"); 
   const characterData = await response.json(); //
   console.log(response);
}

// function fetchData() {
//   fetch("https://swapi.dev/api/people/1");

//     .then ((response) => {
//       return response.json; 
//     })

//     .then((data) => {
//       console.log(data);
      
//     })
// }


