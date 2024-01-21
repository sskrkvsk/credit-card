document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById('creditCardInput');
    inputElement.addEventListener('keydown', function(event) {
      if (event.key === '-') {
        event.preventDefault();}});

    inputElement.addEventListener('input', function(e) {
      let inputValue = inputElement.value.replace(/[^0-9-]/g, '');

      if (inputValue.length > 0) {
        if (inputValue.length === 4 || inputValue.length === 9 || inputValue.length === 14) {
          inputValue += "-";
          if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
            inputValue = inputValue.slice(0, -1);}}}

      const withoutHyphen = inputValue.replace(/[^0-9]/g, '');
      if (withoutHyphen.length <= 16) {
        inputElement.value = inputValue;
      } else {
        inputElement.value = withoutHyphen.slice(0, 16);
      }

      if (inputValue.length === 19) {
        inputElement.classList.add('valid');
        const cardNumber = document.querySelector(".card-number");
        let formattedNumber = inputValue.replace(/-/g, ' ');
        cardNumber.textContent= formattedNumber;
      } else {
        inputElement.classList.remove('valid');
      }
    });


    const fullNameInput = document.getElementById('fullNameInput');
    fullNameInput.addEventListener('input', function(e) {
      const fullNameValue = fullNameInput.value.replace(/[^A-Za-z\s]/g, '');
      if (e) {
        if (fullNameValue) {
          fullNameInput.value = fullNameValue;
          const fullName = document.querySelector(".card-name");
          if (fullNameValue.length > 6 && fullNameValue.includes(' ')) {
            fullName.textContent = fullNameValue;
            fullNameInput.classList.add("valid");
          } else {
            fullNameInput.classList.remove(".valid");
            fullName.textContent = "";
          }
        }
      } 
    });
  });
  