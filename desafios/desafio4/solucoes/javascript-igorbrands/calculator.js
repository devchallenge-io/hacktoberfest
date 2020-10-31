const form = document.getElementById('calculator');

form.onsubmit = function(e) {
  e.preventDefault();
  
  const howMuch = document.getElementById('bill');
  const tipAmount = document.getElementById('percent');
  const customerNum = document.getElementById('customer-num');

  const totalBill = document.getElementById('total-bill');
  const totalPercent = document.getElementById('total-percent');
  const totalPerCustomer = document.getElementById('total-per-customer');

  let cost = parseFloat(howMuch.value);
  let customers = parseInt(customerNum.value);

  let percent = 0;
  if(tipAmount.value !== '') {
    percent = parseInt(tipAmount.value)
  }

  let percentAmount = calculatePercentAmount(cost, percent)
  totalPercent.value = percentAmount;

  let totalValue = calculateTotalValue(cost, percentAmount)
  totalBill.value = totalValue;

  totalPerCustomer.value = calculatePerCustomer(totalValue, customers)

  return false;
};

function calculatePercentAmount(cost, percent){
  return Math.round((cost / 100) * percent );
}

function calculateTotalValue(cost, percentAmount){
  return Math.round(cost + percentAmount);
}

function calculatePerCustomer(totalValue, customers){
  return (totalValue / customers);
}