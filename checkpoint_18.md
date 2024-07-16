# Blog

## Objetivo

Importar datos de una API, conseguir realizar un scroll y que se carguen los item sin tener que dar a siguiente página, ya que la API devuelve items de 10 en 10.

Gestionar los item del blog con un CRUD.

## Pasos

1. **Modificar blog.js de funcional a clase**

2. **Importar Axios**: Importar la biblioteca Axios para hacer llamadas HTTP a la API.

3. **Configurar el Estado Inicial**: En el constructor del componente, establecer un estado inicial que incluya una matriz vacía para los elementos del blog (`blogItems`).

4. **Crear la Función `getBlogItems`**:
    - Definir la función `getBlogItems` que hace una llamada `GET` a la API para recuperar los registros del blog.
    - Pasar `withCredentials: true` para asegurarse de que las solicitudes incluyen credenciales de autenticación.
    - Manejar la respuesta de la API y actualizar el estado del componente con los datos recibidos.
    - Registrar en la consola cualquier error que ocurra durante la solicitud.

5. **Vincular la Función al Ciclo de Vida del Componente**:
    - Llamar a `getBlogItems` en el método `componentWillMount` para que los datos se recuperen cuando el componente esté a punto de montarse.


[Codigo Blog recepción sin visualizar](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/67a3ae66fa3bf9bbbaed6768e0e544365e7887c2)


## Renderización del objeto recibido de la API

1. **Mapeo de Registros del Blog**:
   - Dentro del método `render`, se crea una variable `blogRecords` que itera sobre `blogItems` en el estado usando `map`.

2. **Creación del Componente `BlogItem`**:
   - Se destaca la importancia de separar el código de la función de renderizado para mantener el código limpio y organizado.
   - Se crea un nuevo archivo `blog-item.js` y se define el componente `BlogItem` usando una sintaxis de función de flecha.
   - Se importa `React` y se estructura el componente para recibir propiedades (`props`), esperando un objeto `blogItem` con atributos específicos (id, blog_status, content, title, featured_image_url).
   - Se utiliza la desestructuración para extraer estos atributos del objeto `blogItem`.

3. **Integración del Componente `BlogItem` en `blog.js`**:
   - Se importa `BlogItem` en `blog.js` y se utiliza dentro del método `render`.
   - Se pasa una clave única y `blogItem` como propiedades al componente `BlogItem`.

[Codigo Blog renderización sin estilos](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/bdef04acf2d22f5d00a49adb6087317d17eae676)

## Crear nueva página para visualizar los blogItem, enlaces y enrutar

1. **Definición de Ruta**:
   - Se define una nueva ruta en el componente principal de la aplicación `app.js` para el componente `BlogDetail`.
   - La ruta utiliza un parámetro de ruta dinámico (slug) para acceder a diferentes detalles del blog.

2. **Creación del Componente `BlogDetail`**:
   - Se crea un nuevo archivo `blog-detail.js` y se define un componente de clase `BlogDetail` básico con una etiqueta `h1` indicando "Detalle del blog".
   - Se importan y configuran correctamente las rutas en `app.js`.

3. **Integración del Componente `BlogDetail`**:
   - Se verifica que la nueva ruta funcione accediendo a ella mediante una URL dinámica como `b/123`.

4. **Modificación del Componente `BlogItem`**:
   - Se importa la etiqueta `Link` desde `react-router-dom` para manejar la navegación.
   - Se envuelve el título del blog dentro de una etiqueta `Link` que redirige a la ruta `b/${id}`, utilizando interpolación de cadena para incluir el ID del blog.

[Codigo Blog blog-detail, enlace y enrutamiento](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/0ec283aa6f35afe78b36f87403f06e4dd9b3eaac)

## Recuperar de la url parametro para consultar en la API

Obtención de datos del blog desde la API usando el ID dinámico de la URL y preparando la visualización de los datos. Aquí está el resumen de los pasos:

1. **Inicialización del Estado**:
   - Se crea un constructor en el componente `BlogDetail` para inicializar el estado, incluyendo una propiedad `currentId` que representará el ID del blog actual.

2. **Acceso al ID de la Ruta**:
   - Se accede a los parámetros de la ruta usando `this.props.match.params.slug` para obtener el ID dinámico de la URL.
   - Se asegura que el ID se obtenga correctamente y se actualice el estado.

