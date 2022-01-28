//*Primero que todo, tengo que crear un array con las dimensiones correspondientes para poder rellenarlo, de cualquier modo.

// Crea un arreglo de 2 dimensiones con m filas y n columnas de ceros
function formaDinamica(dimensionX, dimensionY, value) {

    let newArray = [];

    for (let i = 0; i < dimensionX; i++) {
        let row = []; //creo un array vacio para rellenarlo en j y despues al iterar se vuelve a vaciar

        for (let j = 0; j < dimensionY; j++) {
            // Inserta n ceros a la fila actual para crear las columnas
            row.push(value);

        }
        // Inserta la fila actual, que ahora contiene n ceros, al arreglo
        newArray.push(row);
    }
    return newArray;
}

formaDinamica(2, 2, 3) //?



//Forma manual de arreglo de 2 dimensiones
function formaManual(dimensionX, dimensionY, relleno) {
    const array = []
    for (let i = 0; i < dimensionX; i++) {
        array[i] = new Array(dimensionY).fill(relleno)
    }
    return array;
}

formaManual(5, 2, 10) //?




// [[1, 1], [1, 1], [1, 1]]