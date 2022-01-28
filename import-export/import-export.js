//$ Utiliza la exportación para compartir un bloque de código

//*Imagina un archivo llamado math_functions.js que contiene varias funciones relacionadas con operaciones matemáticas. Uno de ellos se almacena en una variable, add, que toma dos números y devuelve su suma. Quieres utilizar esta función en varios archivos JavaScript diferentes. Para compartirlo con estos otros archivos, primero debes usar export (exportarlo).


//*Esto
export const add = (x, y) => {
    return x + y;
}

//*es lo mismo que esto:

const add = (x, y) => {
    return x + y;
}

export { add };


//$ EXPORT DEFAULT
export default function digit(number) {
    return number
}
//* solo se puede tener un valor que sea exportacion por defecto en cada modulo o archivo
import MyDefaultExport from "./MyFileWithADefaultExport";
//Se le puede dar cualquier nombre, y no tiene que esta dentro de {} porque es la por defecto y es un nombre de variable

//?module.exports
function myFunction(arg) {
    console.debug(arg);
}
function otherFunction(arg) {
    console.error(arg);
}

module.exports = {
    myFunction: myFunction,
    otherFunction: otherFunction,
};

//IMPORT
//$Reutiliza código de JavaScript utilizando import
//*import te permite elegir qué partes de un archivo o módulo cargar. En la lección previa, los ejemplos exportaron add del archivo math_functions.js. Así es como puedes importarlo para utilizarlo en otro archiv

import { add, substract } from './math_functions.js';

//*El ./, dice a import que busque el archivo math_functions.js en la misma carpeta que el archivo actual.



//? Ejercicio:
//*Agrega la declaración import apropiada que permita al archivo actual, usar las funciones uppercaseString y lowercaseString.Estas funciones se encuentran en un archivo llamado string_functions.js, el cual está en el mismo directorio que el archivo actual.

import { uppercaseString, lowercaseString } from './string_functions.js'



//* Use * para importar todo de un archivo

//? Ejemplo:
// Supongamos que tienes un archivo y deseas importar todo su contenido en el archivo actual. Esto puede hacerse con la sintaxis import * as. Este es un ejemplo donde los contenidos de un archivo llamado math_functions.js son importados a un archivo dentro del mismo directorio:

import * as myMathModule from "./math_functions.js";

//? Para utilizar *, tengo que tener export en todas las funciones o variables que quiero que sean exportadas y se juntan todas en un objeto myMathModule
//* La anterior declaración import, crea un OBJETO llamado myMathModule. Esto es, sólo el nombre de una variable, puedes nombrarlo de cualquier manera. El objeto contiene todas las exportaciones de math_functions.js, así puedes acceder a las funciones, como haces con cualquier propiedad del objeto. A continuación puedes usar las funciones importadas add y subtract:

myMathModule.add(2, 3);
myMathModule.subtract(5, 3);

//* ex. giving a named import a different name by using "as":
import { MyClass2 as MyClass2Alias } from "./MyClass2";