3. **Configuración del Estado Inicial**:
   - Se añade una propiedad `blogItem` al estado, inicialmente como un objeto vacío, que se llenará con los datos del blog obtenidos de la API.

4. **Importación de Axios**:
   - Se importa Axios para realizar las solicitudes a la API.

5. **Método `getBlogItem`**:
   - Se define el método `getBlogItem` que realiza una solicitud GET a la API usando el `currentId` del estado.
   - Se maneja la respuesta de la API registrándola en la consola para verificar los datos recibidos.

6. **Ciclo de Vida del Componente**:
   - Se utiliza el método de ciclo de vida `componentDidMount` para llamar a `getBlogItem` cuando el componente se monte, asegurando que los datos se obtengan al cargar la página de detalles del blog.

7. **Actualización del Estado con Datos de la API**:
   - En el método `getBlogItem`, se actualiza el estado con los datos obtenidos de la API.
   - Se utiliza `this.setState` para establecer `blogItem` con `response.data.portfolio_blog`.

8. **Verificación de Datos en Herramientas de Desarrollo**:
   - Se recomienda utilizar las herramientas de desarrollo de React para verificar el estado del componente y asegurarse de que `blogItem` contiene los datos correctos.

9. **Desestructuración de Datos**:
   - Se desestructuran los atributos relevantes de `this.state.blogItem` en el método `render`, incluyendo `title`, `content`, `featured_image_url` y `blog_status`.

10. **Renderizado de Datos en la Pantalla**:
   - Se actualiza el JSX en el método `render` para mostrar el título, la imagen destacada y el contenido del blog.
   - Se utiliza una etiqueta `h1` para el título, una etiqueta `img` para la imagen destacada y un `div` para el contenido.

[Codigo renderización Blog blog-detail](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/9efcc155031b95f339e3d048fc4aacf788ab4cef)


La guía continúa describiendo cómo estilizar la página de detalles del blog y establece la base para aplicar estilos similares a la página de índice del blog. Aquí está el resumen de los pasos y el código relevante:

### Estilización de la Página de Detalles del Blog

1. **Añadir Nombres de Clase a los Elementos del JSX**:
   - Se agregan nombres de clase a los elementos del JSX para aplicar estilos específicos.
   - Se crean dos contenedores: uno general (`blog-container`) y uno para el contenido específico (`content-container`).

2. **Creación de Archivos SCSS**:
   - Se crea un archivo `blog.scss` y se importa en el archivo principal de estilos `main.scss`.
   - Se definen los estilos para los contenedores y la imagen destacada.

[Codigo styles blog-detail](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/d7b5f52fe24a9176e2ec59ad80c1f83b3ef98e6f)

### Estilizar y Estructurar la Página de Índice del Blog

1. **Reutilización del Diseño de Detalles del Blog**:
   - Se utiliza el mismo diseño que la página de detalles del blog para la página de índice.
   - Se crean contenedores `blog-container` y `content-container` en la estructura del JSX para lograr un diseño consistente.

2. **Estructura del JSX en la Página de Índice del Blog**:
   - Se envuelven los registros del blog (`{blogRecords}`) dentro de los contenedores `blog-container` y `content-container`.
   - Esto centraliza el contenido del blog en la página.

3. **Aplicación de Estilos a los Enlaces**:
   - Se eliminan las decoraciones de texto (subrayado) de los enlaces y se establece un color verde azulado para ellos.
   - Se añade una transición suave de 0.5 segundos para cambiar el color de los enlaces al pasar el cursor por encima.
   - Se define un estado `:hover` para los enlaces que cambia el color a un verde azulado oscuro.

4. **Ajuste de Tamaño de los Encabezados**:
   - Se reduce el tamaño de los encabezados `h1` a `1.8em` para que se vean menos prominentes pero aún claros como títulos de las publicaciones.

[Codigo styles blog](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/ade1635acdcb321bd91efaea4e60bb09b6cca388)

## Implementación de la funcionalidad de desplazamiento infinito

1. **Estructura del Blog**:
   - Crear una estructura básica de la página de índice del blog similar a la de las publicaciones individuales.
   - Utilizar los contenedores `<div className="blog-container">` y `<div className="content-container">` para mantener la coherencia en el diseño.

