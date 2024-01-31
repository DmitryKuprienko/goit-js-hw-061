const itputRef = document.querySelector('#name-input');

const outpuRef = document.querySelector('#name-output');
console.log('🚀 ~ outpuRef:', outpuRef);

itputRef.addEventListener('type', el => {
  console.log(el);
});
console.dir(itputRef);
