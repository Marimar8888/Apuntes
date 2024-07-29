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


## Poblar el form desde la función de edición de blog-details

1. **Configuración del Formulario de Edición:**
   - Se introduce el concepto de `editMode` para controlar si el formulario está en modo de edición.
   - Se pasa el estado `editMode` y los datos del blog (`blogItem`) como propiedades al formulario `BlogForm`.
   
2. **Uso de `componentWillMount` en blog-fom.js:**
   - Se utiliza `componentDidMount` para montar el formulario con datos cuando se activa el modo de edición, lo monta y lo puebla si estamos en edición.

3. **Integración del Editor de Texto Enriquecido en archivo `rich-text-editor.js`:**
   - Se describe cómo integrar un editor de texto enriquecido dentro del formulario de blog.
   - Se menciona el uso de `htmlToDraft` para convertir HTML en un formato compatible con `Draft.js`.
   
3. **Creación de `contentState`:**
   - Se crea un `contentState` utilizando los bloques de contenido extraídos del HTML convertido.
   - Este `contentState` permite visualizar y editar el contenido HTML de manera efectiva dentro del editor de texto enriquecido.

### Explicación de código complejo en `rich-text-editor.js`

```javascript
componentDidMount() {
    if (this.props.editMode && this.props.contentToEdit) {
        const blocksFromHtml = htmlToDraft(this.props.contentToEdit);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(
            contentBlocks,
            entityMap
        );
        const editorState = EditorState.createWithContent(contentState);
        this.setState({ editorState });
    }
}
```

1. **Función `componentDidMount()`**:
   - `componentDidMount()` es un método especial en React que se llama automáticamente después de que un componente ha sido montado en el DOM (es decir, después de que se ha renderizado por primera vez).

2. **Condición `if`**:
   - `if (this.props.editMode && this.props.contentToEdit)`: Aquí se verifica si `editMode` es `true` y si `contentToEdit` contiene algún contenido válido. Estos son propiedades que se pasan al componente desde su componente padre.

3. **Convertir HTML a Bloques Editables**:
   - `const blocksFromHtml = htmlToDraft(this.props.contentToEdit);`: Utiliza la función `htmlToDraft` para convertir el HTML contenido en `this.props.contentToEdit` en un formato que el editor de texto enriquecido (`Draft.js`) puede manejar. El resultado se almacena en `blocksFromHtml`.

4. **Extracción de `contentBlocks` y `entityMap`**:
   - `const { contentBlocks, entityMap } = blocksFromHtml;`: Desestructura el objeto `blocksFromHtml` para obtener `contentBlocks` y `entityMap`. `contentBlocks` representa el contenido estructurado del texto, mientras que `entityMap` maneja los datos adicionales relacionados con entidades como imágenes o enlaces.

5. **Creación de `contentState`**:
   - `const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);`: Crea un `contentState` utilizando `ContentState.createFromBlockArray()`. Este `contentState` es esencialmente un objeto que contiene el estado completo del contenido editable, incluyendo los bloques de texto y cualquier entidad asociada como imágenes o links.

6. **Creación de `editorState`**:
   - `const editorState = EditorState.createWithContent(contentState);`: Utiliza `EditorState.createWithContent()` para crear un estado inicial del editor de texto (`EditorState`) que contiene el `contentState` creado anteriormente. Esto prepara el editor para mostrar y permitir la edición del contenido pasado.

7. **Actualización del Estado Local (`setState`)**:
   - `this.setState({ editorState });`: Actualiza el estado local del componente (`this.state.editorState`) con el nuevo `editorState` creado. Esto hace que el editor de texto enriquecido muestre el contenido HTML proporcionado y esté listo para ser editado.


[Codigo poblar el form del blog desde edición](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/911ec791ec32179b5107c657b16f0c50d55f7c93)


## Estilos para la imagen del blog-form en edición

[Codigo estilos para la imagen ](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/f54065c1b5e88444c863e202385409baee38221f)


## Eliminación de imagen en edición

1. **Replicación de Funcionalidades Existentes**:
   - Replicamos el trabajo del formulario de cartera y el formulario del administrador de cartera para integrarlo en el formulario de blog. La funcionalidad es similar, así que reutilizamos el código con las adaptaciones necesarias.

2. **Implementación de la Función deleteImage**:
   - Dentro del formulario de cartera (`formulario-cartera.js`), tenemos la función `deleteImage`. Esta función se copiará y se adaptará para el formulario de blog (`formulario-blog.js`).

