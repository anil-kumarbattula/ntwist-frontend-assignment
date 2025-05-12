let startTime = null;

function startTimer() {
  if (!startTime) {
    startTime = new Date();
  }
}

function submitForm(event) {
  event.preventDefault();

  const display = document.getElementById("timeTaken");
  const form = document.getElementById("myForm");
  const confirmationDisplay = document.getElementById("confirmationMessage");

  if (startTime) {
    const endTime = new Date();
    const timeSpent = Math.round((endTime - startTime) / 1000); // Time in seconds
    display.textContent = `You took ${timeSpent} second(s) to fill out the form.`;
  } else {
    display.textContent = "No interaction detected before submission.";
  }

  confirmationDisplay.textContent = "✅ Your form has been submitted successfully!";
  form.reset();
  startTime = null; // Reset timer
}
