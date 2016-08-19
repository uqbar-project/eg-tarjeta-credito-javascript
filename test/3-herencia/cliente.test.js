var assert = require("assert");

var Cliente = require("../../src/3-herencia/cliente").Cliente;
var CriterioComun = require("../../src/3-herencia/cliente").CriterioComun;
var CriterioEspecial = require("../../src/3-herencia/cliente").CriterioEspecial;
var CriterioDudoso = require("../../src/3-herencia/cliente").CriterioDudoso;

describe('Herencia', function () {
	describe('Clientes', function () {
		describe('Cliente comun', function() {
		  var cliente;
			var ingreso;

		  beforeEach(function () {
				ingreso = 10000;
		    cliente = new Cliente(ingreso);
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

			it('debería tener monto maxido de crédito del 30% + 2000', function () {
				assert.equal(cliente.montoMaximoCredito(), 5000);
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
				assert.equal(cliente.montoMaximoCredito(), 3000);
			});
		});
	});
});
