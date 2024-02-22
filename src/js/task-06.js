const inputEl= document.querySelector('#validation-input');
console.dir(inputEl)

inputEl.addEventListener('focus', receivedFocus)
inputEl.addEventListener('blur', lostFocus)

function receivedFocus() {
    console.log('отримав фокус')
}

function lostFocus() {
    console.log('втратив фокус')
}