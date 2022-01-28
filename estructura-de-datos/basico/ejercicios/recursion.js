//? Sumar recursivamente sin usar for, los primeros n numeros de un array.

function sum(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n];
    }
}


const arreglito = [1, 2, 3]

sum(arreglito, 2) //?


//$Utiliza recursion para crear una cuenta regresiva
//* Por ejemplo, digamos que quieres escribir una función recursiva que devuelva un arreglo conteniendo los números 1 hasta n. Esta función necesitará aceptar un argumento, n que representa el número final. Entonces necesitará llamarse a sí misma con valores progresivamente más pequeños de n hasta que alcance 1. Podrías escribir la función de la siguiente manera:
function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));

//* Al principio, esto parece contraintuitivo ya que el valor de n disminuye, pero los valores en el arreglo final se están incrementando. Esto sucede porque la inserción ocurre al último, después de la llamada recursiva. En el punto donde n es empujado en el arreglo, countup(n - 1) ya ha sido evaluada y devuelto [1, 2, ..., n - 1].


//? //?Arreglo de enteros, de 1 a n
// Cambia solo el código debajo de esta línea
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}

countdown(5) //?


//$
//?Arreglo para rango de numeros con for
let arregloParametro = (min, max) => {
    if (min <= max) {
        const arr = [];
        for (let i = min; min <= max; min++) {
            arr.push(min)
        }
        return arr; //?
    } else {
        return 'Parametros invalidos'
    }
}

console.log(arregloParametro(5, 9))

//?Arreglo para rango de numeros con RECURSION
//*La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum y termina con el número representado por el parámetro endNum. El número inicial será siempre menor o igual que el número final.

let rangeOfNumbers = (startNum, endNum) => {
    if (endNum - startNum === 0) {
        return [startNum]; //?
    } else {
        let numbers = rangeOfNumbers(startNum, endNum - 1);
        numbers.push(endNum);
        return numbers;
    }
}

rangeOfNumbers(5, 11);

//?otra alternativa mas corta
function rangeOfNumbers2(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : [...rangeOfNumbers2(startNum, endNum - 1), endNum];
}
//$

