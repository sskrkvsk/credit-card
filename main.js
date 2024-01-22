const inputElement = document.getElementById('creditCardInput');
const fullNameInput = document.getElementById('fullNameInput');
const cvvInput = document.getElementById('cvvInput');
const cardCVV = document.querySelector('.card-cvv');
const card = document.getElementById("card");
const cardInner = card.querySelector('.card-inner');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');

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
  cardInner.classList.toggle('clicked');
  e.stopPropagation();
});
card.addEventListener('click', (e) => {
  cardInner.classList.toggle('clicked');
  e.stopPropagation();
});
document.addEventListener('click', () => {
  cardInner.classList.remove('clicked');
});


card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) / 40;
  const y = (e.clientY - rect.top - rect.height / 2) / 40;
  card.style.transform = `translate(${x}px, ${y}px)`;
});
card.addEventListener('mouseleave', () => {
  card.style.transform = 'translate(0, 0)';
});

const dateHandler = (element, className, listClass) => {
  element.addEventListener('click', () => {
    const dateDropdown = document.querySelector(className);
    const items = document.querySelectorAll(listClass);
    dateDropdown.style.height = '238px';
    items.forEach((item) => {
      item.style.opacity = '1';
    })
    // items.style.transform = 'scale(1)';
    
  });
};

dateHandler(monthInput, '.month-ul', '.m-li');