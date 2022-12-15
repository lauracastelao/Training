// Objetos declarativos o literales
var persona1= {
    nombre: 'Jhon',
    edad: 30,
    saludar: function(){
        console.log('Hola');
    }
}
// Objetos construidos 
function Persona(nombre,edad){
    this.nombre= nombre;
    this.edad= edad;
    this.saludar = function(){
        console.log('Hola');
    }
}
// Usando new Object 
var persona1 = new Object ({
    nombre: 'Jhon',
    edad= 30,
    saludar: function(){}
});

var animal = {
nombre: 'Pipo',
edad:10,
saludar: function(){
    this.console.log(this.nombre)
    console.log('Hola')
};
console.log(animal)

// Acceder a ese atributo 
console.log(persona.nombre);
 
// Para ejecutar una función
console.log(persona.saludar());

};





