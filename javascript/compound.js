function compoundInterest(principal, rate, time) {
  // Calculate final amount with compound interest
  let amount = principal * (1 + rate) ** time;

  // Show details
  console.log("Principal Amount: " + principal);
  console.log("Time (years): " + time);
  console.log("Rate of Interest: " + (rate * 100) + "%");
  console.log("Final Amount: " + amount.toFixed(2));
}

// Example:
compoundInterest(1000, 0.05, 3);

//if conditions
age = 21
if (age>=18){
    console.log.apply("You are elgible")
}

