const btn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

btn.addEventListener('click', changeColor);
