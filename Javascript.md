# APUNTES JAVASCRIPT

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

## Variables

__var:__ Esta fue la forma original de declarar variables en JavaScript. Sin embargo, debido a algunas características no deseadas de var, como el hoisting y el alcance de función, se recomienda usar let o const en su lugar.

__let:__ Introducida en ECMAScript 6 (también conocido como ES6 o ES2015), let permite declarar variables que están limitadas al ámbito del bloque en el que se definen. Esto significa que su alcance se limita al bloque, la declaración o la expresión en la que están definidos.

__const:__ También introducida en ECMAScript 6, const se utiliza para declarar variables cuyos valores no cambiarán. Una vez que se asigna un valor a una variable const, no se puede reasignar a otro valor.

Estos tipos de variables pueden almacenar diferentes tipos de datos en JavaScript:

__Number:__ Para representar números, tanto enteros como de punto flotante.

```javascript
let age = 25;
let temperature = 98.6;
```

__String:__ Para representar texto.

```javascript
let name = "John Doe";
```
__Boolean:__ Para representar valores verdaderos o falsos.

```javascript
let isLogged = true;
```

__Array:__ Para almacenar una colección de elementos.

```javascript
let colors = ["red", "green", "blue"];
```

__Object:__ Para representar una colección de propiedades.

```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

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

Nota importante: En la condición es muy importante tener en cuenta el número de signos de =.

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
var sumar = function(a, b) {
  return a + b;
};
```

### Funciones flecha (Arrow functions)

Una forma más reciente de definir funciones es mediante las funciones flecha.

```javascript
var duplicar = (numero) => {
  return numero * 2;
};
```

Esto es equivalente a:

```javascript
function duplicar(numero) {
  return numero * 2;
}
```

### Uso de funciones

Las funciones en JavaScript son muy flexibles y poderosas. Puedes usarlas para modularizar tu código, reutilizar la lógica y realizar tareas específicas de manera eficiente.

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

La palabra clave this en JavaScript se refiere al contexto de ejecución actual. En otras palabras, this hace referencia al objeto al que pertenece la función en la que se utiliza.

La forma en que this se comporta depende de cómo se invoca la función en la que se utiliza. Aquí hay algunos escenarios comunes:

En el contexto global: Si this se utiliza fuera de cualquier función, hace referencia al objeto global en el navegador (por ejemplo, window).

En el contexto de un objeto: Si this se utiliza dentro de un método de un objeto, hace referencia al objeto mismo al que pertenece el método.

En el contexto de una función: Si this se utiliza dentro de una función, su valor depende de cómo se llama a esa función. Si se llama directamente, this puede hacer referencia al objeto global o a undefined (en modo estricto), pero si se utiliza en una función dentro de un objeto, puede hacer referencia al objeto que contiene esa función.

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


## Programas Utilizados

- Visual Studio Code
- CodePen.io

### Ejecutar código 

__VSC__

* Guarda el archivo con la extensión ".js".
* Presiona Ctrl + Shift + P para abrir la paleta de comandos.
* Escribe "Run Code" y selecciona "Run Code" de las opciones mostradas o simplemente presiona Ctrl + Alt + N.

## Bibliografía

Reduce -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce