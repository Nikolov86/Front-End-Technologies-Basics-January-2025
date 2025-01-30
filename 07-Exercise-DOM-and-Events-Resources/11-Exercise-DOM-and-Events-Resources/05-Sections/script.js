function create(words) {
  let content = document.getElementById("content"); // Get the content div
  let result = document.getElementById("result"); // Get the result div

   for (let word of words) {
     let div = document.createElement("div"); // Create a div element
     let p = document.createElement("p"); // Create a p element
     p.textContent = word; // Set the text content of the p element to the current word
     p.style.display = "none"; // Hide the p element
     div.appendChild(p); // Append the p element to the div element
     content.appendChild(div); // Append the div element to the content div
   }

   content.addEventListener("click", function(e) {
      let target = e.target; // Get the clicked element
   
      if (target.tagName === "DIV" && target.children[0].style.display === "none") {
         target.children[0].style.display = "block"; // Show the p element
      } else if (target.tagName === "DIV" && target.children[0].style.display === "block") {
         target.children[0].style.display = "none"; // Hide the p element
      }

      
   });
}