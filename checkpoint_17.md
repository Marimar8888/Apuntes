# Portofolio Continuación
## Portfolio manager

### Crear un select en porforlio-fom

Este es el proceso para crear una etiqueta de selección para la categoría de un elemento en una aplicación de cartera. En lugar de usar una entrada de texto, se cambia a un menú desplegable (select) para la categoría. Los pasos incluyen:

1. **Cambio de Entrada a Select**: Se sustituye la entrada actual por una etiqueta select.
2. **Configuración de Atributos**: La etiqueta select tendrá los atributos name, value y onChange.
3. **Añadir Opciones**: Dentro de la etiqueta select, se colocan opciones específicas como "Tecnology", "Education"...
4. **Valor y Visualización**: El valor de cada opción se almacenará en el estado y se mostrará en el menú desplegable.
5. **Prueba en el Navegador**: Se prueba el menú desplegable en Google Chrome, asegurando que las categorías se actualicen correctamente en la aplicación y en la base de datos.

Finalmente, se resalta la simplicidad de implementar una etiqueta de selección en React y se menciona que en la próxima guía se creará la descripción usando una etiqueta de área de texto.

[Codigo portfolio crear un select](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/5be5c01d71d9dc55d35b7e2b537cc05c47de419a)

### Crear un textarea en porforlio-fom

Cómo implementar una etiqueta de área de texto en React y se menciona una diferencia clave con HTML tradicional. Aquí están los puntos principales:

1. **Diferencia con HTML Normal**: En HTML, una etiqueta de área de texto tradicional tiene una etiqueta de apertura y cierre, con el contenido entre ellas.
2. **Uso en JSX**: En JSX, se puede usar una sintaxis de cierre automático. Se cambia la etiqueta de entrada por área de texto y se guarda.
3. **Prueba en el Navegador**: Se prueba la etiqueta de área de texto para asegurarse de que funciona correctamente, permitiendo la entrada de cualquier contenido.
4. **Observación de Errores**: Se menciona un error en la etiqueta de selección, donde el valor predeterminado no se envía correctamente, resultando en un valor nulo.
5. **Próxima Guía**: Se abordará y corregirá este error en la próxima guía, para entender mejor algunos conceptos clave de React y solucionar el problema.

Esta guía es breve y se centra en la facilidad de uso y la similitud del área de texto con el HTML normal, pero genera un error en el select ya que no ha guardado la opción elegida. 

[Codigo portfolio textarea](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/0a9d62e5b4bd2dde17ad8f19342784af2bac1f3a)

## Solución del error del select

Hay un error que se produce en el select, ya que si no elijo una opción, aunque esté viendo la primera categoría, al no actualizar el estado, el valor de estado inicial es "" y por tanto se registra un null. 

1. **Razón del Problema**: El valor predeterminado en el JSX no afecta el estado inicial del componente. Si el usuario no interactúa con el menú desplegable, el método handleChange no se ejecuta, dejando el estado sin actualizar.
2. **Solución Propuesta**: La solución más sencilla es establecer un valor predeterminado en el estado dentro del constructor. Esto asegura que el estado no sea una cadena vacía cuando se monta el componente.
   
[Codigo portfolio solución error select ](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/aeba8c8874f3c51a7d775a78745e25a8f44b36af)


## Actualización automática sidebar 

El texto describe el proceso después de crear un nuevo registro en una aplicación React, específicamente en el componente `portfolio-form.js`. Aquí tienes un resumen:

1. **Uso de `handleSuccessfulFormSubmission`**:
   - Se trata de una propiedad pasada a `PortfolioForm` que espera un objeto `portfolioItem`.
   - Se modifica el código para llamar a `this.props.handleSuccessfulFormSubmission(response.data.portfolio_item)` al recibir una respuesta exitosa de creación de un registro.

2. **Actualizar estado en React**:
   - Se revisa cómo agregar un nuevo elemento a un estado que es una matriz (`portfolioItems`).
   - Se explica que, en lugar de usar `push`, se debe usar `concat` para crear una nueva matriz con el nuevo `portfolioItem` en la parte superior.
   - Esto asegura que el nuevo elemento se apile en la parte superior de la lista de elementos del portafolio.

