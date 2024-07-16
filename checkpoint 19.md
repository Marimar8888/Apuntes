## Incorporar y Estilizar un Ícono en el Modal

**Objetivo:**
Añadir y estilizar un ícono de Font Awesome en el modal del blog para mejorar la usabilidad y la apariencia del formulario.

**Pasos a Seguir:**

1. **Seleccionar el Ícono:**
   - **Font Awesome:** Navega a Font Awesome y selecciona un ícono. En este ejemplo, se usará el ícono `fa-plus-circle`.

2. **Importar el Ícono:**
   - **Archivo de Importación:** Abre `aplicación.js` y añade la importación del ícono `fa-plus-circle`.
   - **Agregar a la Biblioteca:** Asegúrate de agregar `faPlusCircle` a la lista de íconos importados en la biblioteca.

3. **Actualizar el Componente de Blog:**
   - **Reemplazar Texto por Ícono:** En `blog.js`, reemplaza el texto del enlace que abre el modal por el componente de ícono de Font Awesome.
   - **Clase para el Enlace:** Asigna una clase al enlace, como `new-blog-link`.

4. **Añadir Estilos:**
   - **Archivo Sass del Blog:** Abre `blog.scss` y añade una nueva clase `new-blog-link` para definir los estilos del ícono.
   - **Posicionamiento Absoluto:**
     - Asegúrate de que el contenedor principal (`blog-container`) tenga `position: relative`.
     - Establece `position: absolute` para `new-blog-link` y ajústalo a la esquina superior derecha.

5. **Detalles de Estilo:**
   - **Tamaño y Color:**
     - Ajusta el tamaño del ícono utilizando `font-size`.
     - Cambia el color del ícono y añade un efecto de transición para el hover.

6. **Opcional: Posicionamiento Fijo:**
   - **Cambio a Fijo:** Cambia `position: absolute` a `position: fixed` en `new-blog-link` para que el ícono permanezca en la misma posición mientras se desplaza.
   - **Ajustes Adicionales:** Añade márgenes inferiores y derechos para mejorar la ubicación.


[Codigo añadir un icono para abrir el modal](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/049a7a1b3ca69e72d914cd36c3fa5a4d965bbcf5)


## Condicionar la Visibilidad del Botón de Modal Según el Estado de Sesión

**Objetivo:**
Condicionar la visibilidad del botón que abre el modal para crear registros en función del estado de inicio de sesión del usuario. Esto garantiza que solo los usuarios autenticados puedan ver y usar el botón.

### Pasos a Seguir:

1. **Acceder al Estado de Inicio de Sesión:**
   - **Estado Global:** Usa el estado global de la aplicación para determinar si un usuario ha iniciado sesión.
   - **Componente Principal:** En el componente principal, como `App.js`, asegura que el estado de inicio de sesión (`loggedInStatus`) esté disponible y actualizado.

2. **Pasar el Estado como Propiedad:**
   - **Propiedades de Rutas:** Utiliza las propiedades de renderizado en las rutas de React Router para pasar el estado de inicio de sesión al componente `Blog`.
   - **Eliminar Componente Directo:** Cambia la definición de la ruta para `Blog` de una llamada directa al componente a una que utilice la propiedad `render`.

3. **Ajustar el Componente Blog:**
   - **Recibir Propiedades:** Asegúrate de que el componente `Blog` reciba `loggedInStatus` como una propiedad.
   - **Condicional de Renderizado:** Usa un operador ternario para condicionar la renderización del botón basado en el estado de inicio de sesión.

### Estructura de Referencias de Archivos y Funciones:

- **App.js:**
  - **Estado de Inicio de Sesión:** Asegúrate de tener `this.state.loggedInStatus`.
  - **Propiedad de Render:** Modifica la ruta para el componente `Blog` para utilizar la propiedad `render`, pasando `loggedInStatus`.

- **Blog.js:**
  - **Condicional Ternario:** Usa `this.props.loggedInStatus` para condicionar la visibilidad del botón de creación de registros.


[Codigo ocultar icono sin logueo](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/9228d70f5d49577e01d9278e1eb855db7c820634)


