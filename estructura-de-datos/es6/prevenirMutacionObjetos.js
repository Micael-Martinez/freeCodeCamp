//$ Prevenir la mutacion de objetos
//$Object.freeze(obj) Previene la modificacion de propiedades, valores,  ADICCION y ELIMINACION de nuevas propiedades => de arrays, objetos y funciones
//* Solo usando CONST no alcanza, ya que puedo cambiar el valor de cada posicion de un array sin reasignarlo(lo que daria error con const).
//? Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos.

//* Cualquier intento de cambiar el objeto será rechazado, lanzando un error si el script se ejecuta en modo estricto (strict mode).


let obj = {
    name: "FreeCodeCamp",
    review: "Awesome"
};

Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj);



//$ Ejercicio
//* En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.

function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
    Object.freeze(MATH_CONSTANTS);
    // Cambia solo el código encima de esta línea
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }

    return MATH_CONSTANTS.PI;
}
const PI = freezeObj(); //?