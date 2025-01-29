function toggle() {
  let button = document.getElementsByClassName("button")[0]; // get the button
  let text = document.getElementById("extra"); // get the text

  if (button.textContent === "More") {
    button.textContent = "Less";
    text.style.display = "block"; // show the text
  } else {
    button.textContent = "More";
    text.style.display = "none"; // hide the text
  }
}