## Reorganización y limpieza código en app.js

Aagregar íconos directamente en el componente principal de una aplicación, lno es ideal para mantener un código organizado y limpio. La solución propuesta es crear un módulo auxiliar específico para gestionar los íconos. Aquí están los pasos resumidos para lograr esto:

1. **Crear un Directorio de Helpers**:
   - Directorio: `src/helpers`

2. **Crear un Archivo de Íconos**:
   - Archivo: `src/helpers/icons.js`
   - Importaciones:
     - Íconos desde `@fortawesome/free-solid-svg-icons`
     - Biblioteca desde `@fortawesome/fontawesome-svg-core`

3. **Encapsular la Lógica de los Íconos en una Función**:
   - Función: `Icons`
   - Función de flecha que añade íconos a la biblioteca
   - Exportación predeterminada de la función `Icons`

4. **Importar y Usar el Módulo en el Componente Principal**:
   - Componente: `App.js`
   - Importación de la función `Icons` desde `src/helpers/icons`
   - Llamada a la función `Icons` en el constructor o en el método de inicialización adecuado

5. **Verificación y Pruebas**:
   - Verificación de que los íconos funcionan correctamente
   - Facilitar la adición de nuevos íconos en `src/helpers/icons.js` sin necesidad de modificar el componente principal de la aplicación

[Codigo como limpiar codigo ejemplo app.js](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/fa235c3283521dd8b1c15c1e449180fafc081815)


## Draft.js para crear un editor de texto

Se aborda la necesidad de mejorar el campo de texto simple en el formulario de agregar blogs, transformándolo en un editor WYSIWYG (What You See Is What You Get). Se propone utilizar la biblioteca Draft.js de Facebook y algunas bibliotecas complementarias para implementar esta funcionalidad en una aplicación React. A continuación, se describen los pasos clave y las referencias a los archivos, funciones y atributos implicados en este proceso:

1. **Instalación de Dependencias**:
   - Utilizar `npm` para instalar las siguientes bibliotecas:
     - `draft-js`
     - `react-draft-wysiwyg`
     - `draftjs-to-html`
     - `html-to-draftjs`

2. **Configuración del Entorno**:
   - Abrir Visual Studio Code y usar la terminal para ejecutar los comandos de instalación.

3. **Descripción de las Bibliotecas**:
   - **Draft.js**: Biblioteca principal para el editor de texto enriquecido.
   - **react-draft-wysiwyg**: Proporciona componentes adicionales y una interfaz de usuario mejorada sobre Draft.js.
   - **draftjs-to-html**: Convierte el contenido de Draft.js a HTML.
   - **html-to-draftjs**: Convierte HTML a contenido interpretable por Draft.js.

4. **Verificación de la Documentación**:
   - Es esencial revisar la documentación de cada biblioteca para entender sus funciones y cómo se integran entre sí.
   - Sitios web dedicados y documentación oficial proporcionan ejemplos y detalles de implementación que son fundamentales para el correcto uso de estas bibliotecas.

5. **Implementación del Editor WYSIWYG**:
   - El siguiente paso es integrar las bibliotecas instaladas en la aplicación React.
   - Configurar el editor para permitir funciones como cambio de encabezado, subrayado, cursiva, negrita, y la inserción de imágenes.

6. **Creación de la Estructura del Proyecto**:
   - Dentro del nuevo directorio de formularios, crear un archivo `rich-text-editor.js` para el componente del editor de texto enriquecido.
   - Asegurarse de que este componente sea reutilizable en diferentes partes de la aplicación.

7. **Configuración del Editor de Texto Enriquecido**:
   - Importar las bibliotecas necesarias: `draft-js`, `react-draft-wysiwyg`, `draftjs-to-html` y `html-to-draftjs`.
   - Configurar un estado inicial para el componente utilizando `EditorState.createEmpty()`.

8. **Integración del Editor en el Formulario del Blog**:
   - Modificar el formulario del blog para incluir el nuevo componente `RichTextEditor`.
   - Ajustar los estilos del modal para asegurar que el editor tenga suficiente espacio, mediante la modificación de la altura en el archivo de estilos.

