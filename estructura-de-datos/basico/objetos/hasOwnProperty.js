//? A veces es útil comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el método .hasOwnProperty(propname) para determinar si un objeto tiene una propiedad con ese nombre. .hasOwnProperty() devuelve true o false si se encuentra la propiedad o no.

const myObj = {
    top: "hat",
    bottom: "pants"
};

myObj.hasOwnProperty("top"); //?
myObj.hasOwnProperty("middle"); //?


//$ Problema a resolver
//? Modifica la función checkObj para verificar si el objeto obj pasado a la función contiene la propiedad checkProp. Si la propiedad es encontrada, devuelve el valor de la propiedad. Si no, devuelve "Not Found".

function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    }
    return "Not Found";
    // Cambia solo el código encima de esta línea
}

checkObj({ name: 'Micael', apellido: 'Martinez' }, 'apellido') //?