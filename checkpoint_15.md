# Depuración en React

1. **Uso del depurador**:
   - Sustituir `console.log` por `debugger` en el código.
   - El navegador pausa la ejecución en el punto del `debugger`, permitiendo examinar los datos.

2. **Ventajas del depurador sobre `console.log`**:
   - Posibilidad de ejecutar scripts y tareas directamente en el navegador.
   - Congela el proceso, permitiendo ejecutar funciones y construir ecuaciones.

3. **Interacción con el depurador en Chrome**:
   - Guardar cambios y actualizar Chrome para ver el efecto.
   - La pantalla se pone gris y muestra "pausado en el depurador" indicando el punto exacto de la pausa.

4. **Uso de la consola mientras el depurador está activo**:
   - Acceso a variables en el contexto actual del depurador.
   - Ejemplo: Acceder a datos de un elemento de la API, como `item.banner` para la URL de la imagen.
   - Posibilidad de avanzar al siguiente elemento con el botón "reanudar" y repetir el proceso.

5. **Limitaciones del depurador**:
   - No permite acceso al estado de los componentes ni manipulación directa del estado (`this.state`).

6. **Instalación de React Developer Tools**:
   - Buscar e instalar la extensión de Chrome.
   - Reiniciar el navegador para activar la extensión.

7. **Uso de React Developer Tools**:
   - Abrir la aplicación React y acceder a la pestaña "React" en las herramientas de desarrollo.
   - Proporciona visibilidad específica de React: props, estado, componentes secundarios y principales, árbol de componentes.

8. **Inspección y manipulación de datos**:
   - Usar el inspector para seleccionar y ver componentes específicos.
   - Posibilidad de modificar el estado y ver los cambios reflejados en la aplicación.

9. **Diferencias entre depurador y React Developer Tools**:
   - El depurador accede a objetos de elementos específicos, similar a pasar objetos como props.
   - React Developer Tools proporciona visibilidad directa del componente React y su estado, sin necesidad de iteradores de mapa.

10. **Acceso y modificación de props y estado**:
   - Explorar y modificar datos del estado y props directamente en el inspector.
   - Ver y manipular datos como imágenes, descripciones, identificadores y categorías integradas en el estado.

11. **Importancia de la comprensión de herramientas**:
   - Facilita el acceso y visualización de datos.
   - Incrementa la confianza en la manipulación y renderización de datos en React.

12. **Uso del depurador para identificar datos**:
   - Insertar `debugger` en el código para pausar la ejecución.
   - Utilizar `Object.keys` en la consola para obtener las claves del objeto de datos.

13. **Identificación de las claves de datos**:
   - `id` para el identificador.
   - `description` para la descripción.
   - `thumb_image_url` para la imagen de fondo.
   - Otros datos como `url`, `category` y `position` no se necesitan de inmediato.

## Ejemplo con portfolio

1. **Objetivo**:
   - Limpiar el componente de elementos de cartera siguiendo las mejores prácticas de React.
   - Hacer el componente más manejable y fácil de ampliar.

2. **Paso de propiedades en React**:
   - Originalmente, el componente `PortfolioItem` tenía propiedades directas como `key`, `title`, `url` y `slug`.
   - Cambio a pasar el objeto completo `item` en lugar de múltiples propiedades individuales.

3. **Implementación del cambio**:
   - En `portfolio-container.js`, cambiar el mapeo de datos para pasar el objeto `item` completo.
   - Código antes:
     ```jsx
     return (
         <PortfolioItem 
            key={item.id} 
            title={item.title} 
            url={item.url} 
            slug={item.slug} 
         />
     );
     ```
   - Código después:
     ```jsx
     return (
         <PortfolioItem 
            key={item.id} 
            item={item} 
         />
     );
     ```

4. **Uso de desestructuración en JavaScript**:
   - Desestructurar el objeto `item` dentro del componente `PortfolioItem`.
   - Crear una variable `const` para desestructurar y extraer las claves necesarias (`id`, `description`, `thumb_image_url`, `logo`).

5. **Ejemplo de desestructuración**:
   - Desestructuración dentro del componente:
     ```jsx
     const { id, description, thumb_image_url, logo } = props.item;
     ```
   - Uso de las variables desestructuradas:
     ```jsx
     <div>{description}</div>
     <img src={thumb_image_url} alt="background" />
     <img src={logo} alt="logo" />
     ```

6. **Resultados y validación**:
   - Confirmar que los cambios funcionan correctamente en Google Chrome.
   - Verificar que el enlace y la descripción se muestran correctamente y que la aplicación no se ha roto.

7. **Beneficios de la limpieza del código**:
   - Reducción de llamadas a propiedades individuales en `PortfolioItem`.
   - Simplificación del código al pasar el objeto `item` completo.
   - Mayor facilidad para manejar y ampliar el componente en el futuro.

En resumen, este proceso ilustra cómo mejorar la estructura y legibilidad del código React mediante la desestructuración y la simplificación de la forma en que se pasan las propiedades a los componentes.

