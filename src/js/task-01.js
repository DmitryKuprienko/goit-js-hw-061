const itemRef = document.querySelectorAll('.item');
console.log(itemRef);

console.log(`Number of categories=>`, itemRef.length);
itemRef.forEach(element => {
  console.log('Category=>', element.firstElementChild.textContent);
  console.log('Elements=>', element.lastElementChild.childElementCount);
});
// console.log([])
$env: PATH += ';C:Program FilesGit\bin';
