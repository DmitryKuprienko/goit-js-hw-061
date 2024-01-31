let counterValue = 0;

const counterElement = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

const decrement = () => {
  if (counterValue > 0) {
    counterValue -= 1;
    counterElement.textContent = counterValue;
  }
};

const increment = () => {
  counterValue += 1;
  counterElement.textContent = counterValue;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);

console.log('🚀 ~ counterValue:', counterValue);
