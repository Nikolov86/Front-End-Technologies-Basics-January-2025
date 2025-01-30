function addItem() {
  let inputText = document.getElementById("newItemText");
  let inputValue = document.getElementById("newItemValue");
  let selectMenu = document.getElementById("menu");

  let option = document.createElement("option"); // create a new option element

  option.textContent = inputText.value; // set the option text content to the input text value
  option.value = inputValue.value; // set the option value to the input value

  selectMenu.appendChild(option); // append the option to the select menu

  inputText.value = ""; // clear the input text
  inputValue.value = ""; // clear the input value
}
