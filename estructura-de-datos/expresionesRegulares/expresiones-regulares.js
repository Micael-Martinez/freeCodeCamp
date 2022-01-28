//$ Las expresiones regulares se usan para coincidir con partes de cadenas => CREAS patrones para ayudarte a hacer esa coincidencia


//? Atajos de RegEx
//* La clase de caracteres más cercana en JavaScript para coincidir con el alfabeto es \w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas más números. Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_).
let shortHand = /\w/g;
let numbers = "42";
let varNames = "important_var"; //

shortHand.test(numbers)
shortHand.test(varNames)

//$ Hacer lo contrario a \w, es \W (elige todos los que no son alfanumericos) => [^A-Za-z0-9_] (^) los niega
let shortHand2 = /\W/g;
let numbers2 = "42%";
let sentence = "Coding!";
numbers2.match(shortHand2);
sentence.match(shortHand2);

//$ Buscar numeros '\d' => [0-9]
//? Numero de celular
let numeritos = 'asd2984734asds813asad'
let regexpe = /\d/g
const matcheo2 = numeritos.match(regexpe)
matcheo2.join("") //?


//$ Capturar todos los NO numericos: \D => [^0-9]
//* Ejercicio: capturar los no numeros del titulo de peliculas
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let result22 = movieName.match(noNumRegex).length;
movieName.length


//$ Como capturar espacios en blanco: \s => [ \r\t\f\n\v]
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
//$ Capturar todo, MENOS los espacio en blanco: \S => [^ \r\t\f\n\v]


//$ Crear posibles nombres de usuario
//*Ejercicio: Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los usuarios deben seguir al crear su nombre de usuario.

//* Solucion 1:
let username = "JackOfAllTrades";
let userCheck2 = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Cambia esta línea
let result25 = userCheck2.test(username);

//*Explicacion:
/* *****
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
-$ - end of input
***** */

//*Solucion 2:
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i

//*Explicacion:
/* *****
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
-$ - end of input
i - ignore case of input

***** */


//? Atajos de RegEx




//$PROBLEMAS COMUNES CON REGEX

//? Reemplazar una palabra de una frase
const textoConEspacios = 'La luna es el invento mas lindo que existe';
const arrayChange = textoConEspacios.split(' ');
arrayChange.forEach(string => {
    if (string.includes('luna')) {
        const index = arrayChange.indexOf(string)
        arrayChange[index] = 'sol';

    }
})

arrayChange.join(" ") //?

//* Para encontrar la palabra "the" en "The dog chased the cat" se hace con /the/ no se necesita comillas.

//$ JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es usando el método .test()
//*El método .test() toma la expresión regular, la aplica a una cadena (que se coloca dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo o no.

//*El metodo exec() se aplica a una expresion regular y como argumento toma el string, retorna un array con propiedades del matcheo, como posicion, el string matcheado, la cadena, etc. test() solo devuelve un boolean
const frase = "Quiero ser un superheroe";
const match = /ser/

const finder = match.test(frase) //?
const encontrado = match.exec(frase) //?

console.log(encontrado)



//?Buscar mas de 1 patron
//*Puedes buscar múltiples patrones usando el operador alternation o OR: |
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Cambia esta línea
let result = petRegex.test(petString); //?


//? Añadir capitalizacion de palabras:
//*Se utiliza algo llamado banderas, la bandera 'i' es la que ignora la capitalizacion de letras

//$Ejercicio
//*Escribe una expresión regular fccRegex para que coincida con freeCodeCamp sin importar su capitalización.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Cambia esta línea
let result2 = fccRegex.test(myString); //?

//? Extraer coincidencias de un regexp
//*Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que has estado utilizando hasta ahora:

let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourRegex.exec(ourStr); //?
const matcheo = ourStr.match(ourRegex); //?


