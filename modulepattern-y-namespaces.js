// En JavaScript no tenemos keywords para indicar que un atributo es privado o público a diferencia de otros lenguajes de programación. Sin embargo, podemos aplicar ciertas técnicas y métodos para lograrlo.

// Atributos públicos y privados en JavaScript
// Modificaremos la función creada anteriormente con la que podíamos generar nuevos objetos. Esto con la finalidad de separar los atributos que queremos que sean privados (por ahora solo el atributo name) y públicos, además de crear 2 funciones: una para poder modificar el atributo privado y otra para obtener el valor de esa propiedad privada:

// Declaramos un objeto privateAtributos en el que colocaremos las propiedades que deseamos que sean privadas y otro objeto publicAtributos en el que queremos que sean públicas. Por ahora, solo name será privada y por convención se coloca un guion bajo delante del nombre de aquel atributo privado:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
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
  const privateAtributos = { // 👈👈
		// '_name' es el atributo privado
		// 'name' es el parámetro que recibe la función
    "_name": name,
  };

  const publicAtributos = { // 👈👈
		// El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    }
  }

  return publicAtributos ;
}
// Por consiguiente, solo retornaremos publicAtributos, pues contiene las propiedades a las que sí podrán acceder los usuarios.

// Crearemos las funciones con las que el usuario puede editar y leer el valor del atributo privado _name:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
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
  }

  const publicAtributos = {
		// El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		readName() { // 👈👈
      return privateAtributos["_name"];
    },
    changeName(newName) { // 👈👈
      privateAtributos["_name"] = newName;
    },
  }

  return publicAtributos ;
}
// Finalmente, deberíamos evitar que el usuario modifique o elimine los métodos readName y changeName y dar así mejor seguridad a estos. Con Object.defineProperty haremos las configuraciones respectivas para evitar lo mencionado:

function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
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
		// El resto de atributos serán públicos:
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		readName() {
      return privateAtributos["_name"];
    },
    changeName(newName) {
      privateAtributos["_name"] = newName;
    },
  };

	Object.defineProperty(publicAtributos, "readName", { // 👈👈
    writable: false,
    configurable: false,
  });
  Object.defineProperty(publicAtributos, "changeName", { // 👈👈
    writable: false,
    configurable: false,
  });

  return publicAtributos ;
}

// Creamos un nuevo objeto
const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

// Intentamos eliminar y alterar los métodos changeName y readName
delete juan.changeName; // false
delete juan.readName; // false
juan.changeName = function (nombreImpostor) { // NO se ve afectada la función original
	return "patatas";
}
// La desventaja de protegerlos es que no nos permitiría trabajar con el polimorfismo (uno de los pilares de POO).
// El funcionamiento de nuestros métodos generados changeName y readName es muy similar a los Getters y Setters. Veamos cómo aplicar estos en JavaScript. 