9. **Implementación de la Funcionalidad del Editor**:
   - Crear el componente del editor dentro de `rich-text-editor.js` con las propiedades `editorState`, `wrapperClassName`, y `editorClassName`.
   - Importar y aplicar los estilos proporcionados por la biblioteca `react-draft-wysiwyg` para asegurar la correcta visualización del editor.

10. **Configuración del Estado Inicial del BlogForm**:
    - En `BlogForm`, añade una propiedad `content` al estado para almacenar el contenido del editor de texto enriquecido, iniciándola como una cadena vacía.

11. **Creación y Enlace de la Función de Manejo**:
    - Crea una función `handleRichTextEditorChange` en el componente que acepte el contenido del editor como argumento y actualice el estado con este contenido.
    - Enlaza esta función en el constructor del componente para asegurar que `this` se refiere correctamente al componente.

12. **Construcción del Formulario de Datos**:
    - Asegúrate de incluir el contenido del editor en los datos del formulario al construirlo para el envío a una API.

13. **Paso de la Función al Editor de Texto Enriquecido**:
    - En el método de renderización del componente, pasa `handleRichTextEditorChange` al componente del editor de texto enriquecido como una propiedad, permitiendo que el editor llame a esta función cuando el contenido cambie.

14. **Actualización del Estado**:
    - Dentro de `handleRichTextEditorChange`, actualiza el estado del componente con el nuevo contenido usando la sintaxis moderna de JavaScript para simplificar la asignación de propiedades.

15. **Aislamiento del Código del Editor de Texto Enriquecido**:
    - Asegúrate de que `handleRichTextEditorChange` solo actualice el estado sin incluir lógica específica del editor de texto enriquecido, permitiendo cambiar el editor sin modificar otros componentes de la aplicación.

16. **Actualización del Estado del Editor**:
    - Crear la función `onEditorStateChange` para manejar los cambios del estado del editor.
    - Enlazar esta función en el constructor del componente.

17. **Pasar Funciones al Editor**:
    - Pasar `onEditorStateChange` como una propiedad al componente del editor para manejar las actualizaciones de estado.

18. **Conversión de Contenido a HTML**:
    - Usar `draftToHtml` y `convertToRaw` para transformar el contenido del editor en HTML.
    - Llamar `this.setState` para actualizar el estado y usar una función de callback para manejar la actualización asíncrona.

19. **Gestión de Estado Asíncrona**:
    - Asegurarse de que el estado local se actualice completamente antes de enviar los datos al formulario del blog.


[Codigo crear un editor de texto](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/78937d994d3f157ecdd2a0ab0e5107faa7a7b18a)

## Manejar HTML

Una manera de convertir HTML, que actualmente se maneja como una cadena de texto, en contenido renderizable en tu aplicación web, sería utilizando la biblioteca `react-html-parser`, que permite interpretar HTML en formato de cadena y convertirlo en elementos que React puede renderizar correctamente en la página.

El proceso implica:

1. **Instalación de la biblioteca**: Usas `npm` para instalar `react-html-parser`, una biblioteca que facilita el análisis y renderizado de HTML dentro de componentes React.

2. **Importar la Biblioteca**:
   - Importa React y el componente.
   - Importa `ReactHtmlParser` desde "react-html-parser".

3. **Uso de `ReactHtmlParser` en el Componente**:
   - Utiliza `ReactHtmlParser` dentro del contenido de tu componente para parsear y renderizar HTML.
    - Asegúrate de que el contenido HTML ahora se procesa correctamente en el navegador como HTML válido.

4. **Manejo de la Imagen Destacada**:
   - Verifica si hay una URL de imagen destacada y utiliza un operador ternario para renderizar la imagen si existe, o `null` si no.

7. **Crear un Componente para la Imagen Destacada**:
   - Crea un componente funcional dedicado `BlogFeaturedImage` que maneje la lógica de la imagen destacada.
 
8. **Uso del Componente `BlogFeaturedImage`**:
   - Importa y utiliza `BlogFeaturedImage` en el componente principal de detalles del blog, pasando `featured_image_url` como una propiedad.


### Archivos Involucrados:
- `blog-detalle.js`
- `blog-featured-image.js`

