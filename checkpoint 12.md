# Checkpoint 12

## Inserción, Eliminación de elementos en el DOM

### Ejercicio Widget de Chat en Tiempo Real

```html
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <title></title>
</head>

<body>
  <div class="widget">
    <input type="text" id="chat-input">
    <button id="msgBtn" onclick="sendMessage()">Submit</button>
    <div class="chat-wrapper"></div>
  </div>
</body>

<script>
  function sendMessage() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('chatMsg');
    let chatInput = document.querySelector('#chat-input').value;
    const newContent = document.createTextNode(chatInput);
    newDiv.appendChild(newContent);
    const widget = document.querySelector(".widget");
    let chatWrapper = document.querySelector(".chat-wrapper");
    document.querySelector('#chat-input').value = '';
    if (document.querySelectorAll('.chatMsg').length > 0) {
      chatWrapper = document.querySelectorAll('.chatMsg')[0];
    }
    widget.insertBefore(newDiv, chatWrapper);
  }
</script>

</html>
```

#### Introducción

Este script de JavaScript permite la creación de un simple widget de chat en tiempo real. Los usuarios pueden ingresar un mensaje en un campo de texto y al hacer clic en el botón "Submit", el mensaje se añade a la lista de mensajes mostrados en el widget. Este script es útil para crear interfaces de chat básicas o funcionalidades de comentarios en tiempo real.

#### Explicación del Código

A continuación, se explica el propósito de cada línea del script:

```javascript
function sendMessage() {
  // Crea un nuevo div que contendrá el mensaje de chat
  const newDiv = document.createElement("div");

  // Añade la clase 'chatMsg' al nuevo div
  newDiv.classList.add('chatMsg');

  // Obtiene el valor del campo de entrada de chat
  let chatInput = document.querySelector('#chat-input').value;

  // Crea un nodo de texto con el contenido del mensaje de chat
  const newContent = document.createTextNode(chatInput);

  // Añade el nodo de texto al nuevo div
  newDiv.appendChild(newContent);

  // Selecciona el contenedor principal del widget de chat
  const widget = document.querySelector(".widget");

  // Selecciona el contenedor donde se mostrarán los mensajes de chat
  let chatWrapper = document.querySelector(".chat-wrapper");

  // Limpia el campo de entrada de chat
  document.querySelector('#chat-input').value = '';

  // Si ya hay mensajes de chat, selecciona el primer mensaje
  if (document.querySelectorAll('.chatMsg').length > 0) {
    chatWrapper = document.querySelectorAll('.chatMsg')[0];
  }

  // Inserta el nuevo mensaje antes del primer mensaje existente
  widget.insertBefore(newDiv, chatWrapper);
}
```

#### Vaciado de los mensajes del chat

Nuevo código a añadir

```html
<button onclick="clearMessages()">Clear Messages</button> 

<script>
  function clearMessages() {
    const messages = document.querySelectorAll('.chatMsg');
    messages.forEach(el => el.remove());
  }
</script>
```

#### Código Completo


```html
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <title>Chat Widget</title>
</head>

<body>
  <div class="widget">
    <input type="text" id="chat-input">
    <button id="msgBtn" onclick="sendMessage()">Submit</button>
    <button onclick="clearMessages()">Clear Messages</button>
    <div class="chat-wrapper"></div>
  </div>
</body>

<script>
  function sendMessage() {
    const newDiv = document.createElement("div");
    newDiv.classList.add('chatMsg');
    let chatInput = document.querySelector('#chat-input').value;
    const newContent = document.createTextNode(chatInput);
    newDiv.appendChild(newContent);
    const widget = document.querySelector(".widget");
    let chatWrapper = document.querySelector(".chat-wrapper");
    document.querySelector('#chat-input').value = '';
    if (document.querySelectorAll('.chatMsg').length > 0) {
      chatWrapper = document.querySelectorAll('.chatMsg')[0];
    }
    widget.insertBefore(newDiv, chatWrapper);
  }

  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('chatMsg')) {
      event.target.remove();
    }
  });
  //Opción 1
  function clearMessages() {
    const messages = document.querySelectorAll('.chatMsg');
    messages.forEach(el => el.remove()); 
  }
  //Opción 2 (Más eficiente) No tiene que pasar por un forEach. Si son muchos mensajes se notaría la diferencia.
  function clearMessages() {
    const messagesWrapper = document.querySelector('.chat-wrapper');
     while (messagesWrapper.firstChild) {
        messagesWrapper.removeChild(messagesWrapper.firstChild);
    }
  }

</script>

</html>
```

### Ejercicio Manejo de Tareas Pendientes y Completadas en JavaScript

#### Introducción

El objetivo de este script es gestionar una lista de tareas pendientes y una lista de tareas completadas en una página web. Al hacer clic en una tarea pendiente, esta se moverá a la lista de tareas completadas, posicionándose al principio de dicha lista. Esto permite una mejor organización y visualización de las tareas completadas más recientemente.

#### Código

```javascript
const todos = document.querySelectorAll('.todoItem'); //Guarda todos los elementos con esa clase
const completedTodos = document.querySelector('.completed'); // Guarda el contenedor con esa clase
const completedTodoWrapper = document.querySelector('.completedTodoWrapper'); // Guarda el contenedor con esa clase

todos.forEach(todo => todo.addEventListener('click', (event) => {
    let completedTodo = document.createElement('li');
    let todoContent = document.createTextNode(todo.textContent);
    completedTodo.appendChild(todoContent);

    // Insertar el nuevo 'li' al principio de la lista
    if (completedTodoWrapper.children.length > 0) {
        completedTodoWrapper.insertBefore(completedTodo, completedTodoWrapper.firstChild);
    } else {
        completedTodoWrapper.appendChild(completedTodo);
    }

    // Eliminar el todo original
    todo.remove();
}));
```

#### Explicación del Código

1. **Selección de Elementos**:
   ```javascript
   const todos = document.querySelectorAll('.todoItem');
   const completedTodos = document.querySelector('.completed');
   const completedTodoWrapper = document.querySelector('.completedTodoWrapper');
   ```
   Aquí seleccionamos todos los elementos de la lista de tareas pendientes (`.todoItem`), el contenedor de las tareas completadas (`.completed`), y el contenedor que envuelve las tareas completadas (`.completedTodoWrapper`).

