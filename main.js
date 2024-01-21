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
      inputValue.length === 20 ? inputElement.classList.add('valid') : inputElement.classList.remove('valid');
    });
  });
  