//$ DESESTRUCTURACION DE OBJETOS (arreglos mas abajo)
const user = { name: 'John Doe', age: 34 };

//? en vez de acceder asi:
user.name //?
user.age //?

//? Accedo a traves de la desestructuracion
const { name, age } = user;
name
age


//Ejemplo
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today2: 77,
    tomorrow2: 80
};

const { today2, tomorrow2 } = HIGH_TEMPERATURES2;
today2
tomorrow2

//$ La desestructuración te permite asignar un nuevo nombre de variable al extraer valores.
//* la sintaxis es con dos puntos despues del nombre de la propiedad, y se le da el nuevo nombre
//* Se puede leer como: "obtén el valor de user.name y asígnalo a una nueva variable llamada userName"
const user2 = { name: 'John Doe', age: 34 };


const { name: userName, age: userAge } = user2;
userName
userAge

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

//? esto (es mejor)
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
highToday //?
highTomorrow //?
//En este caso, 'today' no se puede usar para llamar al valor, ya que se llama ahora 'highToday'

//? es igual a esto
const highTodaySinDesestructuracion = HIGH_TEMPERATURES.today; //?
const highTomorrowSinDesestructuracion = HIGH_TEMPERATURES.tomorrow; //?


//$Desestructuracion para Objetos Anidados

const edificio = {
    depto1: {
        sillas: 6,
        personas: 2
    }
};

//*Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre: sillas, personas
const { depto1: { sillas, personas } } = edificio;
//depto1 no es valido como un nombre
sillas //?
personas //?

//* Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:
const { depto1: { sillas: nroSillas, personas: nroPersonas } } = edificio;
nroSillas //?
nroPersonas //?


//? Ejercicio desestructuracion objeto anidados
//* Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highTuday } } = LOCAL_FORECAST;

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;


//$ DESESTRUCTURACION DE ARREGLOS
//*Una diferencia clave entre el operador de propagación y la desestructuración de arreglos es que el operador de propagación desempaca todos los contenidos de un arreglo en una lista separada por comas. En consecuencia, no puedes elegir qué elementos deseas asignar como variables.

const [a, b] = [1, 2, 3, 4, 5]
a
b

//*A la variable a se le asigna el primer valor del arreglo, y a b se le asigna el segundo valor del arreglo. También podemos acceder al valor en cualquier índice de un arreglo con la desestructuración usando comas para alcanzar el índice deseado:
//? Lo que sucede abajo, es que c,d,e son variables, al llamarlas tienen el valor de la posicion del arreglo (1,2,5)
const [c, d, , , e] = [1, 2, 3, 4, 5, 6]
console.log(c, d, e)


//?Ejercicio
//* Utiliza sintaxis de desestructuracion para intercambiar los valores de a y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a.
let f = 8, g = 6;
// Cambia solo el código debajo de esta línea
[f, g] = [g, f]
f
g



//$ EJERCICIO COMBINADO CON REST Y DESESTRUCTURACION
//* Las variables a y b toman el primer y segundo valor del arreglo. Después de eso, debido a la presencia del parámetro rest, arr obtiene el resto de los valores en forma de un arreglo. El elemento rest sólo funciona correctamente como la última variable en la lista. Por ejemplo, no puedes usar el parámetro rest para capturar un sub-arreglo que deje fuera el último elemento del arreglo original.

//todo Utiliza la sintaxis de desestructuración con el parámetro rest para realizar un Array.prototype.slice() eficaz, de tal manera que arr sea un sub-arreglo del arreglo original source con los dos primeros elementos omitidos.
//* Acordarse que rest lo que hace es agarrar todos los argumentos restantes y meterlos dentro de un array
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
    const [, , ...arr] = list; // Cambia esta línea
    // Cambia solo el código encima de esta línea
    return arr;
}
const arr = removeFirstTwo(source); //?



//$Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función
//* En algunos casos, se puede desestructurar el objeto en un propio argumento de función.
//*esto:

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
}

//*puede ser esto, que desestructura efectivamente el objeto que se envio a la función:

const profileUpdeit = ({ name, age, nationality, location }) => {
}

//*Cuando profileData es pasado a la función anterior, los valores son desestructurados desde el parámetro de función para su uso dentro de la función.


//$Ejercicio
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
//el objeto ya es desestructurado en el parametro al ser enviado y no hay que hacerlo en el cuerpo de la funcion
const half = ({ max, min }) => Math.floor((max + min) / 2.0);

half(stats); //?