### Variables y Funciones Clave:
- `ReactHtmlParser`
- `this.state.blogItem`
- `featured_image_url`
- `BlogFeaturedImage`

[Codigo crear Html y renderizarlo](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/541863df30f4588b457c473af91da7d009b8f5ae)


## Crear resumenes de texto con enlace read more:

1. **Instalación de Librerías**:
   - **strip-tags**: Esta biblioteca se utiliza para eliminar etiquetas HTML de una cadena. 
     - Comando de instalación: `npm install striptags`
   - **react-truncate**: Este componente se utiliza para truncar texto a un número específico de líneas, añadiendo puntos suspensivos y un enlace "Leer más".
     - Comando de instalación: `npm install react-truncate`

2. **Importar Bibliotecas**:
   - Importa en `blog-item.js` la librería `striptags` desde "striptags".
   - Importa en `blog-item.js` la librería `Truncate` desde "react-truncate".

3. **Llamar a las Bibliotecas**:
   - Utiliza el componente `Truncate` para manejar la visualización del resumen del contenido.
   - Configura las propiedades del componente `Truncate`, incluyendo el número de líneas y los puntos suspensivos.

4. **Propiedad de Puntos Suspensivos**:
   - Define la propiedad `ellipsis` para el componente `Truncate`, añadiendo un enlace "Leer más" que redirige a la página completa del blog.

5. **Renderizado del Componente Truncate**:
   - Cierra el componente `Truncate` y pasa el contenido HTML que será truncado.

6. **Uso de striptags**:
   - Envuelve el contenido con `striptags` para eliminar todas las etiquetas HTML antes de pasarlo al componente `Truncate`.


[Codigo resumen texto y read more](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/8abab552d55b9053a41c92d5f98e84a180310b40)

## Interfaz para subir una imagen con Dropzone

1. **Instalación de Librerías**:
   - **react-dropzone-component**: Este componente se utiliza para implementar una zona de arrastrar y soltar archivos en una aplicación React.
     - Comando de instalación: `npm install react-dropzone-component`

2. **Importar Librerías y Componentes**:
   - Importa en el archivo `blog-form.js` la librería `DropzoneComponent` desde "react-dropzone-component".

3. **Definición y Vinculación de Funciones**:
   - Define las funciones de configuración `componentConfig`, `djsConfig` y el manejador `handleFeaturedImageDrop`.
   - Vincula las funciones al contexto `this` en el constructor.

4. **Implementación de Funciones**:
   - **componentConfig**: Configura los tipos de archivos permitidos y la URL de la publicación.
   - **djsConfig**: Configura la opción de añadir y eliminar enlaces, y el número máximo de archivos permitidos.
   - **handleFeaturedImageDrop**: Actualiza el estado `featured_image` con el archivo seleccionado.

5. **Agregar el Componente Dropzone**:
   - Añade `DropzoneComponent` en el JSX con las configuraciones necesarias.
   - Configura las propiedades `config`, `djsConfig` y `eventHandlers` con las funciones correspondientes.
   - Añade un mensaje dentro del `DropzoneComponent` para indicar la "Imagen destacada".


[Codigo interfaz para subir una imagen con Dropzone](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/9af018b01956078bfffefcb068412833e716d67d)


## Subir imagen y reinicar el state a "":

### 1. Verificación de la Imagen Destacada en `buildForm`:
En la función `buildForm`, verificaremos si `this.state.featured_image` está presente antes de agregarla a `formData`. Esto garantiza que solo se envíe una imagen destacada si realmente existe.

### 2. Crear una Referencia (Ref) para el Dropzone:
En el constructor del componente, crearemos una referencia para el componente `DropzoneComponent`. Esta referencia nos permitirá acceder al método `removeAllFiles` del componente Dropzone, lo que facilita la limpieza de los archivos cargados después de enviar el formulario.

### 3. Limpiar la Imagen Destacada al Enviar el Formulario:
En la función `handleSubmit`, después de que se envíe el formulario y se procese la respuesta, utilizaremos la referencia para llamar a `removeAllFiles` en el componente Dropzone. Esto asegurará que los archivos cargados se limpien del componente.

