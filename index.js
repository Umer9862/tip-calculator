function handleButtonClick(tipPercentage) {
  console.log(`Tip percentage selected: ${tipPercentage}%`);
}

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const billAmount = parseFloat(document.getElementById('bill').value) || 0;
  const tipPercentage = parseFloat(document.querySelector('.percent.active')?.value) || 0;
  const numberOfPeople = parseInt(document.getElementById('rangeInput').value, 10) || 1;

  const amountPerPerson = calculateTotalPerPerson(billAmount, tipPercentage, numberOfPeople);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `${amountPerPerson.toFixed(2)}$ <span>/per person</span>`;
});

document.querySelectorAll('.percent').forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.percent').forEach(function (btn) {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Trigger the form submission to recalculate the result
    document.getElementById('myForm').dispatchEvent(new Event('submit'));
  });
});

function calculateTotalPerPerson(billAmount, tipPercentage, numberOfPeople) {
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  return totalAmount / numberOfPeople;
}
function handleButtonClick(tipPercentage) {
  console.log(`Tip percentage selected: ${tipPercentage}%`);
}

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const billAmount = parseFloat(document.getElementById('bill').value) || 0;
  const tipPercentage = parseFloat(document.querySelector('.percent.active')?.value) || 0;
  const numberOfPeople = parseInt(document.getElementById('rangeInput').value, 10) || 1;

  const amountPerPerson = calculateTotalPerPerson(billAmount, tipPercentage, numberOfPeople);

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `${amountPerPerson.toFixed(2)}$ <span>/per person</span>`;
});

document.querySelectorAll('.percent').forEach(function (button) {
  button.addEventListener('click', function () {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.percent').forEach(function (btn) {
      btn.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    button.classList.add('active');

    // Trigger the form submission to recalculate the result
    document.getElementById('myForm').dispatchEvent(new Event('submit'));
  });
});

function calculateTotalPerPerson(billAmount, tipPercentage, numberOfPeople) {
  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;
  return totalAmount / numberOfPeople;
}
