const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

let arrIngridients = [];
let list = 0;

ingredients.map(ingridient => {
  list = document.createElement('li');
  list.class = 'item';
  list.textContent = ingridient;
  arrIngridients.push(list);
});

const menuIngridients = document.querySelector('ul');
menuIngridients.prepend(...arrIngridients);
