# APUNTES JAVASCRIPT

## ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

Algunas de las diferencias entre JavaScript y otros lenguajes:

__1.-__ Es un __lenguaje de programación interpretado__ que se ejecuta en el navegador del cliente, lo que lo convierte en un lenguaje fundamental para el desarrollo web.

Un lenguaje interpretado es aquel cuyas instrucciones son ejecutadas directamente por un programa llamado intérprete. En este proceso, el intérprete lee línea por línea el código fuente y lo traduce a instrucciones ejecutables de forma inmediata. Esto significa que no se necesita compilar el código antes de ejecutarlo, lo que facilita el proceso de desarrollo y depuración.

Por otro lado, existen los lenguajes compilados. Son lenguajes cuyo código fuente se traduce por completo a un lenguaje de máquina específico para el hardware de la computadora mediante un programa llamado compilador. Este proceso genera un archivo ejecutable que puede ser ejecutado posteriormente sin necesidad de volver a traducir el código fuente. Los lenguajes compilados tienden a ser más rápidos en la ejecución, pero a menudo requieren más pasos y tiempo de desarrollo debido al proceso de compilación.

__2.-__ Es un __lenguaje multiparadigma__, lo que significa que soporta programación orientada a objetos, programación funcional y programación imperativa.
  
#### `Programación Orientada a Objetos (POO):`

En la programación orientada a objetos, organizamos nuestro código en "objetos", que son como bloques de construcción. Construimos nuestro código utilizando "objetos" como unidades fundamentales. 

Imagina que estás construyendo una casa con bloques de Lego. Cada bloque de Lego es como un objeto en la programación orientada a objetos. Puedes tener bloques de diferentes formas, tamaños y colores, y los ensamblas para construir una estructura más grande y compleja, como una casa. Cada objeto tiene propiedades (cosas que describe) y métodos (acciones que puede realizar). Piensa en los objetos como objetos del mundo real: un coche, una persona o una casa. Cada uno tiene características específicas y puede hacer ciertas cosas.

Por ejemplo, podríamos tener un objeto "Coche" con propiedades como color, marca y modelo, y métodos como "arrancar" o "detenerse". Este enfoque nos permite organizar nuestro código de manera más intuitiva y reutilizable.

Ejemplo en JavaScript:

```javascript
// Definición de una clase Persona
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
// Método que define lo que hace una persona cuando saluda y se presenta
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}
// Creación de un objeto persona
const persona1 = new Persona("Juan", 30);

// Llamada a método saludar()
persona1.saludar();
```

#### `Programación Funcional:`

La programación funcional se centra en el uso de funciones como bloques de construcción fundamentales. En este estilo de programación, las funciones son tratadas como valores y pueden pasarse como argumentos a otras funciones o devolverse como resultados de funciones. Las funciones en la programación funcional son "puras", lo que significa que siempre producen el mismo resultado para los mismos datos de entrada y no tienen efectos secundarios.

Por ejemplo, podríamos tener una función "duplicar" que toma un número como entrada y devuelve el doble de ese número. Esta función no cambia ningún estado ni tiene efectos secundarios, simplemente realiza una operación basada en su entrada y devuelve un resultado.

Ejemplo en JavaScript:


```javascript
// Función que suma dos números
function suma(a, b) {
  return a + b;
}

// Función que multiplica dos números
function multiplicar(a, b) {
  return a * b;
}

// Uso de funciones como argumentos
function operacion(a, b, callback) {
  return callback(a, b);
}

// Uso de la función operacion con las funciones suma y multiplicar
console.log(operacion(5, 3, suma)); // Output: 8
console.log(operacion(5, 3, multiplicar)); // Output: 15
```

#### `Programación Imperativa:`

La programación imperativa se basa en la ejecución de instrucciones paso a paso. En este estilo de programación, escribimos código que especifica exactamente cómo se deben realizar las operaciones. Nos centramos en "cómo" se deben hacer las cosas en lugar de en "qué" se debe hacer.

Por ejemplo, podríamos tener un conjunto de instrucciones que describen cómo hacer una taza de té: "calentar el agua", "poner la bolsita de té en la taza", "verter el agua caliente sobre la bolsita de té", etc. Cada instrucción se ejecuta secuencialmente y cambia el estado del programa a medida que avanza.

Ejemplo en JavaScript:

```javascript
// Función que calcula el factorial de un número de forma imperativa
function factorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// Uso de la función factorial
console.log(factorial(5)); // Output: 120
```

__3.-__ Es un __lenguaje de tipado dinámico,__ lo que significa que las variables no están asociadas a un tipo de dato específico y pueden cambiar de tipo durante la ejecución del programa. No necesitas declarar explícitamente el tipo de una variable al crearla. El tipo de la variable se determina automáticamente en tiempo de ejecución, según el valor que se le asigna en ese momento.

Un ejemplo simple:

```javascript
// Declaración de una variable 'x' sin especificar su tipo
let x;

// Asignación de un valor entero a la variable 'x'
x = 5;

// La variable 'x' ahora es de tipo número (integer)
console.log(typeof x); // Output: number

// Asignación de un valor string a la variable 'x'
x = "Hola mundo";

// La variable 'x' ahora es de tipo string
console.log(typeof x); // Output: string
```

__4.-__ Es un __lenguaje que sigue el modelo de eventos y callback,__ lo que lo hace especialmente adecuado para la creación de aplicaciones web interactivas y asincrónicas.

__`Modelo de Eventos en JavaScript:`__

JavaScript es un lenguaje de programación basado en eventos. Esto significa que gran parte de la programación en JavaScript implica esperar y responder a eventos que ocurren en el navegador (como hacer clic en un botón, cargar una página, mover el mouse, etc.). En lugar de ejecutar instrucciones de manera secuencial de arriba a abajo, el código JavaScript espera eventos y responde a ellos.

__`Callbacks en JavaScript:`__

Los callbacks son funciones que se pasan como argumentos a otras funciones. Estas funciones se ejecutarán una vez que se complete una operación asíncrona o un evento ocurra. En JavaScript, los callbacks son una forma común de manejar operaciones asíncronas.

Ejemplo: Manejando un evento de clic con un Callback en JavaScript:

Supongamos que tenemos un botón en nuestro HTML con el id "miBoton" y queremos ejecutar una función cuando se haga clic en ese botón.

```javascript
<!DOCTYPE html>
<html>
<head>
    <title>Ejemplo de Callbacks en JavaScript</title>
</head>
<body>

<button id="miBoton">Haz clic aquí</button>

<script>
    <!--Definimos una función que será nuestro callback-->
    function manejarClic() {
        console.log("¡El botón fue clickeado!");
    }

    <!--Seleccionamos el botón y agregamos un event listener-->
    document.getElementById("miBoton").addEventListener("click", manejarClic);
</script>

</body>
</html>
```

En este ejemplo:

* Definimos una función llamada manejarClic que lo que hace es imprimir un mensaje en la consola cuando se llama.
* Seleccionamos el botón con el ID "miBoton" usando document.getElementById.
* Utilizamos el método addEventListener para adjuntar un event listener al botón. Este método escucha el evento de clic y llama a la función manejarClic cuando se produce el evento.
  

__5.-__ Dispone de una __amplia gama de bibliotecas y frameworks,__ como Node.js, React.js, Angular.js, entre otros, que permiten extender sus capacidades y facilitar el desarrollo de aplicaciones complejas.

__Bibliotecas en JavaScript:__

Una biblioteca en JavaScript es un conjunto de funciones y métodos predefinidos que se pueden utilizar para realizar tareas específicas de manera más fácil y eficiente. Estas funciones suelen abordar problemas comunes en el desarrollo web, como manipulación del DOM (Document Object Model), animaciones, manejo de eventos, comunicación con servidores, entre otros. Ejemplos populares de bibliotecas JavaScript incluyen jQuery, lodash, moment.js, Axios, entre otros. Estas bibliotecas simplifican el desarrollo al proporcionar una interfaz consistente y funcionalidades probadas que se pueden reutilizar en múltiples proyectos.

__Frameworks en JavaScript:__

Un framework en JavaScript es un conjunto más completo de herramientas, patrones y convenciones para el desarrollo de aplicaciones web. A menudo, los frameworks ofrecen una estructura y arquitectura predefinida para organizar el código, manejar el enrutamiento, gestionar el estado de la aplicación, realizar solicitudes al servidor, entre otras tareas. Los frameworks en JavaScript son especialmente útiles para el desarrollo de aplicaciones web complejas y de gran escala. Ejemplos populares de frameworks JavaScript incluyen AngularJS, React.js, Vue.js, Express.js, entre otros.

__Diferencias:__

La principal diferencia entre una biblioteca y un framework radica en el control que tienen sobre el flujo de la aplicación. Con una biblioteca, el desarrollador tiene más control y decide cuándo y cómo utilizar las funciones proporcionadas por la biblioteca. En cambio, con un framework, el desarrollador debe seguir la estructura y las convenciones establecidas por el framework, lo que puede limitar la flexibilidad pero simplificar el desarrollo al proporcionar una guía clara sobre cómo construir la aplicación.

__6.-__ Es __ampliamente utilizado en el desarrollo de aplicaciones web,__ desde la creación de páginas estáticas hasta aplicaciones web dinámicas y complejas. Es ampliamente utilizado, debido a su versatilidad y su capacidad para interactuar dinámicamente con el contenido de una página web. Aquí hay algunos conceptos y tecnologías relacionadas con el desarrollo web en JavaScript que son ampliamente utilizados:

* `DOM Manipulation (Manipulación del DOM):` El DOM (Document Object Model) es una representación del contenido de un documento HTML/XML que JavaScript puede manipular dinámicamente para cambiar la estructura, el estilo y el contenido de una página web. La manipulación del DOM es fundamental para crear interacciones dinámicas en una página web, como actualizar elementos en respuesta a eventos del usuario.

* `AJAX (Asynchronous JavaScript and XML):` AJAX es una técnica que permite enviar y recibir datos desde un servidor en segundo plano, sin interferir con la navegación y la visualización de la página web. Permite actualizar partes específicas de una página sin tener que recargarla por completo. Esto se logra utilizando objetos como XMLHttpRequest o, más recientemente, utilizando las funciones de la API Fetch.

* `Frameworks de Frontend:` Los frameworks de frontend proporcionan una estructura y un conjunto de herramientas para facilitar el desarrollo de aplicaciones web complejas. Algunos de los frameworks de frontend más populares son:

  1. __React.js:__ Desarrollado por Facebook, React.js es una biblioteca de JavaScript para construir interfaces de usuario interactivas y reutilizables.. 
  2. __AngularJS/Angular:__ Mantenido por Google, Angular es un framework de desarrollo de aplicaciones web y móviles que ofrece una solución completa para la construcción de aplicaciones frontend.
  3. __Vue.js:__ Vue.js es un framework progresivo de JavaScript para la construcción de interfaces de usuario interactivas. Es conocido por su enfoque incremental y su facilidad de integración con proyectos existentes.

* `Gestión de Estado:` En aplicaciones web complejas, puede ser necesario gestionar el estado de la aplicación de manera eficiente. Para esto, se utilizan bibliotecas y patrones de gestión de estado como Redux (para React.js), Vuex (para Vue.js), y RxJS (para Angular), entre otros.

* `Herramientas de Desarrollo:` Existen numerosas herramientas de desarrollo en JavaScript que facilitan la escritura, prueba y depuración de código, así como la optimización del rendimiento de las aplicaciones web. Algunas de estas herramientas incluyen webpack para empaquetar y optimizar recursos, Babel para transpilar código, ESLint para análisis estático de código, y muchas otras.

## Hoisting

hoisting es un comportamiento en el que las declaraciones de variables (ya sea con var, let o const) y funciones son movidas al inicio de su ámbito actual durante la fase de compilación, pero su asignación de valor permanece en su lugar original. Esto puede causar comportamientos inesperados si no se comprende correctamente.

```javascript
// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;
```` 

Es importante tener en cuenta que el hoisting solo eleva la declaración de variables y funciones, no sus asignaciones o inicializaciones. Ejemplo en el que no funcionaría y daría un error undefine:

```javascript
// Initializers not hoisted
console.log(age); // undefined
var age = 33;