2. **Añadir Event Listener a Cada Tarea Pendiente**:
   ```javascript
   todos.forEach(todo => todo.addEventListener('click', (event) => {
   ```
   Se añade un `click` event listener a cada elemento de tarea pendiente. Cuando una tarea es clickeada, se ejecuta la función que sigue.

3. **Crear un Nuevo Elemento de Tarea Completada**:
   ```javascript
   let completedTodo = document.createElement('li');
   let todoContent = document.createTextNode(todo.textContent);
   completedTodo.appendChild(todoContent);
   ```
   Al hacer clic en una tarea pendiente, se crea un nuevo elemento `li` y se le añade el contenido de texto de la tarea clickeada.

4. **Insertar la Tarea Completada en la Lista Correspondiente**:
   ```javascript
   if (completedTodoWrapper.children.length > 0) {
       completedTodoWrapper.insertBefore(completedTodo, completedTodoWrapper.firstChild);
   } else {
       completedTodoWrapper.appendChild(completedTodo);
   }
   ```
   Si ya hay tareas completadas en la lista, se inserta la nueva tarea completada al principio de la lista. Si no hay tareas completadas, simplemente se añade la nueva tarea.

5. **Eliminar la Tarea Original de la Lista de Tareas Pendientes**:
   ```javascript
   todo.remove();
   ```
   Finalmente, se elimina la tarea original de la lista de tareas pendientes.

Este script proporciona una forma sencilla y eficiente de gestionar tareas pendientes y completadas, moviendo las tareas clickeadas a la lista de tareas completadas y asegurando que las tareas más recientes completadas aparezcan primero en la lista.

## Consolas Más Importantes en JavaScript

En JavaScript, la consola es una herramienta fundamental para el desarrollo y depuración de código. A continuación, se describen las consolas más importantes y sus usos principales:

### 1. `console.log()`

Esta es la consola más utilizada. Se usa para imprimir mensajes generales, valores de variables y resultados de expresiones.

```javascript
console.log('Este es un mensaje de log');
console.log(variable);
```

### 2. `console.error()`

Se usa para imprimir mensajes de error. Los mensajes se mostrarán con un formato distintivo para resaltar los errores.

```javascript
console.error('Este es un mensaje de error');
```

### 3. `console.warn()`

Se usa para imprimir advertencias. Es útil para señalar posibles problemas que no son errores pero que podrían causar problemas futuros.

```javascript
console.warn('Este es un mensaje de advertencia');
```

### 4. `console.info()`

Se usa para imprimir mensajes informativos. Es similar a `console.log()`, pero puede ser estilizado de manera diferente por algunos navegadores.

```javascript
console.info('Este es un mensaje informativo');
```

### 5. `console.debug()`

Se usa para imprimir mensajes de depuración. En muchos entornos, estos mensajes solo se mostrarán si la consola está configurada para mostrar mensajes de depuración.

```javascript
console.debug('Este es un mensaje de depuración');
```

### 6. `console.table()`

Se usa para imprimir datos tabulares de una manera que es fácil de leer. Funciona bien con matrices y objetos.

```javascript
const usuarios = [
  { nombre: 'Alice', edad: 25 },
  { nombre: 'Bob', edad: 30 }
];
console.table(usuarios);
```

### 7. `console.group()` y `console.groupEnd()`

Se usan para agrupar mensajes relacionados. Esto ayuda a organizar la salida de la consola de una manera más estructurada.

```javascript
console.group('Grupo de mensajes');
console.log('Mensaje dentro del grupo');
console.groupEnd();
```

### 8. `console.time()` y `console.timeEnd()`

Se usan para medir el tiempo que tarda en ejecutarse un bloque de código. Esto es útil para realizar pruebas de rendimiento.

```javascript
console.time('timer');
for (let i = 0; i < 1000000; i++) {
  // Código a medir
}
console.timeEnd('timer');
```

Para más información sobre la API de la consola, puedes consultar la documentación de MDN:

[Documentación de Console en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Console)


Este resumen proporciona una visión general de las consolas más importantes en JavaScript y cómo utilizarlas, junto con un enlace para obtener más detalles en la documentación de MDN.


## Función copy para extraer un sitio website

## HTML de Ejemplo

Supongamos que tienes una página web con la siguiente estructura HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="topic">
        <h2>Título 1</h2>
        <a href="https://example.com/1">Enlace 1</a>
    </div>
    <div class="topic">
        <h2>Título 2</h2>
        <a href="https://example.com/2">Enlace 2</a>
    </div>
    <div class="topic">
        <h2>Título 3</h2>
        <a href="https://example.com/3">Enlace 3</a>
    </div>
</body>
</html>
```

## JavaScript para Extraer Títulos

Vamos a usar JavaScript para extraer los títulos (`h2`) dentro de los `div` con la clase `topic` y obtener un array con esos títulos.

### Paso 1: Seleccionar los `div` con la clase `topic`

Utilizamos `document.querySelectorAll` para seleccionar todos los `div` con la clase `topic`.

```javascript
const topics = document.querySelectorAll('.topic');
```

### Paso 2: Convertir la NodeList a un Array

La `NodeList` devuelta por `querySelectorAll` no es un array verdadero, por lo que usaremos `Array.prototype.slice.call` para convertirlo en un array.

```javascript
const topicsArray = Array.prototype.slice.call(topics);
```

### Paso 3: Mapear para Obtener los Títulos

Usamos `Array.prototype.map` con una función flecha para iterar sobre el array y extraer el texto de cada `h2`.

```javascript
const titles = topicsArray.map(topic => topic.querySelector('h2').textContent);
```

### Paso 4: Copiar el Resultado al Portapapeles

Usamos `copy` para copiar el array de títulos al portapapeles (esto funciona en la consola de desarrolladores de algunos navegadores como Chrome).

```javascript
copy(titles);
```

### Código Completo

Aquí tienes el código completo para extraer y copiar los títulos:

```javascript
// Paso 1: Seleccionar los div con la clase 'topic'
const topics = document.querySelectorAll('.topic');

// Paso 2: Convertir la NodeList a un Array
const topicsArray = Array.prototype.slice.call(topics);

// Paso 3: Mapear para obtener los títulos usando una función flecha
const titles = topicsArray.map(topic => topic.querySelector('h2').textContent);

// Paso 4: Copiar el resultado al portapapeles
copy(titles);

