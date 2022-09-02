import { getModalComponent, getSpinnerComponent } from './util/spinner-util.js';

// get data
import data from './data.js';

// Render All Spinners 
const spinnersContainer = document.querySelector('.spinners .row');
data.forEach(spinner => spinnersContainer.append(getSpinnerComponent(spinner)));

// Open Modal
const spinnersCards = document.querySelectorAll('.spinner-container');
spinnersCards.forEach((card, index) => card.addEventListener('click', () => {
  openModal(data[index]);
}));


// Handle Open Modal
async function openModal(spinnerData) {
  // read css file
  let cssCode;
  try {
    const res = await fetch(`./css/spinners/${spinnerData.className}.css`);
    cssCode = await res.text();
  } catch (error) {
    console.log(error)
  }
  // open modal
  document.body.append(getModalComponent(spinnerData, cssCode));
  const modal = document.querySelector('.overlay');
  setTimeout(() => {
    modal.classList.add('open')
    document.body.style.overflow = 'hidden';
  }, 100);
  // close modal
  const close = document.querySelector('.overlay .modal .close');
  close.onclick = () => {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.remove()
      document.body.style.overflow = 'unset';
    }, 300);
  };
}