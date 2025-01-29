function subtract() {
  let numberOne = Number(document.getElementById("firstNumber").value); // Convert to number
  let numberTwo = Number(document.getElementById("secondNumber").value);

  let sum = numberOne - numberTwo;

  let resultDiv = document.getElementById("result");
  resultDiv.textContent = sum;
}