```

## ¿Cuáles son algunos tipos de datos JS?

1. **Primitivos:**
   - __Number:__ Representa números, tanto enteros como de punto flotante.
     ```javascript
     let edad = 25;
     let precio = 10.99;
     ```

   - __String:__ Representa cadenas de texto.
     ```javascript
     let nombre = "Juan";
     let mensaje = 'Hola, mundo!';
     ```

   - __Boolean:__ Representa un valor lógico verdadero o falso.
     ```javascript
     let esMayor = true;
     let esMenor = false;
     ```

   - __Null:__ Representa un valor nulo o vacío.
     ```javascript
     let valor = null;
     ```

   - __Undefined:__ Representa un valor no definido.
     ```javascript
     let variableNoDefinida;
     ```

   - __Symbol:__ (Añadido en ECMAScript 6) Representa un identificador único e inmutable.
     ```javascript
     const simbolo = Symbol('descripcion');
     ```

2. __Objetos:__
   - __Object:__ Representa un objeto, que puede contener propiedades y métodos.
     ```javascript
     let persona = { nombre: "Ana", edad: 30 };
     ```

   - __Array:__ Representa una lista ordenada de elementos.
     ```javascript
     let numeros = [1, 2, 3, 4, 5];
     ```

   - __Function:__ Representa una función en JavaScript.
     ```javascript
     function saludar(nombre) {
         console.log("Hola, " + nombre + "!");
     }
     ```

   - __Date:__ Representa una fecha y hora.
     ```javascript
     let fechaActual = new Date();
     ```

   - __RegExp:__ Representa una expresión regular para buscar patrones en cadenas de texto.
     ```javascript
     let expresionRegular = /[a-z]+/g;
     ```

   - __Map:__ Representa una colección de pares clave/valor.
     ```javascript
     let mapa = new Map();
     mapa.set("clave", "valor");
     ```

   - __Set:__ Representa una colección de valores únicos.
     ```javascript
     let conjunto = new Set();
     conjunto.add(1);
     conjunto.add(2);
     ```

## Declaración de Variables

__var:__ Esta fue la forma original de declarar variables en JavaScript. Sin embargo, debido a algunas características no deseadas de var, como el hoisting y el alcance de función, se recomienda usar let o const en su lugar.

__let:__ Introducida en ECMAScript 6 (también conocido como ES6 o ES2015), let permite declarar variables que están limitadas al ámbito del bloque en el que se definen. Esto significa que su alcance se limita al bloque, la declaración o la expresión en la que están definidos.

__const:__ También introducida en ECMAScript 6, const se utiliza para declarar variables cuyos valores no cambiarán. Una vez que se asigna un valor a una variable const, no se puede reasignar a otro valor.

__Undefined:__ Para representar una variable que no tiene un valor asignado.

```javascript
let x;
```
__Null:__ Para representar la ausencia de valor.

```javascript
let y = null;
```

__Symbol:__ Para crear valores únicos e inmutables, a menudo utilizados como claves de propiedades de objetos.

```javascript
const mySymbol = Symbol();
```
Estos son algunos de los tipos de variables y datos más comunes en JavaScript.

## Conocer el tipo de dato que es 

```javascript
typeof 12; // "number"

typeof 'Astros'; // "string"

typeof true; // "boolean"

typeof { name: "Kristine" }; // "object"

var age; // undefined

typeof age; // "undefined"  

age = null; // null

typeof age; // "object"

Nota: Para imprimir por consola console.log(typeof nombre_variable);

```

## Operaciones con dos variables:

__Dos variables del mismo tipo__

Adición (+):

```javascript
let num1 = 5;
let num2 = 3;
let suma = num1 + num2; // Resultado: 8
```

Multiplicación (*):

```javascript
let num1 = 4;
let num2 = 3;
let producto = num1 * num2; // Resultado: 12
```

__Operaciones con una variable numérica y otra como cadena (string):__

Adición (+):

```javascript
let num = 5;
let cadena = "3";
let concatenacion = num + cadena; // Resultado: "53"
```
Otro djemplo para que en lugar de unir realmente lo sume puede ser este:

```javascript
let variable1 = 5;
let variable2 = "3";

// Verificar si una de las variables es una cadena
if (typeof variable1 === "string" || typeof variable2 === "string") {
    // Convertir las cadenas a números si es necesario
    if (typeof variable1 === "string") {
        variable1 = parseInt(variable1);
    }
    if (typeof variable2 === "string") {
        variable2 = parseInt(variable2);
    }
}

// Sumar las dos variables
let suma = variable1 + variable2; // Si una de las variables es una cadena, se sumarán como números

console.log(suma); // Imprimirá 8 en lugar de "53"
```

Resta (-):

```javascript
let num = 10;
let cadena = "5";
let resta = num - cadena; // Resultado: 5 (cadena se convierte en número y se resta de num)
```

Multiplicación (*):

```javascript
let num = 4;
let cadena = "3";
let producto = num * cadena; // Resultado: 12 (cadena se convierte en número y se multiplica por num)
```

División (/):

```javascript
let num = 12;
let cadena = "3";
let division = num / cadena; // Resultado: 4 (cadena se convierte en número y se divide de num)
```
Módulo (%):

```javascript
let num = 10;
let cadena = "3";
let modulo = num % cadena; // Resultado: 1 (cadena se convierte en número y se toma el módulo de num)
```

## Transformar variables (Cambio de tipos)

### Transformar un número a una cadena:

```javascript
let numero = 123;
let cadena = numero.toString(); // Transforma el número 123 en la cadena "123"
let cadena = String(numero); // Otra forma
console.log(cadena); // Imprimirá "123"
```
### Transformar una cadena a un entero:


```javascript
let cadena = "456";
let numero = parseInt(cadena); // Transforma la cadena "456" en el número 456
console.log(numero); // Imprimirá 456
```

### Transformar un entero en un float:

Transformar un entero en un float:

```javascript
let entero = 5;
let flotante = parseFloat(entero); // Transforma el entero 5 en el flotante 5.0
console.log(flotante); // Imprimirá 5.0
```

Transformar un float en un entero:

```javascript
let flotante = 5.75;
let entero = parseInt(flotante); // Transforma el flotante 5.75 en el entero 5
console.log(entero); // Imprimirá 5
```

## Funciones Javascript
| __Name__              | __Description__                                                                                  |
|-----------------------|--------------------------------------------------------------------------------------------------|
|   charAt()            | Returns the character at a specified index (position)                                            | 
|   charCodeAt()	    | Returns the Unicode of the character at a specified index                                        |
|   concat()	        | Returns two or more joined strings                                                               |
|   constructor	        | Returns the string's constructor function                                                        |
|   endsWith()	        | Returns if a string ends with a specified value                                                  |
|   fromCharCode()	    | Returns Unicode values as characters                                                             |
|   includes()	        | Returns if a string contains a specified value                                                   |
|   indexOf()	        | Returns the index (position) of the first occurrence of a value in a string                      |
|   lastIndexOf()	    | Returns the index (position) of the last occurrence of a value in a string                       |
|   length	            | Returns the length of a string                                                                   |
|   localeCompare()	    | Compares two strings in the current locale                                                       |
|   match()	            | Searches a string for a value, or a regular expression, and returns the matches                  |
|   prototype	        | Allows you to add properties and methods to an object                                            |
|   repeat()	        | Returns a new string with a number of copies of a string                                         |
|   replace()	        | Searches a string for a pattern, and returns a string where the first match is replaced          |
|   replaceAll()	    | Searches a string for a pattern and returns a new string where all matches are replaced          |
|   search()	        | Searches a string for a value or regular expression and returns the index (position) of the match|
|   slice()	            | Extracts a part of a string and returns a new string                                             |
|   split()	            | Splits a string into an array of substrings                                                      |
|   startsWith()	    | Checks whether a string begins with specified characters                                         |
|   substr()	        | Extracts a number of characters from a string, from a start index (position)                     |
|   substring()	        | Extracts characters from a string, between two specified indices (positions)                     |
|   toLocaleLowerCase()	| Returns a string converted to lowercase letters, using the host's locale                         |
|   toLocaleUpperCase()	| Returns a string converted to uppercase letters, using the host's locale                         |
|   toLowerCase()	    | Returns a string converted to lowercase letters                                                  |
|   toString()	        | Returns a string or a string object as a string                                                  |
|   toUpperCase()	    | Returns a string converted to uppercase letters                                                  |
|   trim()	            | Returns a string with removed whitespaces                                                        |
|   trimEnd()	        | Returns a string with removed whitespaces from the end                                           |
|   trimStart()	        | Returns a string with removed whitespaces from the start                                         |
|   valueOf()	        | Returns the primitive value of a string or a string object                                       |

#### EJEMPLOS: 

```javascript
var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function
str.length; // 44
```
```javascript
var str = 'The quick brown fox jumped over the lazy dog';

