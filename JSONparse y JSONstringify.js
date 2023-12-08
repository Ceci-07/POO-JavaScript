// Con JSON.stringify podemos convertir un objeto en un string y lo inverso con JSON.parse

const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    }
}

// Lo convertimos en String y el resultado lo asignamos en un variable:
const stringifiedComplexObj = JSON.stringify(obj1);
// Lo convertimos a objeto y lo asignamos al nuevo objeto:
const obj2 = JSON.parse(stringifiedComplexObj);

console.log(obj1);
console.log(obj2);

// Si hacemos modificaciones en un de los objetos...
obj2.c.d = "nested object";
obj2.c.e = "nested object";
// El objeto original no se vería afectado
console.log(obj1);
console.log(obj2);

// De esta forma, aunque el objeto original tenga objetos anidados, es posible crear un nuevo objeto con las mismas propiedades del original sin que este se vea afectado ante modificaciones en los objetos copias.

// Problemas para copiar un objeto con métodos
// Con lo anterior pareciera que finalmente habíamos logrado dar solución a los convenientes que nos daba copiar objetos en otros. Sin embargo, tanto JSON.parse como JSON.stringify no saben trabajar con métodos, lo cual sería un nuevo inconveniente:

// const obj1 = {
//     a: 'a',
//     b: 'b',
//     c: {
//         d: 'd',
//         e: 'e',
//     },
//     editA() {
//         this.a = 'Abcd'
//     }
// };

// const stringifiedComplexObj = JSON.stringify(obj1);

console.log(stringifiedComplexObj);
// "{\\"a\\":\\"a\\",\\"b\\":\\"b\\",\\"c\\":{\\"d\\":\\"d\\",\\"e\\":\\"e\\"},\\"f\\":[1,\\"2\\",3]}"

const obj2 = JSON.parse(stringifiedComplexObj);

console.log(obj2);
// {a: "a", b: "b", c: {d: "d", e: "e"}}

// Para ello necesitamos utilizar Deep Copy para poder obtener una correcta copia de objetos.


// Qué más necesitas saber acerca de JSON.stringify()
// El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

// Descripción
// Los objetos Boolean, Number y String se convierten a sus valores primitivos, de acuerdo con la conversión semántica tradicional.
// Si durante la conversión se encuentra un undefined, una Function, o un Symbol se omite (cuando se encuentra en un objeto) o se censura a null (cuando se encuentra en un array). JSON.stringify() puede devolver undefined cuando se pasan valores “puros” como JSON.stringify(function(){}) o JSON.stringify(undefined).
// Todas las propiedades que utilicen Symbol en los nombres de la clave se ignoran por completo, incluso si utilizan una función replacer.
// Las instancias de Date implementan la función toJSON() devolviendo una cadena de texto (igual que date.toISOString()). Por lo que son tratadas como strings.
// Los números Infinity y NaN, así como el valor null, se consideran null. El resto de instancias de Object (incluyendo Map, Set, WeakMap, y WeakSet) solo tendrán serializadas sus propiedades enumerables.
// JSON.stringify () convierte un valor en notación JSON que lo representa.

// Qué más necesitas saber acerca de JSON.parse()
// El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.

// ¿Por qué JSON.parse(JSON.stringify()) es una mala práctica para clonar un objeto en JavaScript?
// Puedes perder tipos de datos.
// JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey
// Convierte tipos de datos no soportados en soportados, como infinity y NaN en null
// Los tipos de datos Date serán parseados como strings, no como Date
// No es tan rápido y eficiente.