### 4. Adjuntar la Referencia al Componente Dropzone:
En el render del componente, adjuntaremos la referencia creada al `DropzoneComponent`, lo que nos permitirá acceder a sus métodos desde el código.

[Codigo subir una image](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/0b50555b74b1b930b2d84bd8fa0c4c06d54795c5)


## Dando estilos al editor de texto enriquecido

### Objetivo:

Mejorar la visibilidad y el diseño del área de texto enriquecido, se aplicaron varias clases CSS directamente desde el inspector del navegador, ajustando bordes, relleno y altura. Luego, estos estilos se trasladaron a un archivo de estilo dedicado para el editor de texto enriquecido.

### 2. Creación de un Archivo de Estilo para el Editor de Texto Enriquecido:
Se creó un archivo SCSS específico para el editor de texto enriquecido donde se agregaron los estilos necesarios para darle una apariencia coherente con el resto de la interfaz, con el nombre de `rich-editor-text.scss`.

### 3. Importar el Archivo de Estilo en el Archivo Principal:
El nuevo archivo de estilo del editor de texto enriquecido se importó en `main.scss` archivo de estilo principal del proyecto para asegurarse de que los estilos se apliquen correctamente.

#### 4. Ajuste del Color del Borde:
Se actualizó el color del borde del área de texto enriquecido para que coincida con el borde utilizado en la barra de herramientas del editor, utilizando un color hexadecimal específico.

[Codigo estilos de editor de texto](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/3da6c2e6d22695d86a97b02cf07fb72d1b06b47c)


## Incrustar imagen dentro de un texto con un editor enriquecido:

Primero personalizamos la barra de herramientas de un editor de texto enriquecido y configurar la funcionalidad de carga de imágenes. Aquí están los puntos clave:

1. **Personalización de la Barra de Herramientas:**
   - Se introduce la personalización de la barra de herramientas mediante la definición de propiedades personalizadas en un componente de editor de texto.
   - Se detalla cómo configurar diferentes elementos de la barra de herramientas (como inDropdown) utilizando objetos anidados para cada opción (en línea, lista, textAlign, enlace, historial).

2. **Configuración de la Imagen:**
   - Se explora la configuración específica para la inserción de imágenes en el editor.
   - Se define una función de callback `uploadCallback` para manejar la carga de imágenes, donde se establece `uploadFile` como la función que procesará cada archivo cargado.
   - Se especifican detalles como el texto alternativo (`alt`) y los tipos de archivos permitidos (`inputAccept`).

3. **Implementación de `uploadFile`:**
   - Se implementa la función `uploadFile` que devuelve una promesa.
   - Esta función llama a `getBase64` para convertir el archivo de imagen en una cadena base64, preparándola para ser insertada en el editor.

El segundo paso, implementamos la conversión de imágenes a base64 utilizando JavaScript y el manejo de promesas:

1. **Introducción a la Conversión a Base64:**
   - Se explica el concepto de la codificación de imágenes a base64 y su importancia para almacenar imágenes como cadenas de texto.
   - Se menciona el uso del `FileReader` de JavaScript, una herramienta integrada que facilita la conversión de archivos a datos URL.

2. **Implementación de `getBase64`:**
   - Se define la función `getBase64` que acepta un archivo y una callback.
   - Utiliza `FileReader` para leer el archivo como un URL de datos y ejecuta la callback con el resultado (la cadena base64 de la imagen).

3. **Manejo de Promesas:**
   - Se utiliza una promesa en `uploadFile` para manejar la conversión de imagen a base64.
   - La promesa resuelve cuando la imagen se convierte con éxito y devuelve un objeto con los datos de la imagen (enlace en base64).

### Explicación detallada del código 

**Componente editor**

```jsx
<Editor
    editorState={this.state.editorState}
    wrapperClassName='demo-wrapper'
    editorClassName='demo-editor'
    onEditorStateChange={this.onEditorStateChange}
    toolbar={{
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
        image: {
            uploadCallback: this.uploadFile,
            alt: { present: true, mandatory: false },
            previewImage: true,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
        }
    }}
/>
```