str.charAt(2); // "e"

str.charAt(200); // ""
```
```javascript
var str = 'The quick brown fox jumped over the lazy dog';

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

```
```javascript
'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4
```
```javascript
str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

var str2 = str.concat('again and again'); // "The quick brown wolf jumped over the lazy dog again and again"

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"
```
```javascript
str; // "The quick brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"
```
```javascript
var messyString = '    Hi there    ';

messyString.trim(); // "Hi there"
```

## Operadores matemáticos 

| Descripción          | Operador resumido | Operador normal |
|----------------------|-------------------|-----------------|
| Asignación           | x += y            | x + y           |
| Suma                 | x += y            | x + y           |
| Resta                | x -= y            | x - y           |
| Multiplicación       | x *= y            | x * y           |
| División             | x /= y            | x / y           |
| Módulo               | x %= y            | x % y           |
| Incremento           | x++               | x + 1           |
| Decremento           | x--               | x - 1           |
| Negación             | -x                | -x              |
| Exponenciación       | x **= y           | x ** y          |
| Raíz cuadrada        | Math.sqrt(x)      | -               |

#### EJEMPLOS: 

```javascript
2 + 2; // 4

2 - 2; // 0

2 / 2; // 1

2 * 10; // 20

5 % 2; // 1

10 % 2; // 0

8 % 2; // 0

2 ** 10; // 1024

var num = 2;

num++; // 2

++num; // 4

num; // 4

num--; // 4

num; // 3

--num; // 2

2++; // VM3506:1 Uncaught ReferenceError: Invalid left-hand side expression in postfix operation

++2; // VM3508:1 Uncaught ReferenceError: Invalid left-hand side expression in prefix operation

var someNum = 10;

var someOtherNum = -someNum;

someOtherNum; // -10

var strNum = '100';

var convertedNum = + strNum;

convertedNum; // 100
```
## Orden de las operaciones en matemáticas

__PEMDAS__ -> __PEDMAS__

**P**lease **E**xcuse **M**y **D**ear **A**unt **S**ally

- **P**arentheses (Paréntesis)
- **E**xponents (Exponentes)
- **M**ultiplication (Multiplicación)
- **D**ivision (División)
- **A**ddition (Adición)
- **S**ubtraction (Sustracción)

## Procesar un Array a través de la Función reduce()

La función reduce() es una función muy poderosa en JavaScript que se utiliza para procesar un array y devolver un único valor. Se puede utilizar para realizar operaciones como sumar todos los elementos de un array, encontrar el valor máximo o mínimo, concatenar strings, entre otras cosas.

```javascript
Función para conseguir el promedio de un array. Seria la suma de todos sus elementos dividido entre el nº de elementos

const getAverage = arr => { // Para recorrer el array
    const reducer = (total, currentValue) => total + currentValue; // Definno lo que tiene que hacer en este cso sumar
    const total = arr.reduce(reducer); //Le paso a la función reduce la variable creada definiendo lo que tiene que hacer
    return total / arr.length; // La suma de todos los elementos lo divido entre el número de elementos 
  };
  
  const arr = [1, 2, 3, 4, 5, 6];
  
  getAverage(arr); // LLamo a la función pasando el array
 
```

## Condicionales

Un condicional en programación es una estructura de control que permite ejecutar cierto bloque de código si se cumple una condición especificada. Si la condición es verdadera, se ejecuta un bloque de código; si es falsa, se puede ejecutar otro bloque de código alternativo o simplemente no se ejecuta nada.

1. Condicionales básicos (if-else):

   - if: Es como preguntar algo. Si la respuesta es "sí", haces algo.
   - else: Es lo que haces si la respuesta a la pregunta del if es "no".

    Por ejemplo:

    ```
        if (condición) {
            // Haz algo si la condición es verdadera
        } else {
            // Haz algo si la condición es falsa
        }

    ```
2. Condicionales múltiples (else if):
   
   - else if: Es como hacer otra pregunta si la primera no es "sí", pero quieres más opciones.
  
    Por ejemplo:

    ```javascript
        if (condición1) {
            // Haz algo si la condición1 es verdadera
        } else if (condición2) {
            // Haz algo si la condición1 es falsa pero la condición2 es verdadera
        } else {
            // Haz algo si ninguna de las condiciones anteriores es verdadera
        }

    ```

1. Condicionales anidados:

   - Puedes tener condicionales dentro de otros condicionales.
  
    Por ejemplo:

   ```javascript
        if (condición1) {
            if (condición2) {
                // Haz algo si ambas condiciones son verdaderas
            } else {
                // Haz algo si la condición1 es verdadera pero la condición2 es falsa
            }
        } else {
            // Haz algo si la condición1 es falsa
        }

    ```

__`Nota importante:`__ En la condición es muy importante tener en cuenta el número de signos de =.

```javascript
Con dos == no tendrá en cuenta el tipo de dato si coincide o no entre las dos variables de la condición. Si Resulta que age es string y lo comparas con un number no tendrá en cuenta que age es un string.

    if (age == 25) {
        console.log('Old enough to rent a car');
    }

Con tres === tendrá en cuenta también si tienen el mismo tipo de dato, ejemplo si uno es number y otro es string.

    if (age === ageTwo) {
        console.log('They are equal');
    }

    if (age !== ageTwo) {
        console.log('Not equal');
    }

Con && las dos condiciones deben cumplirse.

var age = 30;

    if (age <= 10) {
        console.log("You can eat from the kid's menu");
        console.log("You are not old enough to drive");
        console.log("You are not old enough to rent a car");
    } else if (age >= 16 && age < 25) {
        console.log("You can not eat from the kid's menu");
        console.log("You are old enough to drive");
        console.log("You are not old enough to rent a car");
    } else if (age >= 25) {
        console.log("You can not eat from the kid's menu");
        console.log("You are old enough to drive");
        console.log("You are old enough to rent a car");
    }

```
## Bucle switch

Forma de tomar decisiones basadas en el valor de una expresión. 

```javascript
    var color = "verde";

    switch (color) {
        case "verde":
            console.log("Puedes seguir adelante");
            break;
        case "amarillo":
            console.log("Prepárate para detenerte");
            break;
        case "rojo":
            console.log("Detente");
            break;
        default:
            console.log("Color no reconocido");
    }

