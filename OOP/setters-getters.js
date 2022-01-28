//* Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

//* Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

//$ Las funciones GETTER están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto al usuario sin que el usuario acceda directamente a la variable privada.


//$Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el valor anterior.

//*Los getter y los setter son importantes porque ocultan los detalles internos de la implementación, ademas que no se ven como funciones normales

//? Es convención preceder el nombre de una variable privada con un guión bajo (_). Sin embargo, la práctica en sí misma no hace una variable privada.

class Book {
    constructor(author) {
        this._author = author;
    }
    // getter
    get writer() {
        return this._author;
    }
    // setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}
const novel = new Book('anonymous');
console.log(novel.writer);
//*Al llamar al setter o getter, no se llama a una fn
novel.writer = 'newAuthor';
console.log(novel.writer);


//$ Este es el poder de un getter y un setter. Estás creando una API para otro usuario, que puede obtener el resultado correcto independientemente de cuál estés rastreando.

//*En otras palabras, estás abstrayendo los detalles de la implementación del usuario.


// Cambia solo el código debajo de esta línea
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}
// Cambia solo el código encima de esta línea

//? Thermostat hace set con Fahrenheit y getea con celcius
const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
temp

thermos.temperature = 26;

temp = thermos.temperature; // 26 en Celsius
temp //?
