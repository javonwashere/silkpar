let allButtons = document.querySelectorAll('a.button.button--primary');

let newButton = document.createElement('a');
newButton.classList.add('button', 'button--primary');

allButtons.forEach((button) => {
  let arrow = document.createElement('div');
  arrow.classList.add('img__button__arrow');
  let buttonValue = `<span>${button.innerText}</span>${arrow.outerHTML}`;
  button.innerHTML = buttonValue;
});

const accordions = document.querySelectorAll('.accordion-card');

console.log('ACCORDIONS ', accordions);

const openAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.add('accordion__active');
  content.style.maxHeight = content.scrollHeight + 'px';
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.remove('accordion__active');
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector('.accordion__intro');
  const content = accordion.querySelector('.accordion__content');

  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