```

## Operador ternario

Forma concisa de escribir una instrucción condicional. Tiene la siguiente estructura:

```javascript
condición ? expresiónSiVerdadero : expresiónSiFalso
```

Aquí hay una breve explicación:

- ___Condición:___ Es una expresión que se evalúa como verdadera o falsa.
- ___expresiónSiVerdadero:___ Es el valor que se devuelve si la condición es verdadera.
- ___expresiónSiFalso:___ Es el valor que se devuelve si la condición es falsa.

Por ejemplo:

```javascript
var edad = 18;
var mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(mensaje); // Imprimirá "Eres mayor de edad"

```

Otro ejemplo:

```javascript
function adminControls(user) {
    // if (user) {
    //   if (user.admin) { // Está logueado y es admin=true
    //     return 'showing admin controls...';
    //   } else { // Está logueado y además admin = false
    //     return 'You need to be an admin';
    //   }
    // } else { //No está logueado
    //   return 'You need to be logged in';
    // }

      return user
        ? user.admin ? "showing admin controls" : "You need to be an admin"
        : "you need to be logged in";
}
 
const userOne = {
  name: "Kristine",
  admin: true
};

adminControls(userOne); //"showing admin controls"
```
- Si el usuario __está logueado__ y cumple que valor en el atributo admin __true__ le saldra un mensaje que dirá `*showing admin controls*` y le mostrará el contenido al que quiere acceder.
- Si el usuario __está logueado__ y tiene como valor __false__ le saldrá un mensaje que dirá `*You need to be an admin*` y __no__ le dejará ver el contenido al que quiere acceder.
- Si __no se ha logueado,__ e intenta entrar en un contenido o hacer una operación como puede ser procesar lo que hay en un carrito de la compra, le saldrá el mensaje `*showing admin controls*` y no le permitirá hacer lo que pretendía.
  

## Funciones en JavaScript

En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica. Como se crean:

### Declaración de funciones

Puedes declarar una función usando la palabra clave `function`, seguida del nombre de la función y paréntesis `()`. Si la función toma parámetros, los nombres de esos parámetros se colocan dentro de los paréntesis.

```javascript
function saludar(nombre) {
  return "¡Hola, " + nombre + "!";
}
```

### Invocación de funciones

Para usar una función, simplemente la invocas utilizando su nombre y pasando los argumentos necesarios entre paréntesis.

```javascript
var mensaje = saludar("Juan");
console.log(mensaje); // Imprimirá "¡Hola, Juan!"
```

### Expresiones de funciones

También puedes crear funciones como expresiones asignándolas a variables.

```javascript
// Same function written as function declaration
function fullName (fName, lName) { 
  console.log(`${lName}, ${fName}`);
}
fullName('Tiffany', 'Hudgens');

// Same function written as function expression similar a arrow functions multiples (más adelante)
fullName = (fName, lName) => { 
  console.log(`${lName}, ${fName}`);
}
fullName('Kristine', 'Hudgens');
```

### Funciones flecha (Arrow functions)

Una forma más reciente de definir funciones es mediante las funciones flecha.

```javascript
var duplicar = (numero) => {
  return numero * 2;
};

///Esto es equivalente a:

function duplicar(numero) {
  return numero * 2;
}
```

```javascript
// Basic arrow function
helloWorld = () => { console.log("Hi there"); }
helloWorld();

// Arrow function with shorthand function argument for single arguments
firstName = fname => { console.log(fname.toUpperCase()); }
firstName('Jordan');

// Arrow function with multiple arguments
fullName = (fName, lName) => { console.log(`${lName}, ${fName}`); }
fullName('Kristine', 'Hudgens');
```

### Uso de funciones

Las funciones en JavaScript son muy flexibles y poderosas. Puedes usarlas para modularizar tu código, reutilizar la lógica y realizar tareas específicas de manera eficiente.

## ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

La diferencia entre una declaración de función y una expresión de función en JavaScript radica en cómo se crean y se comportan en el código.

### Declaración de funciones

- Una declaración de función se realiza utilizando la palabra clave `function` seguida por el nombre de la función y un bloque de código entre llaves `{}` que contiene las instrucciones que la función ejecutará cuando sea llamada.
- Las declaraciones de función se pueden llamar antes de que se declaren en el código, ya que son "elevadas" al principio del ámbito en el que se declaran. Esto significa que puedes llamar a la función antes de su declaración en el código.

```javascript
// Declaración de función
function saludar() {
    console.log("Hola mundo");
}

// Llamando a la función
saludar(); // Imprime "Hola mundo"
```

### Expresiones de funciones

- Una expresión de función es una función que se asigna a una variable o se utiliza como parte de una expresión más grande.
- En una expresión de función, el nombre de la función es opcional (función anónima), pero se puede asignar a una variable para su posterior uso.
- Las expresiones de función no se "elevan" al principio del ámbito como las declaraciones de función. Por lo tanto, deben declararse antes de ser llamadas en el código.

```javascript
// Expresión de función
let saludar = function() {
    console.log("Hola mundo");
};

// Llamando a la función
saludar(); // Imprime "Hola mundo"
```

Una expresión también se puede evalúa dentro del cuerpo de una función. Esto podría incluir cualquier expresión que se utilice para asignar valores a variables, realizar operaciones aritméticas, llamar a otras funciones, etc.

Las expresiones dentro de una función tienen acceso a las variables locales de esa función, así como a las variables globales y a las variables en cualquier ámbito externo en el que se haya definido la función.

Un ejemplo para ilustrar esto:

```javascript
function operacionMatematica(a, b) {
    let sumar = function(x, y) {
        return x + y;
    };

    let resultado = sumar(a, b); // Expresión dentro de la función operacionMatematica

    console.log("La suma es: " + resultado);
}

operacionMatematica(10, 5); // Llamada a la función operacionMatematica
```

En este ejemplo:

- Una función llamada operacionMatematica toma dos parámetros a y b.
- Dentro de la función operacionMatematica, definimos una expresión de función sumar utilizando la sintaxis de asignación de función.
- La expresión resultado = sumar(a, b) se evalúa dentro de la función operacionMatematica, utilizando la función sumar que está definida dentro de ella.
- La función sumar realiza una operación de suma y devuelve el resultado.
- Finalmente, imprimimos el resultado de la suma en la consola.

### ¿Cuándo usar declaraciones o expresiones de función?

La elección entre una expresión de función y una declaración de función depende del contexto y de lo que estés tratando de lograr:

__Declaraciones de Funciones:__ Son útiles cuando necesitas una función que esté disponible en todo el ámbito de su contexto de ejecución. Pueden ser útiles para funciones que son esenciales para el funcionamiento del programa y que pueden ser invocadas desde cualquier lugar.

__Expresiones de Función:__ Son útiles cuando necesitas asignar una función a una variable, o cuando deseas definir una función dentro de un contexto específico, como una función de callback. También son útiles para funciones que pueden no ser necesarias hasta que cierta parte del código se ejecute.

En resumen, las declaraciones de funciones son más útiles para funciones que deben estar disponibles en todo el ámbito de su contexto de ejecución, mientras que las expresiones de función son más útiles cuando necesitas más control sobre dónde y cuándo se define la función.

## Alcance de las variables en JavaScript

En JavaScript, el alcance de una variable se refiere a dónde en tu código puedes acceder y usar esa variable. Los dos tipos principales de alcance de variables:

### Alcance global

Una variable global es aquella que se declara fuera de cualquier función. Estas variables son accesibles desde cualquier parte del código, tanto dentro como fuera de las funciones.


```javascript
var nombre = "Juan";