### Resumen de la quinta transcripción sobre depuración en React

1. **Objetivo**:
   - Incorporar imágenes y logotipos en el componente `PortfolioItem`.
   - Preparar los elementos necesarios antes de pasar a la sección de diseño.

2. **Contexto**:
   - El componente `PortfolioItem` ya tiene acceso a los datos necesarios: descripción, ID, imagen de fondo (`thumb_image_url`) y logotipo.
   - La próxima sección se enfocará en mejorar el diseño visual.

3. **Ventajas de agregar comentarios**:
   - Los comentarios ayudan a mantener el enfoque y la dirección del desarrollo, especialmente si se interrumpe el trabajo y se retoma más tarde.
   - Permiten entender rápidamente qué elementos y datos son necesarios para la funcionalidad.

4. **Incorporación de la imagen y el logotipo**:
   - Añadir las etiquetas de imagen (`img`) dentro del componente `PortfolioItem`.
   - Código para incluir la imagen de fondo (`thumb_image_url`) y el logotipo:
     ```jsx
     <img src={thumb_image_url} alt="Background Image" />
     <img src={logo} alt="Logo" />
     ```

5. **Verificación y ajuste**:
   - Guardar los cambios y verificar en el navegador si las imágenes se cargan correctamente.
   - Reconocer que el logotipo puede ser difícil de ver si es de color blanco, por lo que puede ser necesario inspeccionar el elemento.

6. **Resultados**:
   - Las imágenes se muestran correctamente en la aplicación, aunque sin estilo por el momento.
   - Esto indica que los datos se están cargando correctamente y que el componente está listo para el siguiente paso de diseño.

7. **Reflexión sobre el proceso**:
   - Añadir imágenes desde una API a la aplicación es un logro significativo que permite crear aplicaciones dinámicas y funcionales.
   - El siguiente paso será implementar el diseño para mejorar la apariencia de la aplicación.

## Introducción a la implementación de estilos en una aplicación React

### Flexibilidad en los estilos de React

React ofrece varias formas de agregar estilos a tu aplicación, lo que puede ser confuso debido a la diversidad de enfoques. No hay una única "mejor" manera, sino diferentes métodos que pueden ser más adecuados según el contexto y las preferencias del desarrollador. Aquí, utilizaremos una metodología sencilla y organizada para implementar los estilos.

### Estructura del archivo de estilos

Vamos a estructurar nuestros estilos de manera que sean fáciles de mantener y escalar. La idea principal es tener un archivo principal de estilos (`main.scss`) que importe otros archivos de estilos específicos. Este enfoque facilita la gestión de estilos, especialmente en aplicaciones grandes.

### Paso a paso para organizar los estilos

1. **Crear y organizar archivos SCSS**:
   - Dentro del directorio `src`, crea un subdirectorio `styles` si no existe.
   - Dentro de `styles`, crea un archivo `main.scss`. Este archivo actuará como punto de entrada para todos los estilos.
   - Crea otro archivo `base.scss` en el mismo directorio. Este archivo contendrá los estilos base.

2. **Mover estilos existentes**:
   - Mueve los estilos actuales de `main.scss` a `base.scss`. Esto puede incluir estilos globales como fuentes, márgenes, etc.

3. **Importar estilos en `main.scss`**:
   - En `main.scss`, importa el archivo `base.scss`:
     ```scss
     @import "./base.scss";
     ```

4. **Verificar que los estilos funcionan**:
   - Guarda los cambios y recarga tu aplicación en el navegador para asegurarte de que los estilos se aplican correctamente.

### Ejemplo práctico

1. **Mover estilos a `base.scss`**:
   - Supongamos que `main.scss` tiene los siguientes estilos iniciales:
     ```scss
     body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
     }

     .app {
       text-align: center;
     }
     ```
   - Mueve estos estilos a `base.scss`:
     ```scss
     // base.scss
     body {
       font-family: Arial, sans-serif;
       margin: 0;
       padding: 0;
     }

     .app {
       text-align: center;
     }
     ```

2. **Actualizar `main.scss`**:
   - Haz que `main.scss` importe `base.scss`:
     ```scss
     // main.scss
     @import "./base.scss";
     ```

3. **Verificar en el navegador**:
   - Asegúrate de que los estilos se siguen aplicando correctamente recargando la aplicación en el navegador.

### Organización de estilos futuros

1. **Agregar nuevos estilos**:
   - A medida que desarrollas nuevas funcionalidades, crea archivos SCSS específicos para cada característica y organízalos lógicamente.
   - Por ejemplo, si tienes un componente de "elementos de cartera", crea un archivo `portfolio.scss`:
     ```scss
     // portfolio.scss
     .portfolio-item {
       // estilos específicos para el elemento de cartera
     }
     ```