// Imprimir los títulos en la consola (opcional)
console.log(titles);
```

## Explicación de las Funciones Usadas

- **`document.querySelectorAll`**: Selecciona todos los elementos del DOM que coinciden con el selector CSS dado.
- **`Array.prototype.slice.call`**: Convierte una `NodeList` u objeto similar a un array en un array real.
- **`Array.prototype.map`**: Crea un nuevo array con los resultados de la llamada a la función proporcionada en cada elemento del array original.
- **`copy`**: Copia el valor dado al portapapeles. Esta función está disponible en la consola de desarrolladores de algunos navegadores.

Este método es útil para extraer y manipular datos del DOM de manera eficiente utilizando las capacidades nativas de JavaScript.


# Uso de `shift` y `pop`


## Ejercicio Clase `ArrayPopper`

La clase `ArrayPopper` está diseñada para alternar entre eliminar el último y el primer elemento de un array cada vez que se llama a su método `togglePopper`.

## Definición de la Clase

```javascript
class ArrayPopper {
  constructor(arr) {
    this.arr = arr;
    this.atBeginning = true;
  }

  togglePopper() {
    this.atBeginning = !this.atBeginning;
    return this.atBeginning ? this.arr.pop() : this.arr.shift();
  }
}
```

### Constructor

- **`constructor(arr)`**: El constructor toma un array `arr` como parámetro y lo asigna a la propiedad `this.arr`. También inicializa `this.atBeginning` a `true`.
  - **`this.arr`**: Contiene el array pasado al constructor.
  - **`this.atBeginning`**: Es un booleano que determina si se debe eliminar el último (`pop`) o el primer (`shift`) elemento del array en la siguiente llamada a `togglePopper`.

### Método `togglePopper`

```javascript
togglePopper() {
  this.atBeginning = !this.atBeginning;
  return this.atBeginning ? this.arr.pop() : this.arr.shift();
}
```

- **`this.atBeginning = !this.atBeginning;`**: Invierte el valor de `this.atBeginning` cada vez que se llama al método.
- **`return this.atBeginning ? this.arr.pop() : this.arr.shift();`**: Utiliza el operador ternario para decidir qué método invocar:
  - Si `this.atBeginning` es `true`, se llama a `this.arr.pop()`, eliminando y devolviendo el último elemento del array.
  - Si `this.atBeginning` es `false`, se llama a `this.arr.shift()`, eliminando y devolviendo el primer elemento del array.

## Ejemplo de Uso

```javascript
const ap = new ArrayPopper([1, 2, 3, 4, 5]);

ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
ap.togglePopper(); //?
```

### Descripción del Ejemplo

1. **Inicialización**: Se crea una instancia de `ArrayPopper` con el array `[1, 2, 3, 4, 5]`.
   ```javascript
   const ap = new ArrayPopper([1, 2, 3, 4, 5]);
   ```

2. **Primera Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `false`.
   - Se ejecuta `this.arr.shift()`, eliminando y devolviendo `1`.
   ```javascript
   ap.togglePopper(); // 1
   ```

3. **Segunda Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `true`.
   - Se ejecuta `this.arr.pop()`, eliminando y devolviendo `5`.
   ```javascript
   ap.togglePopper(); // 5
   ```

4. **Tercera Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `false`.
   - Se ejecuta `this.arr.shift()`, eliminando y devolviendo `2`.
   ```javascript
   ap.togglePopper(); // 2
   ```

5. **Cuarta Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `true`.
   - Se ejecuta `this.arr.pop()`, eliminando y devolviendo `4`.
   ```javascript
   ap.togglePopper(); // 4
   ```

6. **Quinta Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `false`.
   - Se ejecuta `this.arr.shift()`, eliminando y devolviendo `3`.
   ```javascript
   ap.togglePopper(); // 3
   ```

7. **Sexta Llamada a `togglePopper()`**:
   - `this.atBeginning` se invierte a `true`.
   - Se ejecuta `this.arr.pop()`, pero el array ya está vacío, por lo que devuelve `undefined`.
   ```javascript
   ap.togglePopper(); // undefined
   ```

### Estado Final del Array

Después de todas las llamadas a `togglePopper()`, el array `arr` está vacío (`[]`).

Este comportamiento alternado permite eliminar elementos del principio y del final del array de manera secuencial, proporcionando una forma interesante de manipular el array.


# Funciones para Convertir Cadenas a Mayúsculas o Minúsculas

En JavaScript, hay métodos incorporados para convertir cadenas a mayúsculas o minúsculas:

- **`toUpperCase()`**: Convierte toda la cadena a mayúsculas.
- **`toLowerCase()`**: Convierte toda la cadena a minúsculas.

## Ejemplo de Uso de `toUpperCase` y `toLowerCase`

```javascript
const str = "Hello World";
const upperStr = str.toUpperCase(); // "HELLO WORLD"
const lowerStr = str.toLowerCase(); // "hello world"
```

## Convertir la Primera Letra de Cada Palabra a Mayúscula

A veces queremos convertir la primera letra de cada palabra en una cadena a mayúscula. Aquí tienes una función que hace eso:

### Código de Ejemplo

```javascript
const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};

const shortStr = "Hi there";
console.log(toCapital(shortStr)); // "Hi There"

const longStr = "the quick brown fox jumped over the lazy dog";
console.log(toCapital(longStr)); // "The Quick Brown Fox Jumped Over The Lazy Dog"
```

### Explicación del Código

#### Función `toCapital`

```javascript
const toCapital = str => {
  const words = str.split(" ");
  return words.map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
};
```

- **`const toCapital = str => { ... }`**: Declara una función flecha llamada `toCapital` que toma una cadena `str` como argumento.
- **`const words = str.split(" ");`**: Divide la cadena `str` en un array de palabras usando el espacio como separador. `split(" ")` divide la cadena donde encuentra espacios y devuelve un array.
  - Por ejemplo, `"the quick brown fox"` se convierte en `["the", "quick", "brown", "fox"]`.
- **`words.map(word => word[0].toUpperCase() + word.slice(1))`**: Utiliza el método `map` para iterar sobre cada palabra en el array `words` y transforma la primera letra de cada palabra a mayúscula:
  - **`word[0].toUpperCase()`**: Convierte la primera letra de `word` a mayúscula.
  - **`word.slice(1)`**: Extrae el resto de la palabra a partir del segundo carácter.
  - **`word[0].toUpperCase() + word.slice(1)`**: Combina la primera letra en mayúscula con el resto de la palabra.
  - Por ejemplo, `"quick"` se convierte en `"Quick"`.
- **`.join(" ")`**: Une todas las palabras transformadas en un solo string, separadas por espacios.
  - Por ejemplo, `["The", "Quick", "Brown", "Fox"]` se convierte en `"The Quick Brown Fox"`.

#### Uso de la Función `toCapital`

```javascript
const shortStr = "Hi there";
console.log(toCapital(shortStr)); // "Hi There"