2. **Diseño y Estilos**:
   - Ajustar los estilos de los enlaces dentro del contenedor de contenido para eliminar subrayados y cambiar el color a verde azulado, con una transición suave de 0,5 segundos.
   - Actualizar el tamaño de los encabezados `h1` a `1.5em` para que los títulos de las publicaciones sean menos dominantes.

3. **Controlador de Desplazamiento**:
   - Agregar un controlador de desplazamiento para detectar cuando el usuario se desplaza.
   - Utilizar `window.onscroll` para ejecutar una función cada vez que el usuario se desplaza.

4. **Propiedades Clave de la Ventana y el Documento**:
   - **`window.innerHeight`**: Altura de la ventana del navegador en píxeles.
   - **`document.documentElement.scrollTop`**: Cantidad de píxeles que el contenido del documento se ha desplazado verticalmente.
   - **`document.documentElement.offsetHeight`**: Altura total del documento, incluyendo relleno y bordes.

5. **Lógica de Desplazamiento Infinito**:
   - Calcular la posición del usuario sumando `window.innerHeight` y `document.documentElement.scrollTop`.
   - Comparar esta suma con `document.documentElement.offsetHeight` para determinar si el usuario ha llegado al final de la página.
   - Si el usuario ha llegado al final, ejecutar una acción (por ejemplo, cargar más publicaciones).

6. **Implementación del Controlador**:
   - Crear una función `activateInfiniteScroll` que registre en la consola los valores de las propiedades mencionadas y, posteriormente, verifique si el usuario ha alcanzado el final de la página.
   - Usar una condición para activar la carga de más publicaciones cuando el usuario llega al final del documento.


### Continuación del resumen de la implementación de la funcionalidad de desplazamiento infinito

7. **Control del Total de Registros y la Página Actual**:
   - Agregar elementos al estado para mantener el `totalCount` (recuento total de registros) y `currentPage` (página actual), ambos inicializados en cero.
   - Al cargar los elementos del blog por primera vez, incrementar `currentPage` en uno.

8. **Actualización del Estado al Montar el Componente**:
   - En el constructor, inicializar `currentPage` en cero.
   - Al llamar a la función `getBlogItems`, incrementar `currentPage` y actualizar el estado.

9. **Depuración y Análisis de Datos**:
   - Utilizar el depurador para inspeccionar la respuesta de la API y extraer información relevante, como el total de registros (`total_records`) y los metadatos (`meta`).
   - Comprobar los metadatos para obtener el recuento total de registros disponibles.

10. **Configuración del Estado Basado en la Respuesta de la API**:
   - Actualizar el estado con `totalCount` usando el valor obtenido de `response.data.meta.total_records`.
   - Asegurarse de que la estructura de la respuesta de la API se ajuste a las expectativas para una manipulación adecuada de los datos.

11. **Validación del Estado en Herramientas de Desarrollo de React**:
   - Verificar en las herramientas de desarrollo de React que `currentPage` y `totalCount` se actualicen correctamente.
   - Confirmar que `currentPage` se incremente adecuadamente y que `totalCount` refleje el valor correcto de registros totales.

12. **Manejo de Diferentes Estructuras de API**:
   - Reconocer que diferentes APIs pueden tener estructuras variadas y que algunos desarrolladores pueden colocar información de metadatos en los encabezados o en otros lugares distintos al objeto de datos.
   - Adaptar el código según la estructura específica de la API utilizada.

13. **Indicador de Carga (Spinner)**:
   - Incorporar un ícono giratorio (spinner) para indicar que la aplicación está cargando datos.
   - Esto es importante para mejorar la experiencia del usuario y comunicar que la aplicación está procesando una solicitud.

14. **Estado de Carga (isLoading)**:
   - Añadir un nuevo elemento al estado llamado `isLoading`, que se establecerá en `true` cuando se monte el componente.
   - Actualizar `isLoading` a `false` cuando se reciban los datos de la API.

15. **Importación del Ícono Spinner**:
   - Utilizar FontAwesome para el ícono del spinner.
   - Importar el ícono y agregarlo a la biblioteca de íconos utilizados en la aplicación.

16. **Incorporación del Spinner en el Componente**:
   - Importar el componente `FontAwesomeIcon` en el componente de blog.
   - Insertar el `FontAwesomeIcon` en el JSX y utilizar el ícono spinner.

