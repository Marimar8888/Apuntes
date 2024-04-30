# SCSS

SCSS se utiliza para mejorar procesos y organizar mejor el código. Permite la reutilización del código y la creación de variables, lo que facilita el mantenimiento del código.

El uso del guión bajo al principio del nombre de archivo, como en el ejemplo siguiente _variables.scss, es una convención común en SCSS/Sass para indicar que el archivo es un "partial" o archivo parcial. Los archivos parciales en SCSS/Sass son aquellos que no se compilan directamente a archivos CSS, sino que se utilizan para organizar y modularizar el código.

* Aquí hay algunas razones por las que se usa el guión bajo:

- __Convención__: Es una convención común en SCSS/Sass y ayuda a distinguir fácilmente los archivos parciales de los archivos principales que se compilan directamente a CSS.
- __Evitar la compilación directa:__ Los archivos parciales no se compilan directamente a CSS, por lo que el guión bajo ayuda a prevenir que se generen archivos CSS no deseados si se compilan por error.
- __Orden en la importación:__ Cuando importas archivos SCSS/Sass en otros archivos, el guión bajo al inicio del nombre del archivo indica que es un archivo parcial y generalmente se importa antes que otros archivos.


Correcto, al importar un archivo parcial en SCSS/Sass, no es necesario incluir el guión bajo al principio del nombre del archivo. Cuando importas un archivo parcial, simplemente especificas el nombre del archivo sin el guión bajo, y con el @import por delante. 

Ejemplo de código para uso de variables:

## Variables

1. Definición de Variables:

```
    // _variables.scss
    // Definimos algunas variables

    $color-primario: #007bff;
    $color-secundario: #28a745;
    $padding-botones: 10px 20px;
    $font-titulo: 'Arial', sans-serif;
```

2. Implementación de Variables:

```
    // Utilizamos las variables en nuestro código
    // estilos.scss

    // Importamos el archivo de variables
    @import 'variables';

    .caja {
        background-color: $color-primario;
        padding: $padding-botones;
    }

    .titulo {
        font-family: $font-titulo;
        color: $color-secundario;
    }

```

3. Resultado:

Cuando este código SCSS se compile a CSS, obtendremos algo similar a esto:

```
    /* Resultado CSS */
    .caja {
        background-color: #007bff;
        padding: 10px 20px;
    }

    .titulo {
        font-family: 'Arial', sans-serif;
        color: #28a745;
    }

```
## @mixin

Un `@mixin` es un bloque de código reutilizable en SCSS. Funciona de manera similar a una función en programación, permitiendo definir conjuntos de estilos reutilizables que pueden recibir variables. Para utilizar un `@mixin`, se emplea la directiva `@include` seguida del nombre del `@mixin`. Al compilar, se genera código CSS que los navegadores pueden entender.

1. Creación del Mixin:

```
    // Definimos nuestro mixin llamado "boton-redondeado"

    // _mixins.scss

    @mixin boton-redondeado($radio) {
    border-radius: $radio;
    padding: 10px 20px;
    font-size: 16px;
    text-transform: uppercase;
    }

    // Otros mixins aquí...
```
2. Implementación del Mixin:
   
```
    // Importante: Esta es la parte de tu archivo SCSS donde vas a usar el mixin.

    // Usamos nuestro mixin para estilizar un botón
    .boton-azul {
    @include boton-redondeado(5px); // Llamamos al mixin con un radio de 5px
    background-color: blue;
    color: white;
    border: none;
    }

    .boton-verde {
    @include boton-redondeado(8px); // Llamamos al mixin con un radio de 8px
    background-color: green;
    color: white;
    border: none;
    }
```
### Diferencias entre CSS y SCSS

1. **Sintaxis:** CSS es más simple y plana, mientras que SCSS tiene una sintaxis más compleja con anidamiento de código de forma estructurada.
   
2. **Variables:** CSS no admite variables, pero SCSS sí, lo que facilita la actualización de estilos en varios lugares a la vez.

3. **Mixins:** CSS no tiene mixins, pero SCSS permite definirlos. Funcionan como conjuntos de estilos reutilizables, similares a funciones en programación, y pueden recibir argumentos.

4. **Herencia:** CSS no admite herencia, pero SCSS sí, a través de la directiva `@extend`.

Un ejemplo de como heredar:

#### Definición del estilo base:

```
    // Definimos un estilo base para todos los botones
    .boton-base {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        text-transform: uppercase;
        cursor: pointer;
    }

```

#### Implementación de estilos específicos:

Para crear estilos para botones de diferentes colores, que heredarán las propiedades del estilo base.

```
    // Estilo para botón azul
    .boton-azul {
        @extend .boton-base; // Heredamos las propiedades del estilo base
        background-color: blue;
        color: white;
    }

    // Estilo para botón verde
    .boton-verde {
        @extend .boton-base; // Heredamos las propiedades del estilo base
        background-color: green;
        color: white;
    }

```

#### Resultado:

Cuando este código SCSS se compile a CSS, obtendremos lo siguiente:

```
    /* Resultado CSS */
    .boton-base,
    .boton-azul,
    .boton-verde {
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        text-transform: uppercase;
    }

    .boton-azul {
        background-color: blue;
        color: white;
    }

    .boton-verde {
        background-color: green;
        color: white;
    }

```

5. **Compatibilidad:** CSS es interpretado directamente por los navegadores, mientras que SCSS debe ser compilado a CSS antes de ser interpretado.

### Diferencias entre SASS y SCSS

1. **SASS:** Es la versión original, que tenía en cuenta la sangría y los espacios, dando errores si no estaban bien definidos. En SASS, la sintaxis es más estricta en cuanto a la indentación y los espacios. No utiliza llaves ({}) ni puntos y comas (;). En su lugar, utiliza sangrías para definir la estructura del código.

```
    // Ejemplo de código en SASS
    // Definición de un mixin para estilizar botones
    =boton-redondeado($radio)
        border-radius: $radio
        padding: 10px 20px
        font-size: 16px
        text-transform: uppercase

    // Implementación del mixin en un botón
    .boton-azul
        +boton-redondeado(5px) // Llamamos al mixin con un radio de 5px
        background-color: blue
        color: white
        border: none

    .boton-verde
        +boton-redondeado(8px) // Llamamos al mixin con un radio de 8px
        background-color: green
        color: white
        border: none
```

2. **SCSS:** Es más utilizado debido a su familiaridad. La sintaxis es más similar a la de CSS. Utiliza llaves ({}) y puntos y comas (;) para definir la estructura del código, lo que lo hace más familiar para aquellos que ya están acostumbrados a CSS., lo que reduce los errores.

```
    // Ejemplo de código en SCSS
    // Definición de un mixin para estilizar botones
    @mixin boton-redondeado($radio) {
    border-radius: $radio;
    padding: 10px 20px;
    font-size: 16px;
    text-transform: uppercase;
    }

    // Implementación del mixin en un botón
    .boton-azul {
    @include boton-redondeado(5px); // Llamamos al mixin con un radio de 5px
    background-color: blue;
    color: white;
    border: none;
    }

    .boton-verde {
    @include boton-redondeado(8px); // Llamamos al mixin con un radio de 8px
    background-color: green;
    color: white;
    border: none;
    }

```


