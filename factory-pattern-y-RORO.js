// Factory pattern (o fábrica de objeto) y RORO (Recibir un Objeto, Retornar un Objeto) son dos patrones que nos ayudan a crear moldes de objetos a partir de funciones. Con ello ya no sería necesario utilizar objetos literales ni deep copy con recursividad.

// Generando objetos a partir de funciones
// Generaremos una función que nos permita generar nuevos estudiantes. Esta función va a recibir un objeto (con los datos del nuevo estudiante) como parámetro y devolverá el nuevo objeto generado.

function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function createStudent({
    name,
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses,
    learningPaths,
  }) {
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
  }
//   Antes de crear nuevos objetos, podríamos darles unas mejoras a nuestra función:
  
//   Los atributos approvedCourses y learningPaths deberían ser arreglos vacíos por defecto y así evitamos que sean undefined en caso de que no se envíen datos en el momento que se genere un nuevo estudiante:
  
  function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function createStudent({
    name,
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [], // 👈👈
    learningPaths = [], // 👈👈
  }) {
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
  }
//   Si en caso de invocar a la función createStudent no mandamos siquiera un objeto vacío como argumento, nos dará un error. Evitemos esto declarando que el parámetro que recibe la función puede ser un objeto vacío por defecto:
  
  function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  function createStudent({
    name,
    email,
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) { // 👈👈
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
  }
//   Deberíamos hacer que algunos campos como email sean obligatorios de enviar, pues, no todos los atributos se deberían quedar como undefined ni tampoco deberíamos poner valores por defecto a ciertos datos personales de un estudiante. Por tanto, deberíamos avisar mediante un mensaje de error personalizado que ciertos campos son obligatorios:
  
  function isObject(subject) {
    return typeof subject == "object";
  }
  
  function isArray(subject) {
    return Array.isArray(subject);
  }
  
  // Creamos una función con el objetivo de generar un Error el cual
  // tendrá un mensaje customizado por nosotros.
  // Como parámetro indicamos el nombre del atributo que no se está enviando (String)
  function requiredParam(param) { // 👈👈
    throw new Error(param + " es obligatorio"); // Este es el mensaje de error generado
  }
  
  function createStudent({
      // Por defecto, invocamos a la nueva función requiredParam en aquellos
      // atributos que deseamos que sean obligatorios. Indicamos como argumento el nombre
      // de dicho atributo.
    name = requiredParam("name"), // 👈👈
    email = requiredParam("email"), // 👈👈
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
  } = {}) {
    return {
      name,
      email,
      age,
      approvedCourses,
      learningPaths,
      socialMedia: {
        twitter,
        instagram,
        facebook,
      },
    };
  }
//   Ahora, si intentamos crear un objeto que no tenga, por ejemplo, asignado un valor en la propiedad name, la consola nos mostrará el mensaje de error que creamos:
  
//   const juan = createStudent({ email: "juanito@frijoles.co"});
//   La consola nos muestra un mensaje con formato de Error diciendo que el atributo name es obligatorio