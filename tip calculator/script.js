const amount = document.getElementById('amount');
const guests = document.getElementById('guests');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
  const tip = ((amount.value * quality.options[quality.selectedIndex].value) / guests.value).toFixed(2);
  amount.value = '';
  guests.value = '';
  quality.selectedIndex = 0; // Reset the select to the default option
  
  if (isNaN(tip)) {
    tipAmount.textContent = "Tip $0";
    showTipAmount();
  } else {
    tipAmount.textContent = "Tip $" + tip + " each";
    showTipAmount();
  }
}

showTipAmount = () => {
  var x = tipAmount;
  x.classList.add("show");
  
  setTimeout(function() { 
    x.classList.remove("show");
  }, 3000);
}


showTipAmount = () => {
  // Get the DIV
  var x = tipAmount; 
  // Add the "show" class to DIV as it is hidden
  x.className = "show";
  
  // After 3 seconds, remove the show class from DIV
  setTimeout(function() { 
    x.className = x.className.replace("show", ""); 
  }, 3000);
}




