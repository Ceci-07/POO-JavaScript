const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e"
    }
};

const obj2 = {};
for (prop in obj1) {
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1);
const obj4 = Object.create({}, obj1);


// Shallow copy con el bucle for
// Podemos copiar las propiedades de un objeto en otro haciendo uso del bucle for:

// const obj1 = {
// 	a: "a",
// 	b: "b"
// }

// const obj2 = {}

// for (propiedad in obj1) {
// 	obj2[propiedad] = obj1[propiedad];
// }
// Si deseáramos modificar los valores de los atributos del objeto copia, el objeto original no se ve afectado:

// obj2.a = "AAA";
// obj2.b = "BBB";

// console.log(obj2); // { a: 'AAA', b: 'BBB' }
// console.log(obj1); // { a: 'AAA', b: 'BBB' }
// Pero, si hay objetos dentro del objeto original (nested objects) el objeto original sí se vería afectado ante las modificaciones hechas en dichos sub objetos:

// const obj1 = {
// 	a: "a",
// 	b: "b",
// 	c: {
// 		d: "d",
// 		e: "e"
// 	}
// }

// const obj2 = {}

// for (propiedad in obj1) {
// 	obj2[propiedad] = obj1[propiedad];
// }

// obj2.a = "atributo a";
// obj2.b = "atributo b";
// obj2.c.d = "objeto dentro de otro";

// console.log(obj2);
// console.log(obj1);

/* > Mensaje en consola
{
  a: 'atributo a',
  b: 'atributo b',
  c: {
		d: 'objeto dentro de otro',
		e: 'e'
	}
}
{
	a: 'a',
	b: 'b',
	c: {
		d: 'objeto dentro de otro',
		e: 'e'
	}
}
*/
// Shallow copy con Object.assign
// El Object.assign nos permite realizar el mismo shallow copy que podemos hacer con el bucle for.

// const obj1 = {
// 	a: "a",
// 	b: "b",
// 	c: {
// 		d: "d",
// 		e: "e"
// 	}
// }

// const obj3 = Object.assign({}, obj1);

// // Con esto podemos crear copias exactas
// console.log(obj1); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }
// console.log(obj3); // { a: 'a', b: 'b', c: { d: 'd', e: 'e' } }

// // Sin embargo, si hacemos modificaciones en los nested objects...
// obj1.c.d = "COPIA DESDE EL OBJ1";

// // se verán afectados los demás objetos copiados
// console.log(obj3); // { a: 'a', b: 'b', c: { d: 'COPIA DESDE EL OBJ1', e: 'e' } }
// Aun así, tendremos los mismos problemas si el objeto original posee nested objects.

// Object.create
// Nos permite crear un objeto que tenga como parte de su prototipo los atributos de otro objeto:

// const obj1 = {
// 	a: "a",
// 	b: "b",
// 	c: {
// 		d: "d",
// 		e: "e"
// 	}
// }

// const obj4 = Object.create(obj1);