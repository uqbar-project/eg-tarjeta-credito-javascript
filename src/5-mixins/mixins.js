var dosis = {
    // atributos
    cantidad: 0,
    nombre: '',
    unidadMedida: '',
    // métodos
    estaIngresado: function() {
        return (this.cantidad > 0) && !!this.nombre;
    },
    toString: function() {
        return this.cantidad + ' ' + this.unidadMedida + ' de ' + this.nombre;
    }
};

var comestible = {
    calorias: 0,
    esSaludable: function() {
        return !this.esPesado;
    },
    esPesado: function() {
        return this.calorias > 50;
    }
}

var convertibleAJSON = {
    toJSON: function(propiedadesVisibles) {
        var dto = {};
        for (var i in propiedadesVisibles) {
            var propiedad = propiedadesVisibles[i];
            if (this.hasOwnProperty(propiedad)) {
                dto[propiedad] = this[propiedad];
            }
        }
        return JSON.stringify(dto);
    }
}

function Ingrediente() {
    this.augment(dosis);
    this.augment(comestible);
    this.augment(convertibleAJSON);
}

Ingrediente.prototype = {
    validar: function() {
        if (!this.estaIngresado()) {
            throw new Error("No ha ingresado cantidad o nombre del ingrediente");
        }
        if (calorias <= 0) {
            throw new Error("Debe ingresar un valor positivo de calorías");
        }
    }
}

Object.prototype.augment = function(source) {
    for (var k in source) {
        if (source.hasOwnProperty(k)) {
            this[k] = source[k];
        }
    }
    return this;
};


module.exports = {
    Ingrediente: Ingrediente
};
