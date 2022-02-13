// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
  // get deposited amount
  const depositInput = document.getElementById('deposit-input');
  // get text format
  const newDepositText = depositInput.value;
  // convert into number
  const newDepositAmount = parseFloat(newDepositText);

  // update deposit total
  const depositTotal = document.getElementById('deposit-total');
  // get text format
  const previousDepositText = depositTotal.innerText;
  // convert into number
  const previousDepositAmount = parseFloat(previousDepositText);

  const newDepositTotal = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

});

