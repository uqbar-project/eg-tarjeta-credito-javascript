var assert = require("assert");

var Cliente = require("../../src/1-introduccion/cliente").Cliente;

describe('Introduccion', function () {
  describe('Cliente', function() {
    var cliente;
    var nombre;

    beforeEach(function() {
      nombre = 'fernando';
      cliente = new Cliente(nombre);
    });

    it('debería crear un cliente con nombre correcto', function() {
      assert.equal(cliente.nombre, nombre);
    });

    it('debería tener deuda 0', function() {
      assert.equal(cliente.deuda, 0);
    });

    it('debería aumentar la deuda al comprar', function() {
      var monto = 150;

      cliente.comprar(monto);

      assert.equal(cliente.deuda, monto);
    });

    it('debería disminuir la deuda al pagar vencimiento', function() {
      var monto = 150;

      cliente.comprar(monto);
      cliente.pagarVencimiento(monto);

      assert.equal(cliente.deuda, 0);
    });
  });
});