const longStr = "the quick brown fox jumped over the lazy dog";
console.log(toCapital(longStr)); // "The Quick Brown Fox Jumped Over The Lazy Dog"
```

- **`toCapital(shortStr)`**: Convierte `"Hi there"` a `"Hi There"`.
- **`toCapital(longStr)`**: Convierte `"the quick brown fox jumped over the lazy dog"` a `"The Quick Brown Fox Jumped Over The Lazy Dog"`.

Esta función es útil para formatear cadenas, especialmente para títulos o encabezados, donde se requiere que la primera letra de cada palabra esté en mayúscula.


# UML

## ¿Qué es UML?

`UML`, o `Lenguaje de Modelado Unificado` (Unified Modeling Language), es un estándar de la industria para visualizar, especificar, construir y documentar los artefactos de los sistemas de software. UML proporciona un conjunto de diagramas que permiten representar tanto la estructura estática como el comportamiento dinámico de un sistema.

### Historia y Evolución

UML fue creado en la década de 1990 por Grady Booch, Ivar Jacobson y James Rumbaugh en Rational Software (ahora parte de IBM), con el objetivo de unificar los métodos de modelado de software que existían en ese momento. En 1997, la versión 1.0 de UML fue adoptada por el Object Management Group (OMG), una organización que estandariza tecnologías orientadas a objetos.

## ¿Por qué es Importante Utilizar UML?

### 1. **Comunicación Clara**

UML proporciona un lenguaje común y estandarizado que facilita la comunicación entre los miembros del equipo de desarrollo, incluyendo desarrolladores, arquitectos, analistas y partes interesadas. Esto ayuda a asegurar que todos tengan una comprensión clara y compartida del sistema.

### 2. **Visualización del Sistema**

Los diagramas UML permiten visualizar la estructura y el comportamiento del sistema, lo que facilita la comprensión de cómo interactúan los diferentes componentes. Esto es crucial para identificar posibles problemas y áreas de mejora en las primeras etapas del desarrollo.

### 3. **Documentación Eficaz**

UML ayuda a crear una documentación detallada y precisa del sistema que puede ser utilizada durante todo el ciclo de vida del software. Esta documentación es valiosa no solo para el desarrollo inicial, sino también para el mantenimiento y la evolución del sistema.

### 4. **Mejora de la Calidad del Software**

Al utilizar UML, se puede realizar un diseño más riguroso y detallado, lo que lleva a una mejor calidad del software. Los diagramas ayudan a identificar errores y inconsistencias antes de que se conviertan en problemas mayores durante la implementación.

### 5. **Facilita el Desarrollo Ágil**

Aunque UML es tradicionalmente asociado con metodologías de desarrollo en cascada, también puede ser adaptado a entornos ágiles. Modelar ciertos aspectos del sistema con UML puede proporcionar una visión general que ayuda a planificar y coordinar sprints y releases.

### 6. **Soporte para Diversas Plataformas y Lenguajes**

UML no está vinculado a ningún lenguaje de programación específico o plataforma tecnológica. Esto lo hace versátil y aplicable en una amplia variedad de proyectos y tecnologías.

## Principales Diagramas de UML

UML incluye varios tipos de diagramas que se pueden agrupar en dos categorías principales:

### Diagramas Estructurales

- **Diagrama de Clases**: Muestra la estructura estática del sistema, incluyendo clases, atributos, métodos y relaciones entre las clases.
- **Diagrama de Objetos**: Representa instancias de clases en un momento específico.
- **Diagrama de Componentes**: Muestra la organización y dependencia entre componentes de software.
- **Diagrama de Despliegue**: Ilustra la disposición física de artefactos en nodos de hardware.

### Diagramas de Comportamiento

- **Diagrama de Casos de Uso**: Describe las interacciones entre los actores externos y el sistema.
- **Diagrama de Secuencia**: Muestra cómo los objetos interactúan en una secuencia temporal.
- **Diagrama de Colaboración**: Representa interacciones organizadas alrededor de la estructura.
- **Diagrama de Actividades**: Modela el flujo de actividades en un proceso.
- **Diagrama de Estados**: Describe los estados de un objeto y sus transiciones.

## Conclusión

UML es una herramienta poderosa para el diseño y la documentación de sistemas de software. Su capacidad para ofrecer una visión clara y compartida del sistema, junto con su flexibilidad para ser utilizado en diversos entornos de desarrollo, lo hace esencial para el desarrollo de software de alta calidad.

Para más información sobre UML, puedes consultar la [documentación oficial del OMG](https://www.omg.org/spec/UML/About-UML/).


# Introducción a Diagramas UML Avanzados

## Mapeo y Convención de Nomenclatura

Al trabajar con diagramas UML más avanzados, es esencial comprender y diferenciar los distintos tipos de diagramas a simple vista. Para facilitar esto, es útil tener una convención de nomenclatura estandarizada. Esto permite a los desarrolladores identificar rápidamente el tipo de diagrama y su contexto dentro del sistema.

### Importancia de los Marcos en UML

Los marcos son una característica importante en UML, ya que proporcionan contexto y claridad al encapsular los componentes de un diagrama. Esto es especialmente útil cuando se trabaja con múltiples modelos que pueden tener convenciones de nomenclatura similares. 

### Ejemplo: Diagrama de Casos de Uso

Consideremos un diagrama de casos de uso con el marco "UC SongRequest" en la parte superior izquierda. La etiqueta "UC" indica que es un diagrama de caso de uso, y "SongRequest" especifica el módulo correspondiente. Esto ayuda a los desarrolladores a identificar rápidamente el tipo de diagrama y su contexto en la aplicación.

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_uc_1.png)

### Beneficios de Utilizar Marcos

1. **Claridad en Grandes Sistemas**: Los marcos ayudan a los desarrolladores a comprender instantáneamente el contexto de un diagrama, lo cual es crucial en sistemas grandes y complejos.
2. **Estándar de Comunicación**: Una convención de nomenclatura estandarizada asegura que todos los miembros del equipo interpreten los diagramas de la misma manera.
3. **Encapsulación de Componentes**: Los marcos encapsulan componentes del diagrama, proporcionando una vista clara y organizada.

### Componentes UML Comunes: Marcos

#### ¿Qué son los Marcos?

Los marcos en UML ayudan a encapsular y proporcionar contexto a los componentes de un diagrama. Esto es beneficioso para:

- **Identificar el Tipo de Sistema**: Saber instantáneamente qué tipo de sistema representa el modelo.
- **Determinar el Tipo de Diagrama**: Reconocer de inmediato el tipo de diagrama que se está viendo.

#### Implementación de Marcos

Para implementar marcos de manera efectiva:

1. **Etiquetado Claro**: Utiliza etiquetas descriptivas y estandarizadas en los marcos.
2. **Consistencia**: Aplica una convención de nomenclatura consistente en todos los diagramas.

### Conclusión

Utilizar marcos en UML es crucial para proporcionar contexto y claridad en el diseño de sistemas complejos. Implementar una convención de nomenclatura estandarizada permite a los desarrolladores identificar rápidamente el tipo de diagrama y su contexto, mejorando la comunicación y la eficiencia del equipo de desarrollo.

Para más información sobre UML, puedes consultar la [documentación oficial del OMG](https://www.omg.org/spec/UML/About-UML/).

## Clasificadores de UML

En UML (Lenguaje de Modelado Unificado), los clasificadores son elementos que describen la estructura y el comportamiento de los conceptos dentro de un sistema. Los clasificadores pueden ser de varios tipos, cada uno con un propósito específico en el modelado del sistema. A continuación, te explico cada uno de ellos:

### Clase
- **Definición:** Una clase es un molde o plantilla que define la estructura y el comportamiento de un conjunto de objetos.
- **Características:** 
  - **Atributos:** Propiedades que describen el estado de la clase.
  - **Métodos:** Operaciones o funciones que definen el comportamiento de la clase.
- **Ejemplo:** `Persona` con atributos `nombre`, `edad` y métodos `hablar()`, `caminar()`.

### Interface
- **Definición:** Una interface define un contrato que otras clases deben cumplir, especificando un conjunto de métodos sin implementar su lógica.
- **Características:** 
  - **Métodos:** Solo se declaran sin implementación.
  - **Herencia:** Clases pueden implementar múltiples interfaces.
- **Ejemplo:** `Vehiculo` con métodos `arrancar()`, `detener()`.

### Asociación
- **Definición:** Una asociación es una relación entre dos o más clases que establece una conexión semántica entre ellas.
- **Características:** 
  - **Cardinalidad:** Define el número de instancias que pueden estar relacionadas.
  - **Navegabilidad:** Indica si es posible navegar desde una clase a la otra.
- **Ejemplo:** Relación entre `Profesor` y `Curso` donde un profesor puede enseñar múltiples cursos.

### Tipo de Dato
- **Definición:** Un tipo de dato es una clasificación de datos que determina los valores que una variable puede tomar y las operaciones que se pueden realizar sobre ellos.
- **Características:** 
  - **Primitivos:** Como `int`, `float`, `char`.
  - **Definidos por el Usuario:** Como `enum`, `struct`.
- **Ejemplo:** `int`, `String`.

### Actor
- **Definición:** Un actor es una entidad externa que interactúa con el sistema, generalmente una persona, organización o sistema externo.
- **Características:** 
  - **Externos al Sistema:** No forman parte del sistema pero interactúan con él.
- **Ejemplo:** `Usuario`, `Administrador`.

### Caso de Uso
- **Definición:** Un caso de uso es una descripción de cómo un actor utiliza el sistema para lograr un objetivo específico.
- **Características:** 
  - **Interacción:** Define una secuencia de acciones entre el actor y el sistema.
- **Ejemplo:** `Registrar Usuario`, `Comprar Producto`.

### Artefacto
- **Definición:** Un artefacto es un componente físico del sistema, que puede ser código fuente, documentos, bases de datos, etc.
- **Características:** 
  - **Tangible:** Representa elementos físicos.
- **Ejemplo:** Código fuente de un módulo, un manual de usuario.

### Componente
- **Definición:** Un componente es una parte modular del sistema que encapsula su contenido y define interfaces para interactuar con otros componentes.
- **Características:** 
  - **Encapsulación:** Ocultan su implementación interna.
  - **Interfaz:** Definen métodos para la comunicación con otros componentes.
- **Ejemplo:** `Módulo de Autenticación`, `Servicio de Pago`.

### Señal
- **Definición:** Una señal es un mensaje que se envía entre objetos para notificarles de algún evento.
- **Características:** 
  - **Asíncrona:** No requiere una respuesta inmediata.
  - **Eventos:** Usada para manejar eventos asíncronos.
- **Ejemplo:** `Alarma`, `Notificación de Mensaje`.

Estos elementos son fundamentales para el modelado de sistemas en UML, proporcionando una manera estructurada y comprensible de representar tanto la estructura estática como el comportamiento dinámico de un sistema.

## Comentarios o notas

Los comentarios o notas en UML (Lenguaje de Modelado Unificado) son anotaciones textuales que se agregan a los diagramas para proporcionar información adicional que no se puede expresar mediante los elementos gráficos estándar del lenguaje.

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_comments_2.png)

### Propósito

Los comentarios sirven para:

- **Explicar detalles adicionales:** Aclarar el propósito o el funcionamiento de ciertos elementos del modelo.
- **Proporcionar contexto:** Ofrecer información contextual que puede no ser evidente solo con el diagrama.
- **Anotar decisiones de diseño:** Registrar decisiones de diseño importantes y las razones detrás de ellas.
- **Documentar supuestos:** Listar supuestos o restricciones que se han considerado durante el modelado.
- **Facilitar la comprensión:** Ayudar a otros desarrolladores y partes interesadas a entender el modelo.

### Uso

Los comentarios en UML se suelen utilizar en varias situaciones:

1. **Explicación de elementos complejos:** Cuando un elemento del diagrama es complejo o tiene un comportamiento no trivial, se puede agregar una nota para explicarlo.
2. **Decisiones de diseño:** Para registrar decisiones de diseño importantes y las razones detrás de ellas, ayudando a futuros desarrolladores a entender por qué se tomaron ciertas decisiones.
3. **Documentación de supuestos y restricciones:** Para hacer explícitos los supuestos y restricciones que se han tenido en cuenta en el modelo.
4. **Anotaciones temporales:** Durante el desarrollo iterativo, para señalar áreas que requieren más trabajo o revisión.
5. **Información adicional:** Para agregar información que no cabe o no es apropiada en otros elementos del diagrama.

### Conclusión

Los comentarios son herramientas esenciales en UML para mejorar la claridad y comprensión de los diagramas, proporcionando contexto y explicaciones adicionales que facilitan la comunicación entre los miembros del equipo de desarrollo y otras partes interesadas. Utilizarlos adecuadamente puede marcar una gran diferencia en la efectividad y utilidad de los modelos UML.

### Dependencias en UML

En UML (Lenguaje de Modelado Unificado), una dependencia es una relación que indica que un elemento del modelo (el cliente) depende de otro elemento (el proveedor) para su especificación o implementación. Esto significa que un cambio en el proveedor puede afectar al cliente.

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_dependencias_3.png)

### Representación

Las dependencias en UML se representan mediante una línea discontinua con una flecha que apunta desde el elemento dependiente (cliente) hacia el elemento del cual depende (proveedor). La flecha señala el proveedor.

### Tipos Comunes de Dependencias (No lo ha explicado en el curso)
 
1. **Uso (Usage):** Indica que un elemento usa otro elemento. Es una dependencia general que sugiere que un elemento requiere la presencia de otro para su funcionamiento.
2. **Implementación (Realization):** Indica que una clase concreta implementa una interface.
3. **Paquete (Package):** Indica que un paquete depende de otro paquete.
4. **Trazabilidad (Trace):** Representa una relación histórica o evolución de un elemento a otro.
5. **Refinamiento (Refinement):** Indica que un elemento es una versión refinada de otro elemento.
6. **Despliegue (Deployment):** Muestra la relación entre un artefacto de implementación y el nodo en el que está desplegado.


#### Propósito y Necesidad de las Dependencias

1. **Mostrar Relaciones entre Elementos:**
   - Las dependencias ayudan a visualizar y entender cómo los elementos del sistema interactúan entre sí y cómo se afectan mutuamente.

2. **Documentar el Impacto de los Cambios:**
   - Al mostrar dependencias, se puede prever el impacto de los cambios en un elemento sobre otros elementos dependientes, facilitando la gestión de cambios y el mantenimiento del sistema.

3. **Gestionar Complejidad:**
   - En sistemas grandes y complejos, las dependencias ayudan a gestionar la complejidad, proporcionando una visión clara de las interrelaciones entre componentes.

4. **Mejorar la Comunicación:**
   - Facilitan la comunicación entre los miembros del equipo de desarrollo al proporcionar una representación visual de cómo los elementos del sistema se relacionan.


### Conclusión

Las dependencias en UML son fundamentales para representar las relaciones de uso y dependencia entre los elementos de un sistema. Ayudan a entender cómo los cambios en un elemento pueden afectar a otros, gestionar la complejidad del sistema, y mejorar la comunicación dentro del equipo de desarrollo. Representarlas adecuadamente en los diagramas UML es esencial para un diseño claro y mantenible.

### Funciones y Propiedades de una Clase en UML

#### Definición

En UML (Lenguaje de Modelado Unificado), las clases son elementos que describen un conjunto de objetos con características y comportamientos similares. Estas características y comportamientos se representan mediante **propiedades** (también conocidas como atributos) y **funciones** (también conocidas como métodos o operaciones).


## Funciones (Métodos u Operaciones)

- **Definición:** Las funciones de una clase son comportamientos que definen las acciones que los objetos de esa clase pueden realizar. Son operaciones que pueden modificar el estado de las propiedades o realizar cálculos.
- **Representación en UML:**
  - Se listan en el compartimento inferior de la clase en el diagrama de clases.
  - La notación típica incluye la **visibilidad** (privada, pública, protegida), el **nombre de la operación**, y los **parámetros** y su **tipo de retorno**.

**Ejemplo:**

```plaintext
+---------------------+
|      Persona        |
+---------------------+
| - nombre: String    |
| - edad: int         |
| - direccion: String |
+---------------------+
| + hablar(): void    |
| + caminar(): void   |
+---------------------+
```
En este ejemplo:

- `hablar` y `caminar` son funciones de la clase `Persona`.
- `+` indica que las funciones son públicas.
- `void` indica que estas funciones no retornan ningún valor.

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_propiedades_y_funciones_4.png)

#### Propósito y Uso (En el curso solo habla del punto 1)

1. **Convención de nomenclatura**
   - La convención de nomenclatura debe ser lo más universal y sencilla posible; UML puede ayudarnos a lograrlo. Tener una forma estricta de seguir los nombres de sus características y propiedades es una excelente manera de hacerlo. 

2. **Describir el Estado de un Objeto:**
   - Las propiedades permiten definir y mantener el estado interno de un objeto.
   - Ejemplo: `nombre` y `edad` en una clase `Persona` describen quién es la persona y cuántos años tiene.

3. **Definir el Comportamiento de un Objeto:**
   - Las funciones permiten definir cómo un objeto interactúa con otros objetos o cómo cambia su propio estado.
   - Ejemplo: `hablar` y `caminar` en una clase `Persona` describen acciones que una persona puede realizar.

4. **Encapsulación:**
   - Utilizar propiedades y funciones permite ocultar el estado interno de un objeto y exponer solo lo necesario, promoviendo la encapsulación.
   - Ejemplo: Las propiedades pueden ser privadas (`-`), accesibles solo a través de funciones públicas (`+`).

5. **Interacción entre Objetos:**
   - Las funciones definen cómo los objetos de diferentes clases interactúan entre sí.
   - Ejemplo: Una función `transferirDinero` en una clase `CuentaBancaria` puede interactuar con otra instancia de `CuentaBancaria`.
  

#### Notación UML para Propiedades y Funciones (No habla en el curso pero si aparece en la imagen)

1. **Visibilidad:**
   - `+` (público): Accesible desde cualquier lugar.
   - `#` (protegido): Accesible desde la clase y sus subclases.
   - `-` (privado): Accesible solo desde la propia clase.
   - `~` (paquete): Accesible solo desde el mismo paquete.


