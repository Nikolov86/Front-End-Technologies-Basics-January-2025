window.addEventListener("load", solve);

function solve() {
  // Get elements
  let roomSizeElement = document.getElementById("room-size");
  let timeSlotElement = document.getElementById("time-slot");
  let fullNameElement = document.getElementById("full-name");
  let emailElement = document.getElementById("email");
  let phoneNumberElement = document.getElementById("phone-number");

  // Get preview elements
  let roomSizeInput = document.getElementById("preview-room-size");
  let timeSlotInput = document.getElementById("preview-time-slot");
  let fullNameInput = document.getElementById("preview-full-name");
  let emailInput = document.getElementById("preview-email");
  let phoneNumberInput = document.getElementById("preview-phone-number");

  // Hidden element
  let previewEditElement =
    document.getElementsByClassName("preview-container")[0]; // Fix selector
  let previewConfirmation = document.getElementById("confirmation");

  // Button
  let bookRoomButton = document.getElementById("book-btn");
  let editButton = document.getElementById("edit-btn");
  let confirmBookingButton = document.getElementById("confirm-btn");
  let bookAnotherRoomButton = document.getElementById("back-btn");

  bookRoomButton.addEventListener("click", Onclick);

  function Onclick(event) {
    event.preventDefault(); // Prevent form submission

    // Validate fields (Here im using an AI for this if condition + helper function)
   if (
     roomSizeElement.value.trim() === "" ||
     !isValidTimeSlot(timeSlotElement.value) || // New validation function
     fullNameElement.value.trim().length < 3 || // Name must have at least 3 chars
     !isValidEmail(emailElement.value) || // Validate email
     !isValidPhone(phoneNumberElement.value)
   ) {
     alert("Please fill in all fields correctly.");
     return;
   }

    function isValidTimeSlot(timeSlot) {
      let timeSlotRegex = /^([1-9]|1[0-2])-\s*([1-9]|1[0-2])[APap][Mm]$/;
      return timeSlotRegex.test(timeSlot);
    }


    // Helper function to validate email
    function isValidEmail(email) {
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }

    // Helper function to validate phone number
    function isValidPhone(phone) {
      let phoneRegex = /^\d{7,}$/; // At least 7 digits, numbers only
      return phoneRegex.test(phone);
    }

    // Show hidden preview container
    previewEditElement.style.display = "block";
    roomSizeInput.textContent = roomSizeElement.value;
    timeSlotInput.textContent = timeSlotElement.value;
    fullNameInput.textContent = fullNameElement.value;
    emailInput.textContent = emailElement.value;
    phoneNumberInput.textContent = phoneNumberElement.value;
    bookRoomButton.disabled = true;

    //clear the input fields
    roomSizeElement.value = "";
    timeSlotElement.value = "";
    fullNameElement.value = "";
    emailElement.value = "";
    phoneNumberElement.value = "";

    //Edit button
    editButton.addEventListener("click", clickEdit);

    function clickEdit() {
      previewEditElement.style.display = "none";
      roomSizeElement.value = roomSizeInput.textContent;
      timeSlotElement.value = timeSlotInput.textContent;
      fullNameElement.value = fullNameInput.textContent;
      emailElement.value = emailInput.textContent;
      phoneNumberElement.value = phoneNumberInput.textContent;
      bookRoomButton.disabled = false;
    }
    //Confirm Booking
    confirmBookingButton.addEventListener("click", confirmClick);

    function confirmClick() {
      previewEditElement.style.display = "none";
      previewConfirmation.style.display = "block";
    }

    //Book another room

    bookAnotherRoomButton.addEventListener("click", newRoom);

    function newRoom() {
      previewConfirmation.style.display = "none";
      bookRoomButton.disabled = false;
    }
  }
}
