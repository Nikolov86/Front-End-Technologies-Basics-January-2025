function search() {
  let searchElement = document.getElementById("searchText").value;
  let towns = document.querySelectorAll("#towns li");
  res = document.getElementById("result");

  let matches = 0;

  for (let town of towns) {
    if (town.textContent.includes(searchElement) && searchElement !== "") {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    } else {
      town.style.fontWeight = "";
      town.style.textDecoration = "";
    }
  }
  res.textContent = `${matches} matches found`;
}
