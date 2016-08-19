var assert = require("assert");

var Ingrediente = require("../../src/5-mixins/mixins").Ingrediente;

describe('Mixins', function () {
  describe('morcilla como ingrediente', function() {
    var morci;

    beforeEach(function () {
      morci = new Ingrediente();
      morci.nombre = 'morcilla';
      morci.calorias = 1000;
    });

    it('debería tener nombre correcto', function() {
      assert.equal(morci.nombre, 'morcilla');
    });
    it('debería ser heavy', function() {
      assert.equal(morci.esPesado(), true);
    });
    it('debería no ser saludable', function() {
      assert.equal(morci.esSaludable(), false);
    });
    it('debería no estar ingresado', function() {
      assert.equal(morci.estaIngresado(), false);
    });
  });
});