### Conclusión

En UML, las propiedades y funciones de una clase son fundamentales para definir el estado y el comportamiento de los objetos que pertenecen a esa clase. Las propiedades almacenan datos relevantes, mientras que las funciones describen las acciones que los objetos pueden realizar. Juntas, estas características permiten modelar objetos de manera precisa y promover principios de encapsulación y modularidad en el diseño de sistemas.

## Diagramas Estructurales en UML

Los diagramas estructurales en UML son herramientas visuales que se utilizan para representar la estructura estática de un sistema, mostrando cómo se componen sus diferentes elementos y cómo se relacionan entre sí. Aquí tienes explicaciones para tres tipos de diagramas estructurales comunes en UML:

### Diagrama de Clases

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_propiedades_y_funciones_4.png)

- **Definición:** Un diagrama de clases muestra la estructura estática de un sistema al representar las clases del sistema, sus atributos, métodos y las relaciones entre ellas.
- **Propósito:**
  - Modelar la estructura de objetos en el sistema.
  - Mostrar las relaciones estáticas entre las clases.
  - Identificar las características de las clases y sus interacciones.
- **Elementos Principales:**
  - Clases: Representan entidades o conceptos en el sistema.
  - Atributos: Características o datos asociados a las clases.
  - Métodos: Comportamientos o funciones que las clases pueden realizar.
  - Relaciones: Como asociaciones, herencia, dependencias, entre otras.
