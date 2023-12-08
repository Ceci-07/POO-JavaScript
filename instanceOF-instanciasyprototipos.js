// Con instanceof podemos saber si un objeto es instancia de cierto prototipo. Esto nos devuelve true o false.

// Determinando la procedencia de un objeto
// A partir del código creado anteriormente, realizaremos las modificaciones respectivas para que ahora nuestras funciones generadoras de objetos (como createLearningPath) sean ahora prototipos. Con ello ya podremos usar instanceof para identificar si ciertos objetos son instancias de nuestros prototipos, asegurándonos así de que tengan los atributos y métodos necesarios.

// Convertiremos nuestras funciones createLearningPath y createStudent en prototipos. Utilizaremos ahora this para asignar los parámetros recibidos a las propiedades de los nuevos prototipos y por ahora no trabajaremos con métodos y atributos privados:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ // 👈👈 PROTOTIPO
  name = requiredParam("name"), // Campo es obligatorio
  courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
  this.name = name;
  this.courses = courses;
}

function Student({ // 👈👈 PROTOTIPO
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {

  this.name = name; // ⬅⬇
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  }; // ⬅⬆

}
// La propiedad learningPaths lo asignaremos luego de haber hecho las validaciones respectivas.

// Ahora validaremos si nuestras rutas de aprendizaje que vayamos a crear son auténticas, es decir, no solamente se comportan como tal (tienen los atributos y métodos que un learning path debería tener) sino que también son instancias de nuestro prototipo LearningPath:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
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

  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  // Preguntamos primero si el parámetro recibido "learningPaths" sí es un Array:
  if (isArray(learningPaths)) { // 👈👈
    // Momentaneamente hacemos esta asignación hasta realizar el resto de
    // validaciones:
    this.learningPaths = [];

    // Vamos a recorrer cada índice del Array "learningPaths"
    for (learningPathIndex in learningPaths) { // 👈👈

      // Preguntaremos si el elemento ubicado en el índice actual es una
      // instancia del prototipo LearningPath. Solo así sabremos si es una
      // verdadera ruta de aprendizaje:
      if (learningPaths[learningPathIndex] instanceof LearningPath) { // 👈👈

        // Si es que SÍ es una instancia de dicho prototipo, entonces agregamos
        // dicha ruta de aprendizaje al array "learningPaths" del estudiante:
        this.learningPaths.push(learningPaths[learningPathIndex]);

      } // If end
    } // For end
  } // If end

}
// Ya podemos agregar rutas de aprendizaje a los nuevos estudiantes que generemos. Los learning paths estarán correctamente validados al momento de realizar la asignación:

// Creamos nuevas rutas de aprendizaje que son instancias de "LearningPath"
// const escuelaWeb = new LearningPath({
name: "Escuela de WebDev"
// });
// // const escuelaData = new LearningPath({
// 	name:"Escuela de Data Science"
// });

// Generamos un nuevo estudiante asignandole las rutas creadas hace un momento, pero
// además agregamos un objeto con el nombre de una escuela al azar la cual a pesar de
// que tenga los mismos atributos, NO es instancia del prototipo LearningPath
// const juan = new Student({
// 	email:"juanito@frijoles.co",
// 	name:"Juanito",
// 	learningPaths:[
// 		escuelaWeb,
// 		escuelaData,
// 		{
// 			name: "Escuela Impostora"
// 		}
// 	]
// });

// Si observamos en consola las rutas que tiene el estudiante creado, no nos aparecerá
// aquella "Escuela Impostora" que intentamos agregar, esto debido a que no pasó las
// Validaciones que establecimos:
console.log(juan.learningPaths);

/* > Mensaje en consola: 👀
[
  LearningPath {
    name: 'Escuela de WebDev',
    courses: []
  },
  LearningPath {
    name: 'Escuela de Data Science',
    courses: []
  }
]
*/
// Ahora bien, aprendamos a generar atributos y métodos privados en prototipos. ¡Let’s go! 👨‍💻🕵️‍♀️

// Contribución creada por: Martín Álvarez (Platzi Contributor)

// Archivos de la clase



// main.js

// COLAPSARfunction
// isObject(subject) {
return typeof subject == "object";
// }

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
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

function LearningPath({
  name = requiredParam("name"),
  courses = [],
}) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   "_name": name,
  //   "_courses": courses,
  // };

  // const public = {
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses() {
  //     return private["_courses"];
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPathIndex in learningPaths) {
      if (learningPaths[learningPathIndex] instanceof LearningPath) {
        this.learningPaths.push(learningPaths[learningPathIndex]);
      }
    }
  }




  // const private = {
  //   "_name": name,
  //   "_learningPaths": learningPaths,
  // };

  // const public = {
  //   email,
  //   age,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },
  //   get name() {
  //     return private["_name"];
  //   },
  //   set name(newName) {
  //     if (newName.length != 0) {
  //       private["_name"] = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get learningPaths() {
  //     return private["_learningPaths"];
  //   },
  //   set learningPaths(newLP) {
  //     if (!newLP.name) {
  //       console.warn("Tu LP no tiene la propiedad name");
  //       return;
  //     }

  //     if (!newLP.courses) {
  //       console.warn("Tu LP no tiene courses");
  //       return;
  //     }

  //     if (!isArray(newLP.courses)) {
  //       console.warn("Tu LP no es una lista (*de cursos)");
  //       return;
  //     }

  //     private["_learningPaths"].push(newLP);
  //   },
  // };

  // return public;
}

const escuelaWeb = new LearningPath({ name: "Escuela de WebDev" });
const escuelaData = new LearningPath({ name: "Escuela de Data Science" });
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});