3. **Comprobación y demostración**:
   - Se verifica el funcionamiento actualizando la aplicación y observando en la consola que el nuevo registro aparece en la parte superior de la lista.
   - Se menciona que si se actualiza el componente (`Command + R`), los elementos pueden perder el orden deseado ya que la API no los devuelve ordenados.

4. **Parámetros opcionales en la API**:
   - Se introduce un truco para ordenar los elementos por el parámetro `created_at` de forma descendente usando la URL:
     ```
     https://jordan.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc
     ```
   - Explica que estos parámetros permiten ordenar y manejar los datos según necesidades específicas.

5. **Conclusión**:
   - La combinación de concatenar nuevos elementos en el estado y utilizar parámetros de la API permite que los registros más recientes siempre aparezcan en la parte superior de la lista, asegurando que la aplicación funcione según lo esperado.

[Codigo portfolio actualización sidebar automáticamente](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/ba26aaaa6cdf8b64bcffb1ed8260a4d7421ede5b)

## Creación interfaz subida de archivos

Dropzone en React es un componente que facilita la implementación de áreas de arrastrar y soltar (drag and drop) para subir archivos en aplicaciones web. Su propósito principal es simplificar la interacción del usuario al permitirle arrastrar archivos directamente a una zona designada en lugar de tener que usar un botón tradicional de "Seleccionar archivo".

### Para qué sirve Dropzone en React:
1. **Subida de Archivos**: Permite a los usuarios subir archivos a la aplicación.
2. **Interfaz Intuitiva**: Mejora la experiencia del usuario proporcionando una manera más intuitiva de seleccionar archivos.
3. **Personalización**: Ofrece opciones para personalizar el estilo y el comportamiento de la zona de arrastre y el proceso de subida.

### Beneficios:
- **Fácil Integración**: Se integra fácilmente en componentes de React.
- **Eventos Personalizables**: Permite manejar eventos como cuando un archivo es soltado o cuando la subida está completa.
- **Soporte para Validaciones**: Puede validar tipos de archivo y tamaños antes de la subida.


### Instalación Dropzone component

El texto proporciona una guía detallada para integrar la funcionalidad de carga de imágenes en una aplicación React utilizando la biblioteca `React Dropzone Component`. Aquí tienes un resumen:

1. **Introducción a Dropzone**:
   - Dropzone es una biblioteca JavaScript popular para la carga de archivos, usada en muchas aplicaciones.
   - Existe una versión específica para React llamada `React Dropzone Component`, que facilita su uso en aplicaciones React.

2. **Instalación de `React Dropzone Component`**:
   - Se debe instalar la biblioteca usando el siguiente comando en la terminal:
     ```bash
     npm i react-dropzone-component
     ```
   - Esta acción incorporará la dependencia necesaria en el proyecto.

3. **Consideraciones durante la instalación**:
   - Durante la instalación, NPM puede detectar vulnerabilidades de seguridad en las dependencias.
   - Para solucionar estas vulnerabilidades, se pueden usar los comandos:
     ```bash
     npm audit
     npm audit fix
     ```
   - `npm audit` muestra las vulnerabilidades detectadas.
   - `npm audit fix` intenta corregirlas automáticamente instalando parches actualizados.

4. **Proceso de corrección de vulnerabilidades**:
   - Se recomienda corregir las vulnerabilidades de inmediato para evitar problemas de seguridad y compatibilidad futuros.
   - Después de ejecutar `npm audit fix`, se debe reiniciar la aplicación para asegurarse de que todo sigue funcionando correctamente:
     ```bash
     npm run start
     ```

5. **Verificación del funcionamiento**:
   - Tras la corrección y reinicio, verificar que la aplicación funciona correctamente y que las vulnerabilidades han sido solucionadas.

6. **Preparación para la integración de Dropzone**:
   - Con la biblioteca `React Dropzone Component` instalada y el sistema actualizado, se está listo para comenzar a integrarla en el formulario de carga de imágenes en la próxima guía.

## Utilización de Dropzone con imagenes

