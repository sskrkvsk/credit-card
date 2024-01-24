const inputElement = document.getElementById('creditCardInput');
const container = document.querySelector('.container');
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
const inputFields = document.getElementById('inputFields');
const themeBtn = document.getElementById('theme');

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
    cardNumber.textContent = formattedNumber;
  
    const splitedNumber = formattedNumber.split('');
    console.log(splitedNumber);
    const hiddenNumber = splitedNumber.map((number, index) =>{
      if (number == " " || number == "-") {
        return number
      } else {
        if(index > 3 && index < 14) {
          number = '*';
        } else {
          return number;
        }
        return number
      }
    });
    setTimeout(()=> {cardNumber.textContent = hiddenNumber.join('')}, 4000);
  } else {
    inputElement.classList.remove('valid');}

  if (formattedNumber[0] === '4') {
    cardType.style.backgroundSize = '110%';
    cardType.style.backgroundImage = 'url(./images/visa.png)'
  } else if (formattedNumber[0] === '5') {
    cardType.style.backgroundImage = 'url(./images/mastercard.png)'
    cardType.style.backgroundSize = '88%';
  } else if (formattedNumber[0] > 0 && formattedNumber[0] !== 4 && formattedNumber[0] !== 5) {
    cardType.style.backgroundSize = '75%'
    cardType.style.backgroundImage = 'url(./images/card.png)'
  } else {
    cardType.style.backgroundImage = ''
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
    cardCVV.value = inputValue;
    setTimeout(()=>{cardCVV.type = "password"}, 2000);
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
  const dateDropdown = document.querySelector(className);
  const items = document.querySelectorAll(listClass);
  element.addEventListener('click', (e) => {
    dateDropdown.style.height = '238px';
    items.forEach((item, index) => {
      item.style.cursor = 'pointer';
      if (index < 2) {
        item.style.transition = 'ease 1.1s';
        item.style.borderBottom = '1px solid #9b9b9b';
      } else if (index >= 2 && index < 4) {
        item.style.transition = 'ease-in 2.5s';
        item.style.borderBottom = '1px solid #9b9b9b';
      } else if (index >= 4 && index < 6) {
        item.style.transition = 'ease-in 2.7s';
        item.style.borderBottom = '1px solid #9b9b9b';
      } else if (index >= 6 && index < 8) {
        item.style.transition = 'ease-in 2.8s';
        item.style.borderBottom = '1px solid #9b9b9b';
      } else if (index >= 8 && index < 10) {
        item.style.transition = 'ease-in 4.9s';
        item.style.borderBottom = '1px solid #9b9b9b';
      } else  {
        item.style.transition = 'ease-in 5.4s';
      }
      item.style.opacity = '1';
      if (e) {
        hideHafler(placeholderMonth, '.month-ul', '.m-li');
        hideHafler(placeholderYear, '.year-ul', '.y-li');
      }
    });});
};
const hideHafler = (placeholder, className, listClass) => {
  const dateDropdown = document.querySelector(className);
  const items = document.querySelectorAll(listClass);
  const clickHandler = (e) => {
    items.forEach((item, index) => {
      item.style.cursor = 'default';
      item.style.transition = 'ease 0.2s';
      item.style.opacity = '0';
    });
    dateDropdown.style.height = '0';
    placeholder.textContent = e.currentTarget.textContent;
    if (placeholder.textContent.length === 2) {
      monthSpan.textContent = `${placeholder.textContent}  /`;
    } else if (placeholder.textContent.length === 4) {
      yearSpan.textContent = `   ${placeholder.textContent}`;
    }
    items.forEach((item) => {
      item.removeEventListener('click', clickHandler);
    });
    e.stopPropagation();
  };
  items.forEach((item) => {
    item.addEventListener('click', clickHandler);
  });
};
dateHandler(document.querySelector('.placeholdersM'), '.month-ul', '.m-li');
dateHandler(document.querySelector('.placeholdersY'), '.year-ul', '.y-li');

const submitChange = (childH, childD, inputH, textC, btnW, mT, sH, sO) => {
  const children = document.querySelectorAll('.child');
  const success = document.querySelector('.success');
  children.forEach((child) => {
    child.style.height = childH; 
    setTimeout(() => {
      child.style.display = childD; 
    }, 500);
  })
  inputFields.style.height = inputH;
  submitBtn.textContent = textC;
  submitBtn.style.width = btnW;
  setTimeout(() => {
    submitBtn.style.marginTop = mT;
    success.style.height = sH;
    success.style.opacity = sO;
  }, 500);
}
submitBtn.addEventListener('click', () => {
  if (submitBtn.textContent === "SUBMIT") {
    submitChange('0px', 'none', '0px', 'BACK', '30%', '40px', '70px', '1');
  } else if (submitBtn.textContent === "BACK") {
    submitChange('50px', 'flex', '200px', 'SUBMIT', '100%', '30px', '20px', '0');
  }
});

cardCVV.addEventListener('click', (e) => {
  if (cardCVV.type === "password") {
    cardCVV.type = "text";
  } else {
    cardCVV.type = "password";
  }
  e.stopPropagation();
})

themeBtn.addEventListener('click', () => {
  container.classList.toggle('dark-container');
  document.body.classList.toggle('dark-body');
  creditCardInput.classList.toggle('dark-input');
  fullNameInput.classList.toggle('dark-input');
  monthInput.classList.toggle('dark-small-input');
  yearInput.classList.toggle('dark-small-input');
  cvvInput.classList.toggle('dark-input');
  submitBtn.classList.toggle('dark-submit');
  document.querySelector('.card-face').classList.toggle('dark-card');
  document.querySelector('.card-back').classList.toggle('dark-card');
  document.querySelector('.year-ul').classList.toggle('dark-ul');
  document.querySelector('.month-ul').classList.toggle('dark-ul');
  document.querySelector('.success').classList.toggle('dark-success');
});