const refs = {
  inputNumber: document.querySelector('#controls>input'),
  inputCreate: document.querySelector('[ data-create]'),
  inputDestroy: document.querySelector('[data-destroy]'),
  plaseSet: document.querySelector('#controls'),
};

let countNumber = 0;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.inputNumber.addEventListener('input', event => {
  countNumber = event.currentTarget.value;
  console.log(countNumber);
});

refs.inputCreate.addEventListener('click', makeDiv);

let setSizeDiv = 30;

function makeDiv() {
  for (let i = 0; i < countNumber; i += 1) {
    refs.plaseSet.insertAdjacentHTML(
      'afterend',
      `<div class="galery" style="width: ${setSizeDiv}px; height: ${setSizeDiv}px; background-color: ${getRandomHexColor()};">"Hello"</div>`,
    );
    setSizeDiv += 10;
  }
}

refs.inputDestroy.addEventListener('click', clear);

function clear() {
  const galeryDiv = document.querySelector('.galery');
  galeryDiv.innerHTML('');
}