1. **Importar Dependencias y Estilos**: Importa el componente `DropzoneComponent` y las hojas de estilo necesarias (`filepicker.css` y `dropzone.min.css`).

2. **Configurar el Componente Dropzone**:

   - Crea un método `componentConfig` para definir la configuración del tipo de archivos aceptados y la URL de simulación para las cargas. Esta función devuelve un objeto de configuración para el componente Dropzone. Esta configuración define algunas características generales de la zona de arrastre.

    ```jsx
    componentConfig() {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post/"
        }
    }
    ```

      - **`iconFiletypes`**: Especifica los tipos de archivo que mostrarán un ícono en la zona de arrastre. En este caso, los archivos con extensiones `.jpg` y `.png` mostrarán un ícono.
      - **`showFiletypeIcon`**: Si se establece en `true`, mostrará el ícono del tipo de archivo junto al nombre del archivo en la zona de arrastre.
      - **`postUrl`**: La URL a la que se enviarán los archivos cuando se suban. En este caso, se está utilizando "https://httpbin.org/post/", que es un servicio de prueba que devuelve los datos que se le envían.

   - Crea un método `djsConfig` para establecer opciones adicionales como permitir enlaces de eliminación y limitar el número de archivos. Esta función devuelve un objeto de configuración específico para DropzoneJS, la biblioteca subyacente utilizada por `react-dropzone-component`.

    ```jsx
    djsConfig() {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        }
    }
    ```
    - **`addRemoveLinks`**: Si se establece en `true`, permite a los usuarios eliminar archivos subidos mostrando enlaces de eliminación junto a cada archivo.
    - **`maxFiles`**: Establece el número máximo de archivos que se pueden subir. En este caso, se limita a 1 archivo.

3. **Inicializar Configuraciones**: Enlaza los métodos de configuración (`componentConfig` y `djsConfig`) en el constructor del componente.

4. **Agregar Dropzone en el Renderizado**: Incluye el componente `DropzoneComponent` en el método de renderizado de tu componente de formulario, pasando las configuraciones como propiedades.

[Codigo portfolio interfaz subida 1 archivo sin terminar](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/82dd5b542063e8496b852297cdab848dadb18c02)

## Subida imagen al servidor

1. **Método de Manejo de Archivos**: Crear un método de controlador (`handleThumbDrop`) que se activa cuando se suelta una imagen en el componente Dropzone. Este método:
   - Recibe el archivo y actualiza el estado del componente con la imagen cargada.

2. **Vinculación del Método**: Enlazar el método de manejo (`handleThumbDrop`) en el constructor para que esté disponible dentro del componente.

3. **Configurar Dropzone**:
   - Pasar el método de manejo (`handleThumbDrop`) al componente Dropzone usando la propiedad `eventHandlers`.

4. **Condición para Agregar Imágenes al Formulario**: Modificar el método `buildForm` para que solo agregue la imagen al `formData` si existe. Esto previene errores en el servidor al enviar una clave de imagen vacía.

[Codigo portfolio interfaz subida 1 archivo terminado sin css](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/7e45a11fe6d9f28b81831f2bae1185545b70aa9b)

## Subida de 3 imagenes al servidor


1. **Creación de Métodos de Manejo de Archivos**:
   - Se crean tres métodos de controlador de eventos:
     - `handleThumbDrop` para manejar la imagen en miniatura.
     - `handleBannerDrop` para manejar la imagen del banner.
     - `handleLogoDrop` para manejar la imagen del logotipo.
   - Cada método se encarga de actualizar el estado del componente con la imagen correspondiente.

2. **Configuración del Componente Dropzone**:
   - Se configura el componente Dropzone para cada tipo de imagen, asegurando que cada uno tenga su propio controlador de eventos dedicado.

3. **Modificación del Método `buildForm`**:
   - Se actualiza el método `buildForm` para que añada los datos de la imagen del banner y del logotipo al `formData` solo si existen. Esto es para evitar errores al enviar claves de imagen vacías al servidor.

[Codigo portfolio interfaz subida 3 archivos terminado sin css](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/9e9c407ef03392c6a0b6437962a4cd460e8cef18)


## Limpieza de Formularios en React Usando Referencias (Refs)

