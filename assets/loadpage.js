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

const openAccordion = (accordion, plus, minus) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.add('accordion__active');
  content.style.maxHeight = content.scrollHeight + 'px';
  plus.classList.add('hide');
  minus.classList.remove('hide');
  console.log("PLUS SIGN", plus)
};

const closeAccordion = (accordion, plus, minus) => {
  const content = accordion.querySelector('.accordion__content');
  accordion.classList.remove('accordion__active');
  plus.classList.remove('hide');
  minus.classList.add('hide');
  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const intro = accordion.querySelector('.accordion__intro');
  const content = accordion.querySelector('.accordion__content');
  const accordionToggler = accordion.querySelector('.accordion__toggler');

  let [plus, minus] = [accordionToggler.querySelector('.plus__sign'), accordionToggler.querySelector('.minus__sign')]



  intro.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion, plus, minus);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion, plus, minus));
      openAccordion(accordion, plus, minus);
    }
  };
});