- **Ejemplo de Uso:** 
  - Un diagrama de clases para un sistema de gestión de biblioteca mostraría las clases como Libro, Usuario, Bibliotecario, con sus atributos y métodos, y las relaciones entre ellas.

### Diagrama de Despliegue

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama%20despliegue_5.png)

- **Definición:** Un diagrama de despliegue muestra cómo los artefactos de software (como archivos ejecutables, bibliotecas, archivos de configuración) se despliegan en la infraestructura de hardware, incluyendo los nodos de hardware y las conexiones de red.
- **Propósito:**
  - Visualizar la arquitectura física del sistema.
  - Mostrar cómo se distribuyen los componentes de software en los nodos de hardware.
  - Representar la topología de red utilizada por el sistema.
- **Elementos Principales:**
  - Artefactos: Representaciones físicas de los componentes de software que se despliegan en los nodos.
  - Nodos: Equipos de hardware o entornos de ejecución donde se despliegan los artefactos.
  - Conexiones: Representan las comunicaciones entre los nodos.
- **Ejemplo de Uso:** 
  - Un diagrama de despliegue para una aplicación web mostraría los servidores web, bases de datos y otros nodos de hardware, junto con los artefactos de software (por ejemplo, archivos WAR) y las conexiones entre ellos.

### Diagrama de Paquetes

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama_paquetes_6.png)

