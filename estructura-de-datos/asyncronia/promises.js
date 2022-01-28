//$ Promise es una funcion constructora, se usa new para crear una
//* recibe: una function como argumento, con 2 parametros: resolve y reject (estado de la promesa)

/* *****
SIRVEN PARA:
# Hacer solicitudes al server y esperar respuesta (al esperar response, se usa una promesa)

***** */

const makeServerRequestt = new Promise((resolve, reject) => {

})


//* Una promesa tiene 3 estados: pending, fullfilled y rejected
//* Cuando se crea una promesa, esta en el estado pending porque no se añade una forma de completar la promesa
//? resolve es para decir que quiere que haga cuando tenga exito
//? rejected es para decir que quiere que haga cuando falle

//resolve y rejected son metodos que toman un argumento
const myPromise = new Promise((resolve, reject) => {
    if ("condition here") {
        resolve("Promise was fulfilled");
    } else {
        reject("Promise was rejected");
    }
});


//* El ejemplo anterior utiliza cadenas como argumento de las funciones, pero podrían ser cualquier otra cosa. El argumento a menudo puede ser un objeto del cual utilizarás datos que mostrarás en tu sitio web o en otro lugar.


//$ EJERCICIO
//*Haz una función promesa que maneje el éxito y el fallo. Si responseFromServer es true, llama al método resolve para completar satisfactoriamente la promesa. Pasa a resolve una cadena con el valor We got the data. Si responseFromServer es false, utiliza el método reject y devuelve la cadena: Data not received.
const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer = false;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received")
    }
});

makeServerRequest //?
    .then(string => console.log(string))
    .catch(string => console.log(string))

//$ el argumento string para agarrar la data del metodo resolve en then, se crea un callback
//*Las promesas son muy útiles, cuando tu tienes un proceso que toma una cantidad de tiempo desconocida en tu código (algo asíncrono por ejemplo), a menudo una petición de servidor.

//? Cuando tu haces una petición a un servidor, toma algo de tiempo, después de que termina, normalmente quieres hacer algo con la respuesta del servidor. Esto se puede lograr utilizando el método then. El método then, se ejecuta inmediatamente después de que tu promesa se cumple con resolve.


