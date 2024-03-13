# APUNTES JAVASCRIPT

## Hoisting

hoisting es un comportamiento en el que las declaraciones de variables (ya sea con var, let o const) y funciones son movidas al inicio de su ámbito actual durante la fase de compilación, pero su asignación de valor permanece en su lugar original. Esto puede causar comportamientos inesperados si no se comprende correctamente.

```
// Hoisted
name = 'Kristine';
console.log(name); // 'Kristine'
var name;
```` 

Es importante tener en cuenta que el hoisting solo eleva la declaración de variables y funciones, no sus asignaciones o inicializaciones. Ejemplo en el que no funcionaría y daría un error undefine:

```
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

```
let age = 25;
let temperature = 98.6;
```

__String:__ Para representar texto.

```
let name = "John Doe";
```
__Boolean:__ Para representar valores verdaderos o falsos.

```
let isLogged = true;
```

__Array:__ Para almacenar una colección de elementos.

```
let colors = ["red", "green", "blue"];
```

__Object:__ Para representar una colección de propiedades.

```
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

__Undefined:__ Para representar una variable que no tiene un valor asignado.

```
let x;
```

__Null:__ Para representar la ausencia de valor.

```
let y = null;
```

__Symbol:__ Para crear valores únicos e inmutables, a menudo utilizados como claves de propiedades de objetos.

```
const mySymbol = Symbol();
```
Estos son algunos de los tipos de variables y datos más comunes en JavaScript.

## Programas Utilizados

- Visual Studio Code
- CodePen.io

### Ejecutar código 

__VSC__

* Guarda el archivo con la extensión ".js".
* Presiona Ctrl + Shift + P para abrir la paleta de comandos.
* Escribe "Run Code" y selecciona "Run Code" de las opciones mostradas o simplemente presiona Ctrl + Alt + N.