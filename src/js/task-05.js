const formRef = document.querySelector('#name-input');

const outpuRef = document.querySelector('#name-output');
// console.dir(outpuRef);

// console.dir(itputRef);

// formRef.addEventListener('input', event => {
//   if ((outpuRef.textContent = '')) {
//     outpuRef.textContent = 'Anonymous';
//   }
//   outpuRef.textContent = event.currentTarget.value;
// });

formRef.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
  console.log('привіт');
}
