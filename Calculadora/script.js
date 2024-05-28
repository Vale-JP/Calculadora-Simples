let display = document.getElementById('display');

function numero(value) {
  display.value += value;
}

function limparCalculadora() {
  display.value = '';
}

function calcular() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

