const displayResumenValor = document.getElementById('resumenValor');
const displayActualValor = document.getElementById('actualValor');
const numeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador');
const borrar = document.getElementById('borrar');
const resetear = document.getElementById('resetear');

const display = new Display(displayResumenValor, displayActualValor)

numeros.forEach(numero => {
  numero.addEventListener('click', () =>
    display.agregarNumero(numero.innerHTML)
  )
})

operadores.forEach(operador => {
  operador.addEventListener('click', () =>
    display.operar(operador.value)
  )
})

borrar.addEventListener('click', () => display.borrarNumero())
resetear.addEventListener('click', () => display.resetear())
