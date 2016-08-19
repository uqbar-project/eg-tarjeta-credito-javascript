// Para los clientes comunes se calcula el 30% de su ingreso
// Para los clientes especiales es 30% de su ingreso + $2000
// Para los clientes de cobro dudoso es $ 100 si deben más de $5000
// 		ó el 30% de su ingreso en caso contrario

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

CriterioMontoCredito.prototype = {
	getMonto: function(cliente) {
		return cliente.ingreso * .3;
	}
}
function CriterioMontoCredito() { }

CriterioComun.prototype = CriterioMontoCredito.prototype;
function CriterioComun() { }

CriterioEspecial.prototype = CriterioMontoCredito.prototype;
function CriterioEspecial() {
	this.getMonto = function(cliente) {
		return CriterioEspecial.prototype.getMonto(cliente) + 2000;
	}
}

CriterioDudoso.prototype = CriterioMontoCredito.prototype;
function CriterioDudoso() {
	this.getMonto = function(cliente) {
		return (cliente.deuda > 5000) ? 100 : CriterioDudoso.prototype.getMonto(cliente);
	}
}

module.exports = {
    Cliente: Cliente,
    CriterioComun: CriterioComun,
    CriterioEspecial: CriterioEspecial,
		CriterioDudoso: CriterioDudoso
};
