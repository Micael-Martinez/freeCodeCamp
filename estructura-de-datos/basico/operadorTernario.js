//? Chequea si un numero es igual a otro.
function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);


//* Usar multiples operadores ternarios en vez de hacer else if
//?Esta funcion la paso a operadores ternarios
function findGreaterOrEqual(a, b) {
    if (a === b) {
        return "a and b are equal";
    }
    else if (a > b) {
        return "a is greater";
    }
    else {
        return "b is greater";
    }
}

//?Esta funcion la paso a operadores ternarios
function checkSign(number) {
    return number > 0 ? "positive"
        : number == 0 ? "zero"
            : "negative"
}

checkSign(0) //?