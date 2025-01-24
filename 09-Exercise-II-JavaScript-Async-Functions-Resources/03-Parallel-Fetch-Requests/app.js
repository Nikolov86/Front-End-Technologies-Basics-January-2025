async function fetchParallel() {
  const response = await Promise.all([
    "https://swapi.dev/api/people/1",
    "https://swapi.dev/api/people/2",
  ]);
  for (const responseObj of response) {
    const data = await responseObj.json();
    console.log(data);
    
  }
}
fetchParallel();
