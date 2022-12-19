var date = new Date();
console.log(date);

var year = date.getFullYear();
console.log(year);
// Ejecutando este método nos devolverá el año en el que se ha setteado nuestra variable date

var month = date.getMonth();
var day = date.getDate();
console.log(day);
console.log(
  "Hola hoy es el día " + day + " del mes " + month + " y del año " + year
);

