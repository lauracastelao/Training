// Constante que define PI
var pi = Math.PI;
console.log(pi);

// Método para calcular que número es más bajo.
console.log(Math.min(1, 2, 3, -5, 34545));

// ¿Que número es mayor?
console.log(Math.max(1, 2, 3, -5, 34545));

// Redondear número
console.log(Math.round(2.8));

// Redondear hacia la baja
console.log(Math.floor(4.8));

// Redondear en alto
console.log(Math.ceil(4.3));

// Generar números aleatorios, entre 0 y 1
var aleatorio = Math.random()
console.log(aleatorio)

// Ejercicio,generar número aleatorio menor que 100 y que sea entero:


function generarNumero(numeroMaximo){
    return Math.round(Math.random() * numeroMaximo) ;
}

console.log(generarNumero(100));
