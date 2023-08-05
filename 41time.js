let secondsLeft = 60;

// Countdown function
setInterval(function() {
  // Update secondsLeft variable
  secondsLeft--;

  // Display the remaining time
  console.log(secondsLeft);

  // Check if the countdown is finished
  if (secondsLeft === 0) 
  
  {
    console.log("Time's up!");
    clearInterval();
  }
});