var assert = require("assert");

var Cliente = require("../../src/2-strategy/cliente").Cliente;
var CriterioComun = require("../../src/2-strategy/cliente").CriterioComun;
var CriterioEspecial = require("../../src/2-strategy/cliente").CriterioEspecial;
var CriterioDudoso = require("../../src/2-strategy/cliente").CriterioDudoso;

describe('Strategy', function () {
	describe('Criterios', function () {
		describe('CriterioComun', function() {
			var cliente;
			var ingreso;

			beforeEach(function () {
				ingreso = 10000;
				cliente = new Cliente(ingreso);
			});
			it('debería retornar un 30% del ingreso', function () {
				assert.equal(new CriterioComun().getMonto(cliente), ingreso * .3);
			});
		});

		describe('CriterioEspecial', function() {
			var cliente;
			var ingreso;

			beforeEach(function () {
				ingreso = 10000;
				cliente = new Cliente(ingreso);
			});
			it('debería retornar un 30% del ingreso', function () {
				assert.equal(new CriterioEspecial().getMonto(cliente), ingreso * .5 - cliente.deuda);
			});
		});

		describe('CriterioDudoso', function() {
			var cliente;
			var ingreso;

			beforeEach(function () {
				ingreso = 10000;
				cliente = new Cliente(ingreso);
			});
			it('debería retornar un 30% del ingreso', function () {
				assert.equal(new CriterioDudoso().getMonto(cliente), 100);
			});
		});
	});

	describe('Clientes', function () {
		describe('Cliente comun', function() {
		  var cliente;
			var ingreso;

		  beforeEach(function () {
				ingreso = 10000;
		    cliente = new Cliente(ingreso);
				// No es necesario configurarle un criterio ya que se usa el default
		  });

			it('debería tener deuda 0', function () {
				assert.equal(cliente.deuda, 0);
			});

			it('debería tener el ingreso correcto', function () {
				assert.equal(cliente.ingreso, ingreso);
			});

			it('debería tener monto maxido de crédito del 30%', function () {
				assert.equal(cliente.montoMaximoCredito(), ingreso * .3);
			});
		});

		describe('Cliente especial', function() {
		  var cliente;
			var ingreso;

		  beforeEach(function () {
				ingreso = 10000;
		    cliente = new Cliente(ingreso);
				cliente.clienteEspecial();
		  });

			it('debería tener deuda 0', function () {
				assert.equal(cliente.deuda, 0);
			});

			it('debería tener el ingreso correcto', function () {
				assert.equal(cliente.ingreso, ingreso);
			});

			it('debería tener monto maxido de crédito del 30%', function () {
				assert.equal(cliente.montoMaximoCredito(), ingreso * .5);
			});
		});

		describe('Cliente dudoso', function() {
		  var cliente;
			var ingreso;

		  beforeEach(function () {
				ingreso = 10000;
		    cliente = new Cliente(ingreso);
				cliente.clienteDudoso();
		  });

			it('debería tener deuda 0', function () {
				assert.equal(cliente.deuda, 0);
			});

			it('debería tener el ingreso correcto', function () {
				assert.equal(cliente.ingreso, ingreso);
			});

			it('debería tener monto maxido de crédito del 30%', function () {
				assert.equal(cliente.montoMaximoCredito(), 100);
			});
		});
	});
});
