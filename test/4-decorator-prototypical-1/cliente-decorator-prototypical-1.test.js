var assert = require("assert");
var Cliente = require("../../src/4-decorator-prototypical-1/cliente").Cliente;

var manuel;
var ricardo;
var clienteSafe;
var clientePromo;

describe('Cliente - Decorator Prototypical 1', function() {

    "use strict";
    var clienteSafe;
    var frank;
    var clienteSafeYPromo;

    beforeEach(function() {
        manuel = new Cliente();
        ricardo = new Cliente();
        manuel.deuda = 400;
        clienteSafe = manuel.safeShop(200);
        clientePromo = ricardo.promocion();
        frank = new Cliente();
        clienteSafeYPromo = frank.promocion().safeShop(200);
    });

    it('should allow to buy', function() {
        clienteSafe.comprar(150);
        assert.equal(550, manuel.getDeuda());
        // ojo, el clienteSafe publica una deuda vacia
        assert.equal(0, clienteSafe.getDeuda());
    });

    it('should not allow to buy', function() {
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
    });

    it('should not add points', function() {
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
        assert.equal(0, frank.puntos);
    });

    it('should add points', function() {
        clientePromo.comprar(150);
        assert.equal(15, ricardo.puntos);
    });

    it('should add points and validate safe shop', function() {
        clienteSafeYPromo.comprar(150);
        assert.equal(15, frank.puntos);
    });
});