17. **Personalización y Estilo del Spinner**:
   - Hacer que el spinner gire añadiendo la propiedad `spin` al componente `FontAwesomeIcon`.
   - Crear un archivo de estilos para los loaders (`loaders.scss`) y añadir estilos personalizados para el spinner, como tamaño de fuente y color.

18. **Condicional para Mostrar el Spinner**:
   - Utilizar un operador ternario para mostrar el spinner solo cuando `isLoading` sea `true`.
   - Colocar el spinner debajo de los registros del blog para que aparezca en la parte inferior de la página cuando se estén cargando más datos.

19. **Integración Completa**:
    - **Objetivo**: Conectar todas las piezas construidas para ver la función de desplazamiento infinito en acción.
    - **Analogía**: Se compara la planificación de una función grande con un viaje por carretera, destacando la importancia de la preparación previa.
    - **Planificación**: Decidir el comportamiento de la aplicación y la interacción del usuario para definir las piezas necesarias.

20. **Prueba Inicial de `getBlogItems`**:
    - **Prueba**: Llamar a `getBlogItems` dentro de la función de desplazamiento infinito y ver la respuesta de la API.
    - **Respuesta**: Inicialmente, la respuesta de la API sobrescribe los registros existentes en lugar de agregar nuevos.

21. **Uso de Parámetros en la API**:
    - **Parámetro de Página**: Modificar la URL de la API para incluir un parámetro de página, permitiendo solicitar registros adicionales en lugar de los iniciales.
    - **Actualización de Página**: Usar el estado `currentPage` para gestionar y aumentar el número de página en cada llamada a `getBlogItems`.

22. **Problema de Sobrescritura**:
    - **Concatenación de Registros**: En lugar de sobrescribir los registros existentes, concatenar los nuevos registros a los existentes en el estado.

23. **Prueba de Concatenación**:
    - **Comportamiento Esperado**: Verificar que los registros se concatenen correctamente al desplazarse hacia abajo.
    - **Verificación de Errores**: Identificar y corregir errores que puedan surgir al cargar y concatenar los registros.

24. **Validaciones Adicionales**:
    - **Validación de Registros Totales**: Evitar llamar a la API si ya se han cargado todos los registros.
    - **Validación de Estado de Carga**: Evitar llamadas a la API si el contenido aún se está cargando para prevenir duplicaciones.

25. **Mejoras en la Función de Desplazamiento Infinito**:
    - **Validaciones Complejas**: Implementar validaciones para manejar casos extremos como conexiones lentas o intentos de carga demasiado rápidos.
    - **Estado de Carga**: Asegurarse de que `getBlogItems` no se llame si el sistema está en estado de carga.
    - Modificar el estado a  `isLoading` sea `true`, para que salga el icono spinner mientras carga los siguientes blogs.


[Codigo scroll infinito e icono spinner](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/096adee5069cb4d806db499c376aad6279b15cb3)

26. La función `Infinite Scroll` está funcionando, pero causa una fuga de memoria. Se explicará qué es y cómo evitarlo usando ganchos del ciclo de vida del componente.

27. El error ocurre porque el evento `onscroll` se adjunta a la ventana del navegador. Cuando el usuario abandona la página del blog, el oyente sigue activo, lo que provoca llamadas API no deseadas en otras páginas.

28. La solución consiste en mover el oyente de eventos fuera de la función `activateInfiniteScroll` y crear el oyente dentro del constructor del componente. Esto permite eliminar el oyente cuando el componente se desmonta.

29. Se simplifica la función `onScroll` para que solo verifique condiciones de carga y la longitud de los elementos del blog, sin contener el oyente de eventos.

30. Se añade el oyente de eventos en el constructor usando `window.addEventListener` con el evento de desplazamiento vinculado a la función `onScroll`.

31. Se elimina el oyente de eventos cuando el componente se desmonta utilizando el método del ciclo de vida `componentWillUnmount` y `window.removeEventListener`.

32. El resultado es que el desplazamiento infinito sigue funcionando correctamente y el oyente de eventos se elimina adecuadamente cuando se abandona la página, evitando fugas de memoria.

33. Se resalta la importancia de pensar en cómo los oyentes de eventos y otras funciones afectan al resto de la aplicación para evitar errores sutiles y posibles bloqueos de la aplicación.

[Codigo scroll infinito subsanado](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/503c928baa9bd5dfbca08c3a88323055dbe35ec6)

