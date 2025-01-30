function solve() {
  let input = document.getElementById("text").value.toLowerCase();
  let currentCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  let words = input.split(" ").filter((x) => x !== ""); // split by space and remove empty strings
  let output = "";

  if (currentCase === 'Camel Case') {
    output += words[0];
    for (let i = 1; i < words.length; i++) {
      output += words[i][0].toUpperCase() + words[i].slice(1, words[i].length);         // capitalize first letter of each word
      result.textContent = output;
    }
  }
  else if (currentCase === 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      output += words[i][0].toUpperCase() + words[i].slice(1, words[i].length);         // capitalize first letter of each word
      result.textContent = output;
    }
  }
  else {
    result.textContent = "Error!";
  }
}
