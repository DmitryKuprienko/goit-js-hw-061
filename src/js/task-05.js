const itputRef = document.querySelector('#name-input');

const outpuRef = document.querySelector('#name-output');
console.dir(outpuRef);

console.dir(itputRef);

itputRef.addEventListener('input', event => {
  if ((outpuRef.textContent = '')) {
    outpuRef.textContent = 'Anonymous';
  }
  outpuRef.textContent = event.data;
});
