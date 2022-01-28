//? Crear metodos en objetos
//* Antes era esto:
// const bicycle = {
//     gear: 2,
//     setGear: function (newGear) {
//         this.gear = newGear;
//     }
// };

//*ahora se puede hacer eliminando la palabra function y :
const bicycle = {
    gear: 2,
    setGear(newGear) {
        this.gear = newGear;
    }
};
bicycle.setGear(3);
bicycle.gear; //cambio la propiedad con una function dentro del obj



//?CLASES OOP
//* En ES5, normalmente definimos una función constructor y usamos la palabra clave new para instanciar un objeto.
var SpaceShuttle2 = function (targetPlanet2) {
    this.targetPlanet2 = targetPlanet2;
}
var zeus2 = new SpaceShuttle2('Jupiter');
zeus2.targetPlanet2 //?

//* En es6 la palabra clave class reemplaza la funcion Constructor

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}

const zeus = new SpaceShuttle("Jupiter");
zeus.targetPlanet //?


//*Debe tenerse en cuenta que la palabra clave class declara una nueva función, a la cual se añade un constructor. Este constructor se invoca cuando new es llamado para crear un nuevo objeto.

//*El método constructor es un método especial para crear e inicializar un objeto creado con una clase.


//$ Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto
//Puedes obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.
 //*VER EN OOP
