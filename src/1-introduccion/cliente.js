function Cliente(nombre) {
  // Atributos
	this.deuda = 0;
  this.nombre = nombre;

	// Métodos
	this.comprar = function(monto) {
    this.deuda = this.deuda + monto;
  }

  this.pagarVencimiento = function(monto) {
    this.deuda = this.deuda - monto;
  }
}

module.exports = {
    Cliente: Cliente
};
