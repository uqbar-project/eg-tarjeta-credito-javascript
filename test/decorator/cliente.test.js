var assert = require("assert");

var Cliente = require("../../src/decorator/cliente").Cliente;
var ClienteConSafeShop = require("../../src/decorator/cliente").ClienteConSafeShop;
var ClienteConPromocion = require("../../src/decorator/cliente").ClienteConPromocion;

var manuel;
var ricardo;
var clienteSafe;
var clientePromo;

describe('Cliente - Decorator Simple', function() {
    "use strict";
    var clienteSafe;

    beforeEach(function() {
        manuel = new Cliente();
        ricardo = new Cliente();
        manuel.deuda = 400;
        clienteSafe = new ClienteConSafeShop(manuel, 200);
        clientePromo = new ClienteConPromocion(ricardo);
    });

    it('should allow to buy', function() {
        clienteSafe.comprar(150);
        assert.equal(550, clienteSafe.getDeuda());
    });

    it('should not allow to buy', function() {
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
    });

    it('should not add points', function() {
        var frank = new Cliente();
        var clienteSafeYPromo = new ClienteConSafeShop(new ClienteConPromocion(frank), 200);
        assert.throws(function() {
            clienteSafe.comprar(250);
        }, Error, "No se puede comprar por mas del monto de safe shop");
        assert.equal(0, frank.puntos);
    });

    it('should add points', function() {
        clientePromo.comprar(150);
        assert.equal(15, ricardo.puntos);
    });
});
