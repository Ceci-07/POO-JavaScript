// Con el Deep Copy podemos generar copias de objetos sin importar que estos posean objetos anidados o métodos dentro.

// Aplicando Deep Copy en JavaScript
// Veamos el siguiente ejemplo:

// OBJETO ORIGINAL
const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
	hello() {
		 console.log("Hello, World!");
	}
};

// FUNCIÓN RECURSIVA
function isObject(subject) { // Comprueba si es un objeto
  return typeof subject == "object"; // Devuelve true o false
}

function isArray(subject) { // Comprueba si es una Array
  return Array.isArray(subject); // Devuelve true o false
}

// FUNCIÓN RECURSIVA
// Recibe un parametro que puede ser un objeto, array u otro tipo de dato
function deepCopy(subject) {
  let copySubject; // Esta variable se convertira en array, objeto u otro tipo de dato

  const subjectIsObject = isObject(subject); // ¿El parámetro es objeto?
  const subjectIsArray = isArray(subject); // ¿El parámetro es array?

  if (subjectIsArray) { // Si es array...
    copySubject = []; // Asignamos un array vacío donde iremos copiando 1 a 1 los datos
  } else if (subjectIsObject) { // Si es un objeto...
    copySubject = {}; // Asignamosun objeto vacío donde iremos copiando 1 a 1 los atributos
  } else { // Sino es array u objeto...
    // Entonces es un tipo de dato que se puede copiar sin problemas, retornamos dicho
		// dicho dato y terminamos con la ejecución de la fucnción.
		return subject;
  }
	
	// Continuamos con la ejecución de la función si el parámetro fue array u objeto: 
  for (key in subject) { // Recorremos cada uno de los atributos o datos del objeto o array
		// Comprueba si hay un objeto dentro del índice o atributo:
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) { // Si es verdad que hay un objeto dentro...
	      // Invocamos recursivamente la misma función:
				copySubject[key] = deepCopy(subject[key]); // 👀🔄
    } else { // Sino...
      if (subjectIsArray) { // Si el parámetro recibido por la función deepCopy es Array...
	        // Agregamos el elemento a la variable a retornar al final de la función:
					copySubject.push(subject[key]);
      } else { 
				// sino, significa que es objeto el parámetro y además no hay objetos anidados
				// en el elemento actual dentro del recorrido del bucle for, por tanto, asignamos
				// dicho elemento como valor a la propiedad correspondiente:
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject; // Finalmente retornamos el objeto/array copia
}
// Generemos un objeto copia utilizando la función recursiva e intentemos realizar modificaciones en el objeto copia y original:

// OBJETO COPIA
const juan = deepCopy(studentBase);

// MODIFICACIONES EN EL OBJETO ORIGINAL
studentBase.socialMedia.twitter = "@student_twitter"

// MODIFICACIONES EN EL OBJETO COPIA
juan.socialMedia.instagram = "@juanDC"

// VEAMOS EN CONSOLA LAS DIFERENCIAS DEL OBJETO ORIGINAL Y LA COPIA
console.log(studentBase);
console.log(juan);

/* > Mensaje en consola
{
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: '@student_twitter', 👈👈 👀
    instagram: undefined,
    facebook: undefined
  },
  hello: [Function: hello] 👈👈 FUNCIÓN
}
{
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: { 
		twitter: undefined, 
		instagram: '@juanDC', 👈👈 👀
		facebook: undefined 
	},
  hello: [Function: hello] 👈👈 FUNCIÓN
}
*/
// Podemos notar que los cambios en un objeto no afecta en los valores de las propiedades del otro. Logramos crear una copia de un objeto que no esté condicionada a que si el objeto original tiene objetos anidados o si tiene métodos dentro.