// Generaremos un prototipo en el cual añadiremos 2 métodos estáticos: uno para determinar si un determinado valor es del tipo object y otro para realizar deep copy. A partir del último código implementado, añadamos las siguientes líneas de código:

// Crearemos una función SuperObject vacío. Esto en realidad será un prototipo:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function SuperObject() {} // 👈👈👈👈

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ // PROTOTIPO
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	this.name = name;
	this.courses = courses;
}

function Student({ // PROTOTIPO
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

	// ASIGNACIÓN DE ATRIBUTOS
	this.name = name;
	this.email = email;
	this.age = age;
	this.approvedCourses = approvedCourses;
	this.socialMedia = {
		twitter,
		instagram,
		facebook,
	};

	const private = {
    "_learningPaths": [],
  };

	// "this" referencia al prototipo "Student"
	Object.defineProperty(this, "learningPaths", {
    get() { // GETTER
      return private["_learningPaths"];
    },
    set(newLp) { // SETTER
      if (newLp instanceof LearningPath) {
				// Si es que SÍ es una instancia, añadimos al array privado "_learningPaths"
        private["_learningPaths"].push(newLp);
      } else {
				// "LPs" hace referencia a Learning Paths
        console.warn("Alguno de los LPs que quieres añadir NO es una instancia del prototipo LearningPath");
      }
    },
  });

	for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }

}
// Añadimos un método estático por fuera el prototipo SuperObject para validar que un dato sea del tipo object. Luego, agregamos otro método que nos permita hacer deep copy a un objeto:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function SuperObject() {}

// Agregamos directamente estos métodos estáticos a nuestro prototipo "SuperObject"
SuperObject.isObject = function (subject) { // 👈👈
  return typeof subject == "object";
}
SuperObject.deepCopy = function (subject) { // 👈👈
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ // PROTOTIPO
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	this.name = name;
	this.courses = courses;
}

function Student({ // PROTOTIPO
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

	// ASIGNACIÓN DE ATRIBUTOS
	this.name = name;
	this.email = email;
	this.age = age;
	this.approvedCourses = approvedCourses;
	this.socialMedia = {
		twitter,
		instagram,
		facebook,
	};

	const private = {
    "_learningPaths": [],
  };

	// "this" referencia al prototipo "Student"
	Object.defineProperty(this, "learningPaths", {
    get() { // GETTER
      return private["_learningPaths"];
    },
    set(newLp) { // SETTER
      if (newLp instanceof LearningPath) {
				// Si es que SÍ es una instancia, añadimos al array privado "_learningPaths"
        private["_learningPaths"].push(newLp);
      } else {
				// "LPs" hace referencia a Learning Paths
        console.warn("Alguno de los LPs que quieres añadir NO es una instancia del prototipo LearningPath");
      }
    },
  });

	for (learningPathIndex in learningPaths) {
    this.learningPaths = learningPaths[learningPathIndex];
  }

}
// ¡Listo! Ya podemos usar estos métodos desde este nuevo prototipo SuperObject en nuestro código.

const copia = SuperObject.deepCopy({
	nombre: "Objecto Copia",
	valor: 100,
});
console.log(copia);

console.log(
	SuperObject.isObject(20)
); // false
console.log(
	SuperObject.isObject("JS")
); // false
console.log(
	SuperObject.isObject({name: "Juanito"})
); // true
console.log(
	SuperObject.isObject(["juan"])
); // true  👈👀 
// Los Arrays son instanticas del superprototipo Array y a su vez esta superclase hereda
// del superprototipo Object. Por tanto, son también considaradas del tipo "object"
// y es por eso que nos sale "true"