//?Encontrar mas que solo la primera coincidencia
//$
//*Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.(global)
//*Se utiliza algo llamado banderas, la bandera 'i' es la que ignora la capitalizacion de letras

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Cambia esta línea
let result3 = twinkleStar.match(starRegex); //?
result3



//?A veces no conoces (o no necesitas conocer) los caracteres exactos en tus patrones
//* Para hacer coincidir patrones sin saber como termina realmente, usar: '.'
//* Si quieres coincidir hug, hut, hum, usar: /hu./ para que coincida las 4 palabras

const texto = 'hola Como como Como como como  estas';
const regexp = /omo/gi

const condicional = texto.match(regexp) //?

condicional //?
condicional ? 'Caracter encontrado con regexp' : 'No fue encontrado ningun patron' //?


//$Ejercicio
//*Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. Tu expresión regular debe usar el carácter de comodín.
let exampleStr = "Let's have funu with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result4 = unRegex.test(exampleStr); //?




//$ [letras que se aceptan en el patron]
//*Aprendiste cómo hacer coincidir los patrones literales (/literal/) y el carácter de comodín (/./). Estos son los extremos de las expresiones regulares, donde uno encuentra coincidencias exactas y el otro coincide de todo. Hay opciones que representan un equilibrio entre los dos extremos.

//?Puedes buscar un patrón literal con cierta flexibilidad utilizando las CLASE DE CARACTERES. Las clases de caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes ([ y ]).

//$Ejemplo
//*si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear la expresión regular /b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que solo coincidirá con los caracteres a, i, o u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//$Ejercicio
//?retornar los valores matcheados de un array
let bgRegex2 = /b[aiu]g/gi;
const array2 = ["big", "bag", "bug"]
array2.forEach(element => {
    const result = element.match(bgRegex2)
    console.log(...result)
})


//$Ejercicio
//? Encontrar las 25 vocales que hay en quoteSample, extraerlas y retornarlas
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Cambia esta línea
let result7 = quoteSample.match(vowelRegex)
result7.length //?



//*cuando necesitas coincidir con un amplio rango de caracteres (por ejemplo, cada letra en el alfabeto) hay una funcionalidad incorporada que hace esto corto y sencillo.
//?Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de guion: -.

//*Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex3 = /[a-e]at/gi;
catStr.match(bgRegex3);
batStr.match(bgRegex3);
matStr.match(bgRegex3);

//$Ejercicio
//*Haz coincidir todas las letras de la cadena quoteSample

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Cambia esta línea
let result8 = quoteSample2.match(alphabetRegex);
result8.length



//$Con el - (guion), tambien se pueden coincidir letras y numeros combinados:
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
const matcheado = jennyStr.match(myRegex).length

const stringLength = jennyStr.split("")
    .length

matcheado === stringLength ? 'Felicidades, terminaste el juego, acertaste las palabras de la frase' : 'Ups, no completaste el juego, intentar de nuevo'



//?Como NO coincidir caracteres
//*Este tipo de conjuntos de caracteres se llaman conjuntos de caracteres negados.
//?Al matachear la cadena, no retorna los valores que le paso dentro del regexp [^valores], pero los otros si
//*[^thingsThatWillNotBeMatched]
//$Este operador '^' se llama caret, es utilizado para buscar patrones al principio de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
let notFirst = "You can't find Ricky now.";
firstRegex.test(firstString);
firstRegex.test(notFirst);


//$Ejercicio
let quoteSample9 = "3 blind mice.";
let myRegex9 = /[^e ]/gi; // no retorna ni la i ni el espacio
let result9 = quoteSample9.match(myRegex9); // Cambia esta línea
result9.length

let quoteSample10 = "3 blind mice.";
let myRegex10 = /[^aeiou0-9]/gi; // Cambia esta línea
let result10 = quoteSample10.match(myRegex10); // retorno sin numeros ni vocales
result10.length




//?Haz coincidir patrones de cadena final
//*Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular.
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end"; //no termina en story
storyRegex.test(noEnding);








