const formRef = document.querySelector('#name-input');

const outpuRef = document.querySelector('#name-output');
// console.dir(outpuRef);

console.dir(formRef);

formRef.addEventListener('input', event => {

  if ((formRef.value !== '')) {
    outpuRef.textContent = event.currentTarget.value;
  }else{   outpuRef.textContent = 'Anonymous';
  }

});