- **Definición:** Un diagrama de paquetes organiza los elementos del modelo en grupos lógicos o paquetes, lo que ayuda a gestionar la complejidad y a mejorar la modularidad del sistema.
- **Propósito:**
  - Organizar y estructurar el modelo en grupos coherentes.
  - Mostrar la relación y dependencia entre diferentes partes del sistema.
  - Facilitar la gestión y navegación dentro del modelo.
- **Elementos Principales:**
  - Paquetes: Contenedores lógicos que agrupan elementos relacionados.
  - Elementos: Clases, interfaces, y otros elementos del modelo contenidos en los paquetes.
  - Relaciones: Como dependencias entre paquetes, asociaciones entre elementos, etc.
- **Ejemplo de Uso:** 
  - Un diagrama de paquetes para un sistema de comercio electrónico puede tener paquetes como "Carrito de Compras", "Gestión de Usuarios", "Gestión de Pedidos", cada uno conteniendo clases e interfaces relacionadas.

### Conclusión

Los diagramas estructurales en UML son valiosas herramientas de modelado que ayudan a entender y comunicar la estructura estática de un sistema. Los diagramas de clases, despliegue y paquetes ofrecen diferentes perspectivas para visualizar y organizar los elementos del sistema, lo que facilita el diseño, la comprensión y el análisis del sistema en su conjunto.

Por supuesto, aquí tienes explicaciones para los cuatro tipos de diagramas conductuales comunes en UML:

### Diagrama de Actividad

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama_actividad_7.png)

- **Definición:** Un diagrama de actividad modela el flujo de control desde el inicio hasta la finalización de una actividad o proceso, mostrando el flujo de trabajo o el comportamiento de un sistema.
- **Propósito:**
  - Modelar los pasos de un proceso o algoritmo.
  - Visualizar el flujo de control entre diferentes actividades.
  - Representar la lógica y el comportamiento del sistema.
- **Elementos Principales:**
  - Actividades: Representan acciones o pasos en el flujo de control.
  - Transiciones: Flechas que muestran el flujo de control entre las actividades.
  - Decisión: Nodo que permite tomar decisiones basadas en condiciones.
- **Ejemplo de Uso:** 
  - Un diagrama de actividad para un proceso de compra en línea mostraría actividades como "Agregar al carrito", "Iniciar sesión", "Seleccionar método de pago", con transiciones que indican el flujo de control entre ellas.

### Diagrama de Casos de Uso

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama_casos_usos_8.png)

- **Definición:** Un diagrama de casos de uso representa la interacción entre los usuarios (actores) y el sistema, mostrando los diferentes casos de uso y cómo los usuarios interactúan con el sistema para lograr objetivos.
- **Propósito:**
  - Identificar los requisitos funcionales del sistema desde la perspectiva del usuario.
  - Visualizar cómo los usuarios interactúan con el sistema para realizar tareas específicas.
  - Establecer los límites y alcance del sistema.
- **Elementos Principales:**
  - Actores: Representan roles externos que interactúan con el sistema.
  - Casos de Uso: Representan las funcionalidades que el sistema proporciona a los usuarios.
  - Relaciones: Como asociaciones entre actores y casos de uso.
- **Ejemplo de Uso:** 
  - Un diagrama de casos de uso para un sistema de gestión de biblioteca mostraría casos de uso como "Buscar libro", "Prestar libro", con actores como "Bibliotecario" y "Usuario".

### Diagrama de Máquina de Estados

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama_estado_maquina_9.png)

- **Definición:** Un diagrama de máquina de estados modela el comportamiento de un sistema mostrando los diferentes estados que puede tener un objeto y las transiciones entre estos estados en respuesta a eventos.
- **Propósito:**
  - Representar el comportamiento dinámico de un objeto o sistema.
  - Mostrar cómo un objeto cambia de estado en respuesta a eventos.
  - Identificar y modelar los diferentes estados que pueden ocurrir en el sistema.
- **Elementos Principales:**
  - Estados: Representan las condiciones o situaciones en las que un objeto puede existir.
  - Transiciones: Flechas que muestran los cambios de estado en respuesta a eventos.
  - Eventos: Estímulos que desencadenan transiciones entre estados.