### Objetivo
Implementar la funcionalidad de limpieza automática de los campos del formulario y de los componentes de carga de imágenes (miniatura, banner y logotipo) tras el envío exitoso del formulario.

### Conceptos Clave

1. **DOM y DOM Virtual**:
   - **DOM (Document Object Model)**: Estructura que representa la página HTML como un árbol de objetos.
   - **DOM Virtual en React**: React utiliza un DOM virtual para optimizar la manipulación y actualización de la interfaz de usuario.

2. **Referencias (Refs) en React**:
   - **Refs**: Permiten acceder directamente a elementos del DOM creados por React.
   - Se utilizan en casos específicos, como gestión de enfoque, animaciones, o integración con bibliotecas DOM de terceros.

### Pasos para Implementar la Limpieza de Formularios

1. **Definir Referencias en el Constructor**:
   - Crear referencias para los componentes de la zona de carga de imágenes (miniatura, banner y logotipo).

2. **Asignar Referencias en el JSX**:
   - Vincular las referencias a los componentes Dropzone correspondientes en el JSX.

3. **Usar las Referencias para Limpiar los Archivos**:
   - En el método de envío del formulario (`handleSubmit`), iterar sobre las referencias y llamar a una función para eliminar todos los archivos cargados.

4. **Restablecer el Estado del Componente**:
   - Reiniciar el estado del componente para limpiar los valores de los campos del formulario.

### Implementación Paso a Paso

1. **Definir Referencias**:
   - En el constructor del componente, se crean las referencias utilizando `React.createRef`.

2. **Asignar Referencias a los Componentes Dropzone**:
   - En el JSX, se pasa cada referencia correspondiente a su componente Dropzone utilizando el atributo `ref`.

3. **Llamar a las Funciones de Limpieza en `handleSubmit`**:
   - Después de la operación de envío exitosa, iterar sobre las referencias y usar la función `removeAllFiles` del componente Dropzone para limpiar los archivos cargados.
   - Reiniciar el estado del componente para limpiar los campos del formulario.

[Codigo portfolio limpiar imputs e img una vez se registra el nuevo item](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/9ec189fe09e7ffb223e3faf9278726fae923924d)

## Estilos para los inputs usando mixin

[Codigo portfolio estilo a los input](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/1f4098c452f7016dd96f7f292e040d8cbb8ea4dc)

## Estilos textareas y select de los forms

[Codigo portfolio estilo textareas y select de los forms](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/d778ca8533b94a1fd8868bcb98d0ff566d3cc6bb)

## Base columnas de un formulario

[Codigo portfolio columnas formulario](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/6a63845bdc04944e0c17ef6f523b16b18c30f4ca)


## Trabajar con child(hijos) de Dropzone Component

### Resumen de los pasos de mejora para la zona de arrastre de imágenes en React

1. **Actualizar estilos para cargadores de imágenes**:
   - Ajustar los estilos de los cargadores de imágenes dentro del formulario.
   - Decidir si usar una configuración de tres columnas genéricas o personalizadas.
   - Crear una clase específica para cargadores de imágenes y ajustar el diseño utilizando CSS Grid.

2. **Refactorizar código CSS**:
   - Identificar repetición de estilos como `display: grid` y `grid-gap`.
   - Crear un mixin en SCSS para la cuadrícula base y usarlo en los cargadores de imágenes.
   - Aplicar el mixin para reducir redundancias y facilitar futuros cambios.

3. **Uso de componentes secundarios en DropzoneComponent**:
   - Mejorar la claridad visual de los cargadores de imágenes (miniatura, logotipo, banner) usando componentes secundarios.
   - Inspeccionar el HTML generado por DropzoneComponent para identificar elementos específicos a sobrescribir.
   - Pasar mensajes personalizados como componentes secundarios en lugar de usar etiquetas de cierre automático.

4. **Implementación de componentes secundarios**:
   - Modificar DropzoneComponent para aceptar y renderizar componentes secundarios.
   - Asegurarse de que los componentes secundarios tengan las clases necesarias para mantener el estilo.
   - Probar la funcionalidad para asegurar que los mensajes personalizados se muestran correctamente en la interfaz.


