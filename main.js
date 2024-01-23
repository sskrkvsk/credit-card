const inputElement = document.getElementById('creditCardInput');
const fullNameInput = document.getElementById('fullNameInput');
const cvvInput = document.getElementById('cvvInput');
const cardCVV = document.querySelector('.card-cvv');
const card = document.getElementById("card");
const cardInner = card.querySelector('.card-inner');
const monthInput = document.getElementById('monthInput');
const yearInput = document.getElementById('yearInput');
const placeholderMonth = document.getElementById('placeholder-month');
const placeholderYear = document.getElementById('placeholder-year');
const monthSpan = document.getElementById('month');
const yearSpan = document.getElementById('year');
const cardType = document.getElementById('cardType');
const submitBtn = document.getElementById('submitBtn');

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

  if (formattedNumber[0] === '4') {
    cardType.style.backgroundSize = '110%';
    cardType.style.backgroundImage = 'url(./images/visa.png)'
    console.log('visa');
  } else if (formattedNumber[0] === '5') {
    cardType.style.backgroundImage = 'url(./images/mastercard.png)'
    cardType.style.backgroundSize = '88%';
  } else if (formattedNumber[0] > 0 && formattedNumber[0] !== 4 && formattedNumber[0] !== 5) {
    cardType.style.backgroundSize = '75%'
    cardType.style.backgroundImage = 'url(./images/card.png)'
    console.log('else');
  } else {
    cardType.style.backgroundImage = ''
    console.log('nothing');
  }
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
    items.forEach((item, index) => {
      if (index < 2) {
        item.style.transition = 'ease 1s';
      } else if (index >= 2 && index < 4) {
        item.style.transition = 'ease-in 1.8s';
      } else if (index >= 4 && index < 6) {
        item.style.transition = 'ease-in 1.9s';
      } else if (index >= 6 && index < 8) {
        item.style.transition = 'ease-in 2s';
      } else if (index >= 8 && index < 10) {
        item.style.transition = 'ease-in 3.4s';
      } else  {
        item.style.transition = 'ease-in 4.2s';
      }
      item.style.opacity = '1';
    });});
};
const hideHafler = (placeholder, className, listClass) => {
  const dateDropdown = document.querySelector(className);
  const items = document.querySelectorAll(listClass);

  items.forEach((item) => {
    item.addEventListener('click', (e) => {
      items.forEach((item, index) => {
        if (index < 2) {
          item.style.transition = 'ease 1.5s';
        } else if (index >= 2 && index < 4) {
          item.style.transition = 'ease-in .6s';
        } else if (index >= 4 && index < 6) {
          item.style.transition = 'ease-in 0.4s';
        } else if (index >= 6 && index < 8) {
          item.style.transition = 'ease-in 0.4s';
        } else if (index >= 8 && index < 10) {
          item.style.transition = 'ease-in 0.4s';
        } else  {
          item.style.transition = 'ease-in 0.2s';
        }
        item.style.opacity = '0';
      })
      dateDropdown.style.height = '0';
      placeholder.textContent = item.textContent;

      if(placeholder.textContent.length === 2) {
        monthSpan.textContent = `${placeholder.textContent}  /`;
        console.log(monthSpan.textContent);
      } else if (placeholder.textContent.length === 4) {
        yearSpan.textContent = `   ${placeholder.textContent}`;
      }

      e.stopPropagation();
    })
  })
}
dateHandler(monthInput, '.month-ul', '.m-li');
dateHandler(yearInput, '.year-ul', '.y-li');
hideHafler(placeholderMonth, '.month-ul', '.m-li');
hideHafler(placeholderYear, '.year-ul', '.y-li');

const fullDate = (placeholder, span) => {
  
  
}

fullDate(placeholderMonth, monthSpan);