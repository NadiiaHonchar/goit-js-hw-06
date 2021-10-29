const inputRange = document.querySelector('#font-size-control');
const inputText = document.querySelector('#text');

inputRange.addEventListener('input', changeRange);

function changeRange(event) {
  inputText.style.fontSize = event.currentTarget.value + 'px';
}
