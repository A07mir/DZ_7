const input = document.getElementById('text');
const quantity = document.getElementById('quantity');
const max = 30;

function text () {
    const inputText = input.value;
    const length = inputText.length;
   quantity.textContent = `Ко-во символов: ${length}`;
    if (length > max) {
        input.style.backgroundColor = 'red';
    } else {
        input.style.backgroundColor = 'white';
    }
}
input.addEventListener('input', text);