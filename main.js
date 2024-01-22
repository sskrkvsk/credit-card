const inputElement = document.getElementById('creditCardInput');
const fullNameInput = document.getElementById('fullNameInput');
const cvvInput = document.getElementById('cvvInput');
const cardCVV = document.querySelector('.card-cvv');
const card = document.getElementById("card");
const cardInner = card.querySelector('.card-inner');

inputElement.addEventListener('keydown', function(event) {
  if (event.key === '-') {
    event.preventDefault();}
  });

inputElement.addEventListener('input', (e) => {
  let inputValue = inputElement.value.replace(/[^0-9-]/g, '');
  if (inputValue.length > 0) {
    if (inputValue.length === 4 || inputValue.length === 9 || inputValue.length === 14) {
      inputValue += "-";
      if (e.inputType === 'deleteContentBackward' || e.inputType === 'deleteContentForward') {
        inputValue = inputValue.slice(0, -1);}}}

  const withoutHyphen = inputValue.replace(/[^0-9]/g, '');
  if (withoutHyphen.length <= 16) {
    inputElement.value = inputValue;
  } else {inputElement.value = withoutHyphen.slice(0, 16);}

  const cardNumber = document.querySelector(".card-number");
    let formattedNumber = inputValue.replace(/-/g, ' ');
  if (inputValue.length === 19) {
    inputElement.classList.add('valid');
    cardNumber.textContent= formattedNumber;
  } else {
    inputElement.classList.remove('valid');}
});


    
fullNameInput.addEventListener('input', (e) => {
  const fullNameValue = fullNameInput.value.replace(/[^A-Za-z\s]/g, '');
  if (e) {
    if (fullNameValue) {
      fullNameInput.value = fullNameValue;
      const fullName = document.querySelector(".card-name");
      if (fullNameValue.length > 6 && fullNameValue.includes(' ')) {
        fullName.textContent = fullNameValue;
        fullNameInput.classList.add("valid");
      } else {
        fullNameInput.classList.remove("valid");
        fullName.textContent = "";}
}}});

    

cvvInput.addEventListener('input', () => {
  let inputValue = cvvInput.value.replace(/[^0-9-]/g, '');
  cvvInput.value = inputValue;
  if (inputValue.length >= 3) {
    cardCVV.textContent = inputValue;
    cvvInput.classList.add("valid");
  } else {
    cvvInput.classList.remove("valid");
    cardCVV.textContent = "";}
});
cvvInput.addEventListener('click', (e) => {
  // Toggle a class to indicate the click event
  cardInner.classList.toggle('clicked');
  
  // Prevent the click event from propagating to the document
  e.stopPropagation();
});

// Add a click event listener to the document
document.addEventListener('click', () => {
  // Remove the 'clicked' class to revert the rotation effect
  cardInner.classList.remove('clicked');
});



// const appearAnimation = (element, classOne, classTwo) => {
//   if(element.classList.contains(classOne)) {
//       element.classList.remove(classOne);
//       element.classList.add(classTwo);
//     } else if (element.classList.contains(classTwo)) {
//       element.classList.remove(classTwo);
//       element.classList.add(classOne);
//     } else {
//       element.classList.add(classOne);
//     }
// }
  


