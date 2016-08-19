var assert = require("assert");
var Cliente = require("../../src/4-decorator-prototypical-2/cliente").Cliente;

var manuel;
var ricardo;
var clienteSafe;
var clientePromo;

describe('Cliente - Decorator Prototypical 2', function() {
    "use strict";
    var clienteSafe;

    beforeEach(function() {
        manuel = new Cliente();
        ricardo = new Cliente();
        manuel.deuda = 400;
        clienteSafe = manuel.safeShop(200);
        clientePromo = ricardo.promocion();
    });

    it('should allow to buy', function() {
        clienteSafe.comprar(150);
        assert.equal(550, manuel.getDeuda());
        // ojo, el clienteSafe no tiene deuda
        // pero yo veo la deuda del objeto decorado
        assert.equal(550, clienteSafe.getDeuda());
    });

    it('should not allow to buy', function() {
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
    });

    it('should not add points', function() {
        var frank = new Cliente();
        var clienteSafeYPromo = frank.promocion().safeShop(200);
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
        assert.equal(0, frank.puntos);
    });

    it('should add points', function() {
        clientePromo.comprar(150);
        // si el método promocion() hiciera this.agregarPuntos(...)
        // ricardo no tendría puntos!!!
        // pero el cliente promo sí
        // assert.equal(15, clientePromo.puntos);
        assert.equal(15, ricardo.puntos);
    });
});
