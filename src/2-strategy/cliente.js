// Para los clientes comunes se calcula como el 30% de su ingreso
// Para los clientes especiales es un 50% de su ingreso menos su deuda
// Para los clientes de cobro dudoso es $ 100

function Cliente(ingreso) {
	// Atributos
	this.deuda = 0;
	this.ingreso = ingreso;
	this.criterioMontoCredito = new CriterioComun();

	// Métodos
	this.montoMaximoCredito = function () {
		return this.criterioMontoCredito.getMonto(this);
	}

	this.clienteEspecial = function () {
		this.criterioMontoCredito = new CriterioEspecial();
	}

	this.clienteDudoso = function () {
		this.criterioMontoCredito = new CriterioDudoso();
	}
}

function CriterioComun() {
	this.getMonto = function(cliente) {
		return cliente.ingreso * .3;
	}
}

function CriterioEspecial() {
	this.getMonto = function(cliente) {
		return cliente.ingreso * .5 - cliente.deuda;
	}
}
function CriterioDudoso() {
	this.getMonto = function(cliente) {
		return 100;
	}
}

module.exports = {
    Cliente: Cliente,
    CriterioComun: CriterioComun,
    CriterioEspecial: CriterioEspecial,
		CriterioDudoso: CriterioDudoso
};
