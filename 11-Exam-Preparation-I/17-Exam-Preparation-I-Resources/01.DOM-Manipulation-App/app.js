window.addEventListener("load", solve);

function solve() {
  //get the element
  let ticketsNumberElement = document.getElementById("num-tickets");
  let preferenceElement = document.getElementById("seating-preference");
  let fullNameElement = document.getElementById("full-name");
  let emailElement = document.getElementById("email");
  let phoneNumberElement = document.getElementById("phone-number");
  //buttons
  let purchaseTicketButtonElement = document.getElementById("purchase-btn");
  let editButtonElement = document.getElementById("edit-btn");
  let buyingButtonElement = document.getElementById("buy-btn");
  let backButtonElement = document.getElementById("back-btn");
  //hidden  elements
  let ticketsPreviewElement = document.getElementById("ticket-preview");
  let SuccessPurchaseElement = document.getElementById("purchase-success");

  //get input value
    let ticketsNumberValue = document.getElementById("purchase-num-tickets");
    let preferenceValue = document.getElementById("purchase-seating-preference");
    let fullNameValue = document.getElementById("purchase-full-name");
    let emailValue = document.getElementById("purchase-email");
    let phoneNumberValue = document.getElementById("purchase-phone-number");


  purchaseTicketButtonElement.addEventListener("click", Onclick);

  function Onclick(event) {
    event.preventDefault(); // Prevent form submission
    purchaseTicketButtonElement.disabled = false;
    //checking the fields is it empty
    if (
      ticketsNumberElement.value.trim() === "" ||
      isNaN(ticketsNumberElement.value) || // Ensure it's a number
      parseInt(ticketsNumberElement.value) <= 0 ||
      preferenceElement.value.trim() === "" ||
      fullNameElement.value.trim().length < 3 || // Name must have at least 3 chars
      !isValidEmail(emailElement.value) || // Call a helper function
      !isValidPhone(phoneNumberElement.value)
    ) {
      alert("Please fill in all fields correctly.");
      return;
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
    //Display hidden context

    ticketsPreviewElement.style.display = "block";

    ticketsNumberValue.textContent = ticketsNumberElement.value;
    preferenceValue.textContent = preferenceElement.value;
    fullNameValue.textContent = fullNameElement.value;
    emailValue.textContent = emailElement.value;
    phoneNumberValue.textContent = phoneNumberElement.value;

    purchaseTicketButtonElement.disabled = true;

    //clear the input fields
    ticketsNumberElement.value = "";
    preferenceElement.value = "seating-preference";
    fullNameElement.value = "";
    emailElement.value = "";
    phoneNumberElement.value = "";

    //Edit ( get back input data)
    editButtonElement.addEventListener("click", editClick)

    function editClick() {
      ticketsNumberElement.value = ticketsNumberValue.textContent;
      preferenceElement.value = preferenceValue.textContent;
      fullNameElement.value = fullNameValue.textContent;
      emailElement.value = emailValue.textContent;
      phoneNumberElement.value = phoneNumberValue.textContent;
     
    purchaseTicketButtonElement.disabled = false;
    ticketsPreviewElement.style.display = "none";

    };

    // Buying button

    buyingButtonElement.addEventListener("click", clickBuying);

    function clickBuying() {

      ticketsPreviewElement.style.display = "none";
      SuccessPurchaseElement.style.display = "block";
    };

    //Back button 
    backButtonElement.addEventListener("click", clickBack)

    function clickBack() {
      SuccessPurchaseElement.style.display = "none";
      purchaseTicketButtonElement.disabled = false;

    };
  }
}