function saludar() {
  console.log("Hola, " + nombre);
}

saludar(); // Imprimirá "Hola, Juan"
```

En este ejemplo, la variable nombre es global, por lo que puede ser usada tanto dentro como fuera de la función saludar.

### Alcance local

Una variable local es aquella que se declara dentro de una función. Estas variables solo son accesibles dentro de la función en la que se declaran.

```javascript
function sumar(a, b) {
  var resultado = a + b;
  return resultado;
}

console.log(resultado); // Esto lanzará un error, ya que resultado no está definido
```

En este ejemplo, la variable resultado solo es accesible dentro de la función sumar. Intentar acceder a ella fuera de esa función resultará en un error.

### Alcance de bloque (a partir de ES6)

Con la introducción de ECMAScript 6 (también conocido como ES6), JavaScript introdujo el alcance de bloque con las palabras clave let y const. Las variables declaradas con let y const tienen un alcance de bloque, lo que significa que solo son accesibles dentro del bloque de código en el que se declaran.

```javascript
if (true) {
  let mensaje = "Hola";
  console.log(mensaje); // Imprimirá "Hola"
}

console.log(mensaje); // Esto lanzará un error, ya que mensaje está fuera de alcance
```

Algunas razones por las que:

1. __Evita Colisiones de Nombres:__ Con variables globales, existe el riesgo de que se produzcan colisiones de nombres, especialmente en proyectos grandes donde múltiples partes del código pueden estar interactuando. Esto puede hacer que sea difícil depurar y entender el código.

2. __Mantenimiento Más Difícil:__ Las variables globales pueden ser modificadas desde cualquier parte del código, lo que hace más difícil rastrear y entender cómo se están utilizando. Esto puede dificultar el mantenimiento del código a largo plazo.

3. __Facilita el Reuso:__ Las variables locales son más fáciles de reutilizar y refactorizar, ya que están limitadas al contexto de la función en la que se declaran. Esto promueve un diseño más modular y flexible del código.


## Paso de argumentos

En JavaScript, un paso de argumentos se refiere a cómo se pasan los valores a una función cuando se llama. Cuando llamas a una función en JavaScript, puedes enviarle datos que la función puede usar para realizar alguna tarea. Estos datos se denominan argumentos de la función.

Por ejemplo, considera la siguiente función:

```javascript
function suma(a, b) {
  return a + b;
}
// LLamamos a la función guardando el valor que devuelve en la variable resultado
var resultado = suma(2, 3);
```

### Paso de argumentos como valor o referencia

En JavaScript, los argumentos pueden pasarse por valor o por referencia, dependiendo del tipo de dato que estés manipulando. Aquí tienes una breve explicación de ambos conceptos con ejemplos:

#### Paso por valor:

En el paso por valor, se pasa una copia del valor original a la función, por lo que cualquier modificación hecha dentro de la función no afectará al valor original fuera de ella.

Ejemplo:

```javascript
function duplicar(x) {
  x = x * 2;
  return x;
}

let numero = 5;
console.log(duplicar(numero)); // Output: 10
console.log(numero); // Output: 5 (el valor original no se modifica)
```
#### Paso por referencia:

En el paso por referencia, se pasa una referencia a la ubicación de memoria del valor original, por lo que cualquier modificación realizada dentro de la función afectará al valor original fuera de ella.

Ejemplo:

```javascript
function agregarElemento(arr) {
  arr.push(4);
  return arr;
}

let array = [1, 2, 3];
console.log(agregarElemento(array)); // Output: [1, 2, 3, 4]
console.log(array); // Output: [1, 2, 3, 4] (el valor original se modifica)
```

Puedes evitar que un objeto se modifique dentro de una función al pasar una copia del objeto en lugar de una referencia directa. Puedes lograr esto usando técnicas como la desestructuración o creando un nuevo objeto y copiando las propiedades del original. Aquí te muestro dos formas comunes de lograrlo:

Usando la desestructuración para crear una copia del objeto:

```javascript
var someUser = {
    name: 'Jordan'
}

function nameFormatter (userName) {
    return userName = 'Oops';
}
//Modificado
someUser.name; // "Oops"

function nameFormatter (userName) {
    return userName = 'Oops';
}

nameFormatter(someUser.name); // "Oops"
//No modifica el original
someUser.name; // "Kristine"
```

### Cierres de Javascript (Clousures)

Los closures en JavaScript son un concepto un poco abstracto, pero te daré una explicación sencilla.

Imagina que tienes una caja que contiene un regalo. Esta caja también tiene una llave especial que solo tú tienes. Cuando le das la llave a otra persona, esa persona puede abrir la caja y ver el regalo, pero solo tú puedes cambiar lo que está dentro de la caja. En este caso, la caja sería el closure, la llave es la función que lo crea y el regalo es el contexto interno de la función que se "encierra".

Veamos un ejemplo de código:

```javascript
function saludar(nombre) {
  var mensaje = '¡Hola, ' + nombre + '!';
  function decirHola() {
    console.log(mensaje);
  }
  return decirHola;
}

var saludarJuan = saludar('Juan');
var saludarMaría = saludar('María');

saludarJuan(); // Imprime: ¡Hola, Juan!
saludarMaría(); // Imprime: ¡Hola, María!
```
En este ejemplo, la función saludar devuelve otra función, decirHola, que tiene acceso al contexto de saludar, incluido el parámetro nombre y la variable mensaje. Cuando llamamos a saludar('Juan'), creamos un closure donde mensaje se establece como '¡Hola, Juan!'. Lo mismo sucede con saludar('María'), donde mensaje es '¡Hola, María!'. Aunque las variables locales de saludar no son accesibles desde fuera, la función interna decirHola todavía tiene acceso a ellas gracias al closure.

En resumen, los closures en JavaScript permiten que una función acceda a las variables de su ámbito externo incluso después de que la función haya terminado de ejecutarse. Esto es útil para mantener datos privados y crear funciones especializadas que puedan acceder a esos datos.

Otro ejemplo:

```javascript
function battingAverage () {
  var hits = 100;
  var atBats = 300;

  return {
    getCurrentAverage: function () {
      return (hits/atBats);
    },
    updateHitsAndAtBats: function (hit, atBat) {
      hits += hit;
      atBats += atBat;
    }
  }
}

