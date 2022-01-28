const magic = () => new Date();
magic() //?


const doubler = (item) => item * 2;
doubler(4); //?

const multiplier = (item, multi) => item * multi;
multiplier(4, 2); //?


//? Ejercicio
//* Pasar esta funcion a funcion FLECHA
var myConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//$ Funcion flecha

const myConcatFlecha = (arr1, arr2) => arr1.concat(arr2)
myConcatFlecha([1, 2], [3, 4, 5])


//* Parámetros por defecto para Funciones
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

const increment = (number, value = 1) => number + value;
increment(2) //?




//$Ejercicio
//* Retornar un arreglo con elementos li (string), El texto de cada elemento li tiene que ser del objeto result, array failure.
//*La función makeList debe devolver el arreglo de cadenas de elemento lista.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [];

    arr.forEach(element => failureItems.push(`<li class="text-warning">${element}</li>`));
    // Cambia solo el código encima de esta línea

    return failureItems;
}

const failuresList = makeList(result.failure); //?




//? Retornar un objeto con los datos del parametro con el mismo valor
const createPerson = (name, age, gender) => ({ name, age, gender })
createPerson("Micael", 23, "Male") //?
//* o tambien:

const createPerson2 = (name2, age2, gender2) => {
    return { name2, age2, gender2 }
}
createPerson2("John", 25, "Male") //?

