document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('creditCardInput');
  
    inputElement.addEventListener('input', function(e) {
      let inputValue = inputElement.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
      
      // Handle backspace
      if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
      
          inputValue = inputValue.slice(0, -1); // Remove the last character (hyphen)

      } else {
        // Add hyphen after every 4 digits
        inputValue = inputValue.replace(/(\d{4})/g, '$1-');
      }
  
      if (inputValue.length <= 16) {
        inputElement.value = inputValue;
      }
  
      inputValue.length === 20 ? inputElement.classList.add('valid') : inputElement.classList.remove('valid');
      console.log(inputValue.length);
    });
  });
  