//$ Matchear varias letras consecutivas "mississippi" ["ss", "ss"] porque no estan juntas, estan separadas por otras letras
//?A veces, es necesario coincidir con un carácter (o grupo de caracteres) que aparezca UNA O MAS veces seguidas.

//?Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también encontraría una sola coincidencia en aabc y regresaría ["aa"].
let difficultSpelling = "Mississippi";
let myRegex11 = /s+/g; // Cambia esta línea
let result11 = difficultSpelling.match(myRegex11); //?

let otherString = 'aaabcd';
myRegex12 = /a+/g;
let result12 = otherString.match(myRegex12); //?



//$Haz coincidir caracteres que aparecen CERO O MAS veces, Aa* es porque la a minuscula se va a encontrar
//$Ejemplo 1
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";

let goRegex = /go*/;
let matcheo3 = soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex); //aparece null porque no hay ninguna coincidencia con go

//$Ejemplo 2
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"

let chewieRegex = /Aa*/;
let result13 = chewieQuote.match(chewieRegex);



//$Coincidencia perezosa (encuentra sub-cadena mas grande que se ajusta al patron)
//? Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta expresión regular es básicamente un patrón que comienza con t, termina con i, y tiene algunas letras intermedias.
//*Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería ["titani"]. Encuentra la sub-cadena más grande posible que se ajusta al patrón.

//*Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa.
//todo "titanic" al coincidir con la expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

let text = "<h1>Winter is coming</h1>";
let myRegex14 = /<.*>/; // Cambia esta línea
let result14 = text.match(myRegex14);
result14[0]


//$Ejercicio
let text15 = "<h1>Winter is coming</h1>";
let myRegex15 = /<.*?>/; // it's the answer!
let result15 = text.match(myRegex15);


//?La expresión regular /z+/ coincide con la letra z cuando aparece una o más veces seguidas. Encontrará coincidencias en las siguientes cadenas:
/* *****

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"

***** */



//$ Especifica el menor y mayor número de coincidencias = {cantMenor, cantMayor}
//* Por ejemplo: para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);


let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Cambia esta línea
let result33 = ohRegex.test(ohStr);



//$ Especificar solo el comienzo de coincidencias
let a4 = "haaaah";
let a2 = "haah";
let A100 = "h" + "a".repeat(20) + "h";
let multiplexA = /ha{3,}h/;
multiplexA.test(a4);
multiplexA.test(a2);
multiplexA.test(A100);

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/g; // Cambia esta línea
let result44 = haRegex.test(haStr);


//$El numero exacto de coincidencias


//$Operador opcional: '?'
//*Ejemplo: Hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación para coincidir con ambas ortografías.
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);


//$LookAHeads: ?= ?!
//*Un uso más práctico de lookaheads es comprobar dos o más patrones en una cadena. Aquí hay un verificador de contraseñas (ingenuamente) simple que busca entre 3 y 6 caracteres y al menos un número:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);


//$ Comprueba agrupaciones mixtas de caracteres = ()
//*Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g
let myString55 = "Eleanor Roosevelt";
let myRegex55 = /(Franklin|Eleanor).*Roosevelt/; // Cambia esta línea
let result55 = myRegex55.test(myString55);


//$Utilizar grupos de captura (repeticiones para retornar solo eso)
//* /1 = representa el mismo texto que coincidió más recientemente con el primer grupo de captura
let repeatNum = "42 42 42";
let reRegex41 = /^(\d+)\s\1\s\1$/; // Cambia esta línea
let result41 = repeatNum.match(reRegex41); //?


//$ Usar grupo de captura para buscar y reemplazar => .replace()
//*También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($).
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); //?


//*También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($).
//? Ejemplo:
"Code Camp Sigle".replace(/(\w+)\s(\w+)/, '$2 $1'); //?


//* Ejercicio:
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let result77 = str.replace(fixRegex, replaceText); //?


//$Eliminar espacios en blanco: .trim()