2. **Importar nuevos estilos en `main.scss`**:
   - Actualiza `main.scss` para importar estos nuevos estilos:
     ```scss
     @import "./base.scss";
     @import "./portfolio.scss";
     ```
## Importar una fuente

Para importar una fuente de Google Fonts a tu proyecto, sigue estos pasos:

1. **Visita el sitio web de Google Fonts**:
   - Ve a [Google Fonts](https://fonts.google.com/).

2. **Selecciona la fuente que deseas utilizar**:
   - Navega o busca la fuente que quieres. Puedes usar la barra de búsqueda o explorar las categorías disponibles.

3. **Personaliza la fuente**:
   - Una vez que hayas seleccionado una fuente, haz clic en ella para ver más detalles.
   - Ajusta los estilos (por ejemplo, regular, bold, italic) que necesitas.

4. **Obtén el enlace de importación**:
   - Después de seleccionar los estilos deseados, haz clic en el ícono "+" que suele aparecer al lado de la fuente.
   - Se abrirá un panel en la parte inferior de la página con la fuente seleccionada.
   - En este panel, verás un código de ejemplo. 

5. **Copia el enlace**:
   - Dentro del panel, encontrarás una sección titulada "Embed" o "Integrar".
   - Selecciona la pestaña "Link" para obtener el enlace HTML, o "Import" para obtener el código CSS.
   - Copia el código proporcionado.

Aquí tienes un ejemplo de cómo se vería el enlace en HTML y el código CSS:

### Enlace en HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### Código CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
```

### Uso en CSS:
Después de importar la fuente, puedes utilizarla en tu CSS de la siguiente manera:
```css
body {
  font-family: 'Roboto', sans-serif;
}
```

## Variables SCSS

### Paso 1: Crear y Definir Variables 

1. **Crear el archivo `variables.scss`**:
   - Dentro de la carpeta `styles`, crea un archivo llamado `variables.scss`.

2. **Definir las variables de color** en `variables.scss`:

   ```scss
   // src/styles/variables.scss
   $teal: #008080;
   $dark-teal: #006666;
   $charcoal: #333333;
   $off-white: #f0f0f0;
   $blue: #007bff;
   $warning: #ffcc00;
   $grey: #8A8A8A;
   ```

3. **Importar `variables.scss` en `main.scss`**:

   ```scss
   // src/styles/main.scss
   @import './variables.scss';
   @import "./variables.scss";
   @import "./navigation.scss";
   ```

### Paso 2: Actualizar Estilos en `navigation.scss`

1. **Modificar `navigation.scss` para utilizar las variables**:

   ```scss
   // src/styles/navigation.scss
   .nav-wrapper {
     display: flex;
     justify-content: space-between;
     padding: 30px;

     .left-side, .right-side {
       display: flex;
       align-items: center;
     }

     .left-side {
       .nav-link-wrapper {
         height: 22px;
         border-bottom: 1px solid transparent;
         transition: all 0.5s ease-in-out;

         a {
           color: $grey;
           text-decoration: none;

           &:hover {
             color: black;
           }
         }

         &:hover {
           border-bottom: 1px solid black;
         }
       }
     }
   }
   ```

### Paso 3: Clase activa 

Usamos el componente `NavLink` de React Router para aplicar automáticamente la clase activa (`nav-link-active`) cuando el enlace está activo.

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss'; // Asegúrate de importar tu archivo SCSS

const Navigation = () => {
    return (
        <nav>
            <div className="nav-link-wrapper">
                <NavLink to="/" exact activeClassName="nav-link-active">Inicio</NavLink>
                <NavLink to="/about" activeClassName="nav-link-active">Acerca de</NavLink>
                <NavLink to="/contact" activeClassName="nav-link-active">Contacto</NavLink>
                <NavLink to="/blog" activeClassName="nav-link-active">Blog</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
```
## Configurando la Arquitectura Base con SCSS y CSS Grid en una Aplicación React


### Paso 1: Crear y Configurar el Contenedor Principal

Primero, crearemos una clase de contenedor general que utilizará CSS Grid. Esta clase se definirá en nuestro archivo SCSS principal y se aplicará en nuestro componente raíz.

#### Archivo `base.scss`

```scss
.container {
    display: grid;
    grid-template-columns: 1fr;
}
```

#### Aplicar la Clase en el Componente Raíz

Abrimos el componente raíz de nuestra aplicación y aplicamos la clase `container`.

```jsx
// App.js
import React from 'react';
import './styles/base.scss'; // Asegúrate de importar tu archivo SCSS

const App = () => {
    return (
        <div className="container">
            {/* Otros componentes como la barra de navegación */}
            <Navigation />
            {/* Contenido principal */}
        </div>
    );
};

export default App;
```

### Paso 2: Configurar la Estructura de Portafolio

A continuación, vamos a estructurar nuestros elementos de portafolio utilizando CSS Grid. Cada elemento del portafolio se mostrará en una cuadrícula de tres columnas.

#### Archivo `portfolio-container.js`

Dentro de nuestro componente de contenedor de portafolio, añadimos una clase que envolverá todos los elementos de portafolio.

```jsx
import React from 'react';
import PortfolioItem from './PortfolioItem';
import './styles/portfolio.scss'; // Asegúrate de importar tu archivo SCSS

const PortfolioContainer = ({ items }) => {
    return (
        <div className="portfolio-items-wrapper">
            {items.map(item => (
                <PortfolioItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default PortfolioContainer;
```

#### Archivo `portfolio.scss`

Creamos un archivo SCSS para definir los estilos de la cuadrícula de nuestro portafolio.

```scss
.portfolio-items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px; // Añadir un poco de espacio entre los elementos
}

.portfolio-item-wrapper {
    position: relative;
    // Otros estilos para los elementos del portafolio
}
```
### Implementación de Imágenes de Fondo Dinámicas en un Portafolio con React y SCSS

En esta guía, vamos a trabajar en la implementación de imágenes de fondo dinámicas para cada uno de los elementos de nuestro portafolio. Esto nos permitirá mantener una cuadrícula limpia y estilizada utilizando CSS Grid, y gestionaremos las imágenes de manera más eficiente. Vamos a recorrer el proceso paso a paso.

### Paso 1: Configuración del Componente `PortfolioItem`

Primero, actualizaremos nuestro componente `PortfolioItem` para utilizar una imagen de fondo en lugar de una etiqueta `<img>`. Esto implicará pasar la URL de la imagen de fondo a través de estilos en línea en React.

#### Archivo `PortfolioItem.js`

```jsx
import React from 'react';

const PortfolioItem = ({ title, description, thumb_image_url }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${thumb_image_url})`
    };

    return (
        <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background" style={backgroundImageStyle} />
            <div className="portfolio-details">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PortfolioItem;
```

En este fragmento de código:

1. Definimos `backgroundImageStyle` como un objeto que contiene la URL de la imagen de fondo.
2. Usamos el estilo en línea en un `div` de cierre automático para aplicar la imagen de fondo.
3. Mantenemos un contenedor `portfolio-details` para el título y la descripción del portafolio.

### Paso 2: Estilos SCSS para Imágenes de Fondo

Ahora, vamos a definir los estilos necesarios en nuestro archivo SCSS para que las imágenes de fondo se comporten y se vean correctamente.

#### Archivo `portfolio.scss`

```scss
.portfolio-items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.portfolio-item-wrapper {
    position: relative;
}

.portfolio-img-background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
    width: 100%;
}
```

### Actualización de la Estructura JSX y Estilos para el Portafolio

En esta guía, vamos a trabajar en actualizar la estructura JSX de nuestro componente `PortfolioItem` y agregar los estilos necesarios en SCSS para obtener una cuadrícula visualmente atractiva. Comenzaremos con la creación de la estructura JSX y luego agregaremos los estilos.

#### Paso 1: Actualizar la Estructura JSX

Primero, vamos a modificar el componente `PortfolioItem` para incluir una nueva estructura que contiene un div para el logotipo y otro para la descripción.

#### Archivo `PortfolioItem.js`

```jsx
import React from 'react';