3. **Refactorización y DRY**:
   - Al copiar y pegar código, es importante considerar el principio DRY (Don't Repeat Yourself). En un escenario ideal, podríamos crear una función auxiliar o un componente reutilizable para evitar la duplicación de código. Por limitaciones de tiempo, se procede con la copia y adaptación directa del código.

4. **Configuración de la Función deleteImage en Blog**:
   - Se añade la función `deleteImage` al formulario de blog y se vincula (`bind`) esta función al contexto de `this`.
   - Se actualiza la URL dentro de la función `deleteImage` para que apunte al endpoint correcto (`delete-portfolio-blog-image`).

5. **Actualización del Estado del Componente**:
   - En lugar de actualizar el estado local, como en el formulario de cartera, se llama a una propiedad (`prop`) funcional que se creará para manejar la eliminación de la imagen destacada en el formulario de blog.

6. **Renderizado Condicional en JSX**:
   - Se añade un `onClick` en el JSX del formulario de blog para que al hacer clic en "Eliminar archivo", se llame a `this.deleteImage` con el tipo de imagen adecuado.

7. **Implementación y Vinculación de Función en Blog Detalle**:
   - En `blog-detalle.js`, se crea una nueva función llamada `handleFeaturedImageDelete` para manejar la eliminación de la imagen destacada.
   - Esta función se vincula al estado del componente y se pasa como una propiedad al formulario de blog.

8. **Llamada a la Función desde el Formulario de Blog**:
   - Se modifica el formulario de blog para llamar a `this.props.handleFeaturedImageDelete` dentro de `deleteImage` una vez que la imagen ha sido eliminada en el servidor.


[Codigo eliminación de imagen en edición](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/50fe5ed7e211c1c79fbe11ccfef28f533a073122)


## Implementación del Componente de Formulario de Blog con Funcionalidad de actualización si estoy en edición

En este resumen, continuamos con la implementación de la funcionalidad de eliminación de imagen en nuestro formulario de blog y el manejo del estado en React para asegurar una experiencia de usuario fluida.

### 1. Extender el Estado del Formulario de Blog

Primero, extendemos el estado del componente `BlogForm` para incluir `apiUrl` y `apiAction`. Estos se utilizan para determinar la URL y el método HTTP que se usará en las solicitudes de la API.

- **Archivos afectados**: `BlogForm.js`
- **Atributos añadidos al estado**:
  - `apiUrl`
  - `apiAction`

### 2. Configurar URL y Acción en `componentWillMount`

En el método `componentWillMount`, establecemos la URL y la acción según el modo de edición del blog. Si estamos en modo de edición, utilizamos la URL de la entrada existente y el método `PATCH`. Si estamos creando una nueva entrada, utilizamos la URL para nuevas entradas y el método `POST`.

- **Archivos afectados**: `BlogForm.js`
- **Método**: `componentWillMount`
- **Cambios**:
  - Condición para establecer `apiUrl` y `apiAction`.

### 3. Actualizar `handleSubmit` para Usar `apiUrl` y `apiAction`

Actualizamos el método `handleSubmit` para que utilice `this.state.apiUrl` y `this.state.apiAction`, asegurando que la solicitud a la API sea dinámica según el contexto (creación o edición).

- **Archivos afectados**: `BlogForm.js`
- **Método**: `handleSubmit`
- **Cambios**:
  - Uso de `this.state.apiUrl`
  - Uso de `this.state.apiAction`

### 4. Manejo de Respuesta de la API

En la respuesta de la API en `handleSubmit`, diferenciamos entre creación y actualización. Si estamos en modo de edición, llamamos a un método para manejar la actualización del blog en el estado del componente de detalles del blog.

- **Archivos afectados**: `BlogForm.js`
- **Método**: `handleSubmit`
- **Cambios**:
  - Condición para diferenciar entre `handleSuccessfulFormSubmission` y `handleUpdateFormSubmission`.

### 5. Implementar `handleUpdateFormSubmission`

Implementamos el método `handleUpdateFormSubmission` en el componente de detalles del blog. Este método actualiza el estado con los datos del blog editado y cambia el modo de edición a `false`.

- **Archivos afectados**: `BlogDetail.js`
- **Método**: `handleUpdateFormSubmission`
- **Cambios**:
  - Actualización del estado del componente de detalles del blog.

### 6. Pasar Propiedades al Componente de Formulario de Blog

Pasamos la propiedad `handleUpdateFormSubmission` al componente `BlogForm` desde el componente de detalles del blog para manejar la operación de actualización de formulario.

- **Archivos afectados**: `BlogDetail.js`
- **Método**: `render`
- **Cambios**:
- Paso de propiedades a `BlogForm`.

[Codigo actualización blog-form en edición](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/f08053ad5e3077bcdd1afd6c935c19baf390108d)


## Implementación de Mejora de Seguridad en el Formulario de Blog

### 1. Configuración de la Propiedad `loggedInStatus` en la Ruta

Primero, configuraremos la propiedad `loggedInStatus` en la ruta que maneja el detalle del blog en el archivo `App.js`. Esto permitirá que el componente `BlogDetail` tenga acceso al estado de autenticación del usuario. Realizaremos ajustes en la definición de la ruta para incluir esta propiedad utilizando la técnica de renderizado.

### 2. Condicional en el Administrador de Contenido

Dentro del componente `BlogDetail.js`, actualizaremos el método `contentManager`. Aquí, agregaremos una condición que verificará tanto el modo de edición (`editMode`) como el estado de autenticación (`loggedInStatus`) antes de renderizar el `BlogForm`. Si ambos son verdaderos, se mostrará el formulario; de lo contrario, se mantendrá la vista normal del blog.

### 3. Verificación en el Método `handleEditClick`

En `BlogDetail.js`, modificaremos el método `handleEditClick` para incluir una verificación del estado de autenticación del usuario (`loggedInStatus`). Solo si el usuario está autenticado, el estado cambiará a modo de edición (`editMode`).

### 4. Pruebas y Verificación

Realizaremos pruebas para asegurarnos de que:
- El formulario de blog solo es accesible en modo de edición si el usuario está autenticado.
- Si no se está autenticado, no se puede cambiar al modo de edición.
- Utilizaremos la herramienta de React Developer Tools para verificar que el estado `editMode` no cambia si el usuario no está autenticado.


[Codigo parches de seguridad no acceso a blog-form sin logueo](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/a708d2799c474bcebf0e3c83204fa0794ef4b38f)

## Estilos a la página About

### 1. Estructura del Componente
- Crear el componente funcional llamado `About`.
- Añadir las dos columnas necesarias dentro del componente: una para la imagen y otra para el contenido biográfico.

### 2. Importación de la Imagen
- Importar la imagen de perfil desde el directorio correspondiente dentro del proyecto.

### 3. Definición de Estilos
- Crear un archivo de estilos `layouts.scss` para gestionar los estilos de diseño.
- Definir una clase contenedora que utilice CSS Grid para dividir la página en dos columnas.
- Aplicar Flexbox en la columna de contenido para centrar el texto biográfico vertical y horizontalmente.

### 4. Ajuste de Altura para Evitar Desbordamientos
- Utilizar la función `calc` para ajustar la altura del contenedor de la página, asegurando que ocupe el 100% de la altura de la vista menos la altura del menú de navegación.


[Codigo estilos en la página about](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/f793ee99d79f92411de5fe1332d1c4c69c8c4171)


## Estilos a la página de Contacto

1. **Importación de Imagen:**
   - Utilizar la misma imagen que se usa en la página de autenticación (login.jpg) para el lado izquierdo de la página.

2. **Estilizado de las Columnas:**
   - Configurar el contenedor principal para que utilice CSS Grid, dividiendo el espacio en dos columnas iguales.
   - Asegurarse de que la imagen de fondo en la columna izquierda cubra todo el espacio de manera adecuada.

3. **Incorporación de Íconos:**
   - Buscar íconos relacionados con la información de contacto en Font Awesome (por ejemplo, teléfono, dirección, correo electrónico).
   - Integrar estos íconos en la columna derecha junto con el texto de contacto correspondiente.

4. **Alineación y Diseño:**
   - Utilizar Flexbox dentro de la columna derecha para alinear los íconos y el texto de contacto de manera vertical y horizontal.
   - Aplicar estilos específicos para el tamaño y color de los íconos y el espaciado entre los elementos.


[Codigo estilos en la página de contacto](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/0a7052bcb8e12a55cf18d18ad4f7aff2ca2d64e0)

## Implementar una Página de Detalles del Portafolio en una Aplicación React

#### Objetivo
Crear una página de detalles del portafolio donde cada elemento del portafolio sea cliqueable, redirigiendo al usuario a una página específica que muestre más información sobre el elemento seleccionado. Esta página de detalles debe obtener los datos necesarios desde una API.

#### Pasos Detallados

1. **Estructura de Archivos y Componentes:**
   - **PortfolioContainer:** Organiza todos los elementos del portafolio.
   - **PortfolioItem:** Representa cada elemento individual del portafolio.
   - **PortfolioDetail:** Página que muestra los detalles de un elemento seleccionado.

2. **Enrutamiento:**
   - Definir una ruta en el archivo de rutas principal para la página de detalles del portafolio (`portfolio/:slug`).
   - Asegurarse de que cada `PortfolioItem` esté envuelto en un componente `Link` de `react-router-dom` para permitir la navegación a la página de detalles.

3. **Modificar PortfolioItem:**
   - Envolver el contenido del elemento en un componente `Link` que redirige a `portfolio/:id`.

4. **Crear PortfolioDetail:**
   - Crear o modificar la página `PortfolioDetail` para obtener y mostrar los datos del portafolio utilizando el ID de la URL.

### Detalles de Implementación

#### 1. **Estructura del Archivo de Enrutamiento:**
   - Definir una ruta en `routes.js` para `portfolio/:slug`.

#### 2. **Envolver PortfolioItem en un Link:**
   - En el archivo `portfolio-item.js`, envolver el contenido del `PortfolioItem` en un componente `Link`.

#### 3. **Implementar PortfolioDetail:**
   - Crear o modificar el archivo `portfolio-detail.js` para obtener y mostrar los datos del portafolio usando `axios` para llamar a la API.

### Resumen
1. **Estructura de Archivos y Componentes:**
   - **`PortfolioContainer`:** Organiza todos los `PortfolioItem`.
   - **`PortfolioItem`:** Representa cada elemento del portafolio, con un enlace a la página de detalles.
   - **`PortfolioDetail`:** Muestra detalles del portafolio, obteniendo datos desde la API usando el ID en la URL.

2. **Enrutamiento y Navegación:**
   - Configurar la ruta `portfolio/:slug` en el archivo de rutas principal.
   - Asegurar que `PortfolioItem` use `Link` para navegar a `PortfolioDetail`.

3. **Consumo de API en PortfolioDetail:**
   - Usar `axios` para obtener datos desde la API en el método `componentDidMount`.
   - Mostrar los datos obtenidos en la página de detalles del portafolio.


[Codigo recuperar los datos del portfolio en portfolio details](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/4188eb59cbe2bf0828fd73785cb88187fe6267c0)

## Mostar datos recibido enla Página de Detalles del Portafolio 

### Pasos Detallados

1. **Obtención de Datos:**
   - Utilizar `axios` para hacer una llamada a la API y obtener los detalles del elemento del portafolio.
   - Almacenar estos datos en el estado de `portfolioItem` usando `setState`.

2. **Actualización del Estado:**
   - En el constructor, inicializar `portfolioItem` como un objeto vacío en el estado.
   - En el método `componentDidMount`, actualizar `portfolioItem` con los datos obtenidos de la API.

3. **Representación en la Interfaz de Usuario:**
   - Desestructurar `portfolioItem` en el método `render` para acceder a sus atributos como variables.
   - Utilizar estas variables para mostrar dinámicamente los detalles del elemento del portafolio en la interfaz de usuario.

[Codigo renderizar parte de los datos recibidos ](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/6c9c76d4d575626f789295f6b43f480c1f4549c5)

Claro, aquí tienes una descripción simplificada de cómo abordé la implementación de la página de detalles del portafolio en React:

## Implementación de Detalles de Portafolio

1. **Creación de Estructura HTML y Estilos CSS:**

   - **Envoltura Principal**: Comencé creando un contenedor principal para los detalles del portafolio (`portfolio-detail-wrapper`). Este contenedor se diseñó para ocupar todo el ancho de la vista.

   - **Banner**: Implementé un banner dentro del contenedor principal para mostrar la imagen principal del portafolio. Utilicé estilos en línea para manejar la imagen de fondo de manera dinámica y asegurar que se vea atractiva y centrada.

   - **Descripción**: Incluí un área para la descripción del portafolio, utilizando un contenedor específico (`portfolio-detail-description-wrapper`). Este contenedor se diseñó para centrar el texto y proporcionar un espacio visualmente limpio para la descripción del proyecto.

   - **Contenido Inferior**: Finalmente, agregué un área para el contenido inferior que incluye un enlace al sitio web del portafolio. Diseñe este enlace para parecer un botón, utilizando estilos que proporcionan feedback visual cuando se interactúa con él.

   [Codigo stilos detalle porfolio](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/4bcf72e0d077e231df5aacef4cc1a4c68e369260)


## Resumen de la Implementación de Filtros en la Página de Portafolio de React

#### Problema Inicial
En la página de portafolio de nuestra aplicación, los usuarios pueden filtrar los elementos por categorías como comercio electrónico, programación y empresa. Sin embargo, al aplicar múltiples filtros, algunos elementos desaparecían debido a la reducción secuencial de la lista de elementos. No había una forma clara de restablecer los filtros sin recargar la página, lo cual afectaba negativamente la experiencia del usuario.

#### Solución Propuesta
Para solucionar esto, adoptamos un enfoque de dos frentes:

1. **Cambios en la Interfaz de Usuario (UI)**
   - **Botón de "Borrar Filtros"**: Añadimos un botón que permite a los usuarios restablecer los filtros y ver todos los elementos del portafolio nuevamente.
   - **Rediseño de la Disposición de los Filtros**: Colocamos los botones de filtro en su propio contenedor para mejorar la organización y la accesibilidad en la interfaz de usuario.

2. **Funcionalidad de Filtrado Dinámico**
   - **Ajustes en la Función `getPortfolioItems`**: Modificamos esta función para aceptar un argumento opcional de filtro. Esto permite recuperar todos los elementos o solo aquellos que coincidan con la categoría especificada.
   - **Condición de Restablecimiento**: Añadimos una condición en la función de manejo de filtros (`handleFilter`) para que, cuando se seleccione "CLEAR_FILTERS", se recuperen todos los elementos de la API.

#### Implementación Paso a Paso

1. **Rediseño del Contenedor de Filtros**
   - Creamos un nuevo contenedor para los botones de filtro (`filter-links`) y los colocamos dentro de un contenedor principal (`homepage-wrapper`).

2. **Añadir Botón de Borrar Filtros**
   - Implementamos un botón con la acción de restablecer los filtros, que llama a la función `handleFilter` con el valor "CLEAR_FILTERS".

3. **Actualización de Estilos CSS**
   - Aseguramos que los botones de filtro y el contenido del portafolio se muestren de manera organizada y responsiva utilizando CSS Grid y Flexbox.

4. **Modificación de la Lógica de Filtrado**
   - En la función `getPortfolioItems`, añadimos lógica para manejar casos en los que se pasa un filtro específico o ninguno (para recuperar todos los elementos).
   - Actualizamos la función `handleFilter` para usar la nueva lógica de filtrado dinámico.

[Codigo filtrado home para poder filtrar sin recargar ](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/60869f7bc6de5289918cffe290dfd034b905e2e7)

## Eliminar blog en la página de Blog.js -> BlogItem

1. **Modificación del componente `BlogItem` para mostrar el icono de eliminación para usuarios autenticados**:

   - Abrimos el archivo `blog.js` y actualizamos el método `render` para mostrar un icono de eliminación si el usuario está autenticado.

2. **Creación del método `handleDeleteClick` para manejar la eliminación de blogs**:

   - Creamos el método `handleDeleteClick` que hará la solicitud a la API para eliminar el blog y actualizará el estado local.

3. **Actualización de los estilos para el contenedor de blogs de administración**:

   - Modificamos el archivo de estilos `blog.scss` para agregar estilos al contenedor de blogs de administración y al icono de eliminación.

### Actualización del componente `BlogItem`

Actualizamos el método `render` en el archivo `blog.js` para incluir el icono de eliminación para usuarios autenticados:


[Codigo eliminar blog](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/477775088e01398642953a7b08d22b329c241352)

### Implementación estilos en el Formulario de Autenticación

1. **Creación del Contenedor del Formulario**:
   - Se creó un contenedor con una clase específica para envolver todo el formulario.

2. **Añadir Grupos de Formulario**:
   - Cada campo de entrada (email y contraseña) se envolvió en un `div` con una clase específica para agrupar el icono y el campo de entrada.

3. **Integración de Iconos de FontAwesome**:
   - Se importaron y utilizaron iconos de FontAwesome para los campos de email y contraseña.

4. **Replicación de la Estructura del Campo de Contraseña**:
   - Se replicó la estructura del campo de correo electrónico para el campo de contraseña, utilizando un icono diferente.

5. **Adición del Botón de Envío**:
   - Se añadió un botón de envío con una clase específica para el estilo.

##### Archivos Involucrados

- **login.js**: Define la estructura del formulario y los campos.
- **icon.js**: Importa y configura los iconos de FontAwesome.
- **authentication.scss**: Contiene los estilos y diseño del formulario utilizando SCSS, flexbox y grid (aunque no se incluyen los detalles CSS/SCSS en este resumen).


[Codigo estilos pagina autenticación](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/0d19c98c7b400fd6c3c2fee97df9a93c9bddf034)

# DESPLIEGUE

## RENDER

### **Pasos para Desplegar una Aplicación React en Render**

#### 1. **Preparar tu Aplicación React**

Antes de comenzar con el despliegue, asegúrate de que tu aplicación React esté lista para producción. Esto incluye:

- **Construir tu Aplicación**:
  - Asegúrate de que tu aplicación React esté construida y lista para ser desplegada.
  - En el directorio raíz de tu proyecto, ejecuta:

    ```bash
    npm run build
    ```

  - Esto creará una carpeta `build` que contiene los archivos listos para producción.

#### 2. **Crear una Cuenta en Render**

1. **Registrarse en Render**:
   - Ve a [Render](https://render.com) y regístrate para una cuenta si aún no tienes una.

2. **Iniciar Sesión**:
   - Una vez registrado, inicia sesión en tu cuenta de Render.

#### 3. **Configurar el Repositorio**

Render se integra con sistemas de control de versiones como GitHub, GitLab, y Bitbucket. Asegúrate de que tu código esté en un repositorio de Git antes de continuar.

1. **Subir tu Código a un Repositorio**:
   - Si aún no lo has hecho, sube tu aplicación React a un repositorio en GitHub, GitLab o Bitbucket.

#### 4. **Crear un Nuevo Servicio en Render**

1. **Ir a la Página de Servicios**:
   - En el panel de Render, ve a la pestaña **"New+"** y selecciona **"Web Service"**.

2. **Conectar tu Repositorio**:
   - Elige el proveedor de Git (GitHub, GitLab, o Bitbucket) y autoriza a Render a acceder a tus repositorios.
   - Selecciona el repositorio que contiene tu aplicación React.

3. **Configurar el Servicio**:
   - **Nombre del Servicio**: Escribe un nombre para tu servicio (puede ser el nombre de tu aplicación o algo descriptivo).
   - **Región**: Selecciona la región en la que deseas desplegar tu aplicación.
   - **Rama de Git**: Selecciona la rama que deseas desplegar (por lo general, `main` o `master`).

4. **Configuración de Construcción y Ejecución**:
   - **Build Command**:
     - Especifica el comando para construir tu aplicación React. Normalmente, para aplicaciones React, esto es `npm run build`.

   - **Start Command**:
     - Render no requiere un comando de inicio específico para aplicaciones estáticas, pero puede configurarse como `serve -s build` si usas el paquete `serve` de npm para servir archivos estáticos.
     - Si no estás seguro, puedes usar `npx serve -s build` para ejecutar la aplicación en un entorno de producción local.

   - **Build & Start Commands**:
     - En la mayoría de los casos para aplicaciones React estáticas, solo necesitas el comando de construcción.

5. **Configurar Variables de Entorno** (Opcional):
   - Si tu aplicación React necesita variables de entorno, configúralas en la sección correspondiente. Puedes agregar variables de entorno como claves API o configuraciones específicas.

6. **Desplegar la Aplicación**:
   - Revisa la configuración y haz clic en **"Create Web Service"** para comenzar el proceso de despliegue.
   - Render comenzará a construir y desplegar tu aplicación. Puedes ver el progreso en el panel de Render.

## Desplegar una Aplicación React en Render

### 1. Pre-requisitos
- Tener una cuenta en [Render](https://render.com/).
- Tener tu código fuente de la aplicación React listo en un repositorio de GitHub.

### 2. Preparar la Aplicación React
Asegúrate de que tu aplicación React esté lista para producción. Puedes hacerlo ejecutando el siguiente comando en tu terminal:
```bash
npm run build
```
Este comando creará una carpeta `build` con los archivos optimizados para producción. Incluir la carpeta dist en el archivo `.gitignore`.

### 3. Crear un Repositorio en GitHub
1. Inicia sesión en tu cuenta de GitHub.
2. Crea un nuevo repositorio y sube tu código fuente.

### 4. Configurar Render

#### Paso 1: Crear un nuevo Static Site
1. Ve a tu [tablero de Render](https://dashboard.render.com/).
2. Haz clic en el botón **"New +"** y selecciona **"Static Site"**.

#### Paso 2: Conectar con GitHub
1. Render te pedirá que conectes tu cuenta de GitHub. Autoriza la aplicación Render para acceder a tus repositorios de GitHub.
2. Selecciona el repositorio que contiene tu aplicación React.

#### Paso 3: Configurar los detalles del despliegue
1. **Nombre del sitio**: Elige un nombre para tu sitio.
2. **Región**: Selecciona la región más cercana a tus usuarios.
3. **Branch**: Selecciona la rama de GitHub desde la cual quieres desplegar (normalmente `main` o `master`).
4. **Build Command**: El comando para construir tu aplicación. Usa el siguiente:
   ```bash
   npm run build
   ```
5. **Publish Directory**: La carpeta que contiene los archivos estáticos generados. Usa `build`.

#### Paso 4: Desplegar
Haz clic en **"Create Static Site"**. Render comenzará a construir y desplegar tu aplicación. Esto puede tomar unos minutos.

### 5. Verificar el Despliegue
Una vez que el despliegue se complete, Render te proporcionará una URL donde puedes acceder a tu aplicación React. Verifica que todo funcione correctamente.

### Comandos Útiles

Aquí hay algunos comandos útiles que puedes necesitar durante este proceso:

- **Instalar dependencias**:
  ```bash
  npm install
  ```

- **Iniciar el servidor de desarrollo**:
  ```bash
  npm start
  ```

- **Construir la aplicación para producción**:
  ```bash
  npm run build
  ```

### Consideraciones Adicionales
- Si tu aplicación utiliza rutas dinámicas, asegúrate de configurar las reglas de redireccionamiento en Render para manejar correctamente las rutas.

## Datos de la aplicación publicada en render

1. Dirección en github:

[Codigo github](https://github.com/Marimar8888/mariadelmar-alonso-portfolio.git)

2. Dirección de render:

[Dirección render](https://render.com/)

3. Datos acceso al dashboard:

Usuario y contraseña: gmail (23) y contraseña (_ _ S)

4. Url del servicio publicado:

[Publicación](https://mariadelmar-alonso-portfolio.onrender.com)


# CREAR UN NUEVO PROYECTO DAILYSMARTY

El ejercicio consiste en crear una aplicación React con las siguientes características:

1. **Interfaz Conectada a una API**:
   - La aplicación se conectará a una API para obtener datos.
   - Se utilizará la API de DailySmarty, creada por Jordan Hudgens.

2. **Pantallas y Navegación**:
   - **Primera Pantalla**: Contiene una barra de búsqueda y una opción para realizar una consulta.
   - **Segunda Pantalla**: Después de realizar una búsqueda, se navega a esta pantalla usando React Router. Aquí se muestran los resultados de la búsqueda.

3. **Funcionalidades**:
   - **Enlaces Desplegables**: Al pasar el cursor sobre ciertos elementos, se mostrarán un conjunto de enlaces.
   - **Redirección**: Al hacer clic en estos enlaces, el usuario será redirigido a artículos útiles.

4. **Uso de la API de DailySmarty**:
   - La API permite buscar artículos y temas.
   - La aplicación mostrará las publicaciones recientes y permitirá realizar búsquedas de temas específicos.

5. **Detalles Técnicos**:
   - **JavaScript**: Se usará para hacer solicitudes a la API, preferiblemente utilizando promesas.
   - **React Router**: Para manejar la navegación entre pantallas.
   - **Font Awesome**: Para los íconos.
   - **Redux**: Se aprenderá y utilizará Redux para la gestión del estado, incluyendo middleware como Redux Promise o Redux Thunk.

6. **Desarrollo del Proyecto**:
   - **Componentes Reutilizables**: Se intentará separar la aplicación en componentes reutilizables.
   - **Git**: Crear un repositorio de Git para gestionar el código fuente.

## Paso a Paso

1. **Configurar el Repositorio en GitHub**:
   - Inicia sesión en [GitHub](https://github.com/).
   - Crea un nuevo repositorio (e.g., `DailySmartyui`).
   - Proporciona una descripción y establece la visibilidad (público o privado).

2. **Generar el Proyecto React**:
   - Abre una terminal.
   - De la pagina `https://www.npmjs.com/package/devcamp-js-builder` puedes acceder al código y documentación para crear una plantilla inicial. En este caso si aún no has instalado `devcamp-js-builder` deberás hacerlo poniendo en el lugar donde quieres crear el proyecto, a través del terminal `npm install devcamp-js-builder -g`.
   - A continuación ejecuta `js-generate`, project `react-redux-router`, con el nombre de `dailysmartyui`(esto crea un nuevo proyecto React).
   - Entra en el directorio del proyecto: `cd dailysmartyui`.
   - Abre el proyecto en tu editor, por ejemplo, con VS Code: `code .`.

3. **Configuración Inicial**:
   - Cambia el nombre del archivo `.gitignore.example` a `.gitignore`.
   - Instala las dependencias del proyecto: `npm install`.

4. **Configurar el Título de la Aplicación**:
   - Abre el archivo `public/index.html`.
   - Cambia el contenido de la etiqueta `<title>` a algo adecuado (e.g., "Daily Smarty").

5. **Verificar la Aplicación**:
   - Ejecuta el proyecto: `npm start`.
   - Abre tu navegador y ve a `http://localhost:3000` para confirmar que la aplicación está funcionando.

6. **Modificar el Componente Principal**:
   - Abre `src/App.js`.
   - Cambia el contenido para que refleje la estructura deseada, por ejemplo, reemplazando el texto inicial con "logo" o lo que necesites.

7. **Inicializar el Repositorio Git**:
   - En la terminal, inicializa el repositorio: `git init`.
   - Agrega el repositorio remoto de GitHub: `git remote add origin <URL-del-repositorio>`.
   - Agrega los archivos al área de preparación: `git add .`.
   - Realiza un commit inicial: `git commit -m "Proyecto generado"`.
   - Envía los archivos al repositorio remoto: `git push origin master`.

8. **Configuraciones Adicionales (opcional)**:
   - Una vez tienes el proyecto en marcha puedes desplegar el servicio en `render.com`. Lo lógico es hacerlo cuando esté ya bastante avanzado o casi terminado.


[Codigo primer commit con la plantilla](https://github.com/Marimar8888/dailySmarty/commit/bf11044554d16cce854458129c6e89841dd1244d)

## Creando los diferentes componentes

1. Insertar imagen - logo main

- Crear el componente `logo.js`.
- Importar el componente en `app.js` y renderizarlo.

[Codigo inserción logo ](https://github.com/Marimar8888/dailySmarty/commit/876669618e509707eee87e5e7642e566d3a76929)

2. Creando searchBar y el recentPost

- Instalar `redux-form` con el siguiente comando `npm i --save redux-form`.
- Crear los componentes `searchBar.js` y `recentPosts.js`.
- Importar los dos componentesy renderizarlos en `app.js`.

[Codigo](https://github.com/Marimar8888/dailySmarty/commit/0c7ff8955b4f3fcd17aa0454a47b7f9645480044)

3. Trabajar con searchBar

Explicación del código complejo:

```javascript
// Importa el módulo React y la clase Component desde la librería React
import React, { Component } from 'react';

// Importa Field y reduxForm desde la librería redux-form
import { Field, reduxForm } from 'redux-form';

// Define una clase SearchBar que extiende Component de React
class SearchBar extends Component {

    // Método para manejar el envío del formulario
    handleFormSubmit = function ({ query }) {
        // Imprime en consola la consulta que se está intentando manejar
        console.log("trying to handle submit for query", query);
    }

    // Método para renderizar un campo de entrada (input)
    renderInput(field) {
        // Retorna un campo de entrada con tipo 'text' y un placeholder
        // {...field.input} es un spread operator que aplica las propiedades necesarias del campo
        return <input type='text' placeholder='Search DailySmarty' {...field.input} />
    }

    // Método de renderizado del componente
    render() {

        // Extrae la función handleSubmit de las props del componente
        const { handleSubmit } = this.props;

        // Renderiza el formulario
        return (
            // Define un formulario con clase 'search-bar' y asocia el evento onSubmit
            // handleSubmit es una función proporcionada por redux-form que maneja la validación y el envío del formulario
            <form className='search-bar' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                {/* Define un campo de formulario utilizando el componente Field de redux-form */}
                {/* El nombre del campo es 'query' y el componente que se utiliza para renderizar el campo es renderInput */}
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}

// Utiliza reduxForm para conectar el formulario con Redux
// Se define un nombre para el formulario ('searchBar'), que debe ser único en toda la aplicación
SearchBar = reduxForm({
    form: 'searchBar'
})(SearchBar);

// Exporta el componente SearchBar como exportación por defecto del módulo
export default SearchBar;
```

### Explicación Detallada:

1. **Importaciones:**
   - `React` y `Component` son importados desde `react` para crear componentes React.
   - `Field` y `reduxForm` son importados desde `redux-form` para gestionar formularios con estado y validaciones en combinación con Redux.

2. **Definición de la Clase:**
   - `SearchBar` es una clase que extiende `Component`. Define el comportamiento y la estructura del componente de barra de búsqueda.

3. **Método `handleFormSubmit`:**
   - `handleFormSubmit` es una función que se ejecutará cuando el formulario sea enviado. Recibe un objeto con la propiedad `query` y simplemente imprime el valor de `query` en la consola.

4. **Método `renderInput`:**
   - `renderInput` es un método que devuelve un elemento `<input>`. Usa el operador de propagación (`...field.input`) para aplicar las propiedades del campo (`value`, `onChange`, etc.) a este input. `field` es un objeto proporcionado por `redux-form` que contiene información sobre el campo de entrada.

5. **Método `render`:**
   - El método `render` se encarga de generar el JSX del componente. Aquí se extrae `handleSubmit` de las props y se utiliza en el evento `onSubmit` del formulario para manejar el envío del formulario con `handleFormSubmit`.
   - `Field` es un componente de `redux-form` que se utiliza para vincular un campo de formulario con el estado de Redux. Se le pasa `name="query"` para identificar el campo y `component={this.renderInput}` para especificar cómo renderizar el campo de entrada.

6. **Conexión con Redux:**
   - `reduxForm` se utiliza para conectar el formulario con Redux. Se pasa un objeto de configuración con un nombre único para el formulario (`'searchBar'`), que debe ser el mismo en todas las partes de la aplicación donde se use este formulario.

7. **Exportación del Componente:**
   - Finalmente, `SearchBar` es exportado como la exportación por defecto del módulo para que pueda ser importado y utilizado en otras partes de la aplicación.

[Codigo ](https://github.com/Marimar8888/dailySmarty/commit/0feab24018d73eb155fb4711bd21313c32acd1cd)

## Creando el enrutamiento

1. Creación del Home y results. Sin crear aún el componente results.

[Codigo](https://github.com/Marimar8888/dailySmarty/commit/e58cdca33aebc39aa893f35ce15c30cecf3b5d30)

2. Creación del componente Results y terminar de enrutar correctamente.

[Codigo ](https://github.com/Marimar8888/dailySmarty/commit/949989aba32b3ae740d0785c34b8213b450b6bfd)

## Utilización de un HOC para enrutar

`"Componente de Orden Superior"` en español. Un `HOC` es una función que toma un componente y devuelve un nuevo componente con funcionalidades adicionales. Es una técnica utilizada en React para reutilizar lógica y agregar comportamiento a componentes sin tener que modificar directamente los componentes originales.

El `withRouter` es un ejemplo de un HOC proporcionado por la biblioteca react-router-dom, que es usada para el manejo de rutas en aplicaciones React.

### Cómo Funciona `withRouter`

**`withRouter`** es una función de React Router que te permite acceder a las propiedades de enrutamiento (`history`, `location`, `match`) en un componente que no está directamente en la jerarquía de `<Route>`.

#### **¿Qué Hace `withRouter`?**

- **Proporciona Acceso al Enrutador**: Permite que un componente obtenga acceso a la funcionalidad de enrutamiento, como la capacidad de cambiar la URL o leer información de la URL actual.
  
- **Redirigir a Otras Rutas**: Con `withRouter`, puedes usar `this.props.history.push('/ruta')` dentro del componente para redirigir al usuario a una nueva ruta (por ejemplo, `/results`).

#### **¿Cómo Se Usa?**

1. **Importa `withRouter`**:
   ```javascript
   import { withRouter } from 'react-router-dom';
   ```

2. **Envuelve el Componente**:
   ```javascript
   export default withRouter(SearchBar);
   ```
   Esto envuelve tu componente `SearchBar` con el comportamiento de enrutamiento.

3. **Accede a las Propiedades de Enrutamiento**:
   - Dentro del componente envuelto, puedes usar `this.props.history`, `this.props.location`, y `this.props.match`.
   - Por ejemplo, `this.props.history.push('/results')` cambiará la URL y redirigirá al usuario a la página de resultados.

[Codigo ](https://github.com/Marimar8888/dailySmarty/commit/aea0143b1f86a10f9d209fff534b89b3a0e9a77b)


## Creando estilos

1. Documentación fundamental para entender los estilos grid

[Estilos css](https://css-tricks.com/snippets/css/complete-guide-grid/)



[Codigo ]()
[Codigo ]()
[Codigo ]()