var colores = new Array("lila", "rosa", "amarillo");
var total = 0;
// Iteramos mediante un bucle for,el indice empieza desde el 0, si es menor al tamaño del array (3) no se ejecuta sino...incrementa
for (var indice = 0; indice < colores.length; indice += 1) {
  console.log(colores[indice]);
}

// Muestra los números pares del siguiente array
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var par = 0; par < numeros.length; par += 1) {
  // Si la variable se divide entre dos y el restante no tiene decimales es un numero par
  if (par % 2 == 0) {
    console.log(par);
  }

  // Suma todos los números del Array
  total += numeros[par];
}

console.log (total)