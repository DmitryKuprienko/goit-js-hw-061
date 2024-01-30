const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const start = document.querySelector('#ingredients');
//ВАРІАНТ 2 КРАЩИЙ
const createElementLi = ingredients
  .map(ingredient => `<li class='item'>${ingredient}</li>`)
  .join('');

console.log('🚀 ~ createElementLi ~ createElementLi:', createElementLi);

start.innerHTML = createElementLi;

// console.log(start);
//ВАРІАНТ 1
// const createElementLi = ingredients.map(el => {
//   const createLI = document.createElement('li');
//   createLI.textContent = el;
//   createLI.classList.add('item');
//   return createLI;
// });

// console.log('🚀 ~ createElementLi ~ createElementLi:', createElementLi);

// start.append(...createElementLi);

// const rest = ingredients.join('@');
// console.log('🚀 ~ rest:', rest);