[Codigo portfolio child dropzoneComponent](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/5d0a068feb742543256cdcd23f2e9b47ffc77fc8)

## Implementación de la funcionalidad CRUD en React

#### Concepto CRUD

CRUD se refiere a las cuatro operaciones básicas que se pueden realizar en una aplicación web:
- **Create** (Crear): Añadir nuevos registros.
- **Read** (Leer): Obtener y mostrar datos.
- **Update** (Actualizar): Modificar registros existentes.
- **Delete** (Eliminar): Borrar registros.

Hasta ahora, hemos cubierto las operaciones de crear y leer en el curso. Ahora, vamos a enfocarnos en cómo actualizar y eliminar registros.

### Pasos para implementar la eliminación de registros

1. **Añadir enlaces de eliminación en la interfaz**:
   - Agregar enlaces de eliminación a cada elemento en la lista de la barra lateral.
   - Los enlaces deben tener un manejador de eventos `onClick` que invoque una función de eliminación específica.

2. **Crear el manejador de eliminación**:
   - Definir una función `handleDeleteClick` en el componente principal.
   - Esta función debe recibir el elemento de la cartera a eliminar y procesar la eliminación.

3. **Enlazar el manejador en el constructor**:
   - Asegurarse de que la función `handleDeleteClick` esté correctamente enlazada en el constructor del componente para mantener el contexto de `this`.

4. **Pasar el manejador a la lista de la barra lateral**:
   - Proveer la función `handleDeleteClick` a través de las props al componente de la lista de la barra lateral.
   - Esto permite que cada enlace de eliminación en la lista acceda al manejador de eventos correcto.

5. **Pruebas de consola**:
   - Verificar mediante `console.log` que el manejador de eliminación recibe el elemento correcto al hacer clic en el enlace de eliminación.
   - Confirmar que el ID del elemento y otros atributos se pasan correctamente para la posterior llamada a la API.

6. **Configurar Axios**:
   - Utilizar la librería `axios` para realizar una solicitud `DELETE` a la API.
   - Asegurarse de haber importado `axios` en el archivo correspondiente.

7. **Realizar la Solicitud de Eliminación**:
   - Construir la URL de la API utilizando la interpolación de cadenas para incluir el ID del elemento a eliminar.
   - Pasar el argumento `withCredentials: true` para manejar la autenticación y asegurarse de que el usuario tenga permiso para eliminar el registro.

8. **Manejo de la Respuesta**:
   - Procesar la respuesta de la API para confirmar que la eliminación fue exitosa.
   - Manejar posibles errores de autenticación o de la API.

9. **Actualizar el Estado Local**:
   - Utilizar `this.setState` para actualizar el estado local de la aplicación y reflejar los cambios en la interfaz de usuario.
   - Filtrar los elementos del estado para excluir el registro eliminado.

#### Detalles Técnicos

- **Construcción de la URL**: 
  - Utilizar comillas invertidas y la sintaxis `${}` para interpolar el ID del elemento en la URL.
  - Ejemplo: ``` `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}` ```

- **Axios DELETE Request**:
  - Estructura básica:
    ```javascript
    axios.delete(url, { withCredentials: true })
      .then(response => { /* manejar respuesta */ })
      .catch(error => { /* manejar error */ });
    ```

- **Actualización del Estado con Filtro**:
  - Filtrar los elementos de la cartera para excluir el elemento eliminado.
  - Ejemplo:
    ```javascript
    this.setState({
      portfolioItems: this.state.portfolioItems.filter(item => item.id !== portfolioItem.id)
    });
    ```

[Codigo portfolio delete item](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/c626db8614028ae0e3fd9bbf834b080739fe739c)


## Implementación de FontAwesome en React

### Pasos para la Implementación

1. **Instalación de Dependencias**:
   - Abre Visual Studio Code y abre la terminal.
   - Instala las siguientes bibliotecas necesarias para usar FontAwesome en React:
     ```sh
     npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
     ```

