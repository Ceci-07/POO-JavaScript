// La sintaxis get vincula la propiedad de un objeto con una función que se llamará cuando se busque esa propiedad. [1]
// La sintaxis set vincula la propiedad de un objeto con una función que se llamará cuando se intente hacer una asignación a esa propiedad. [2]

// Cómo funciona Get y Set en JavaScript
// Los métodos readName y changeName creados anteriormente serán reemplazados por getters y setters:

// Eliminamos o comentamos las funciones readName y changeName, además de las encapsulaciones de estos métodos que hicimos con Object.defineProperty:

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
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    // readName() { 👈👈
    //   return privateAtributos["_name"];
    // },
    // changeName(newName) { 👈👈
    //   privateAtributos["_name"] = newName;
    // },
  };

  // Object.defineProperty(publicAtributos, "readName", { 👈👈
  //   writable: false,
  //   configurable: false,
  // });
  // Object.defineProperty(publicAtributos, "changeName", { 👈👈
  //   writable: false,
  //   configurable: false,
  // });

  return publicAtributos;
}
// Definimos el getter con el cual obtendremos el atributo “privado” name

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
    email,
    age,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
		get name() { // 👈👈
      return privateAtributos["_name"];
    },
  };

  return publicAtributos;
}
// Definimos setter con el cual podremos asignar valores a nuestro atributo ”privado” name:

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
		set name(newName) { // 👈👈
			privateAtributos["_name"] = newName;
    }
  };

  return publicAtributos;
}
// Agreguemos una pequeña validación para garantizar que al menos la asignación a name sea de al menos una letra y no sea un string vacío.

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
      if (newName.length != 0) { // 👈👈
        privateAtributos["_name"] = newName;
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
      }
    },
  };

  return publicAtributos;
}
// ¡Listo! Ya podemos crear objetos y utilizar los getters y setters respectivos del atributo name:

const juan = createStudent({ email: "juanito@frijoles.co", name: "Juanito" });

console.log(juan.name); // Se ejecuta el GETTER
juan.name = "Rigoberto"; // Se ejecuta el SETTER
console.log(juan.name);
// Apliquemos Object.getOwnPropertyDescriptors sobre nuestro objeto juan para visualizar la accesibilidad de sus atributos: el atributo name no tendrá las propiedades value y wriable como tal, en vez de eso nos aparecerán las funciones get y set. Observemos esto en la consola del navegador:

Object.getOwnPropertyDescriptors(juan);