### Descripción del Componente

1. **Props del Editor**:
    - `editorState`: El estado actual del editor. Este estado controla el contenido y el formato del texto dentro del editor.
    - `wrapperClassName` y `editorClassName`: Clases CSS para darle estilo al contenedor y al área de edición del editor.
    - `onEditorStateChange`: Una función que se llama cada vez que el estado del editor cambia. Esto se utiliza para actualizar el estado del componente.
    - `toolbar`: Configuración de la barra de herramientas del editor.

### Configuración de la Barra de Herramientas

Dentro del prop `toolbar`, estamos configurando varias opciones:

- **inline**: Configuraciones de texto en línea (negrita, cursiva, subrayado) agrupadas en un menú desplegable (`inDropdown: true`).
- **list**: Configuraciones de listas (listas con viñetas, listas numeradas) también en un menú desplegable.
- **textAlign**: Alineación del texto (izquierda, centro, derecha) en un menú desplegable.
- **link**: Opciones para agregar enlaces en el texto, en un menú desplegable.
- **history**: Opciones para deshacer y rehacer cambios, en un menú desplegable.
- **image**: Opciones para agregar imágenes. Aquí configuramos una función de carga personalizada (`uploadCallback`), permitimos texto alternativo (`alt`), mostramos una vista previa de la imagen (`previewImage`), y especificamos los tipos de archivos de imagen que se pueden cargar (`inputAccept`).

### Función `getBase64`

```jsx
getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result);
    reader.onerror = error => {};
}
```

### Descripción de `getBase64`

Esta función convierte un archivo en una cadena codificada en base64. Esto es útil para incrustar imágenes directamente en el contenido de texto.

1. **FileReader**: Una API de JavaScript que permite leer el contenido de archivos almacenados en el cliente.
2. **reader.readAsDataURL(file)**: Lee el archivo y lo convierte en una URL de datos.
3. **reader.onload**: Una función que se ejecuta cuando el archivo se ha leído con éxito. Llama al `callback` con el resultado (la cadena base64).
4. **reader.onerror**: Una función que se ejecuta si ocurre un error durante la lectura del archivo. Aquí no hacemos nada con el error.

### Función `uploadFile`

```jsx
uploadFile(file) {
    return new Promise((resolve, reject) => {
      this.getBase64(file, data => resolve({ data: { link: data } }));
    });
}
```

### Descripción de `uploadFile`

Esta función se llama cuando un usuario intenta cargar una imagen en el editor. Utiliza la función `getBase64` para convertir la imagen y devuelve una promesa.

1. **Nueva Promesa**: La función `uploadFile` devuelve una promesa. Las promesas son útiles para manejar operaciones asincrónicas como la lectura de archivos.
2. **`this.getBase64(file, callback)`**: Llama a `getBase64` para convertir el archivo en una cadena base64.
3. **`resolve({ data: { link: data } })`**: Cuando la conversión es exitosa, la promesa se resuelve con un objeto que contiene la cadena base64 de la imagen. Este objeto se puede utilizar para mostrar la imagen en el editor.

### Flujo Completo

1. **Cargar una Imagen**: Cuando el usuario intenta cargar una imagen, se llama a `uploadFile`.
2. **Convertir a Base64**: `uploadFile` utiliza `getBase64` para convertir la imagen en una cadena base64.
3. **Devolver la Promesa**: La promesa se resuelve con la cadena base64, que luego se utiliza para incrustar la imagen en el editor.

Este código permite que las imágenes cargadas se conviertan en texto codificado, lo que facilita su almacenamiento y visualización dentro del contenido de texto enriquecido del editor.


[Codigo incrustar imagenes dentro de un archivo ](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/00198c8479fb512a46d9ee76414b16d4ead48f20)


## Ajustar Menús Desplegables en un Editor de Texto Enriquecido

1. **Problema Inicial**:
    - Los menús desplegables del cargador de imágenes, emojis y enlaces incrustados en un editor de texto enriquecido causan desbordamiento horizontal cuando se abren en una ventana modal. Esto crea una mala experiencia de usuario.

