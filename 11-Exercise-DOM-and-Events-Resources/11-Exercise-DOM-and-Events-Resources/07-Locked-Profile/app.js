function lockedProfile() {
  let buttons = document.getElementsByTagName("button"); // get all buttons

  for (let button of buttons) {
    // iterate through all buttons
    button.addEventListener("click", showInfo);
    {
      // add event listener to each button
    }

    function showInfo(event) {
      let lockRadioBtn = event.target.parentNode.children[2]; // get the lock radio button
      let hiddenDiv = event.target.previousElementSibling; // get the hidden div

      if (lockRadioBtn.checked == false) {
        // check if the lock radio button is checked
        if (event.target.textContent === "Show more") {
          // check if the button text is 'Show more'
          hiddenDiv.style.display = "block"; // display the hidden div
          event.target.textContent = "Hide it"; // change the button text to 'Hide it'
        } else {
          // if the button text is not 'Show more'
          hiddenDiv.style.display = "none"; // hide the hidden div
          event.target.textContent = "Show more"; // change the button text to 'Show more'
        }
      }
    }
  }
}
