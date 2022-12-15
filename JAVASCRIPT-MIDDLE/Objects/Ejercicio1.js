// Objeto jugador propiedad fuerza y que permita incrementar en 1 la fuerza del jugador y un método consultarFuerza que muestre un mensaje con la fuerza del jugador.

function Jugador() {
    this.fuerza = 1;

    this.mostrarFuerza = function() {
        console.log("Tu fuerza es de " + this.fuerza);
    }

    this.incrementarFuerza = function () {
        this.fuerza += 1;
    }
}

var jugador1 = new Jugador();
jugador1.mostrarFuerza();  // Tu fuerza es de 1
jugador1.incrementarFuerza();
jugador1.mostrarFuerza();  // Tu fuerza es de 2