2. **Solución Propuesta**:
    - Se sugiere anular los valores predeterminados de CSS para estos menús desplegables en lugar de modificar directamente el archivo CSS principal de la biblioteca (`react-draft-wysiwyg.scss`).

3. **Método para Anular CSS**:
    - **Inspeccionar Elementos**: Utiliza las herramientas de desarrollo del navegador para inspeccionar los elementos y encontrar las clases CSS relevantes para los menús desplegables problemáticos (`rdw-image-modal`, `rdw-emoji-modal`, `rdw-embedded-modal`).
    - **Probar Estilos en el Navegador**: Ajustar temporalmente los estilos en el navegador para encontrar los valores adecuados que corrigen el desbordamiento.

4. **Implementación de Anulaciones**:
    - **Clase `rdw-image-modal`**:
        - Ajuste: `left: -215px;`
        - Código: `.rdw-image-modal { left: -215px; }`
    - **Clase `rdw-emoji-modal`**:
        - Ajuste: `left: -169px;`
        - Código: `.rdw-emoji-modal { left: -171px; }`
    - **Clase `rdw-embedded-modal`**:
        - Ajuste: `left: -124px;`
        - Código: `.rdw-embedded-modal { left: -125px; }`


6. **Consideraciones sobre Valores Negativos en CSS**:
    - Aunque generalmente se desaconseja el uso de valores negativos en CSS, en este caso es una excepción válida porque se trata de ajustes menores en un componente de terceros (Draft.js), lo que permite corregir el comportamiento sin modificar directamente el código fuente de la biblioteca.

[Codigo ajustar las ventanas desplegables de un editor de texto](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/4e3166fee8b27068dc9b081b09390963779927fb)

## Proceso para Implementar la Función de Edición en una Página de Detalles del Blog

1. **Objetivo**:
    - Permitir que al hacer clic en el título de una publicación de blog, la página se convierta en un formulario de edición sin necesidad de navegar a una nueva página.

2. **Estado de Modo de Edición**:
    - **Agregar Estado**: En el archivo `blog-details.js` hay que introducir un nuevo estado `editMode` en el componente de detalles del blog, inicializándolo en `false`.
    - **Funcionalidad**: Controlar si el formulario de edición o el contenido de la publicación se muestra basado en el valor de `editMode`.

3. **Controlador de Clic para Activar Modo de Edición**:
    - **Definir Función**: Crear una función `handleEditClick` que cambie el estado `editMode` a `true` y registre un mensaje en la consola.
    - **Vincular Función**: Asignar `handleEditClick` al evento `onClick` del título de la publicación del blog.

4. **Renderizado Condicional**:
    - **Content Manager**: Definir una función `contentManager` que devuelva el formulario de edición si `editMode` es `true` y el contenido normal si es `false`.
    - **Importar Formulario**: Asegurarse de importar el componente `BlogForm`.

5. **Implementación en JSX**:
    - **Lógica de Renderizado**: Usar `contentManager()` dentro de la declaración de retorno para decidir qué contenido mostrar basado en el estado `editMode`.
    - **Corrección de Errores**: Asegurarse de llamar a la función `contentManager` correctamente para evitar errores de React.

6. **Validación del Comportamiento**:
    - **Verificación**: Confirmar que al hacer clic en el título, el formulario de edición se muestra y el contenido de la página cambia sin recargar ni cambiar de ruta.

7. **Preparación para la Edición Real**:
    - **Pasar Datos**: Antes de hacer que el formulario funcione plenamente, pasar el modo de edición y el blog a editar al formulario.
    - **Evitar Creación de Nuevas Entradas**: Ajustar la lógica para que el formulario edite la entrada existente en lugar de crear una nueva.

8. **Simulación de Rutas**:
    - **SPA**: Aclarar que este comportamiento se logra sin cambiar las rutas reales, aprovechando la naturaleza de aplicación de una sola página (SPA) de React.

Esta función mejora la experiencia del usuario al permitir la edición directa del contenido del blog dentro de la misma página, ofreciendo una interfaz más fluida y eficiente.

[Codigo implementar la función de edición en el blog](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/b9b6b3eff491e7f4e81116d5ebe3a66e46ab937c)

