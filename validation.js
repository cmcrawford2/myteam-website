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

  form.addEventListener("submit", function (event) {
    submitButton.disabled = false;
    inputs.forEach(function (input) {
      const validationMsg = input.nextElementSibling;
      if (!input.checkValidity()) {
        validationMsg.style.display = "block";
        input.classList.add("error-border"); // Add a class for error border
        event.preventDefault(); // Prevent form submission if not valid
        submitButton.disabled = true;
      } else {
        validationMsg.style.display = "none";
        input.classList.remove("error-border"); // Remove the error border class
      }
    });
  });

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      const validationMsg = this.nextElementSibling;
      if (!this.checkValidity() && this.type !== "email") {
        validationMsg.style.display = "block";
        this.classList.add("error-border"); // Add a class for error border
      } else {
        validationMsg.style.display = "none";
        this.classList.remove("error-border"); // Remove the error border class
      }
    });
  });

  form.addEventListener("reset", function () {
    inputs.forEach(function (input) {
      const validationMsg = input.nextElementSibling;
      validationMsg.style.display = "none";
      input.classList.remove("error-border"); // Remove error styles on form reset
    });
  });
});
