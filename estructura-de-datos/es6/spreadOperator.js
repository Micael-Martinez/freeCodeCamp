//https://www.ma-no.org/es/programacion/javascript/javascript-los-operadores-de-propagacion-y-del-resto


//$ El operador rest y el operador de propagacion NO es lo mismo
//* La principal diferencia entre rest y spread es que el operador rest organiza el resto de algunos valores específicos suministrados por el usuario en un arreglo de JavaScript.
//* Por otro lado la sintaxis spread expande los iterables en elementos individuales. => [1,2,3] lo convierte a 1 2 3 haciendo ...array

//? El spread operator intenta "extenderlo" a múltiples valores al iterale que le pasamos despues de ...

//?Spread se usa en: En los literales de la matriz, en los literales de los objetos y en las llamadas a funciones.
//?También se puede usar para hacer copias de objetos

//? ...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo literal. El siguiente código no funcionará:
//const spreaded = ...arr;

//$ Copia profunda de un Array con spread, tienen diferente espacio en memoria estos 2 arrays
const array = [1, 2, 3]
const copyArray = [...array]; //?

//? ...arr, da el valor de 6,89,3,45 y a Math.max tenes que pasarle como argumento solo numeros, un array no se puede, por eso se usa ...arr para desempaca el arreglo
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); //?