var altuve = battingAverage();
console.log(altuve.getCurrentAverage());
altuve.updateHitsAndAtBats(0, 20);
console.log(altuve.getCurrentAverage());
```
## This en Javascript

La palabra clave __`this`__ en JavaScript se refiere al contexto de ejecución actual. En otras palabras, __`this`__ hace referencia al objeto al que pertenece la función en la que se utiliza.

La forma en que __`this`__ se comporta depende de cómo se invoca la función en la que se utiliza. Aquí hay algunos escenarios comunes:

- En el __contexto global:__ Si __`this`__ se utiliza fuera de cualquier función, hace referencia al objeto global en el navegador (por ejemplo, window).

- En el __contexto de un objeto:__ Si __`this`__ se utiliza dentro de un método de un objeto, hace referencia al objeto mismo al que pertenece el método.

- En el __contexto de una función:__ Si __`this`__ se utiliza dentro de una función, su valor depende de cómo se llama a esa función. Si se llama directamente, __`this`__ puede hacer referencia al objeto global o a undefined (en modo estricto), pero si se utiliza en una función dentro de un objeto, puede hacer referencia al objeto que contiene esa función.

Un ejemplo sencillo:

```javascript
class Person {
  constructor(name){
    this.name = name;
  }
}

const yourPerson = new Person('Jordan');
```
Otro ejemplo:

```javascript
var seats = {
  seats: 50,
  seatsSold: 28,
  remainingSeats: function(){
    return (this.seats - this.seatsSold)
    },
  enoughSeats: function(){
    if(this.remainingSeats() > 0){
      return this.remainingSeats();
    }
  }
}


seats.enoughSeats()
```

## Arrays

En JavaScript, un array es una estructura de datos que permite almacenar una colección ordenada de elementos. Los elementos dentro de un array pueden ser de cualquier tipo de datos, como números, cadenas, objetos, u otros arrays. Un array se define utilizando corchetes [ ] y los elementos se separan por comas.

Por ejemplo:

```javascript
let miArray = [1, 2, 3, 4, 5];
```
```javascript
let miArray = [
    42,                           // Número
    "Hola Mundo",                 // Cadena de texto
    function() {                  // Función anónima
        console.log("¡Hola!");
    },
    {                             // Objeto
        nombre: "Juan",
        edad: 30
    },
    [1, 2, 3]                     // Otro array
];

// Accediendo a los elementos del array
console.log(miArray[0]); // Salida: 42
console.log(miArray[1]); // Salida: "Hola Mundo"
miArray[2]();            // Salida en la consola: ¡Hola!

// Accediendo a las propiedades del objeto dentro del array
console.log(miArray[3].nombre); // Salida: "Juan"
console.log(miArray[3].edad);   // Salida: 30

// Accediendo a los elementos del array dentro del array
console.log(miArray[4][0]); // Salida: 1
console.log(miArray[4][1]); // Salida: 2
```

### Insertar elementos:

Al final del array:

Para agregar elementos al final del array, puedes usar el método push():

```javascript
miArray.push(6); // Agrega el elemento 6 al final del array
```

Al inicio del array:

Para agregar elementos al inicio del array, puedes usar el método unshift():

```javascript
miArray.unshift(0); // Agrega el elemento 0 al inicio del array
```

### Eliminar elementos:

Al final del array:

Para eliminar el último elemento del array, puedes usar el método pop():

```javascript
miArray.pop(); // Elimina el último elemento del array
```

Al inicio del array:

Para eliminar el primer elemento del array, puedes usar el método shift():

```javascript
miArray.shift(); // Elimina el primer elemento del array
```

Ejemplo completo:

```javascript
let miArray = [1, 2, 3, 4, 5];

// Insertar elementos
miArray.push(6);   // [1, 2, 3, 4, 5, 6]
miArray.unshift(0); // [0, 1, 2, 3, 4, 5, 6]

// Eliminar elementos
miArray.pop();   // [0, 1, 2, 3, 4, 5]
miArray.shift(); // [1, 2, 3, 4, 5]
```

Elemento dentro del array que no es ni el primero ni el último:

Para eliminar el elemento Correa del array, puedes usar el método slice():

```javascript
var arr = ['Altuve', 'Bregman', 'Correa', 'Springer'];
// El primer número es el index de Correa y el segundo número es el número de elementos a eleminar
arr.slice(2,1);
//Si no sél el índice donde está el elemento a eliminar lo busco consigo con indexOg
var foundElement = arr.indexOf('Correa');

foundElement; // 2

arr.splice(foundElement, 1); // ["Correa"]

console.log(arr); // ["Altuve", "Bregman", "Springer"]

arr.splice(1, 2); // ["Bregman", "Springer"]

console.log(arr);  // ["Altuve"]

```

## Bucles For

1. Bucle for:
El bucle for es un bucle clásico que se utiliza para iterar sobre una secuencia de valores. Se compone de tres partes: la inicialización, la condición de continuación y la expresión de incremento/decremento.

```javascript
for (inicialización; condición; expresión de incremento/decremento) {
  // Código a ejecutar en cada iteración
}
for (let i = 0; i < 5; i++) {
  console.log(i); // Imprime los números del 0 al 4
}
```
2. Bucle for...in:
El bucle for...in se utiliza para iterar sobre las propiedades de un objeto. En cada iteración, el bucle asigna el nombre de una propiedad del objeto a una variable.

```javascript
for (variable in objeto) {
  // Código a ejecutar en cada iteración
}
const persona = {
  nombre: 'Juan',
  edad: 30,
  ciudad: 'Madrid'
};

