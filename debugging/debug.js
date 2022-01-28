//* Para poder capturar valores intermedios en una funcion por ejemplo
console.log()

//* Para poder borrar la consola del navegador
console.clear()

//* Para comprobar la Estructura de Datos o tipo de una variable
//? útil en la depuración cuando se trabaja con múltiples tipos de datos.
//$ JavaScript reconoce seis tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, y Symbol (nuevo con ES6) y un tipo para elementos mutables: Object. Ten en cuenta que en JavaScript, los arreglos son técnicamente un tipo de objeto.
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});


//*Los caracteres transpuestos, omitidos o mal escritos en el nombre de una variable o función harán que el navegador busque un objeto que no existe, y se queje en forma de error de referencia. Los nombres de variables y funciones de JavaScript distinguen entre mayúsculas y minúsculas.
//* Los errores de paréntesis, corchetes, llaves y comillas sin cerrar



//$ Falsy values
//? Casi todos los valores por sí solos en JavaScript se evalúan como true, excepto lo que se conoce como valores "falsos" (falsy values): false, 0, "" (una cadena vacía), NaN, undefined, y null.
let x = 2; //?
if (x) console.log('fue true')



//* Olvidarse de agregar () cuando llamamos a un fn
function myFunction() {
    return "You rock!";
}
let varOne = myFunction; //?
let varTwo = myFunction(); //?