const PortfolioItem = ({ title, description, thumb_image_url, logo_url }) => {
    const backgroundImageStyle = {
        backgroundImage: `url(${thumb_image_url})`
    };

    return (
        <div className="portfolio-item-wrapper">
            <div className="portfolio-img-background" style={backgroundImageStyle} />
            <div className="img-text-wrapper">
                <div className="logo-wrapper">
                    <img src={logo_url} alt="Logo" />
                </div>
                <div className="subtitle">{description}</div>
            </div>
        </div>
    );
};

export default PortfolioItem;
```

### Paso 2: Estilos SCSS

Ahora vamos a definir los estilos necesarios en SCSS para la nueva estructura JSX.

#### Archivo `portfolio.scss`

```scss
.portfolio-items-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}

.portfolio-item-wrapper {
    position: relative;
}

.portfolio-img-background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 350px;
    width: 100%;
}

.img-text-wrapper {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    padding-left: 100px;
    padding-right: 100px;
}

.logo-wrapper img {
    width: 50%;
    margin-bottom: 20px;
}

.subtitle {
    transition: 1s ease-in-out;
    color: transparent;
}

.img-text-wrapper:hover .subtitle {
    color: $teal;
    font-weight: 400;
}
```

Corrected and formatted transcription for the React tutorial:

```jsx
import React, { Component } from 'react';
import './portfolio.scss';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumbnail_image_url, logo_url } = this.props.item;
    return (
      <div className={`portfolio-item-wrapper ${this.state.portfolioItemClass}`}>
        <div className="img-text-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}>
          <div className="logo-wrapper">
            <img src={logo_url} alt="Logo" />
          </div>
          <div className="subtitle">{description}</div>
        </div>
        <h1>{this.state.portfolioItemClass}</h1>
        <div className={`portfolio-img-background ${this.state.portfolioItemClass}`}>
          <img src={thumbnail_image_url} alt="Portfolio" />
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
```

Explanation and notes:

1. **Component Structure**: The `PortfolioItem` component is converted from a functional component to a class component to manage state.
   
2. **State**: Introduced `portfolioItemClass` in the component's state to manage the dynamic CSS class (`image-blur`) based on mouse events.

3. **Event Handlers**: Added `handleMouseEnter` and `handleMouseLeave` methods to update `portfolioItemClass` state based on mouse enter and leave events on the `img-text-wrapper`.

4. **Dynamic CSS Classes**: Applied dynamic CSS classes using template literals (`${this.state.portfolioItemClass}`) in JSX to conditionally apply styles.

5. **CSS**: Updated `portfolio.scss` to include styles for `image-blur`, which uses CSS `transition` and `filter` properties to achieve the blur effect.

This approach allows the component to dynamically apply styles based on user interaction without directly manipulating the DOM, which is a core principle of React development.

Corrected and formatted transcription for the React tutorial:

```jsx
import React, { Component } from 'react';
import './portfolio.scss';

class PortfolioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {
    this.setState({ portfolioItemClass: "image-blur" });
  }

  handleMouseLeave() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumbnail_image_url, logo_url } = this.props.item;
    return (
      <div className={`portfolio-item-wrapper ${this.state.portfolioItemClass}`}>
        <div className="img-text-wrapper"
          onMouseEnter={() => this.handleMouseEnter()}
          onMouseLeave={() => this.handleMouseLeave()}>
          <div className="logo-wrapper">
            <img src={logo_url} alt="Logo" />
          </div>
          <div className="subtitle">{description}</div>
        </div>
        <h1>{this.state.portfolioItemClass}</h1>
        <div className={`portfolio-img-background ${this.state.portfolioItemClass}`}>
          <img src={thumbnail_image_url} alt="Portfolio" />
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
```

Explanation and notes:

1. **Component Structure**: The `PortfolioItem` component is converted from a functional component to a class component to manage state.
   
2. **State**: Introduced `portfolioItemClass` in the component's state to manage the dynamic CSS class (`image-blur`) based on mouse events.

3. **Event Handlers**: Added `handleMouseEnter` and `handleMouseLeave` methods to update `portfolioItemClass` state based on mouse enter and leave events on the `img-text-wrapper`.

4. **Dynamic CSS Classes**: Applied dynamic CSS classes using template literals (`${this.state.portfolioItemClass}`) in JSX to conditionally apply styles.

5. **CSS**: Updated `portfolio.scss` to include styles for `image-blur`, which uses CSS `transition` and `filter` properties to achieve the blur effect.

This approach allows the component to dynamically apply styles based on user interaction without directly manipulating the DOM, which is a core principle of React development.

## Utilización de Mixins

1. **Eliminación del Texto de Bienvenida**: Eliminamos el texto de bienvenida y ajustamos la estructura del JSX, moviendo los botones al contenedor de elementos del portafolio.
2. **Consolidación del Código JSX**: Simplificamos la estructura del JSX para asegurar que solo un elemento se retorne y corregimos errores de sintaxis.
3. **Estilos con Mixins de Sass**: Creamos y utilizamos mixins en Sass para definir estilos de botones reutilizables.
4. **Creación de Archivos Sass**:
   - **`mixins.scss`**: Definimos el mixin `base-btn` con estilos base para los botones.
   - **`button.scss`**: Creamos la clase `.btn` e incluimos el mixin `base-btn`.
5. **Verificación y Ajustes Futuros**: Verificamos la correcta aplicación de estilos en los botones y mencionamos un pequeño error a corregir relacionado con la actualización de los elementos del portafolio.


## Authenticacion

1. **Introducción a la Autenticación**:
   - La autenticación es fundamental para identificar y autorizar usuarios en una aplicación.
   - Ejemplos comunes incluyen iniciar sesión en sitios web o aplicaciones como Facebook o Twitter.

2. **Implementación Inicial**:
   - Crear una nueva ruta y un componente en React para manejar el proceso de autenticación.
   - No se añadirá un enlace de inicio de sesión visible en la interfaz, ya que la página de inicio de sesión debe ser accesible solo por el propietario del portafolio.

3. **Desarrollo del Componente de Autenticación**:
   - Se añadió una nueva ruta `/auth` en el archivo `app.js`.
   - Se creó un nuevo archivo `auth.js` dentro del directorio de componentes y páginas, definiendo un componente de clase que maneja el estado y los controladores de eventos necesarios para la autenticación.

En esta guía, se explica cómo implementar la autenticación en una aplicación React, enfocándose en la creación de un componente de inicio de sesión con una imagen de fondo. Aquí se detallan los pasos para estructurar el componente y administrar la imagen de fondo.

1. **Introducción y Preparación**:
   - Se describe la creación de un componente de inicio de sesión independiente para manejar el proceso de autenticación.
   - La imagen de fondo utilizada en el componente se proporcionará mediante un enlace en las notas del programa.

2. **Estructura del Directorio de Imágenes**:
   - Se explica cómo organizar las imágenes en la estructura de directorios del proyecto:
     - Crear un directorio `static/assets/images/auth` y colocar la imagen de inicio de sesión en este directorio.

3. **Desarrollo del Componente de Autenticación**:
   - Dentro del componente de autenticación (`auth.js`), se configura la estructura básica del componente, incluyendo las columnas izquierda y derecha.
   - La columna izquierda contendrá la imagen de fondo y la columna derecha contendrá el formulario de inicio de sesión.

4. **Importación y Uso de la Imagen**:
   - La imagen de inicio de sesión se importa como una variable:
     ```javascript
     import loginImage from '../../../static/assets/images/auth/login.jpg';
     ```
   - Se utiliza JSX para establecer el estilo de la imagen de fondo con una cadena interpolada:
     ```javascript
     <div
       className="left-column"
       style={{ backgroundImage: `url(${loginImage})` }}
     />
     ```

Para implementar la autenticación en tu aplicación React, siguiendo los pasos de esta guía, aquí tienes un resumen y una guía detallada con el código necesario.

### Resumen y Pasos para Implementar la Autenticación

1. **Estructura del Proyecto**:
   - Crea el componente de autenticación (`Auth.js`) con una estructura básica de dos columnas.
   - Organiza los archivos y directorios necesarios, incluyendo la imagen de fondo.

2. **Importación de la Imagen**:
   - Importa la imagen de fondo en el componente de autenticación.

3. **Estilo del Componente**:
   - Crea un archivo SCSS para los estilos específicos del componente de autenticación.
   - Utiliza CSS Grid y Flexbox para estructurar y centrar los elementos.

### Código Detallado

#### Componente de Autenticación (`Auth.js`)

```javascript
import React, { Component } from 'react';
import loginImage from '../../../static/assets/images/auth/login.jpg';
import './auth.scss'; // Importa el archivo de estilos

export default class Auth extends Component {
  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{ backgroundImage: `url(${loginImage})` }}
        />
        <div className="right-column">
          <h1>Login Component Goes Here...</h1>
        </div>
      </div>
    );
  }
}
```

#### Estilos (`auth.scss`)

```scss
@import 'variables'; // Asegúrate de importar tus variables si las tienes

