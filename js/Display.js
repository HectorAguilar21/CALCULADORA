class Display {
  constructor(displayResumenValor, displayActualValor) {
    this.displayResumenValor = displayResumenValor
    this.displayActualValor = displayActualValor
    this.operacion = new Operaciones();
    this.tipoOperador = undefined;
    this.resumenValor = '';
    this.actualValor = '';
    this.signos = {
      dividir: '/',
      multiplicar: '*',
      restar: '-',
      sumar: '+',
    }
  }

  mostrarNumero() {
    this.displayActualValor.textContent = this.actualValor;
    // const resumenValor = this.resumenValor !== '' ? parseFloat(this.resumenValor).toFixed(3) : '';
    this.displayResumenValor.textContent = `${this.resumenValor}${this.signos[this.tipoOperador] || ''}`;
  }

  agregarNumero(num) {
    if (num === '.' && this.actualValor.includes('.')) return
    this.actualValor += num;
    this.mostrarNumero();
  }

  operar(operador) {
    this.tipoOperador !== 'igual' && this.calcular();
    this.tipoOperador = operador;
    this.resumenValor = this.actualValor || this.resumenValor
    this.actualValor = '';
    this.mostrarNumero();
  }

  calcular() {
    const resValor = parseFloat(this.resumenValor);
    const actValor = parseFloat(this.actualValor);

    if (isNaN(actValor) || isNaN(resValor)) return;
    this.actualValor = this.operacion[this.tipoOperador](resValor, actValor);
  }

  borrarNumero() {
    this.actualValor = this.actualValor.toString().slice(0, -1)
    this.mostrarNumero();
  }

  resetear() {
    this.actualValor = '';
    this.resumenValor = '';
    this.tipoOperador = undefined;
    this.mostrarNumero();
  }
}