2. **Configuración Inicial**:
   - Importa las bibliotecas necesarias en el componente principal de tu aplicación (por ejemplo, `App.js`).
   - Documentación relevante:
     - [FontAwesome SVG Core](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#core)
     - [Free Solid SVG Icons](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#free)
     - [React FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#basic)

3. **Importación y Configuración de Íconos**:
   - Importa los componentes y los íconos específicos que necesitas.
   - Añade los íconos a la biblioteca de FontAwesome.
   - Ejemplo básico de importación:
     ```javascript
     import { library } from '@fortawesome/fontawesome-svg-core';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
     
     library.add(faTrash, faSignOutAlt);
     ```

4. **Uso de Íconos en Componentes**:
   - Usa el componente `FontAwesomeIcon` en tus componentes React.
   - Pasa el nombre del ícono como una propiedad.
   - Ejemplo básico de uso en un componente:
     ```javascript
     <FontAwesomeIcon icon="trash" />
     ```

5. **Pruebas y Verificación**:
   - Verifica que los íconos se rendericen correctamente en la interfaz de usuario.
   - Ajusta el diseño y el estilo de los íconos según sea necesario.

6. **Incorporar Otros Íconos**:
   - Añade más íconos según sea necesario siguiendo el mismo proceso de importación y configuración.

### Documentación y Enlaces Relevantes

- [Guía de uso de FontAwesome con React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
- [Biblioteca FontAwesome SVG Core](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#core)
- [Íconos SVG sólidos gratuitos](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#free)
- [React FontAwesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react#basic)

### Beneficios y Conceptos Clave

- **Componentización**:
  - El uso de `FontAwesomeIcon` permite manejar íconos como componentes React, integrándose perfectamente en la arquitectura de la aplicación.

- **Reutilización**:
  - Importar íconos una vez y utilizarlos en múltiples lugares mejora la eficiencia y consistencia de la interfaz de usuario.

- **Diseño y Estilo**:
  - Los íconos pueden ser estilizados como cualquier otro elemento React, utilizando clases CSS o estilos en línea.

### Ejemplo de Flujo de Trabajo

1. **Instalación de Dependencias**:
   ```sh
   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
   ```
  
2. **Configuración en el Archivo Principal**:
   - En `App.js`:
     ```javascript
     import { library } from '@fortawesome/fontawesome-svg-core';
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faTrash, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

     library.add(faTrash, faSignOutAlt);
     ```

3. **Uso en un Componente**:
   - En cualquier componente donde quieras usar los íconos, por ejemplo, `Sidebar.js`:

     ```javascript
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

     <FontAwesomeIcon icon="trash" />
     ```

## Mejora de la Interfaz de Usuario con Íconos de FontAwesome en React

1. **Reorganización de Contenido**:
   - En el componente que contiene la lista de elementos (por ejemplo, `Sidebar.js`), encapsula el título y el ícono de la papelera en un contenedor `div`.
 
2. **Estilización con Flexbox**:
   - Aplica estilos CSS utilizando Flexbox para organizar el contenido.
   - Archivo CSS o SCSS (por ejemplo, `styles.css`):

### Mas detalle sobre el uso de icons

2. **Importación de Componentes**:
   - Selección del icono deseado entrando en `https://fontawesome.com/icons`.
   - Podemos buscar desde el buscador sing-out. Conseguiremos todos los iconos de cierre de sesión.
   - En tu archivo de navegación, importa los componentes necesarios de FontAwesome.
   - Importamos en `app.js` 
   
      ```javascript
      import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
      library.add(faTrash, faSignOutAlt);
      ```
   - Importamos en `Navigation-container.js`:

     ```javascript
     import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
     ```

3. **Uso de Componentes de Íconos**:
   - Agrega el componente de ícono de FontAwesome en tu JSX.
   - Ejemplo de uso en `Navigation-container.js`:
     ```javascript
      <FontAwesomeIcon icon={faSignOutAlt} />
     ```

4. **Manejo de Nombres de Íconos Complicados**:
   - Los nombres de íconos en FontAwesome pueden ser confusos. Utiliza la notación camelCase para importar los íconos y la notación kebab-case al pasarlos como propiedades.
   - Ejemplo:
     ```javascript
     import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
     <FontAwesomeIcon icon="sign-out-alt" />
     ```

5. **Estilización del Ícono**:
   - Aplica estilos CSS a los íconos para mejorar su apariencia y comportamiento.
   - Archivo CSS o SCSS (por ejemplo, `Navigation.css`):
   
### Documentación y Enlaces Relevantes

- [Documentación de FontAwesome para React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)
- [CSS Flexbox en MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)



[Codigo portfolio fontwasome](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/e3eb1645e1f86f0c2c6724f1cf68fd6fd4acf13c)


## Update (Actualizar un Item sin imagenes)

**Archivos involucrados:**
1. **portfolio-manager.js**
2. **portfolio-form.js**

1. **Refactorización de métodos en el archivo `portfolio-manager.js`:**
   - Se renombra `handleSuccessfulFormSubmission` a `handleNewFormSubmission`.
   - Se crea la función `handleEditFormSubmission` para manejar las ediciones.
   - Se vinculan los métodos `handleNewFormSubmission`, `handleEditFormSubmission` y `handleFormSubmissionError` en el constructor.
   - Se pasa `handleNewFormSubmission`, `handleEditFormSubmission`, `handleFormSubmissionError`, `clearPortfolioToEdit` y `portfolioToEdit` como propiedades al componente `PortfolioForm`.

2. **Actualización del componente `PortfolioForm` en el archivo `portfolio-form.js`:**
   - Se modifica `handleSubmit` para diferenciar entre nuevos envíos y ediciones, utilizando el estado `editMode`.
   - Si `editMode` es verdadero, se llama a `handleEditFormSubmission`. Si no, se llama a `handleNewFormSubmission`.
   - Se actualiza el estado base en `handleSubmit` para restablecer `editMode`, `apiUrl` y `apiAction`.


**Funciones Clave:**

- **portfolio-manager.js:**
  - `clearPortfolioToEdit()`: Resetea `portfolioToEdit` a un objeto vacío.
  - `handleNewFormSubmission(portfolioItem)`: Gestiona el envío de nuevos formularios añadiendo el nuevo elemento al estado.
  - `handleEditFormSubmission()`: Gestiona el envío de formularios de edición llamando a `getPortfolioItems`.

- **portfolio-form.js:**
  - `componentDidUpdate()`: Verifica y actualiza el estado si `portfolioToEdit` cambia.
  - `handleSubmit()`: Envía el formulario y llama a `handleNewFormSubmission` o `handleEditFormSubmission` dependiendo del `editMode`.

**Implementación Detallada:**

- **Actualización de `portfolio-manager.js`:**
  - En la función `render()`, se pasa `handleNewFormSubmission`, `handleEditFormSubmission`, `handleFormSubmissionError`, `clearPortfolioToEdit`, y `portfolioToEdit` como propiedades al componente `PortfolioForm`.
  - Se refactoriza `handleSuccessfulFormSubmission` a `handleNewFormSubmission` y se modifica su implementación para añadir el nuevo ítem de portafolio al estado.
  - Se crea la función `handleEditFormSubmission` que llama a `getPortfolioItems` para actualizar los datos después de una edición.
  - Se actualizan las referencias en el constructor para vincular `handleNewFormSubmission`, `handleEditFormSubmission`, y `handleFormSubmissionError`.

- **Actualización de `portfolio-form.js`:**
  - Dentro de `handleSubmit`, se verifica el estado `editMode` para determinar si se debe llamar a `handleEditFormSubmission` o `handleNewFormSubmission`.
  - En el método `.then(response)`, se llama a `this.props.handleEditFormSubmission()` si `editMode` es verdadero, y a `this.props.handleNewFormSubmission(response.data.portfolio_item)` si es falso.
  - Al finalizar el envío, se actualiza el estado del formulario a su valor base, incluyendo `editMode`, `apiUrl`, y `apiAction`.


[Codigo portfolio Update Item sin imagenes](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/e57eb2da94b7a06b412bbcd2976bb3f65c28f497)


## Update Item con imagenes

1. **Objetivo de la implementación:**
   - Se busca que, al editar un registro, el componente Dropzone desaparezca y sea reemplazado por una miniatura de la imagen si existe.

2. **Modificación en el componente `PortfolioForm`:**
   - En el método `componentDidUpdate`, se actualiza el estado con las imágenes (`thumb_image`, `banner_image`, `logo`) obtenidas de las propiedades.
   - Si las imágenes existen, se actualiza el estado con sus URLs, de lo contrario, se asignan cadenas vacías.

4. **Creación del operador ternario en JSX en el componente `PortfolioForm`:**
   - Se añade un operador ternario en el JSX para mostrar la miniatura de la imagen si `thumb_image` y `editMode` son verdaderos, y el componente Dropzone en caso contrario.
   - Se utiliza la etiqueta `<img>` para mostrar la miniatura a falta de estilos.

### Estilos para que se vean correctamente las imagenes

1. **Estilización y estructura del HTML:**
   - Se envolverá la imagen en un `div` con una clase específica para aplicar estilo y contener un futuro enlace de eliminación.
   - Se creará un `div` llamado `portfolio-manager-image-wrapper` para cada imagen.
   
2. **Ajustes en el JSX:**
   - El código JSX se actualizará para incluir el nuevo `div`.
   - Se aplicará la condición ternaria para la imagen del banner y el logotipo similar a la miniatura.
   - Se asegurará de que las condiciones se manejen correctamente, añadiendo paréntesis y llaves necesarias para evitar errores de sintaxis.

3. **Actualización de condiciones para imágenes:**
   - La condición ternaria para la imagen del banner se ajustará para mostrar `this.state.banner_image` cuando esté en modo de edición.
   - Lo mismo se hará para el logotipo con `this.state.logo`.

4. **Verificación en el navegador:**
   - Se probará en el navegador para confirmar que las imágenes se muestran correctamente y que no hay errores de sintaxis.
   - Se comprobará que las imágenes ocupen demasiado espacio, lo cual será corregido mediante estilos.

5. **Estilización con CSS:**
   - Se añadirán estilos en la hoja de estilo del formulario `portfolio-form.scss`.

6. **Próximos pasos:**
   - En la siguiente guía, se implementará la capacidad de eliminar un registro y una imagen si ya no es necesaria, completando así la funcionalidad de edición.


[Codigo portfolio Update Item sin opción de eliminar o modificar](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/fee4dad933b28aab5738d67ddd8fbceda092ae6d)

### Eliminación de las imagenes en el formulario de edición:

1. **Preparación de la función de eliminación:**
   - Se creó la función `deleteImage` en el componente `PortfolioForm` para manejar la eliminación de imágenes.
   - Esta función se enlaza al contexto actual utilizando `this.deleteImage = this.deleteImage.bind(this);`.

2. **Actualización del JSX para los enlaces de eliminación:**
   - Se añadieron enlaces de eliminación debajo de cada imagen en el formulario de edición.
   - Cada enlace está asociado con un tipo de imagen específico (miniatura, banner, logotipo) utilizando la función `deleteImage`.
   - Se utilizó una función de flecha anónima en el `onClick` para llamar a `deleteImage` con el tipo correspondiente.

3. **Verificación y prueba en el navegador:**
   - Se verificó en el navegador que los enlaces de eliminación se mostraran correctamente bajo cada imagen cuando se edita un registro con imágenes múltiples.
   - Al hacer clic en los enlaces de eliminación, se observó que se imprimía el tipo de imagen correspondiente en la consola del navegador, confirmando que la función `deleteImage` se invocaba correctamente.

4. **Estilización de los enlaces de eliminación:**
   - Se agregaron estilos CSS en la hoja de estilo del formulario (`portfolio-form.scss`) para mejorar la apariencia y la visibilidad de los enlaces de eliminación.
   - Se aplicó un estilo de color rojo (`$warning`), peso de fuente 900, y un cursor de puntero para indicar claramente la función de eliminar.
   - Se envolvieron los enlaces en un contenedor flexible para alinearlos al centro, mejorando la presentación visual.


[Codigo portfolio Update Item eliminar y modificar](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/2c7430d32bd14640ebcbc5ddc1ad54dacd6bf6d7)


## Otras aplicaciones para usar iconos 

Mas fácil de implementar que fontweason `Heroicons` y `tablericons`.


