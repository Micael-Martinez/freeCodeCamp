//$ Crea una función llamada randomRange que tenga un rango myMin y myMax y devuelva un número entero aleatorio mayor o igual a myMin, y es menor o igual a myMax, inclusivo.

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(5, 10));