//? Parametro rest para parametros de funciones, para hacer funciones mas flexibles
//* Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos.
//* Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde dentro de la función.


//$ El operador rest y el operador de propagacion NO es lo mismo
//* La principal diferencia entre rest y spread es que el operador rest organiza el resto de algunos valores específicos suministrados por el usuario en un arreglo de JavaScript.
//* Por otro lado la sintaxis spread expande los iterables en elementos individuales. => [1,2,3] lo convierte a 1 2 3 haciendo ...array
function unaMotito(...args) {
    return args
}
console.log(unaMotito("2 ruedas", "manubrio", "asiento")) //?


//* Ejemplo 1
//? Se puede usar .length porque es un arreglo
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));

//* El parámetro rest elimina la necesidad de comprobar el arreglo args y nos permite aplicar map(), filter() y reduce() en el arreglo de parámetros.



//*Ejercicio 2
//? Modificar sum para que se le pueda enviar como argumentos la cantidad que se desee y retornar la suma
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3) //?

//Resultado, crea un array el ...(rest) y se puede manipular como uno
const sumRest = (...args) => args.reduce((acc, value) => acc + value, 0);
sumRest(3, 5, 1) //?


const sumArray = (arr) => arr.reduce((acc, value) => acc + value, 0);
sumArray([2, 3, 1]) //?


