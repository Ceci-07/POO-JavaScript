// El duck typing es la forma de programar donde identificamos los elementos por los métodos y atributos que tenga por dentro.

// Cómo funciona el duck typing
// Se deben tener parámetros para saber diferenciar dos cosas, dos personas, dos elementos, etc. Si queremos determinar quién es quién, se debe mirar por sus atributos y métodos, aunque puede haber el caso en el que haya elementos parecidos que también se deben diferenciar (impostores), es cuando más detalle se debe poner en identificar qué los compone.
// El nombre proviene de la frase:

// Si parece un pato y grazna como un pato, es un pato.

// En otras palabras, tiene que cumplir con ciertos métodos y atributos para considerarse alguna cosa.

// Vamos a definir cuáles son las propiedades que deben tener ciertos objetos para determinar cuál es cuál y así construir objetos más completos.

// Validando que un objeto tenga lo necesario
// Vamos a validar que cuando generemos un nuevo estudiante, las rutas de aprendizajes tengan los datos necesarios para poder ser agregados en el array del atributo learningPaths:

// Creamos una función createLearningPath para poder generar nuevas rutas de aprendizaje. Aquí validaremos que tenga los atributos necesarios:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({ // 👈👈
	name = requiredParam("name"), // Campo obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    "_name": name,
  };

  const publicAtributos = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() {
      return privateAtributos["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  return publicAtributos;
}
// Creamos 2 variables en las que dividiremos nuestras propiedades públicas y privadas:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	const private = { // 👈👈 Atributos privados
		"_name": name,
		"_courses": courses,
	};
	const public = {}; // 👈👈
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    "_name": name,
  };

  const publicAtributos = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() {
      return privateAtributos["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  return publicAtributos;
}
// En la variable public definiremos los getters y setters para los atributos name y courses:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	const private = { // Atributos privados
		"_name": name,
		"_courses": courses,
	};
	const public = { // 👈👈 Getters y Setters
		get name() {
			return private["_name"];
		},
		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName;
			} else {
				console.warn("El nombre debe tener al menos 1 caracter");
			}
		},
		get courses() {
			return private["_courses"];
		},
	};
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    "_name": name,
  };

  const publicAtributos = {
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() {
      return privateAtributos["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  return publicAtributos;
}
// En este caso no definimos un setter a courses, ya que no cualquiera debería realizar asignaciones a ese atributo.

// Ahora en la función createStudent eliminamos el atributo learningPaths de los atributos públicos y lo pasamos al objeto de atributos privados. Luego, generaremos el getter y setter respectivo:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function createLearningPath({
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
	const private = { // Atributos privados
		"_name": name,
		"_courses": courses,
	};
	const public = { // Getters y Setters
		get name() {
			return private["_name"];
		},
		set name(newName) {
			if (newName.length != 0) {
				private["_name"] = newName;
			} else {
				console.warn("El nombre debe tener al menos 1 caracter");
			}
		},
		get courses() {
			return private["_courses"];
		},
	};
}

function createStudent({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const privateAtributos = {
    "_name": name,
		"_learningPaths": learningPaths, // 👈👈
  };

  const publicAtributos = {
    email,
    age,
    approvedCourses,
    //learningPaths,👈👈
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() {
      return privateAtributos["_name"];
    },
		set name(newName) {
      if (newName.length != 0) {
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
		get learningPaths() { // 👈👈
			return private["__learningPaths"];
		},
		set learningPaths(newLP) { // 👈👈
			// AQUÍ empezamos a aplicar DUCK TYPING 👀🦆
      if (!newLP.name) {
				// Si la nueva ruta de aprendizaje NO tiene el atributo "name"...
        console.warn("Tu LP no tiene la propiedad name");
        return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
      }

      if (!newLP.courses) {
				// Si la nueva ruta NO tiene asignado un array
				// en el atributo "courses"
        console.warn("Tu LP no tiene courses");
        return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
      }

      if (!isArray(newLP.courses)) {
				// Si el atributo "courses" en la nueva ruta de aprendizaje NO es un Array
        console.warn("Tu LP no es una lista (*de cursos)");
        return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
      }

			// Si la nueva ruta de aprendizaje pasó por todas las validaciones
			// correctamente...Quiere decir que SÍ es una ruta válida tal como
			// la deseamos que fuese. Por tanto, procedemos a añadir ese Learning Path
			// a la lista de rutas del estudiante:
      private["_learningPaths"].push(newLP);
    },
  };

  return publicAtributos;
}
// Ser o parecer una instancia de otro objeto
// Ahora ya podríamos añadir nuevas rutas con los atributos que esperamos que tenga una ruta de aprendizaje a los nuevos estudiantes:

// NUEVO ESTUDIANTE:
const juan = createStudent({email:"juanito@frijoles.co",name:"Juanito"});

// Le asignamos al estudiante "juan" un ruta de aprendizaje:
juan.learningPaths = {
	name: "Escuela de Desarrollo Web",
	courses: [],
}
// En teoría, la ruta que añadimos es un learning path, sin embargo, no hemos validado que se haya generado esa ruta de aprendizaje con la función generadora de learning paths (createLearningPath). Es decir, nosotros no creamos la ruta de “desarrollo web” de este modo:

const escuelaWeb = createLearningPath({
	name: "Escuela de Desarrollo Web",
	courses: []
})
// Si no que lo hicimos directamente en el objeto juan. El objeto escuelaWeb es una ruta que heredó las propiedades de la función fábrica de learning paths y el otro es uno que producimos directamente desde el objeto juan.

// Lo anterior nos lleva al problema SER o TENER: no estamos validando si nuestros learning paths son realmente objetos que se construyeron desde createLearningPath, lo que validamos es que sí tienen los atributos que esperaríamos que tenga una ruta de aprendizaje.