- **Ejemplo de Uso:** 
  - Un diagrama de máquina de estados para una puerta automática mostraría estados como "Abierta", "Cerrada", con transiciones como "Abrir" y "Cerrar" en respuesta a eventos como "Sensor de presencia detectado".

### Diagrama de Secuencia

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_diagrama_secuencias_10.png)

- **Definición:** Un diagrama de secuencia muestra cómo los objetos interactúan entre sí en una secuencia temporal, representando la interacción entre objetos a lo largo del tiempo.
- **Propósito:**
  - Modelar el flujo de mensajes entre objetos en una interacción específica.
  - Visualizar la secuencia de eventos en un escenario particular.
  - Representar la colaboración entre objetos para lograr un objetivo.
- **Elementos Principales:**
  - Objetos: Instancias de clases que participan en la interacción.
  - Mensajes: Flechas que representan la comunicación entre los objetos.
  - Activación: Representa el período de tiempo durante el cual un objeto está activo.
- **Ejemplo de Uso:** 
  - Un diagrama de secuencia para un proceso de reserva de hotel mostraría interacciones entre objetos como "Cliente", "Recepcionista" y "Sistema de Reservas", con mensajes que indican la secuencia de acciones durante la reserva.

### Conclusión

Los diagramas conductuales en UML son herramientas poderosas para modelar el comportamiento dinámico de un sistema. Cada tipo de diagrama tiene su propio propósito y se utiliza para representar diferentes aspectos del comportamiento del sistema, desde el flujo de trabajo y la interacción del usuario hasta el cambio de estado de los objetos y la secuencia de mensajes entre ellos.

En UML, una asociación es una relación entre dos clases que indica cómo se relacionan entre sí los objetos de esas clases. Esta relación puede ser simple, como una conexión directa entre dos clases, o puede ser más compleja, con multiplicidades que indican cuántos objetos de una clase pueden estar relacionados con cuántos objetos de la otra clase.

## Asociación:

![Ejemplo diagrama caso uso marco uc](/images/uml/uml_asociacion_11.png)

- **Definición:** Una asociación representa una conexión semántica y estructural entre dos o más clases. Puede denotar una relación entre instancias de las clases involucradas, donde una instancia de una clase puede estar relacionada con una o más instancias de la otra clase.

- **Significado de las Multiplicidades:**
  - **0..***: Indica que un objeto de una clase puede tener cero o más relaciones con objetos de la otra clase. Por ejemplo, si una clase "Estudiante" tiene una asociación con una clase "Curso" con una multiplicidad de "0..*", significa que un estudiante puede estar matriculado en cero o más cursos.
  
  - **1**: Indica que un objeto de una clase tiene exactamente una relación con un objeto de la otra clase. Por ejemplo, si una clase "Persona" tiene una asociación con una clase "Teléfono" con una multiplicidad de "1", significa que una persona tiene exactamente un teléfono asociado.
  
  - **1..***: Indica que un objeto de una clase tiene al menos una relación con objetos de la otra clase, pero puede tener más. Por ejemplo, si una clase "Departamento" tiene una asociación con una clase "Empleado" con una multiplicidad de "1..*", significa que un departamento tiene al menos un empleado asociado, pero puede tener más de uno.

Estas multiplicidades proporcionan información sobre la cardinalidad de la relación entre las clases involucradas, es decir, cuántos objetos de una clase pueden estar asociados con cuántos objetos de la otra clase.

### Conclusión:
En resumen, una asociación en UML representa una conexión semántica entre clases, y las multiplicidades indican la cantidad de objetos de una clase que pueden estar relacionados con la otra clase. Las multiplicidades como "0..*", "1" y "1..*" describen la cardinalidad de la relación entre las clases involucradas, proporcionando información valiosa sobre la estructura y el comportamiento del sistema modelado.

Claro, aquí tienes una explicación detallada sobre el diagrama de actividad y sus elementos en formato markdown:

---

# Diagrama de Actividad

Un diagrama de actividad es un tipo de diagrama de comportamiento en UML (Lenguaje Unificado de Modelado) que representa el flujo de trabajo de un proceso o un sistema. Los diagramas de actividad son útiles para modelar el comportamiento dinámico del sistema y describir las actividades, las decisiones y el flujo de control entre ellas.

## Elementos del Diagrama de Actividad

### Estado Inicial o Punto de Inicio

- **Descripción:** Representa el comienzo del flujo de actividades.
- **Símbolo:** Un círculo sólido pequeño.
  
![Ejemplo diagrama de actividad estado inicial](/images/uml/uml_diagrama_actividad_1.png)

### Actividad o Estado de Acción

- **Descripción:** Una acción o una tarea que se lleva a cabo.
- **Símbolo:** Un rectángulo con bordes redondeados.
  
![Ejemplo diagrama de actividad estado de acción](/images/uml/uml_diagrama_actividad_2.png)

### Flujo de Acción

- **Descripción:** Indica la transición de una actividad a otra.
- **Símbolo:** Una flecha que conecta dos actividades.
  
![Ejemplo diagrama de actividad flujo de acción](/images/uml/uml_diagrama_actividad_3.png)

### Decisiones y Ramas

- **Descripción:** Representa un punto donde el flujo puede divergir en múltiples caminos.
- **Símbolo:** Un rombo.
  
![Ejemplo diagrama de actividad decisiones](/images/uml/uml_diagrama_actividad_4.png)

### Guardias

- **Descripción:** Condiciones que deben cumplirse para seguir un flujo de acción particular.
- **Símbolo:** Texto entre corchetes `[condición]` junto a una flecha de flujo de acción.
  
![Ejemplo diagrama de actividad guardias](/images/uml/uml_diagrama_actividad_5.png)

### Estado Final o Punto de Finalización

- **Descripción:** Representa el final del flujo de actividades.
- **Símbolo:** Un círculo con un borde grueso y un círculo sólido en su interior.
  
![Ejemplo diagrama de actividad estado final](/images/uml/uml_diagrama_actividad_6.png)

### Carriles de Nado (Swimlanes)

- **Descripción:** Dividen el diagrama en secciones que asignan responsabilidades a diferentes actores o unidades organizacionales.
- **Símbolo:** Líneas paralelas verticales u horizontales que dividen el diagrama.
  
![Ejemplo diagrama de actividad estado de acción](/images/uml/uml_diagrama_actividad_8.png)

Esta sería la imagen de como quedaría un diagrama de actividad:

![Ejemplo diagrama de actividad completo](/images/uml/uml_diagrama_actividad_9.png)