## Modales en React

### Instalación librería react-modal

1. Los modales son elementos de página estándar necesarios en la mayoría de las aplicaciones modernas para crear nuevas publicaciones de blog.

2. Al hacer clic en el ícono de más en la página del blog, se abrirá un modal con un editor de texto enriquecido y un formulario.

3. El modal se puede cerrar al presionar la tecla Escape o al hacer clic fuera del modal.

4. Para crear modales, se utiliza la biblioteca `react-modal`, la más popular y flexible de NPM con más de 800,000 descargas semanales y excelente documentación.

5. Antes de instalar `react-modal`, se recomienda revisar la documentación y ejemplos en [npmjs.com](https://www.npmjs.com/package/react-modal).

6. La documentación incluye ejemplos básicos, cómo crear estilos personalizados y cómo gestionar el estado del modal.

7. La documentación de `react-modal` también ofrece demostraciones prácticas, como ejemplos en CodePen, que permiten ver y probar el código en tiempo real.

8. React permite escribir código de varias maneras, por ejemplo, extendiendo `React.Component` directamente o importando `Component` desde React, ambas son válidas y logran lo mismo.

9. En el ejemplo de la documentación, la clase `ExampleApp` extiende `React.Component`, configura un estado base con `showModal` en `false` y tiene controladores para abrir y cerrar el modal.

10. `react-modal` es altamente personalizable, permitiendo crear modales según las necesidades específicas sin imponer restricciones de diseño.

11. Para instalar `react-modal`, se abre la terminal y se ejecuta el comando `npm i react-modal`.

12. Una vez instalada la biblioteca, se puede verificar en el archivo `package.json` que `react-modal` se ha añadido correctamente, indicando la versión instalada.

13. `react-modal` proporciona la flexibilidad y opciones necesarias para crear modales de manera eficiente y personalizada en aplicaciones React.

14. Es importante familiarizarse con la documentación y ejemplos de `react-modal` para aprovechar al máximo sus capacidades y entender las diferentes maneras de implementarlo en un proyecto React.

### Renderización del Modal

#### Crear el modal

1. El objetivo es renderizar el modal automáticamente al cargar la página, sin necesidad de conectarlo a un botón inicialmente.
2. Se crea un nuevo directorio `modals` dentro del directorio de componentes, para organizar futuros modals.
3. Se crea un nuevo archivo `blog-modal.js` que será un componente de clase para gestionar su propio estado.
4. Se importa React y Component desde React y `ReactModal`, y se define la clase `BlogModal` que extiende `Component`.
5. Se establece un constructor básico que acepta `props` y llama a `super`, sin definir aún el estado.
6. La función `render` devuelve un `ReactModal` que se importa desde `react-modal`, y se establece la propiedad `isOpen` en `true` para asegurar que el modal se abra automáticamente.
7. Se coloca una etiqueta `<h1>` dentro del modal con el texto "¡Estoy en un modal!" para verificar su funcionamiento.
8. En el archivo `blog.js`, se importa `BlogModal` y se coloca el componente `BlogModal` dentro del `div` que se devuelve, asegurando que el modal se coloque en la parte superior del código JSX.
9. Se guarda el archivo y se comprueba que el modal aparece automáticamente al cargar la página.

#### Abrir el modal

1. `ReactModal` es una biblioteca modal ligera que requiere personalización, incluyendo el comportamiento de cierre al hacer clic fuera del modal.
2. El objetivo es crear un enlace que abra el modal cuando se hace clic, sin preocuparse aún por cerrarlo o enviar datos.
3. Se modifica `blog-modal.js` para que `ReactModal` use `this.props.modalIsOpen` para su propiedad `isOpen`.
4. Se agrega un nuevo atributo `blogModalIsOpen` al estado del componente del blog, inicialmente configurado como falso.
5. Se crea un manejador de clics `handleNewBlogClick` que actualiza `blogModalIsOpen` a verdadero al hacer clic en el enlace.
6. Se pasa el estado `blogModalIsOpen` como propiedad `modalIsOpen` al componente `BlogModal`.
7. Se prueba que el modal no aparece al cargar la página, ya que `blogModalIsOpen` es falso por defecto.
8. Se agrega un enlace con un controlador `onClick` que llama a `handleNewBlogClick` y abre el modal.
9. Al hacer clic en el enlace, el modal se abre, confirmando que todo está conectado correctamente.

#### Cerrar Modal

1. Para cerrar el modal, necesitamos actualizar el estado `blogModalIsOpen` a `false` cuando `onRequestClose` se activa.
2. En el componente `Blog`, agregamos una nueva función llamada `handleModalClose` que se encargará de actualizar el estado del modal a `false`.
3. Pasamos `handleModalClose` como la función a `onRequestClose` en el componente `BlogModal`.
4. Ahora, cuando se haga clic fuera del modal o se presione la tecla Escape, `handleModalClose` se ejecutará, actualizando el estado y cerrando el modal.
5. Probamos esta implementación en el navegador para asegurarnos de que el modal se cierra correctamente con ambas acciones.
6. Con esta configuración, el modal puede abrirse con un enlace y cerrarse tanto al hacer clic fuera del modal como al presionar la tecla Escape, proporcionando una experiencia de usuario intuitiva y flexible.

[Codigo modal](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/a5d10d2c44a9f9b8c7b3cf00ccb38953ee2d6a9a)

#### Modificando estilos en línea

1. Se recomienda usar estilos en línea para que estos anulen los valores predeterminados de la biblioteca React Modal. 

2. Al trabajar con React Modal, observamos que el modal ocupa toda la página, lo cual no es deseable. Queremos reducir su tamaño y cambiar el fondo blanco a una superposición más oscura.

3. Para aplicar estilos, primero creamos un objeto de estilo personalizado dentro del constructor del componente `BlogModal`.

4. React Modal permite pasar estilos personalizados a través de objetos específicos para las clases `content` y `overlay`.

5. En el objeto de estilo `content`, se ajusta la posición del modal para que esté centrado y se establece un ancho específico, mejorando su apariencia.

6. Aplicamos estos estilos al modal mediante la propiedad `style`.

7. Luego, añadimos un estilo de superposición para oscurecer el área alrededor del modal. Esto se hace utilizando la clase `overlay` y estableciendo un color de fondo con opacidad.

8. Al probar los cambios, se confirma que el modal se ve mejor, con un tamaño adecuado y una superposición oscura que resalta el contenido del modal.

9. En resumen, pasar estilos en línea directamente a React Modal asegura que los estilos personalizados tengan prioridad y no sean anulados por los valores predeterminados de la biblioteca. Este método es útil especialmente cuando se trabaja con componentes de terceros. 

11. La documentación de React Modal proporciona ejemplos y detalles sobre cómo aplicar estas personalizaciones, lo cual es útil para adaptar el modal a las necesidades específicas del proyecto.

[Codigo estilos en linea](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/fce9b7feb8fac9e7e42764ab747d769ea5809f1c)

#### Resolviendo un error del Modal

1. Antes de continuar, abordaremos una advertencia que aparece en la consola al abrir el modal.

2. Al abrir la consola de JavaScript y hacer clic en "Abrir modal", se muestra una advertencia que indica que el elemento de la aplicación no está definido.

3. La advertencia sugiere utilizar `Modal.setAppElement` con un elemento como argumento o establecer `appElement` directamente en el código.

4. Esto es importante para la accesibilidad, asegurando que los lectores de pantalla ignoren el contenido detrás del modal y se centren en el contenido del modal cuando esté abierto.

5. Para solucionar esto, debemos definir el elemento de la aplicación utilizando `setAppElement`.

6. Abrimos `blog-modal.js` y agregamos una línea de código justo encima de la definición de la clase para configurar el elemento de la aplicación.

7. Llamamos a `ReactModal.setAppElement` y le pasamos el nombre del contenedor de la aplicación. En este caso, es una clase llamada `app-wrapper` definida en `index.html`.

8. Es importante especificar que es una clase usando un punto (.) antes del nombre, ya que `setAppElement` busca esta consulta.

9. Guardamos los cambios y actualizamos el navegador.

10. Al abrir nuevamente la consola de JavaScript y hacer clic en "Abrir modal", la advertencia ya no aparece, indicando que el problema está solucionado.


[Codigo error](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/216ab59a8fdcba6741d3960ef19c2f05b2ee430d)

### Inicio creación formulario del modal

- El modal actúa como una pieza de presentación y como un middleware entre el componente principal del blog y el formulario del blog.

- El formulario del blog se encargará del proceso de envío del formulario, gestionando todos los elementos del formulario y notificando al modal cuando se haya creado correctamente un nuevo blog.

- El modal, a su vez, informará al componente principal del blog que se ha creado un nuevo registro, actualizando la pantalla al instante.

**Pasos**

1. Crear un componente básico que eventualmente llamará a nuestra API llamado `blo-form.js`. Este componente será un formulario sencillo con entradas y un botón de envío, asegurándonos de que se renderice correctamente en el modal.

2. Lo importaremos en el modal y reemplazaremos el contenido codificado del modal por el componente del formulario `BlogForm`.

[Codigo inicio creación formulario](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/79723197343f829f982a84112061f0216ec698f5)


### Implementación del formulario del modal

**Objetivo:**
Queremos que el formulario actualice su estado local cada vez que un usuario escriba en él. Al enviar el formulario, se recopilarán estos datos y se notificará al componente principal (`blog-modal`) que el formulario ha sido enviado.

**Pasos:**

1. **Actualización del estado del formulario:**
   - Configuramos el formulario para que, al escribir en él, se actualice el estado local del componente `BlogForm`.
   - En `BlogForm`, se define el estado inicial en el constructor con `this.state` incluyendo propiedades como `title` y `blog_status`.
   - Se añade un manejador de cambios `handleChange` para actualizar el estado cuando el usuario escribe en el formulario.
   - El manejador de cambios se enlaza al componente con `this.handleChange.bind(this)`.
   - Se utiliza `event.target.name` y `event.target.value` para identificar y actualizar el campo correspondiente.
   - Las entradas del formulario se configuran con `onChange`, `name`, `placeholder` y `value`.
   - Los valores del estado (`this.state.title` y `this.state.blog_status`) se enlazan a los respectivos campos de entrada.

2. **Envío del formulario:**
   - Al enviar el formulario, se capturan todos los datos del formulario.
   - Estos datos se pasan al componente principal (`blog-modal`), indicando que el formulario se ha enviado.
   - Se define la función `handleSuccessfulFormSubmission` para gestionar el envío exitoso del formulario.
   - Esta función se enlaza al componente con `this.handleSuccessfulFormSubmission.bind(this)` y se pasa como una propiedad a `BlogForm`.
   - Se define la función `handleSubmit` para gestionar el envío del formulario.
   - Esta función previene la actualización de la página con `event.preventDefault()` y llama a `this.props.handleSuccessfulFormSubmission` con los datos del estado.

[Codigo paso de datos para su posterior envía a la API](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/4faaa60597cdf0e3535731c526d578e3f7e585c8)


### Implementación de Envío de Datos del Formulario de Blog con Axios

1. **Objetivo del Proyecto:**
   - Queremos que nuestro formulario de blog permita a los usuarios actualizar el estado local del formulario mientras escriben.
   - Al enviar el formulario, los datos se deben recopilar y enviar al componente principal (modal del blog).
   - Posteriormente, nos conectaremos a una API para enviar estos datos, pero en este momento nos centraremos en la gestión de estados y el flujo de datos entre componentes.

2. **Pasos a Seguir:**
   1. **Inicio de Sesión y Navegación:**
      - Inicia sesión en DevCamp Space.
      - Ve a la sección "Portafolio" y luego a "Blogs" para verificar los blogs actuales.

   2. **Creación del Método `buildForm`:**
      - Abre Visual Studio Code y crea un método llamado `buildForm`.
      - Instancia un nuevo objeto `FormData`.
      - Agrega los datos del estado del formulario al objeto `FormData` usando `formData.append`.
      - Asegúrate de devolver el objeto `FormData` al final del método.

   3. **Configuración de `handleSubmit`:**
      - Importa `axios` en la parte superior del archivo.
      - Configura `axios.post` dentro del método `handleSubmit` para enviar los datos del formulario a la API.
      - Pasa la URL de la API, los datos del formulario construidos con `this.buildForm()` y las credenciales con `{ withCredentials: true }`.
      - Agrega un `then` para manejar la respuesta de la API y un `catch` para manejar posibles errores.

   4. **Pruebas y Verificación:**
      - Actualiza el navegador y abre la consola de desarrollo.
      - Abre el modal del blog y llena los campos del formulario.
      - Envía el formulario y verifica en la consola si los datos se están enviando correctamente.
      - Revisa en DevCamp Space si el nuevo blog aparece en la lista de blogs.


[Codigo envío de datos a la API](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/23668ecaa47c80bf2c5cfe5edb65881deeb3d458)


### Implementar Flujo de Datos y Cierre Automático del Modal en React

**Objetivo:**
Crear una nueva publicación de blog usando un formulario, limpiar el formulario y cerrar el modal al guardar, y mostrar la nueva publicación de blog en la parte superior de la lista de blogs.

**Pasos a Seguir:**

1. **Estructura de Componentes:**
   - **Formulario del Blog (`formulario-blog.js`):** Componente hijo que captura los datos del blog.
   - **Modal del Blog (`blog-modal.js`):** Componente padre inmediato que contiene el formulario.
   - **Página del Blog (`blog.js`):** Componente principal que contiene el modal y la lista de blogs.

2. **Limpieza del Formulario:**
   - Dentro del método `handleSubmit` en `formulario-blog.js`, después de recibir una respuesta exitosa de la API, limpiar el formulario usando `this.setState` para restablecer los atributos `title` y `blog_status`.

3. **Paso de Datos a Través de Componentes:**
   - **Formulario del Blog (`formulario-blog.js`):** Al enviar el formulario, comunica los datos al modal llamando a `this.props.handleSuccessfulFormSubmission`.
   - **Modal del Blog (`blog-modal.js`):** Recibe los datos en el método `handleSuccessfulFormSubmission` y los pasa a su componente padre usando `this.props.handleSuccessfulNewBlogSubmission`.
   - **Página del Blog (`blog.js`):** Recibe los datos en el método `handleSuccessfulNewBlogSubmission`, cierra el modal y actualiza la lista de blogs.

4. **Cerrar el Modal y Actualizar la Lista:**
   - En el componente `blog.js`, definir el método `handleSuccessfulNewBlogSubmission` que cierra el modal (actualizando `blogModalIsOpen` a `false`) y agrega el nuevo blog a la lista (`blogItems`) usando `this.setState`.

5. **Implementación de Funcionalidades Clave:**

   - **Formulario del Blog (`formulario-blog.js`):**
     - Método `handleSubmit`: Realiza una solicitud a la API y, en caso de éxito, llama a `this.props.handleSuccessfulFormSubmission` y limpia el formulario.

   - **Modal del Blog (`blog-modal.js`):**
     - Método `handleSuccessfulFormSubmission`: Recibe los datos del formulario y llama a `this.props.handleSuccessfulNewBlogSubmission`.

   - **Página del Blog (`blog.js`):**
     - Constructor: Vincula el método `handleSuccessfulNewBlogSubmission`.
     - Método `handleSuccessfulNewBlogSubmission`: Cierra el modal y actualiza la lista de blogs.
     - Método `handleModalClose`: Se asegura de que el modal esté cerrado.

[Codigo flujo datos entre componentes, cierre modal, actualización blog](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/7fb51531e302239c848bc91cdae5782c24188888)

### Mejorar el Diseño del Formulario en el Modal

**Objetivo:**
Rediseñar el formulario dentro del modal para tener una mejor estructura y estilos, facilitando la futura incorporación de un editor de texto enriquecido y cargadores de imágenes.

**Pasos a Seguir:**

1. **Aplicación de Estilos:**
   - **Creación de Archivo Sass:**
     - Crear un archivo `blog-form.scss` en el directorio de estilos.
     - Importar este archivo en el archivo Sass principal (`main.scss`).

   - **Contenido de `blog-form.scss`:**
     - Definir estilos específicos para `blog-form-wrapper`, utilizando mix-ins ya creados para mantener consistencia y evitar duplicación de código.

2. **Aplicación de Clases y Pruebas:**
   - Asignar `className="blog-form-wrapper"` en el componente de formulario en `formulario-blog.js`.
   - Asegurarse de que el formulario y sus elementos están utilizando los estilos definidos en `blog-form.scss`.
   - Probar la funcionalidad abriendo el modal y verificando la presentación.

3. **Aplicación de Clases y Pruebas:**
  - Asignar `className="btn"` al botón `formulario-blog.js`.

[Codigo mejorar un poco el diseño del formulario](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/commit/18a3827cb4a1c95563879040913f4dc718c63cb0)
