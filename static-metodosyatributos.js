//static: metodos y atributos estaticos

// ejemplo1: para crear atributos a los que podamos acceder sin crear un objeto, solo tenemos que ponerle a nuestro atributo STATIC
class Patito{
    static sonidito = "cuak";
}
console.log(Patito.sonidito);


// ejemplo2: con los metodos tambien funciona asi:

class Patito {
    static hacerSonidito (){
        return "cuak!";
    }
}
console.log(Patito.hacerSonidito);


const objetito = {
    name: "Juanito",
    email: "juanito@juanito.com",
    age: 18,
};

// cuando llamamos al metodo estatico KEYS del prototipo object y le enviamos a nuestro objeto (objetito) nos devuelve una lista con todos los nombre de nuestro objeto, un array con los nombres claves
Object.keys(objetito);
// ["name", "email", "age"]

// pasa lo mismo con el metodo getOwnPropertyNames

Object.getOwnPropertyNames(objetito)
// ["name", "email", "age"]


// Tambien hay estos:
// const objetito = {/*...*/};

// entries:tambien es un metodo estatico en el prototipo Object, cuando le enviamos como argumento algun objetito, nos devuelve un array de arrays, por dentro tiene mas arrays
Object.entries(objetito);
// [
//     0: ["name", "Juanito"]
//     1: ["mail", "juanito@juanito"]
//     2: ["age", 18]

// ]


// cuando le enviamos como argumento un objeto a este metodo estatico, nos devuelve todas las propiedades de nuestro objeto

Object.getOwnPropertyDescriptors(objetito)

// esta es la forma que tiene JavaScript por dentro para limitar el acceso o la modificacion de nuestros atributos. 
// name: {
//     value: "Juanito",
//     writable: true,
//     configurable: true,
//     enumerable: true,
// }