.auth-page-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 84px); // Resta la altura de la barra de navegación
}

.left-column {
  background-size: cover;
}

.right-column {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $off-white; // Usa tu variable de color
}
```

#### Ajustes Adicionales en tu Archivo Principal de Estilos (`main.scss`)

Asegúrate de importar el nuevo archivo de estilos en tu archivo principal de estilos.

```scss
@import 'auth'; // Importa el archivo de estilos de autenticación
```

**Estilo del Componente**:
   - En `auth.scss`, se define el contenedor principal utilizando CSS Grid para dividirlo en dos columnas iguales.
   - La columna izquierda tiene la imagen de fondo que se ajusta a su tamaño con `background-size: cover`.
   - La columna derecha usa Flexbox para centrar el contenido tanto horizontal como verticalmente.
   - Se aplica un color de fondo a la columna derecha para que coincida con el diseño deseado.

Para construir el componente de inicio de sesión paso a paso, empezando por la estructura básica y luego añadiendo funcionalidad, vamos a seguir la siguiente guía. La guía se centrará en dividir las tareas en partes pequeñas y manejables.

### Paso 1: Crear el Componente de Inicio de Sesión

1. **Crear el archivo y directorio para el componente de inicio de sesión**:
   - Crea un nuevo directorio llamado `auth` dentro de tu directorio de `components`.
   - Dentro de `auth`, crea un archivo llamado `login.js`.

2. **Escribir el Componente de Inicio de Sesión**:
   - Este será un componente de clase que inicialmente solo tendrá algunos elementos básicos para que podamos ver que está funcionando.

3. **Importar el Componente de Inicio de Sesión en el Componente de Autenticación**:
   - Modifica el componente `Auth.js` para importar y utilizar el componente de inicio de sesión.

4. **Verificar la Integración**:
   - Asegúrate de que el componente de inicio de sesión aparece en la pantalla sin errores.

### Paso 2: Añadir el Formulario Básico al Componente de Inicio de Sesión

1. **Modificar el Componente de Inicio de Sesión**:
   - Añade un formulario básico con los campos de correo electrónico y contraseña, y un botón de envío.

2. **Verificar el Formulario**:
   - Asegúrate de que el formulario se muestra correctamente en la pantalla.

### Paso 3: Estilizar el Formulario de Inicio de Sesión

1. **Agregar Estilos al Componente de Inicio de Sesión**:
   - Modifica el archivo `auth.scss` para incluir estilos para el formulario de inicio de sesión.

2. **Aplicar Estilos en el Componente de Inicio de Sesión**:
   - Modifica el componente de inicio de sesión para utilizar las clases CSS definidas.


### Paso 4: Verificar el Formulario Estilizado

1. **Verificar que los Estilos se Aplican Correctamente**:
   - Asegúrate de que el formulario se muestra correctamente con los estilos aplicados.

### Siguientes Pasos

1. **Añadir Funcionalidad al Formulario**:
   - Añadir controladores de eventos para manejar el envío del formulario y la actualización del estado.

2. **Conectar con una API**:
   - Configurar el componente para enviar los datos del formulario a una API y manejar las respuestas.

3. **Gestionar el Estado y Pasar Funciones como Props**:
   - Aprender cómo pasar funciones a través de props y actualizar el estado en consecuencia.


### Paso 1: Añadir Constructor y Estado Inicial

Primero, añadimos un constructor al componente `Login` para inicializar el estado con los campos de correo electrónico y contraseña.

```javascript

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

