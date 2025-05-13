// Stores the time the user first interacts with the form
let startTime = null;

//starts the timer when the user interacts with the form
function startTimer() {
  if (!startTime) {
    startTime = new Date();
  }
}

//handles the form submission and calculates the time taken
function submitForm(event) {
  event.preventDefault(); //prevent actual form submission

  const display = document.getElementById("timeTaken");
  const form = document.getElementById("myForm");
  const confirmationDisplay = document.getElementById("confirmationMessage");

  // Check if the user has interacted with the form
  //Calculate the time taken only if the user has interacted with the form
  if (startTime) {
    const endTime = new Date();
    const totalSeconds = Math.round((endTime - startTime) / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    display.textContent = `You took ${minutes} minute(s) and ${seconds} second(s) to fill out the form.`;
  } else {
    display.textContent = "No interaction detected before submission.";
  }

  confirmationDisplay.textContent = "✅ Your form has been submitted successfully!";
  form.reset();
  startTime = null; // Reset timer
}


