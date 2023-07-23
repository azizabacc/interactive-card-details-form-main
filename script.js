function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the values of the form fields
    var cardholderName = document.querySelector('input[type="text"][placeholder=" e.g. Jane Appleseed"]').value;
    var cardNumber = document.querySelector('input[type="text"][placeholder=" e.g. 1234 5678 9123 0000"]').value;
    var expMonth = document.getElementById('MM').value;
    var expYear = document.getElementById('YY').value;
    var cvc = document.getElementById('cvcInput').value;
  
    // Perform validation
    var isValid = true;
  
    // Check if cardholder name is empty
    if (cardholderName.trim() === '') {
      isValid = false;
      // Display an error message or perform an appropriate action
      console.log("Please enter the cardholder's name.");
    }
  
    // Check if card number is empty or doesn't contain only digits and spaces
    if (cardNumber.trim() === '' || !/^\d{4} \d{4} \d{4} \d{4}$/.test(cardNumber)) {
      isValid = false;
      // Display an error message or perform an appropriate action
      console.log("Please enter a valid card number.");
    }
  
    // Check if expiration month is empty or not between 1 and 12
    if (expMonth === '' || expMonth < 1 || expMonth > 12) {
      isValid = false;
      // Display an error message or perform an appropriate action
      console.log("Please enter a valid expiration month.");
    }
  
    // Check if expiration year is empty or not between 1999 and 2030
    if (expYear === '' || expYear < 1999 || expYear > 2030) {
      isValid = false;
      // Display an error message or perform an appropriate action
      console.log("Please enter a valid expiration year.");
    }
  
    // Check if CVC is empty or doesn't contain exactly 3 digits
    if (cvc.trim() === '' || !/^\d{3}$/.test(cvc)) {
      isValid = false;
      // Display an error message or perform an appropriate action
      console.log("Please enter a valid CVC.");
    }
  
    // Submit the form if all validations pass
    if (isValid) {
      console.log("The form is valid. Submitting...");

    }
  }
  