```

### Paso 2: Explicación del Código

1. **Constructor**:
   - Inicializamos el estado con dos propiedades: `email` y `password`, ambas como cadenas vacías.
   - Vinculamos los métodos `handleChange` y `handleSubmit` al contexto del componente.

2. **Método `handleChange`**:
   - Este método se llama cada vez que se cambia el valor de una entrada del formulario.
   - Actualiza el estado utilizando el nombre del campo como clave y el valor del campo como valor. Esto se logra usando la sintaxis de corchetes `[]` para definir una clave dinámica en el objeto.

3. **Método `handleSubmit`**:
   - Este método se llama cuando se envía el formulario.
   - Evita el comportamiento predeterminado del formulario (que recargaría la página) usando `event.preventDefault()`.
   - Registra el estado actual en la consola, lo que nos permitirá ver los datos del formulario.

4. **Renderizado del Formulario**:
   - El formulario contiene dos campos de entrada: uno para el correo electrónico y otro para la contraseña.
   - Cada campo de entrada tiene atributos `type`, `name`, `placeholder`, `value` y `onChange`.
   - El valor de cada campo está ligado al estado del componente (`this.state.email` y `this.state.password`).
   - El método `handleChange` se asigna al evento `onChange` de cada entrada para actualizar el estado cuando el usuario escribe.
   - El formulario tiene un evento `onSubmit` que llama al método `handleSubmit`.

### Paso 1: Prevenir el Comportamiento Predeterminado del Formulario

Como mencionaste, debemos evitar que el formulario realice su comportamiento predeterminado de actualizar la página y enviar los datos en la URL. Para hacer esto, usamos `event.preventDefault()` en el método `handleSubmit`.

### Paso 2: Acceder al Estado y Preparar los Datos

En lugar de obtener los datos del evento (ya que el evento se reutiliza por razones de rendimiento en React), accedemos directamente al estado del componente, que ya contiene el correo electrónico y la contraseña introducidos por el usuario.

### Paso 3: Conectarse a la API Externa

Finalmente, en el siguiente paso, enviaremos estos datos a una API externa para realizar el inicio de sesión. Utilizaremos `fetch` para realizar la solicitud POST a la API. En esta guía, vamos a implementar el paso 1 y 2. La conexión a la API se tratará en la próxima guía.

### Implementación Completa del Formulario de Inicio de Sesión

#### 1. Prevenir el Comportamiento Predeterminado y Acceder al Estado

Vamos a actualizar nuestro método `handleSubmit` para prevenir el comportamiento predeterminado y acceder a los datos del estado.


1. **Prevención del Comportamiento Predeterminado**:
   - Usamos `event.preventDefault()` para evitar que el formulario se envíe y la página se recargue.

2. **Acceso al Estado**:
   - Imprimimos los valores del estado `email` y `password` en la consola para verificar que estamos capturando correctamente los datos del formulario.

### Paso a Paso para Crear Autenticación con Axios en React

Vamos a desarrollar un sistema de autenticación usando Axios en React. A continuación, se detallan los pasos necesarios para realizar este proceso, incluyendo la configuración de Axios y la realización de la solicitud de autenticación.

### 1. Instalar Axios

Primero, debemos asegurarnos de que Axios esté instalado en nuestro proyecto. Puedes instalar Axios usando npm o yarn:

```bash
npm install axios
```

### 2. Importar Axios en el Componente

Importamos Axios en nuestro componente de inicio de sesión.

```javascript
import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // Realizamos la solicitud de autenticación
    axios.post("https://api.devcamp.space/sessions", {
      client: {
        email: this.state.email,
        password: this.state.password
      }
    }, { withCredentials: true })
    .then(response => {
      console.log("response", response);
    })
    .catch(error => {
      console.log("login error", error);
    });
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login to access your dashboard</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
```

### 3. Descripción del Código

1. **Importación de Axios**: Importamos Axios al principio del archivo para poder usarlo en el componente.

2. **Solicitud de Publicación con Axios**: En el método `handleSubmit`, realizamos una solicitud POST a la URL de la API. Los datos que enviamos incluyen un objeto cliente con el correo electrónico y la contraseña obtenidos del estado del componente.

3. **withCredentials**: Configuramos `withCredentials: true` para asegurarnos de que se envíen cookies autorizadas con la solicitud.

4. **Manejo de Respuesta**: Utilizamos `then` para manejar la respuesta exitosa de la solicitud y `catch` para manejar cualquier error que ocurra.

### 4. Prueba del Formulario de Inicio de Sesión

Para probar esta implementación:

1. **Ejecuta tu aplicación**: Asegúrate de que tu aplicación React esté corriendo.

2. **Abre el Navegador en Modo Incógnito**: Abre tu aplicación en una ventana de incógnito para evitar problemas con cookies persistentes.

3. **Inicia Sesión**: Ingresa las credenciales de DevCamp Space y presiona el botón de inicio de sesión.

4. **Verifica la Consola**: Verifica la consola del navegador para ver la respuesta de la API. Deberías ver una respuesta exitosa que indica que la sesión ha sido creada.

### Próximos Pasos

1. **Manejo de la Respuesta de Autenticación**: En la próxima guía, veremos cómo manejar la respuesta de la autenticación para actualizar el estado de la aplicación y redirigir al usuario a las páginas protegidas.

2. **Cerrar Sesión**: Implementaremos la funcionalidad para cerrar sesión, eliminando las cookies de autenticación y actualizando el estado de la aplicación.

3. **Protección de Rutas**: Configuraremos rutas protegidas en nuestra aplicación para asegurarnos de que solo los usuarios autenticados puedan acceder a ciertas páginas.

Con estos pasos, habrás implementado un sistema de autenticación completo usando Axios en una aplicación React.

### Mejorando la Experiencia del Usuario con Manejo de Errores en React

Para mejorar la experiencia del usuario, es crucial manejar correctamente los errores durante el proceso de autenticación. Aquí te mostraré cómo implementar un manejo de errores efectivo en tu componente de inicio de sesión de React utilizando Axios.

### 1. Actualizar el Estado para Manejar Errores

Primero, vamos a actualizar el estado del componente para incluir un campo `errorText` que utilizaremos para mostrar mensajes de error.

```javascript

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post("https://api.devcamp.space/sessions", {
      client: {
        email: this.state.email,
        password: this.state.password
      }
    }, { withCredentials: true })
    .then(response => {
      if (response.data.status === "created") {
        console.log("You can come in...");
      } else {
        this.setState({
          errorText: "Email or password is incorrect"
        });
      }
    })
    .catch(error => {
      this.setState({
        errorText: "An error occurred"
      });
    });
  }

  render() {
    return (
      <div className="login-form">
        <h1>Login to access your dashboard</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {this.state.errorText && (
            <div className="error">{this.state.errorText}</div>
          )}
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

```

### 2. Descripción del Código

1. **Estado Inicial**: Añadimos `errorText` al estado inicial del componente.
2. **Limpiar Errores al Escribir**: En el método `handleChange`, además de actualizar el estado con los valores de los inputs, también reiniciamos `errorText` a una cadena vacía cada vez que el usuario empieza a escribir.
3. **Manejo de Errores en la Respuesta**:
   - **Errores de Credenciales Incorrectas**: En el método `handleSubmit`, verificamos si la respuesta de la API tiene el estado "created". Si no es así, actualizamos `errorText` para informar al usuario que las credenciales son incorrectas.
   - **Errores de Red y Otros**: En el bloque `catch`, actualizamos `errorText` con un mensaje de error genérico si hay un problema con la solicitud (como un endpoint incorrecto o un error del servidor).

4. **Mostrar Mensajes de Error**: En el renderizado, mostramos el mensaje de error si `errorText` tiene algún valor.

### 3. Pruebas del Manejo de Errores

#### 1. Credenciales Incorrectas
- Ingresar un correo electrónico y una contraseña incorrectos y verificar que el mensaje de error se muestra.

#### 2. Endpoint Incorrecto
- Cambiar la URL de la API a una incorrecta y verificar que se muestra un mensaje de error genérico.

#### 3. Limpiar Mensajes de Error
- Ingresar credenciales incorrectas para mostrar un mensaje de error y luego empezar a escribir nuevamente en los campos de entrada. El mensaje de error debería desaparecer.

### 4. Resultados Esperados

1. **Credenciales Incorrectas**:
   - El mensaje "Email or password is incorrect" debe mostrarse debajo del formulario.

2. **Endpoint Incorrecto**:
   - El mensaje "An error occurred" debe mostrarse debajo del formulario.

3. **Limpiar Mensajes de Error**:
   - El mensaje de error debe desaparecer al empezar a escribir en los campos de entrada.


[Codigo portfolio](https://github.com/Marimar8888/mariadelmar-alonso-portfolio.git)








