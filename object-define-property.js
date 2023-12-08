// El método defineProperty de la superclase Object no solo nos permite definir nuevos atributos en un objeto, sino también configurar las siguientes propiedades:

// Configurable: indica si el nuevo atributo puede ser eliminado.
// Enumerable: indica si el nuevo atributo podrá ser mostrado mediante funciones que listen las propiedades de un objeto. Hay excepciones en las que igual puede ser visualizado un atributo que tenga definido como false la propiedad enumerable.
// Writable: indica si el nuevo atributo puede ser modificado de valor.
// Normalmente, estas propiedades por defecto son definidas como true por JavaScript, sin embargo, si generamos los atributos de un objeto con Object.defineProperty, podríamos definirlas a nuestro gusto.


// Definimos el objeto
const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };
  
//   Object.defineProperty(juan, "nombreNuevaPropiedad", {
//       value: "JavaScript", // Valor que tendrá
//       enumerable: false,
//       writable: true,
//       configurable: false,
//   });


// Object.defineProperty(juan, "navigator", {// Creamos un nuevo atributo
// 	value: "Chrome",
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,

// });
// diferencia entre KEYS y getOwnPropertyNames
// cuando nuestras propiedades fueron definidas con el atributo enumerable como false no van aparecer en Object.keys, pero si en Object.getOwnPropertyNames


// Object.defineProperty(juan, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true,

// });


// Object.defineProperty(juan, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false, //el atributo configurable como false en nuestra propiedad impide que podamos borrar propiedades de nuestros objetos
// });

// Object.defineProperty(juan, "pruebaNASA", {
//     value: "extraterrestres",
//     enumerable: false,
//     writable: false,
//     configurable: false,
// });


// Qué es Object.seal y Object.freeze
// El método seal “sella” un determinado objeto. Es decir:

// Impide que nuevas propiedades sean agregadas.
// Define como configurable: false todos los atributos del objeto, con lo que impide que sean borradas.
// Los atributos sí pueden ser modificados, ya que la propiedad writable permanece asignado como true.
Object.seal(juan); //ayuda a que las propiedades se puedan borrar, ya que se encuentra en false
Object.freeze(juan); //ayuda a que no podemos editar ni eliminar las prop de mi objeto
// El método freeze “congela” un objeto. Es decir:

// Impide que se le agreguen nuevas propiedades.
// Impide que sean eliminadas propiedades ya existentes.
// Evita que sus propiedades writable, enumerable y configurable sean modificadas.


console.log( // Imprimimos las propiedades del objeto
Object.getOwnPropertyDescriptors(juan));


// Accesibilidad a los atributos de un objeto
// Con configurable, enumerable y writable podemos limitar el acceso y modificación de los atributos de un objeto. Veamos su funcionamiento mediante un par de ejemplos:

// Atributos que no puedan ser listados
// Definimos enumerable como false. Este atributo recién creado no se podrá visualizar si por ejemplo intentamos listar las llaves del objeto usando Object.keys:
// Definimos el objeto
// const juan = {
//     name: "Juanito",
//     age: 18,
//     approvedCourses: ["Curso 1"],
//     addCourse(newCourse) {
//       console.log("This", this);
//       console.log("This.approvedCourses", this.approvedCourses);
//       this.approvedCourses.push(newCourse);
//     }
//   };
  
//   Object.defineProperty(juan, "navigator", { // Creamos un nuevo atributo
//       value: "Chrome",
//       enumerable: false,
//       writable: true,
//       configurable: true,
//   });
  
//   console.log( // Imprimimos las llaves del objeto
//       Object.keys(juan)
//   ); // [ 'name', 'age', 'approvedCourses', 'addCourse' ]
  
// Sin embargo, hay una excepción si usamos Object.getOwnPropertyNames:

// // Definimos el objeto
// const juan = {
//   name: "Juanito",
//   age: 18,
//   approvedCourses: ["Curso 1"],
//   addCourse(newCourse) {
//     console.log("This", this);
//     console.log("This.approvedCourses", this.approvedCourses);
//     this.approvedCourses.push(newCourse);
//   }
// };

// Object.defineProperty(juan, "navigator", { // Creamos un nuevo atributo
// 	value: "Chrome",
// 	enumerable: false, // 👀
// 	writable: true,
// 	configurable: true,
// });

// console.log( // Imprimimos las propiedades del objeto
// 	Object.getOwnPropertyNames(juan)
// ); // [ 'name', 'age', 'approvedCourses', 'addCourse', 'navigator' ] 👈 Ya nos aparece


