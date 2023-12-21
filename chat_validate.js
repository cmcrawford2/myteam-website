function hideValidationMessages() {
  const validationMessages = document.querySelectorAll(".validation-message");
  validationMessages.forEach(function (message) {
    message.style.display = "none";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  hideValidationMessages(); // Hide validation messages on page load

  const form = document.getElementById("form-fields");
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  const submitButton = document.getElementById("submit-button");

  function checkFormValidity() {
    let isFormValid = true;

    inputs.forEach(function (input) {
      const validationMsg = input.nextElementSibling;
      if (!input.checkValidity()) {
        validationMsg.style.display = "block";
        input.classList.add("error-border"); // Add a class for error border
        isFormValid = false;
      } else {
        validationMsg.style.display = "none";
        input.classList.remove("error-border"); // Remove the error border class
      }
    });

    submitButton.disabled = !isFormValid; // Disable/enable submit button based on form validity
  }

  form.addEventListener("submit", function (event) {
    checkFormValidity(); // Validate form before submission
    if (!submitButton.disabled) {
      // Proceed with form submission if not disabled
      console.log("Form submitted successfully!");
    } else {
      event.preventDefault(); // Prevent form submission if disabled
    }
  });

  inputs.forEach(function (input) {
    input.addEventListener("input", checkFormValidity); // Check validity on input
  });

  form.addEventListener("reset", function () {
    hideValidationMessages();
    submitButton.disabled = true; // Disable submit button on form reset
  });
});
