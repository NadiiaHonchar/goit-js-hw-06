const menuItemsList = document.querySelectorAll('.item');
console.log(`Number of categories: ${menuItemsList.length}`);

menuItemsList.forEach(element => {
  const headCategories = element.querySelector('h2');
  console.dir('Category: ' + headCategories.textContent);
  const elementList = element.querySelectorAll('li');
  console.log(`Elements: ${elementList.length}`);
});