for (let propiedad in persona) {
  console.log(propiedad + ': ' + persona[propiedad]);
}
// Salida:
// nombre: Juan
// edad: 30
// ciudad: Madrid
```

3. Método forEach:
forEach es un método proporcionado por los arrays en JavaScript, que ejecuta una función proporcionada una vez por cada elemento del array.

```javascript
array.forEach(function(elemento, índice, array) {
  // Código a ejecutar en cada iteración
});

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function(numero) {
  console.log(numero * 2); // Imprime el doble de cada número
});
// Salida:
// 2
// 4
// 6
// 8
// 10
```

## Bucles while y do-while

El bucle while y do-while son estructuras de control en JavaScript (y en muchos otros lenguajes de programación) que te permiten ejecutar un bloque de código repetidamente mientras se cumpla una condición específica. La diferencia principal entre while y do-while es cuándo se evalúa la condición.

### While Loop

En un bucle while, la condición se evalúa antes de que se ejecute el bloque de código. Si la condición es verdadera, el bloque de código se ejecuta. Si la condición es falsa desde el principio, el bloque de código nunca se ejecutará.

Sintaxis:

```javascript
while (condición) {
  // Bloque de código a ejecutar
}
```

Ejemplo:

```javascript
let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
```
En este ejemplo, se imprimirá en la consola los números del 0 al 4.

### do-While Loop

En un bucle do-while, el bloque de código se ejecuta al menos una vez, y luego la condición se evalúa. Si la condición es verdadera, el bloque de código se ejecutará nuevamente. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa desde el principio.

Sintaxis:

```javascript
do {
  // Bloque de código a ejecutar
} while (condición);
```

Ejemplo:

```javascript
let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
```
Este ejemplo produce el mismo resultado que el ejemplo anterior, pero utilizando un bucle do-while.

## Tipos de Declaraciones de Variables en JavaScript

En JavaScript, existen tres tipos de declaraciones de variables: `var`, `const`, y `let`. Cada uno tiene características específicas y ámbitos de aplicación que los hacen útiles en diferentes situaciones.

### Declaración de Variables en JavaScript: var

La declaración `var` se utilizaba antes de la introducción de `const` y `let`. Aunque sigue siendo compatible con versiones anteriores de JavaScript, su uso se ha desaconsejado en favor de `const` y `let` debido a su peculiaridad en cuanto al ámbito y al hoisting.

- **Ámbito de Aplicación**: El ámbito de las variables declaradas con `var` es la función en la que están definidas, o el ámbito global si están declaradas fuera de cualquier función.

- **Características**:
  - Se puede reasignar.
  - Se puede redeclarar en el mismo ámbito.
  - Sufre hoisting, lo que significa que puede ser utilizado antes de ser declarado, aunque su valor será `undefined` si se accede a él antes de la declaración.

- **Uso**:
  - Cuando se necesita una variable con ámbito de función o global y se requiere compatibilidad con versiones anteriores de JavaScript.

```javascript
function example() {
  var x = 10;
  if (true) {
    var y = 20;
    console.log(x); // 10
  }
  console.log(y); // 20
}

example();
```

### Declaración de Variables en JavaScript: let

La declaración `let` fue introducida en ECMAScript 6 (ES6) y se utiliza para declarar variables con ámbito de bloque.

- **Ámbito de Aplicación**: El ámbito de las variables declaradas con `let` es el bloque en el que están definidas, como un bloque `if`, `for`, o `while`, o cualquier otro bloque delimitado por llaves `{}`.

- **Características**:
  - Se puede reasignar, pero no redeclarar en el mismo ámbito.
  - No sufre hoisting, por lo que no puede ser utilizado antes de ser declarado dentro de su ámbito.

- **Uso**:
  - Cuando se necesita una variable con ámbito de bloque y no se necesita redeclarar la variable en el mismo ámbito.

Ejemplo de uso de `let`:

```javascript
function example() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }
  console.log(x); // 10
  // console.log(y); // Error: y is not defined
}

example();
```

### Declaración de Variables con `const` en JavaScript

En JavaScript, `const` se utiliza para declarar variables cuyo valor es constante y no cambiará a lo largo del programa. A continuación, se detallan sus características y su uso adecuado.

- **Características**:

  - **Inmutabilidad**: Una vez que se asigna un valor a una variable `const`, no se puede cambiar.

  - **Ámbito de Aplicación**: El ámbito de las variables declaradas con `const` es similar al de `let`, es decir, el bloque en el que están   definidas.

  - **Hoisting**: Al igual que `let`, `const` no sufre hoisting, por lo que no puede ser utilizado antes de ser declarado dentro de su ámbito.

  - **Reasignación**: A diferencia de `let`, las variables `const` no pueden ser reasignadas. Sin embargo, si la variable es un objeto, su contenido mutable aún puede cambiar.

- **Uso adecuado de **`const`**:

  - Se debe utilizar `const` cuando se necesita que una variable tenga un valor inmutable a lo largo del programa.

Ejemplo:

```javascript
const PI = 3.14159;
const person = { name: "John", age: 30 };

console.log(PI); // 3.14159
console.log(person.name); // John

// Esto dará un error, ya que no se puede reasignar una variable constante
// PI = 3.14; // Error: Assignment to constant variable

// Sin embargo, si la variable constante es un objeto, su contenido puede cambiar
person.age = 31;
console.log(person.age); // 31

```

## Interpolación de Variables en JavaScript

JavaScript ofrece varias formas de intercalar variables dentro de una cadena de texto. A continuación, se presentan tres métodos comunes:

### 1. Concatenación de Cadenas

La concatenación de cadenas es el método más básico para intercalar variables en una cadena de texto, pero el menos usado en la actualidad.

```javascript
let name = "John";
let age = 30;
let message = "Hello, my name is " + name + " and I am " + age + " years old.";
console.log(message); // Output: Hello, my name is John and I am 30 years old.
```

### 2. Template Literals (plantillas de texto)

Las plantillas de texto (template literals) son una forma más moderna y flexible de intercalar variables en una cadena de texto, utilizando la sintaxis de comillas invertidas (\`\`).

```javascript
let name = "John";
let age = 30;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Output: Hello, my name is John and I am 30 years old.
```
### 3. Método `String.prototype.concat()`

El método `concat()` de la clase String también se puede utilizar para concatenar cadenas, aunque es menos comúnmente utilizado debido a su sintaxis menos legible.

```javascript
let name = "John";
let age = 30;
let message = "Hello, my name is ".concat(name, " and I am ", age, " years old.");
console.log(message); // Output: Hello, my name is John and I am 30 years old.
```
## Integración de condicionales en cadenas

La interpolación se realizaría con los operadores ternarios. 

Ejemplo:

```javascript
página constante = 'Home';
console.log(`class=${ page === 'Home' ? 'master-layout' : 'secondary-layout' }`); // class='master-layout'
```
## Construir un heading HTML con Javascript

```javascript
const headingGenerator = (title, typeOfHeading) => {
  return `
    <h${typeOfHeading}>${title}</h${typeOfHeading}>
  `
}

headingGenerator('Greetings', 1);
``` 

## Programas Utilizados

- Visual Studio Code
- CodePen.io

### Ejecutar código 

__VSC__

* Guarda el archivo con la extensión ".js".
* Presiona Ctrl + Shift + P para abrir la paleta de comandos.
* Escribe "Run Code" y selecciona "Run Code" de las opciones mostradas o simplemente presiona Ctrl + Alt + N.

## Bibliografía

### Reduce 

- [Mozilla Developer Network (MDN) - reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

### Diferencias entre JavaScript y otros lenguajes de programación:

- [Mozilla Developer Network (MDN) - Introducción a JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction)

### Tipos de datos en JavaScript:

- [W3Schools - JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp)

### Funciones de cadena en JavaScript:

- [W3Schools - JavaScript String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### Condicional en JavaScript:

- [MDN - Introducción a las estructuras de control de flujo en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Control_de_flujo_y_manejo_de_errores)

### Operador ternario en JavaScript:

- [MDN - Operador condicional (ternario)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

### Diferencia entre declaración de función y expresión de función:

- [MDN Web Docs - Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### La palabra clave "this" en JavaScript:

- [MDN - this](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this)
