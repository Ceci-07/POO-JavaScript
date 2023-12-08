// La memoria en JavaScript funciona de la siguiente manera:

// Las variables son referencias a un espacio en memoria.
// Los navegadores web usan dos tipos de memorias: Stack y Heap.
// La memoria Stack es muy rápida, pero sin tanto espacio. Aquí se guardan los valores primitivos (booleanos, strings, números…).
// La memoria Heap es más lenta, pero permite guardar enormes cantidades de información (son como los tornados: grandes, lentos y desordenados). En esta memoria guardamos los valores de los objetos
// Cómo es el almacenamiento de objetos en JavaScript
// Cuando creamos variables en JavaScript (aplicable a casi cualquier otro lenguaje), ejecutamos 2 procesos:

// El primero es la inicialización, es decir, le decimos a JS que vamos a crear una nueva variable con un nombre en específico.

let name;

// Lo segundo es la asignación: le indicamos a JavaScript que esa variable que generamos con ese nombre en específico tiene un valor.

// let name; // Inicialización
name = "pepito"; // Asignación

let age = 28;

// El nombre de las variables y el valor de estas se almacenan en la memoria stack, excepto cuando trabajamos con objetos.

// En memoria, el nombre de las variables apuntan a sus respectivos valores, sin embargo, cuando el valor a almacenar es un objeto, apuntan a otro apuntador (pointer o puntero) y este es el que en realidad apuntará al objeto en sí el cual se encontrará almacenado en la memoria heap.

// Cuál es la forma incorrecta de copiar objetos
// Si intentamos copiar un objeto en otra variable de esta manera:

const juanita = { // ORIGINAL
	age: 15,
	email: "juanita@juanita.com"
}

const nath = juanita; // COPIA

// Cuando intentemos editar los valores de los atributos del objeto copia, los atributos del objeto original se verán igualmente afectados:

// Objeto original antes
console.log(juanita); // { age: 15, email: 'juanita@juanita.com' }

// Editamos sólo el objeto copia
nath.age = 20;
nath.email = "nath@email.com"
console.log(nath); // { age: 20, email: 'nath@email.com' }

// Objeto original después de editar el objeto copia:
console.log(juanita); // { age: 20, email: 'nath@email.com' }