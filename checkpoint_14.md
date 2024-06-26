# REACT

## Introducción a React

React es una `biblioteca` de JavaScript utilizada para construir interfaces de usuario. Es importante destacar que, aunque a menudo se le llama "framework" debido a su poder y la forma en que se utiliza, técnicamente es una biblioteca debido a su ligereza.

React permite la creación de aplicaciones web modernas y poderosas mediante una metodología única en comparación con otros marcos web tradicionales como Rails o Django. En esta guía, vamos a explorar la arquitectura de React y cómo se utiliza para construir interfaces de usuario eficaces.

## Arquitectura Basada en Componentes

Una de las características fundamentales de React es su enfoque en componentes. Los componentes son entidades únicas y reutilizables que forman la base de cualquier aplicación React. Para entender mejor cómo funciona esto, veamos un ejemplo práctico:

## Ejemplo webs de Componentes 

### Facebook

![Web facebook](./images/react/01_facebook_example.PNG)

En una página de Facebook, cada elemento visible puede ser considerado un componente. Por ejemplo:

- Una miniatura de imagen.
- Un enlace en la barra lateral.
- Un banner publicitario que puede cerrarse.

Cada uno de estos elementos es un componente independiente y reutilizable que se representa en la pantalla.

### Comparación con Enfoques Tradicionales

En sistemas tradicionales basados en frameworks como Rails, las aplicaciones se construyen mediante la creación de múltiples archivos HTML individuales. Cada página de la aplicación tiene su propio archivo HTML. Por ejemplo, una aplicación de portafolio en Rails tendría:

![porfolio image](./images/react/02_porfolio_example.PNG)

- Una página de inicio (`home.html`).
- Una página "Acerca de" (`about.html`).
- Una página de portafolio (`portfolio.html`).

En contraste, una aplicación React se basa en un único archivo HTML. Todos los componentes y datos de la aplicación se gestionan dentro de este archivo único, y los componentes se muestran o eliminan dinámicamente según sea necesario.

### Otro ejemplo: MadLibs

Para ilustrar cómo funciona React, consideremos una aplicación Mad Libs:

![Madlibs image](./images/react/03_madlib_example.PNG)

1. **Formulario de Entrada**: Un componente que solicita al usuario varios tipos de palabras (adjetivos, sustantivos, nombres de celebridades, etc.).
2. **Historia Generada**: Un componente que muestra la historia generada usando las palabras proporcionadas por el usuario.

Al enviar el formulario, las palabras se insertan en la historia y se muestra en la pantalla. Todos estos elementos se gestionan dentro de un único archivo HTML, y los componentes se cargan y descargan dinámicamente según las interacciones del usuario.

## Metodología de Desarrollo en React

Desarrollar aplicaciones en React implica un cambio de mentalidad si provienes de un entorno de desarrollo web tradicional. En lugar de construir múltiples páginas web estáticas, en React nos enfocamos en construir componentes granulares y detallados. Estos componentes se gestionan dinámicamente para proporcionar una experiencia de usuario fluida y reactiva.

## Instalación de Dependencias en Mac

Para comenzar a trabajar con React en un sistema Mac, es necesario instalar algunas dependencias esenciales. A continuación, se detallan los pasos para configurar el entorno de desarrollo.

#### Instalación de Homebrew

Homebrew es un gestor de paquetes que facilita la instalación de software en macOS. 

1. **Instalar Homebrew:**
   - Visita [brew.sh](https://brew.sh) y copia el script de instalación.
   - Abre la terminal (puedes encontrarla presionando `Comando + Barra espaciadora` y escribiendo "Terminal").
   - Pega y ejecuta el script en la terminal.

```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. **Verificar la instalación de Homebrew:**
   - Reinicia la terminal.
   - Ejecuta el comando `brew` para asegurarte de que Homebrew esté instalado correctamente.

#### Instalación de Xcode

Xcode es el IDE de Apple para macOS. No se utilizará directamente, pero muchas dependencias lo requieren.

1. **Instalar Xcode:**
   - Abre la App Store en tu Mac.
   - Busca "Xcode" y descárgalo.
   - Xcode es una descarga grande (aproximadamente 5.5 GB), así que ten paciencia mientras se instala.

#### Instalación de Node.js

Node.js es necesario para ejecutar React y gestionar sus paquetes.

1. **Instalar Node.js:**
   - Abre la terminal.
   - Usa Homebrew para instalar Node.js ejecutando el siguiente comando:

```bash
    brew install node
```

2. **Verificar la instalación de Node.js y npm:**
   - Verifica la versión de Node.js con `node -v`.
   - Verifica la versión de npm (Node Package Manager) con `npm -v`.

En caso de problemas con los permisos al verificar npm, sigue estos pasos:

1. **Resolver problemas de permisos:**
   - Si obtienes un error de verificación de actualización de npm, ejecuta el comando sugerido por el sistema para resolver los permisos.
   - El comando típico sería algo así:

```bash
    sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
```

2. **Verificar nuevamente npm:**
   - Después de resolver los permisos, verifica nuevamente con `npm -v`.

#### Resumen

Después de completar estos pasos, tendrás las herramientas necesarias instaladas en tu sistema para desarrollar aplicaciones React en macOS:

- **Homebrew:** Para gestionar paquetes de software.
- **Xcode:** Para satisfacer las dependencias necesarias.
- **Node.js y npm:** Para ejecutar React y gestionar paquetes de Node.

Con estas dependencias instaladas, estarás listo para comenzar a crear aplicaciones React en tu Mac.

## Instalación en Windows

### 1. Instalación de Node.js y npm

Node.js es un entorno de ejecución de JavaScript y npm es el gestor de paquetes de Node.js. Ambos son necesarios para trabajar con React.

1. **Descarga e instala Node.js**:
   - Ve al sitio web oficial de Node.js: [https://nodejs.org/](https://nodejs.org/).
   - Descarga el instalador recomendado (LTS) y sigue las instrucciones para instalarlo.

2. **Verifica la instalación**:
   - Abre tu terminal (cmd, PowerShell o la terminal integrada de VS Code) y ejecuta:
     ```bash
        node -v
        npm -v
     ```
   - Deberías ver los números de versión de Node.js y npm.

### 2. Instalación de Visual Studio Code (VSC)

Visual Studio Code es un editor de código fuente muy popular y compatible con muchas extensiones útiles para React.

1. **Descarga e instala VS Code**:
   - Ve al sitio web oficial de VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/).
   - Descarga el instalador y sigue las instrucciones para instalarlo.

### 3. Instalación de la Extensión de React para VS Code

Para mejorar tu experiencia de desarrollo con React en VS Code, instala la extensión de React.

1. **Abre VS Code**.
2. **Ve a la pestaña de extensiones** (icono de cuadrado en la barra lateral izquierda o presiona `Ctrl+Shift+X`).
3. **Busca "ES7 React/Redux/GraphQL/React-Native snippets"** y haz clic en "Instalar".
4. También es útil instalar la extensión "Prettier - Code formatter" para formatear tu código automáticamente.

### 4. Crear una Aplicación React
Ahora, puedes crear tu primera aplicación React usando `create-react-app`.

1. **Abre tu terminal** (puedes usar la terminal integrada en VS Code).
2. **Ejecuta el siguiente comando** para instalar `create-react-app` globalmente:
   ```bash
   npm install -g create-react-app
   ```
3. **Crea una nueva aplicación React**:
   ```bash
   npx create-react-app nombre-de-tu-aplicacion
   ```
   Reemplaza `nombre-de-tu-aplicacion` con el nombre que desees para tu proyecto.
4. **Navega al directorio del proyecto**:
   ```bash
   cd nombre-de-tu-aplicacion
   ```
5. **Inicia la aplicación**:
   ```bash
   npm start
   ```

### 5. Configuración Adicional (Opcional)
- **Configurar Prettier**: Asegúrate de que tu código se formatee automáticamente. Crea un archivo `.prettierrc` en la raíz de tu proyecto con las configuraciones deseadas, por ejemplo:
  ```json
  {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "all"
  }
  ```
- **Instalar ESLint**: Para mantener un código limpio y libre de errores. Instala las dependencias necesarias:
  ```bash
  npm install eslint eslint-plugin-react eslint-plugin-react-hooks --save-dev
  ```
  Luego, crea un archivo `.eslintrc.json` en la raíz del proyecto:
  ```json
  {
    "extends": ["react-app"],
    "plugins": ["react", "react-hooks"]
  }
  ```

¡Con estos pasos, tu terminal de Windows y Visual Studio Code estarán preparados para desarrollar aplicaciones con React!

## Crear un proyecto a partir de una plantilla creada con las dependencias mínimas necesarias

Para desarrollar aplicaciones React, se necesitan varias herramientas y dependencias. Aunque ya tienes Node.js y npm, configurar todo el entorno puede ser complicado. Para simplificar esto, se ha creado un módulo npm específico para este curso: **DevCamp JavaScript Project Builder**. Esto permite configurar rápidamente un entorno de desarrollo React sin preocuparse por las configuraciones detalladas.

### Instalación de DevCamp JavaScript Project Builder

1. **Instalar el módulo:**
   - Abre la terminal y ejecuta el siguiente comando:
     ```bash
     npm install devcamp-js-builder -g
     ```
   - Si encuentras problemas de permisos, usa:
     ```bash
     sudo npm install devcamp-js-builder -g
     ```
   - Si es necesario, añade el flag `-f`:
     ```bash
     sudo npm install devcamp-js-builder -g -f
     ```

2. **Verificar la instalación:**
   - En cualquier directorio, ejecuta:
     ```bash
     js-generate
     ```
   - Esto mostrará las plantillas de proyecto disponibles. Elige una plantilla para generar un proyecto React, por ejemplo, `react-bootstrap`.

### Creación de un Proyecto

1. **Generar un proyecto:**
   - Ejecuta `js-generate` y selecciona `react-bootstrap`.
   - Nombra tu proyecto,  `AquiNombreProyecto`.
   
2. **Instalar dependencias del proyecto:**
   - Navega al directorio del proyecto generado.
   - Ejecuta:
     ```bash
     npm install
     ```
   - Esto instalará todas las dependencias listadas en el proyecto.

### Verificación y Ejecución del Proyecto

1. **Verificar la instalación:**
   - Asegúrate de que las dependencias estén correctamente instaladas ejecutando:
     ```bash
     npm start
     ```
   - Esto iniciará el servidor de desarrollo y deberías ver tu aplicación en `localhost:8080`.

2. **Editar y comprobar cambios:**
   - Abre el archivo `src/components/app.js` en tu editor de texto.
   - Realiza un cambio, por ejemplo, agrega un texto "Mi aplicación de prueba".
   - Guarda el archivo y verifica que el cambio se refleje en el navegador.

## Resumen del Proceso de Configuración de React con React-Redux-Router

### Instalación y Configuración Inicial

1. **Crear Directorio para el Proyecto:**
   - Elige un directorio donde deseas almacenar tu proyecto. Puedes usar cualquier ubicación en tu sistema, ya sea Mac, Linux o Windows.

2. **Verificar la Instalación de JS Builder:**
   - Asegúrate de tener el módulo `JS Builder` instalado ejecutando el comando `js-generate`. Si funciona correctamente, debería mostrar una lista de plantillas de proyectos.

3. **Generar el Proyecto:**
   - Selecciona la plantilla `react-redux-router` usando las teclas de flecha y presiona Enter.
   - Asigna un nombre al proyecto, por ejemplo, `jordan-hudgens-react-portfolio`.
   - Esto generará un proyecto completo con la estructura necesaria.

4. **Navegar al Proyecto:**
   - Usa el comando `cd` para moverte al directorio del proyecto recién creado.
   - Opcionalmente, puedes abrir el explorador de archivos para ver los archivos generados.

5. **Abrir el Proyecto en el Editor de Texto:**
   - Abre tu editor de texto (VS Code recomendado) y carga el proyecto generado.

### Instalación de Dependencias

1. **Instalar Dependencias del Proyecto:**
   - En la terminal, ejecuta `npm install` para instalar todas las dependencias listadas en el archivo `package.json`.
   - Esto creará un directorio `node_modules` con todas las bibliotecas necesarias.

2. **Solución del Error del Compilador `node-sass`:**
   - Antes de instalar las dependencias, ejecuta los siguientes comandos en la terminal:
     ```bash
     npm uninstall node-sass
     npm install sass
     ```
   - Luego, procede con la instalación de las dependencias usando `npm install`.

### Verificación y Ejecución del Proyecto

1. **Iniciar el Proyecto:**
   - Ejecuta `npm run start` para iniciar el servidor de desarrollo local.
   - Esto compilará el proyecto y lo ejecutará en `localhost:3000`.

2. **Verificar Funcionamiento:**
   - Abre tu navegador y navega a `localhost:3000`. Deberías ver una página con el texto "DevCamp React Starter React Redux Router".
   - Puedes editar el contenido del archivo `src/components/App.js` para verificar los cambios. Por ejemplo, cambia el texto dentro de la etiqueta `<h1>` y guarda el archivo. La página se actualizará automáticamente con los cambios.

### Exploración y Modificación del Proyecto

1. **Explorar el Sistema de Archivos:**
   - Navega a través de los archivos en el directorio `src` para familiarizarte con la estructura del proyecto.
   - Los componentes principales y configuraciones se encuentran en este directorio.

2. **Realizar Cambios:**
   - Abre `src/components/App.js` y modifica el contenido para personalizar el proyecto. Guarda los cambios y verifica que se reflejen en el navegador.

## Añadir, eliminar y administrar Modulos de nodo

### Exploración y Modificación del Proyecto

1. **Estructura del Proyecto:**
   - `node_modules`: Lista de todas las bibliotecas instaladas.
   - `src`: Contiene los archivos fuente de la aplicación.
   - `package.json`: Lista de dependencias y scripts del proyecto.

2. **Agregar una Nueva Biblioteca Manualmente:**
   - Abre `package.json` y agrega la dependencia:
     ```json
     "moment": "2.22.2"
     ```
   - Instala la nueva biblioteca:
     ```bash
     npm install
     ```

3. **Usar una Biblioteca Externa en React:**
   - Importa la biblioteca en tu componente:
     ```javascript
     import moment from 'moment';
     ```
   - Usa la biblioteca en el código:
     ```javascript
     <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
     ```

### Eliminación de Bibliotecas

1. **Eliminar Bibliotecas Innecesarias:**
   - Elimina las dependencias de `package.json`:
     ```json
     "jquery": "^3.5.1",
     "bootstrap": "^4.5.0",
     "popper.js": "^1.16.1"
     ```
   - Ejecuta el comando para sincronizar las dependencias:
     ```bash
     npm install
     ```

2. **Reinstalar `node_modules` si es necesario:**
   - Elimina el directorio `node_modules`:
     ```bash
     rm -rf node_modules
     ```
   - Reinstala las dependencias:
     ```bash
     npm install
     ```

## Añadir dependencias a través del terminal

1. **Comando para Instalar una Dependencia:**
   - Abre la terminal.
   - Usa el comando:
     ```bash
     npm install moment
     ```
   - Este comando descargará e instalará la última versión de "moment" y la añadirá automáticamente a `package.json`.

2. **Verificación:**
   - Abre `package.json` y verifica que "moment" esté listado en las dependencias.
   - Asegúrate de que "moment" esté en orden alfabético.

3. **Confirmación en `node_modules`:**
   - En Visual Studio Code, actualiza el explorador de archivos.
   - Navega a `node_modules` y verifica que "moment" esté presente.

### Resumen de Pasos

1. **Eliminar una Dependencia:**
   - Eliminar línea en `package.json`.
   - Ejecutar `npm install` en la terminal.

2. **Agregar una Dependencia Automáticamente:**
   - Ejecutar `npm install nombre_dependencia` en la terminal.

3. **Verificar Cambios:**
   - Confirmar cambios en `package.json`.
   - Verificar la presencia de la dependencia en `node_modules`.

### Código para Referencia

#### Eliminar "moment" del `package.json`
```json
{
  "dependencies": {
    // otras dependencias
    // "moment": "2.22.2" <-- Eliminar esta línea
  }
}
```

#### Agregar "moment" usando npm
```bash
npm i moment
```

### Conclusión

Estas instrucciones muestran cómo eliminar y agregar dependencias en una aplicación React, lo que es esencial para mantener el proyecto limpio y actualizado. La forma automatizada de agregar dependencias es preferible, ya que asegura que siempre se utilice la versión más reciente y que las dependencias estén correctamente ordenadas en `package.json`.

## Descripción General del Directorio `src` en una Aplicación React

El directorio `src` (abreviatura de "source" o "fuente") es el núcleo de tu aplicación React. Contiene toda la lógica y el código que defines para tu aplicación, mientras que otros archivos en la raíz del proyecto suelen ser configuraciones y dependencias. A continuación, se presenta una descripción general de los componentes principales dentro del directorio `src`:

### Acciones y Reductores

- **Acciones (`actions/`)**: Permiten interactuar con la tienda de Redux. Redux se utiliza para gestionar el estado global de la aplicación, almacenando todos los datos en un solo lugar y permitiendo acceder a ellos desde cualquier componente.
- **Reductores (`reducers/`)**: Son funciones que especifican cómo cambia el estado de la aplicación en respuesta a una acción. Trabajan conjuntamente con las acciones y son una parte integral de Redux.

### Componentes

- **Componentes (`components/`)**: Son los bloques básicos de construcción en una aplicación React. Cada componente representa una parte específica de la interfaz de usuario y puede ser tan pequeño como un botón o tan grande como una página completa.
  - **Componente de Aplicación**: El componente principal que anida todos los demás componentes de la aplicación. Este componente suele estar en `App.js` y sirve como punto de entrada para el resto de los componentes.

### Estilos

- **Estilos (`styles/`)**: Contiene archivos CSS y SCSS que definen la apariencia de la aplicación. Mantener los estilos en un directorio separado facilita su gestión y organización.
  - **Main.scss**: Archivo de entrada principal para los estilos de la aplicación. Importa otros archivos de estilo, permitiendo una gestión centralizada de los estilos.

### Bootstrap.js

- **Bootstrap.js**: Actúa como el punto de inicio de la aplicación. Configura React, Redux, el enrutador y cualquier otra biblioteca necesaria, y luego inicia la aplicación. Importa el componente de la aplicación y cualquier otro archivo necesario para inicializar la aplicación.

### Proveedor

- **Proveedor (`provider.js`)**: Proporciona polyfills y configuraciones necesarias para que el código moderno de JavaScript funcione en todos los navegadores. Utiliza Babel para convertir el código moderno en una sintaxis que los navegadores puedan entender.

### Flujo General de Inicialización

1. **Punto de Entrada**: El archivo HTML principal (`index.html`) contiene un div con la clase `app-wrapper`.
2. **Carga de Bootstrap.js**: `Bootstrap.js` carga React, Redux y otras bibliotecas necesarias. Selecciona el div `app-wrapper` del HTML y inyecta el componente de la aplicación dentro de él.
3. **Renderizado del Componente de Aplicación**: El componente de aplicación (`App.js`) sirve como contenedor principal para todos los demás componentes de la aplicación.
4. **Gestión de Estado con Redux**: Redux se configura para gestionar el estado global de la aplicación, con acciones y reductores definiendo cómo se actualiza y mantiene el estado.
5. **Estilos**: Los estilos CSS y SCSS se importan a través de `Main.scss`, proporcionando una apariencia cohesiva a la aplicación.

## Resumen

El directorio `src` es el corazón de tu aplicación React, conteniendo todos los componentes, estilos y lógica necesarios para construir y mantener la aplicación. Al estructurar y organizar este directorio de manera clara y eficiente, se facilita el desarrollo y mantenimiento del proyecto. A medida que avances en el curso, te familiarizarás con cada uno de estos elementos y aprenderás a utilizarlos de manera efectiva en tus propias aplicaciones.

## Descripción del Directorio `public` en una Aplicación React

El directorio `public` contiene recursos estáticos y el archivo HTML base que React utiliza para construir y renderizar la aplicación. Aquí revisaremos cada componente clave dentro de este directorio:

### Directorio `assets`

- **README**: Explica el uso del directorio `assets`, que está destinado a contener imágenes estáticas y otros recursos que no cambian a lo largo del tiempo. Esto incluye elementos como logotipos de empresas y cualquier imagen que no se espera que los usuarios cambien.
  - **Uso de `assets`**: Se pueden colocar imágenes estáticas aquí y luego referenciarlas en la aplicación. Por ejemplo, si tienes una imagen de perfil o un logotipo de la empresa, este es el lugar adecuado para almacenarlos.

### Favicon

- **Favicon**: Es el pequeño icono que aparece en la pestaña del navegador junto al título de la página web. Cada aplicación React viene con un favicon predeterminado, pero puedes personalizarlo.
  - **Ejemplo de Favicon**: Cuando navegas a `google.com`, el pequeño ícono "G" es el favicon de Google. Puedes crear y usar tu propio favicon que represente tu aplicación o empresa.

### Archivo `index.html`

- **Index.html**: Es el punto de entrada principal de la aplicación React. Aunque React es conocido por ser una "Single Page Application" (SPA), el `index.html` es la estructura básica que contiene un único div (`<div id="root"></div>`) donde React inyectará dinámicamente todos los componentes y la lógica de la aplicación.

### Detalles del `index.html`

- **Estructura Básica**: Similar a cualquier documento HTML, contiene etiquetas como `<!DOCTYPE html>`, `<html>`, `<head>`, y `<body>`.
- **Meta Tags y Título**: Contiene metadatos y el título de la página. Puedes modificar el título para personalizarlo, como "Jordan Hudgens Portfolio".
- **Div Root**: `<div id="root"></div>` es el contenedor donde React renderiza toda la aplicación.
- **Intercepción de React**: React utiliza JavaScript para interceptar y renderizar dinámicamente contenido dentro de este div, creando una experiencia de usuario fluida y dinámica.

## Flujo de Trabajo y Uso de Recursos

1. **Iniciar el Servidor**: Utilizando el comando `npm run start`, inicias el servidor de desarrollo de React. Esto carga la aplicación en `localhost:3000`.
2. **Modificar el Título**: Cambiar el contenido dentro de la etiqueta `<title>` en `index.html` actualizará el título que aparece en la pestaña del navegador.
   - **Ejemplo**: Cambiar `<title>React App</title>` a `<title>Jordan Hudgens Portfolio</title>`.
3. **Ver el Cambio**: Una vez que el servidor está en funcionamiento, puedes ver el título actualizado en la pestaña del navegador. Este título también es utilizado por las redes sociales cuando se comparte el enlace de la aplicación.

## Importancia del `index.html`

- **Metadatos**: Es crucial para los motores de búsqueda y las redes sociales. Contiene información que los motores de búsqueda utilizan para indexar tu sitio y que las redes sociales utilizan para mostrar vistas previas cuando se comparte un enlace.
- **Punto de Entrada Único**: Proporciona un único punto de entrada para toda la aplicación, simplificando la gestión de rutas y la navegación dentro de la aplicación.

## Resumen

En resumen, el directorio `public` y, específicamente, el archivo `index.html` son esenciales para la estructura y funcionamiento de una aplicación React. El `index.html` actúa como la base sobre la cual React construye y renderiza la interfaz dinámica de la aplicación. El directorio `assets` contiene recursos estáticos que se referencian en la aplicación. Personalizar el título y favicon puede mejorar la presentación y accesibilidad de tu aplicación en la web.

## Carpeta `webpack` en una Aplicación React

La carpeta `webpack` contiene configuraciones importantes que ayudan a empaquetar y gestionar recursos y dependencias en una aplicación JavaScript. Aunque `webpack` no es exclusivo de React y se puede usar con otros marcos como Vue y Angular, es una herramienta comúnmente utilizada en el desarrollo de aplicaciones React debido a su flexibilidad y eficiencia en la gestión de módulos y recursos.

### Archivos de Configuración de Webpack

Dentro de la carpeta `webpack`, típicamente encontrarás varios archivos de configuración. Vamos a explorar su propósito general y el contenido de uno de estos archivos.

1. **`common.config.js`**: Contiene configuraciones comunes que se aplican a todos los entornos (desarrollo, producción, etc.).
2. **`dev.config.js`**: Configuraciones específicas para el entorno de desarrollo.
3. **`prod.config.js`**: Configuraciones específicas para el entorno de producción.
4. **`postcss.config.js`**: Configuraciones relacionadas con el procesamiento de CSS.

### Exploración del Archivo `common.config.js`

Este archivo es fundamental ya que establece reglas y configuraciones comunes necesarias para que la aplicación funcione correctamente en cualquier entorno.

```javascript
// Importación de la biblioteca SplitChunksPlugin
const { SplitChunksPlugin } = require('webpack').optimize;

module.exports = {
  // Punto de entrada principal
  entry: './src/bootstrap.js',
  
  // Resolución de archivos
  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules']
  },
  
  // Reglas para manejar diferentes tipos de archivos
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(jpg|png|gif|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'images'
          }
        }
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'videos'
          }
        }
      }
    ]
  },
  
  // Complementos
  plugins: [
    new SplitChunksPlugin({
      chunks: 'all'
    })
  ]
};
```

### Explicación del Archivo `common.config.js`

1. **Importaciones**:
   - **`SplitChunksPlugin`**: Utilizado para dividir los módulos en fragmentos más pequeños, mejorando el rendimiento de la aplicación.

2. **Punto de Entrada**:
   - **`entry: './src/bootstrap.js'`**: Define el archivo de inicio de la aplicación. Este archivo actúa como el punto de entrada principal desde donde se cargan todos los demás módulos y componentes.

3. **Resolución de Archivos**:
   - **`extensions: ['.js', '.scss']`**: Especifica las extensiones de archivo que webpack reconocerá y procesará.
   - **`modules: ['node_modules']`**: Define el directorio de módulos de node, donde se encuentran las dependencias del proyecto.

4. **Reglas de Módulos**:
   - **JavaScript**:
     - **`test: /\.js$/`**: Aplica esta regla a todos los archivos `.js`.
     - **`exclude: /node_modules/`**: Excluye el directorio `node_modules`.
     - **`use: 'babel-loader'`**: Utiliza Babel para transpilar el JavaScript moderno a una versión compatible con navegadores.
   - **Imágenes**:
     - **`test: /\.(jpg|png|gif|webp)$/`**: Aplica esta regla a archivos de imagen.
     - **`use: 'file-loader'`**: Utiliza `file-loader` para procesar y emitir archivos de imagen.
   - **Videos**:
     - **`test: /\.(mp4|webm)$/`**: Aplica esta regla a archivos de video.
     - **`use: 'file-loader'`**: Utiliza `file-loader` para procesar y emitir archivos de video.

5. **Complementos**:
   - **`SplitChunksPlugin`**: Ayuda a mejorar el rendimiento dividiendo los archivos en fragmentos más pequeños y cargándolos bajo demanda.

## Resumen

La carpeta `webpack` y sus archivos de configuración permiten a los desarrolladores controlar cómo se empaquetan y gestionan los recursos de la aplicación. Aunque esta configuración puede parecer compleja al principio, proporciona una gran flexibilidad y eficiencia en el desarrollo de aplicaciones modernas.

Con `webpack`, puedes gestionar eficazmente dependencias, optimizar el rendimiento mediante la carga diferida de módulos y asegurar que tu aplicación funcione de manera fluida en diferentes entornos. Esta configuración avanzada es crucial para proyectos grandes y complejos, aunque para este curso, no nos enfocaremos demasiado en modificar estos archivos.

# Babel

## Archivo `.babelrc` y el Compilador Babel en React

Aunque puede parecer tedioso, comprender la configuración y las herramientas que utilizamos en nuestro entorno de desarrollo es fundamental para desarrollar aplicaciones robustas y escalables. Ahora vamos a explorar el archivo `.babelrc` y el papel de Babel en nuestro proyecto de React.

### El Archivo `.babelrc`

El archivo `.babelrc` es un archivo de configuración para Babel, el compilador de JavaScript. Este archivo permite especificar cómo queremos que Babel procese nuestro código JavaScript.

Aquí está el contenido típico de un archivo `.babelrc`:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": []
}
```

### Entendiendo `.babelrc`

1. **Presets**:
   - **`@babel/preset-env`**: Permite a Babel transformar el código moderno de JavaScript (ES6 y posteriores) a una versión compatible con la mayoría de los navegadores.
   - **`@babel/preset-react`**: Permite a Babel transformar el código JSX y otras sintaxis específicas de React.

2. **Plugins**:
   - Actualmente está vacío, pero se puede utilizar para agregar funcionalidades adicionales a Babel.

### ¿Qué es Babel y por qué lo necesitamos?

Babel es un compilador de JavaScript que nos permite escribir código moderno de JavaScript y transformarlo en una versión que todos los navegadores puedan entender. JavaScript evoluciona continuamente, y no todos los navegadores soportan las últimas características. Aquí es donde Babel juega un papel crucial.

#### Ejemplo 1: Funciones de Flecha

Las funciones de flecha (`arrow functions`) son una característica moderna de JavaScript. Vamos a ver cómo Babel transforma una función de flecha en una función tradicional.

**Código Moderno (ES6)**:
```javascript
const nums = [1, 2, 3];
const multipliedNums = nums.map(el => el * 5);
```

**Código Transformado por Babel**:
```javascript
var nums = [1, 2, 3];
var multipliedNums = nums.map(function (el) {
  return el * 5;
});
```

Babel convierte la función de flecha en una función anónima tradicional, asegurando compatibilidad con navegadores más antiguos.

#### Ejemplo 2: Desestructuración

La desestructuración es otra característica moderna de JavaScript que simplifica la asignación de variables desde objetos.

**Código Moderno (ES6)**:
```javascript
const person = { firstName: "Kristine", lastName: "Hudgens" };
const { firstName, lastName } = person;
console.log(firstName, lastName);
```

**Código Transformado por Babel**:
```javascript
var person = { firstName: "Kristine", lastName: "Hudgens" };
var firstName = person.firstName;
var lastName = person.lastName;
console.log(firstName, lastName);
```

Babel convierte la desestructuración en asignaciones tradicionales de variables, garantizando compatibilidad.

### Exploración del REPL de Babel

El sitio web de Babel ofrece una herramienta llamada REPL (Read-Eval-Print Loop), que permite ver cómo Babel transforma el código en tiempo real.

1. **Visita**: [babeljs.io/repl](https://babeljs.io/repl)
2. **Escribe Código Moderno**: Puedes escribir cualquier código JavaScript moderno en el lado izquierdo.
3. **Ve el Código Transformado**: Babel muestra el código transformado en el lado derecho.

### Beneficios de Usar Babel

1. **Compatibilidad**: Permite escribir código moderno sin preocuparte por la compatibilidad del navegador.
2. **Flexibilidad**: Permite configurar diferentes presets y plugins según las necesidades del proyecto.
3. **Desarrollo Eficiente**: Facilita el uso de características modernas de JavaScript y bibliotecas como React.

### Resumen

Babel es una herramienta indispensable en el desarrollo moderno de JavaScript. Nos permite escribir código moderno y eficiente, transformándolo en una versión que todos los navegadores pueden entender. El archivo `.babelrc` nos proporciona una forma sencilla de configurar Babel según nuestras necesidades específicas, utilizando presets y plugins.

Con esta comprensión de Babel y `.babelrc`, estamos listos para escribir y transformar nuestro código React de manera efectiva. A continuación, empezaremos a escribir código React, pero ahora con una sólida comprensión de cómo nuestro entorno de desarrollo gestiona y transforma el código detrás de escena.

## Archivos `env.example.js` y `env.js` en React

Los archivos `env.example.js` y `env.js` son una parte fundamental en la configuración de cualquier proyecto React, especialmente cuando se trata de gestionar variables de entorno. Vamos a entender cómo funcionan y por qué son importantes.

### Propósito de `env.example.js` y `env.js`

1. **`env.js`**:
   - Este archivo contiene variables de entorno que tu aplicación necesita para funcionar. Puede incluir información sensible como claves API, secretos, etc.
   - Es importante mantener este archivo fuera del control de versiones (por ejemplo, usando `.gitignore`), para que la información sensible no se comparta accidentalmente.

2. **`env.example.js`**:
   - Este archivo actúa como un ejemplo para otros desarrolladores que trabajan en el mismo proyecto.
   - Contiene la misma estructura que `env.js`, pero no incluye información sensible.
   - Permite a otros desarrolladores saber qué variables de entorno deben definir en su propio `env.js`.

### Contenido de los Archivos `env.example.js` y `env.js`

Supongamos que los contenidos de estos archivos son los siguientes:

**`env.example.js`**:
```javascript
module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000
  }
};
```

**`env.js`**:
```javascript
module.exports = {
  devServer: {
    host: 'localhost',
    port: 3000
  }
};
```

Ambos archivos son idénticos en estructura, pero `env.js` podría contener información adicional o sensible en otros casos.

### Uso de Variables de Entorno en el Código

Veamos cómo estas variables se usan en el proyecto. Supongamos que tienes un archivo `dev.config.js` donde estas variables se requieren y se utilizan:

**`dev.config.js`**:
```javascript
const env = require('./env');

module.exports = {
  devServer: {
    host: env.devServer.host,
    port: env.devServer.port
  }
};
```

En este archivo, las variables de entorno definidas en `env.js` se importan y se utilizan para configurar el servidor de desarrollo.

### Ejemplo Práctico: Cambiando el Puerto

Veamos cómo cambiar el puerto de 3000 a 7000 y cómo esto afecta la ejecución de la aplicación:

1. **Modificar `env.js`**:
   Cambia el puerto de 3000 a 7000 en `env.js`:
   ```javascript
   module.exports = {
     devServer: {
       host: 'localhost',
       port: 7000
     }
   };
   ```

2. **Ejecutar la Aplicación**:
   Ejecuta tu aplicación utilizando npm:
   ```bash
   npm run start
   ```

3. **Verificar en el Navegador**:
   Abre tu navegador y visita `localhost:7000`. Deberías ver que tu aplicación se está ejecutando en el puerto 7000.

   Si vuelves a cambiar el puerto a 3000 y ejecutas nuevamente, tu aplicación estará disponible en `localhost:3000`.

### Razón para Cambiar Puertos

La capacidad de cambiar puertos es útil cuando tienes múltiples aplicaciones ejecutándose en tu máquina local. Por ejemplo, podrías tener una aplicación backend ejecutándose en el puerto 3000 y necesitar que tu aplicación React se ejecute en un puerto diferente para evitar conflictos.

### Resumen

Los archivos `env.example.js` y `env.js` permiten gestionar variables de entorno de manera segura y eficiente en proyectos React. El archivo de ejemplo proporciona una guía para otros desarrolladores sobre qué variables de entorno son necesarias, mientras que el archivo real (`env.js`) puede contener información sensible que no debe compartirse. Cambiar estas variables, como el puerto del servidor de desarrollo, puede ser crucial para manejar múltiples aplicaciones locales sin conflictos.

## Explorando `package.json` y `package-lock.json` en React

En este tutorial, exploraremos los archivos `package.json` y `package-lock.json`, cruciales para cualquier proyecto de Node.js y React. Entender estos archivos es fundamental para manejar las dependencias y scripts de nuestro proyecto de manera eficiente.

### Archivo `package.json`

El archivo `package.json` es esencialmente el corazón de cualquier proyecto Node.js, y contiene metadatos relevantes sobre el proyecto, así como las dependencias y scripts necesarios para su funcionamiento.

**Ejemplo de `package.json`**:
```json
{
  "name": "jordan-hudgens-react-portfolio",
  "version": "1.0.0",
  "description": "Personal portfolio app built in React",
  "scripts": {
    "start": "webpack-dev-server --config webpack/dev.config.js --watch",
    "build": "cross-env NODE_ENV=production webpack --config webpack/prod.config.js",
    "heroku-postbuild": "npm run build",
    "precommit": "npm run lint",
    "lint": "eslint . --ext .js,.jsx"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/your-repo.git"
  },
  "keywords": [
    "react",
    "portfolio",
    "es6",
    "webpack"
  ],
  "author": "Your Name",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/yourusername/your-repo/issues"
  },
  "homepage": "https://github.com/yourusername/your-repo#readme",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "webpack": "^5.38.1",
    "webpack-dev-server": "^3.11.2"
  },
  "devDependencies": {
    "eslint": "^7.26.0",
    "cross-env": "^7.0.3"
  }
}
```

#### Elementos Clave del `package.json`

1. **Metadata del Proyecto**:
   - `name`: Nombre de la aplicación.
   - `version`: Versión de la aplicación.
   - `description`: Descripción breve de la aplicación.

2. **Scripts**:
   - `start`: Comando para iniciar el servidor de desarrollo.
   - `build`: Comando para compilar la aplicación para producción.
   - `heroku-postbuild`: Comando especial que Heroku ejecuta después de la construcción.
   - `precommit`: Comando para ejecutar antes de cada commit (útil para asegurarse de que el código sigue ciertas reglas de estilo).
   - `lint`: Comando para ejecutar linter (herramienta para verificar el código en busca de errores de estilo).

3. **Repository**:
   - `type`: Tipo de sistema de control de versiones.
   - `url`: URL del repositorio del proyecto.

4. **Keywords**:
   - Lista de palabras clave para describir el proyecto (útil para SEO y búsqueda).

5. **Author**:
   - Nombre del autor del proyecto.

6. **License**:
   - Tipo de licencia del proyecto (por ejemplo, MIT).

7. **Bugs**:
   - URL para reportar errores.

8. **Homepage**:
   - Página de inicio del proyecto.

9. **Dependencies**:
   - Dependencias necesarias para que la aplicación funcione en cualquier entorno.

10. **DevDependencies**:
    - Dependencias necesarias solo para el desarrollo local.

### Archivo `package-lock.json`

El archivo `package-lock.json` se genera automáticamente cuando se ejecuta `npm install`. Este archivo asegura que las dependencias se instalen exactamente como se especificaron en el momento de la instalación, garantizando que todos los desarrolladores tengan el mismo entorno.

**Ejemplo de `package-lock.json`** (resumido para brevedad):
```json
{
  "name": "jordan-hudgens-react-portfolio",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "dependencies": {
    "react": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react/-/react-17.0.2.tgz",
      "integrity": "sha512-abcdef...",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    },
    "react-dom": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-17.0.2.tgz",
      "integrity": "sha512-ghijkl...",
      "requires": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.20.2"
      }
    }
  }
}
```

#### Elementos Clave del `package-lock.json`

1. **lockfileVersion**:
   - Versión del archivo `package-lock.json` (gestiona compatibilidad con diferentes versiones de npm).

2. **dependencies**:
   - Información detallada sobre cada dependencia, incluyendo versiones específicas, URLs de resolución, y checksum de integridad.

## Trabajando con `package.json` y `package-lock.json`

### Modificando `package.json`

1. **Actualizar Nombre y Descripción**:
   ```json
   "name": "jordan-hudgens-react-portfolio",
   "description": "Personal portfolio app built in React",
   ```

2. **Agregar un Script Personalizado**:
   ```json
   "scripts": {
     "hey": "echo 'Hola'",
     "start": "webpack-dev-server --config webpack/dev.config.js --watch",
     "build": "cross-env NODE_ENV=production webpack --config webpack/prod.config.js",
     "heroku-postbuild": "npm run build",
     "precommit": "npm run lint",
     "lint": "eslint . --ext .js,.jsx"
   }
   ```

3. **Ejecutar el Script Personalizado**:
   ```bash
   npm run hey
   ```

### Entendiendo los Scripts

- Los scripts en `package.json` permiten definir comandos personalizados que puedes ejecutar con `npm run <script-name>`.
- Estos comandos son útiles para automatizar tareas como iniciar el servidor de desarrollo, ejecutar pruebas, linting, y compilaciones de producción.

### Importancia de `package-lock.json`

- Garantiza la consistencia del entorno de desarrollo al asegurar que todos los desarrolladores usen las mismas versiones de las dependencias.
- Es crucial para evitar "funciona en mi máquina" problemas al desplegar aplicaciones en diferentes entornos.

### Resumen

El archivo `package.json` es el centro de comando de tu proyecto Node.js/React, gestionando metadatos, dependencias, y scripts. El `package-lock.json` asegura que las dependencias se instalen consistentemente. Entender y utilizar estos archivos correctamente es crucial para el desarrollo y mantenimiento eficiente de cualquier aplicación Node.js.

## Explorando `package-lock.json` y su Relación con `package.json`

### Comprensión del `package-lock.json`

El archivo `package-lock.json` se genera automáticamente cuando se ejecuta `npm install`. Este archivo es una versión más detallada y fija de las dependencias especificadas en `package.json`. Su objetivo principal es asegurar que todos los desarrolladores en un proyecto y los servidores de producción usen exactamente las mismas versiones de las dependencias.

**Ejemplo de `package-lock.json`** (simplificado para la ilustración):
```json
{
  "name": "jordan-hudgens-react-portfolio",
  "version": "1.0.0",
  "lockfileVersion": 2,
  "requires": true,
  "dependencies": {
    "express": {
      "version": "4.16.3",
      "resolved": "https://registry.npmjs.org/express/-/express-4.16.3.tgz",
      "integrity": "sha512-abcdef...",
      "requires": {
        "accepts": "1.3.5",
        "array-flatten": "1.1.1",
        "body-parser": "1.18.3"
      }
    },
    "react": {
      "version": "17.0.2",
      "resolved": "https://registry.npmjs.org/react/-/react-17.0.2.tgz",
      "integrity": "sha512-ghijkl...",
      "requires": {
        "loose-envify": "^1.1.0",
        "object-assign": "^4.1.1"
      }
    }
  }
}
```

### Elementos Clave de `package-lock.json`

1. **lockfileVersion**: Indica la versión del formato del archivo `package-lock.json`, asegurando la compatibilidad con diferentes versiones de npm.

2. **dependencies**: Contiene una lista detallada de todas las dependencias, incluyendo sus versiones exactas, URLs de resolución y sumas de verificación de integridad.

   - **Versión Exacta**: A diferencia de `package.json`, donde se pueden permitir versiones flexibles (por ejemplo, `"^4.16.3"`), `package-lock.json` especifica la versión exacta instalada (`"4.16.3"`).
   
   - **URL de Resolución**: El enlace desde donde se descarga el paquete (`"https://registry.npmjs.org/express/-/express-4.16.3.tgz"`).
   
   - **Checksum de Integridad**: Utiliza un valor hash (SHA) para asegurar que el paquete descargado no ha sido alterado (`"sha512-abcdef..."`).
   
   - **Dependencias de las Dependencias**: Lista de otras bibliotecas que la dependencia principal necesita (`"requires"`).

### Comparación con `package.json`

- **Flexibilidad vs. Fijación**: `package.json` permite flexibilidad en las versiones (por ejemplo, `"^4.16.3"`), mientras que `package-lock.json` fija las versiones exactas (`"4.16.3"`).

- **Metadatos Detallados**: `package-lock.json` incluye información detallada sobre cada dependencia, mientras que `package.json` proporciona una vista más general.

### Relación Entre `package.json` y `package-lock.json`

El `package.json` especifica qué dependencias necesita tu proyecto, mientras que `package-lock.json` asegura que todos los colaboradores del proyecto y los entornos de despliegue usen las mismas versiones exactas de estas dependencias. 

- **Ejemplo en `package.json`**:
  ```json
  "dependencies": {
    "express": "^4.16.3"
  }
  ```

- **Correspondencia en `package-lock.json`**:
  ```json
  "dependencies": {
    "express": {
      "version": "4.16.3",
      "resolved": "https://registry.npmjs.org/express/-/express-4.16.3.tgz",
      "integrity": "sha512-abcdef...",
      "requires": {
        "accepts": "1.3.5",
        "array-flatten": "1.1.1",
        "body-parser": "1.18.3"
      }
    }
  }
  ```

### Reglas y Consejos

1. **No Modificar Manualmente `package-lock.json`**: Este archivo es gestionado automáticamente por npm. Cualquier cambio manual puede causar inconsistencias y problemas al instalar nuevas dependencias.

2. **Uso del Comando `npm install`**: Cada vez que se instalan nuevas dependencias con `npm install`, el `package-lock.json` se actualiza automáticamente para reflejar los cambios exactos.

3. **Verificación de Integridad**: El checksum SHA asegura que los paquetes descargados no han sido manipulados, proporcionando una capa adicional de seguridad.

### Resumen

El `package-lock.json` es crucial para garantizar la consistencia y seguridad de las dependencias en un proyecto Node.js/React. Mientras que `package.json` permite especificar dependencias de manera flexible, `package-lock.json` fija estas dependencias a versiones específicas, asegurando que el entorno de desarrollo y producción sean idénticos. Entender y utilizar estos archivos correctamente es fundamental para un desarrollo y despliegue de aplicaciones eficientes y seguros.

## Comprensión de Archivos en una Aplicación React

En esta guía, revisaremos tres archivos clave en una aplicación React: `Procfile`, `README.md`, y `server.js`. Estos archivos son esenciales para la implementación y documentación de nuestra aplicación.

### `Procfile`

El `Procfile` es un archivo de texto utilizado por aplicaciones que se implementan en plataformas como Heroku. Especifica el tipo de proceso que se debe ejecutar.

**Ejemplo de `Procfile`:**
```
web: node server.js
```

- **Función**: Indica a Heroku que debe ejecutar `server.js` utilizando Node.js como un servidor web.
- **Uso**: No necesitas modificar este archivo. Se usa tal cual para la implementación.

### `README.md`

El archivo `README.md` es crucial para la documentación de tu proyecto. Está escrito en Markdown, un lenguaje de marcado ligero que facilita la creación de texto formateado.

**Ejemplo Simplificado de `README.md`:**
```markdown
# Jordan Hudgens React Portfolio

Este proyecto es una aplicación de portafolio construida con React.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación en tu máquina local:

1. Clona el repositorio: `git clone https://github.com/tu-usuario/tu-repositorio.git`
2. Navega al directorio del proyecto: `cd tu-repositorio`
3. Instala las dependencias: `npm install`
4. Ejecuta la aplicación: `npm start`

## Descripción del Proyecto

Este proyecto es un portafolio personal que muestra trabajos y proyectos previos.
```

- **Estructura**:
  - `#` para encabezados.
  - Listas numeradas para pasos.
  - Códigos de bloque para comandos.

#### `server.js`

El `server.js` es el archivo que configura y ejecuta el servidor Express, que servirá la aplicación React en producción.

**Ejemplo de `server.js`:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Configurar la carpeta estática para servir los archivos compilados
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar las rutas en producción
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

- **Configuración de Express**:
  - Importa Express y Path.
  - Define el puerto en el que correrá el servidor.
  - Sirve los archivos estáticos desde la carpeta `dist`, que contiene la versión compilada de tu aplicación.
  - Configura una ruta comodín para manejar todas las rutas en producción, redirigiendo siempre al `index.html` de React.
  
### Proceso de Despliegue

1. **Desarrollo Local**:
   - Trabajas en tu aplicación React y utilizas `npm start` para desarrollar localmente.
   - Al estar listo para producción, ejecutas `npm run build`, que crea una carpeta `dist` con los archivos optimizados.

2. **Implementación en Producción**:
   - El `Procfile` le dice a Heroku (o cualquier otra plataforma) cómo iniciar tu servidor.
   - `server.js` configura el servidor Express para servir tu aplicación React optimizada.

###  Github

Deberemos subirlo a github, haciendo todos los pasos necesarios.

- Crear un repositorio.
- Inicializar la carpeta con el comando `git init`.
- Crear un archivo `.gitignore` para descartar la carpeta `node_modules/`.
- Realizar los comandos `git add .` y `git commit -m "nombre descriptivo"` y por ultimo el `git push`.


### Resumen

Con estos archivos entendidos, has preparado tu aplicación React no solo para el desarrollo local, sino también para la implementación en un servidor de producción. Ahora puedes proceder con confianza a desarrollar y desplegar tu aplicación, entendiendo cómo cada parte se integra en el ecosistema React. En la siguiente guía, configuraremos Git y subiremos el proyecto a GitHub, preparándonos para futuras implementaciones y colaboraciones.

## Introducción a Componentes en React

React es una biblioteca de JavaScript para construir interfaces de usuario. Se basa en la arquitectura de componentes, lo que significa que divide la UI en piezas independientes, reutilizables y mantenibles. En lugar de escribir una aplicación entera en un solo archivo, React te permite dividirla en componentes más pequeños que manejan partes específicas de la interfaz.

## Paso a Paso para Crear un Componente en React

### Paso 1: Configuración Inicial

1. **Ejecuta tu aplicación**:
   - Asegúrate de tener tu aplicación React ejecutándose en `localhost:3000` con el comando `npm run start`.

2. **Abre Visual Studio Code**:
   - Todo el trabajo se realizará dentro del directorio `src`.

### Paso 2: Estructura del Componente `App`

Dentro de `src`, encontrarás un archivo llamado `App.js`. Este es el componente principal donde otros componentes estarán anidados.

```javascript
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React Application</h1>
        {/* Aquí es donde agregaremos otros componentes */}
      </div>
    );
  }
}

export default App;
```

### Paso 3: Crear el Primer Componente

Vamos a crear un componente de portafolio llamado `PortfolioContainer`.

1. **Crea el archivo `PortfolioContainer.js`**:
   - Dentro de la carpeta `src/components`, crea un archivo llamado `PortfolioContainer.js`.

2. **Define el componente**:

```javascript
import React, { Component } from 'react';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
      </div>
    );
  }
}

export default PortfolioContainer;
```

### Paso 4: Importar y Usar el Componente

1. **Importa el componente en `App.js`**:
   
```javascript
import React, { Component } from 'react';
import PortfolioContainer from './components/PortfolioContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React Application</h1>
        <PortfolioContainer />
      </div>
    );
  }
}

export default App;
```

2. **Guarda los cambios y verifica**:
   - Vuelve a tu navegador y verifica que el nuevo componente `PortfolioContainer` se renderiza correctamente.

### Importación y Exportación

- **Importación**:
  ```javascript
  import React, { Component } from 'react';
  import PortfolioContainer from './components/PortfolioContainer';
  ```
  - `import React from 'react'`: Importa la biblioteca React.
  - `import { Component } from 'react'`: Importa específicamente la clase `Component` desde React.

- **Exportación**:
  ```javascript
  export default PortfolioContainer;
  ```
  - `export default`: Exporta la clase `PortfolioContainer` como el valor predeterminado del módulo.

### Componente de Clase

- **Definición**:
  ```javascript
  class PortfolioContainer extends Component {
    render() {
      return (
        <div>
          <h2>Portfolio items go here...</h2>
        </div>
      );
    }
  }
  ```
  - **Extender `Component`**: La clase `PortfolioContainer` extiende `Component`, lo que le da acceso a las funcionalidades de React.
  - **Método `render()`**: Define lo que se mostrará en la UI.

#### JSX

- **Sintaxis similar a HTML**:
  ```javascript
  return (
    <div>
      <h2>Portfolio items go here...</h2>
    </div>
  );
  ```
  - JSX es una extensión de JavaScript que permite escribir código similar a HTML dentro de JavaScript.

### Resumen

En esta guía, hemos creado y entendido un componente básico en React. Hemos visto cómo importar React y componentes, cómo definir un componente de clase y cómo usar JSX para estructurar el contenido. La arquitectura basada en componentes de React permite construir aplicaciones de manera modular y reutilizable, lo que facilita el mantenimiento y la escalabilidad del proyecto.


## Componentes Funcionales vs. Componentes de Clase en React

### Introducción

En esta sección, vamos a explorar la creación de componentes funcionales (o presentacionales) en React y comparar las diferencias clave con los componentes de clase. Ambos tipos de componentes son fundamentales en React, y cada uno tiene sus propios usos y ventajas.

### Preparación Inicial

1. **Estructura del Proyecto**:
   - Moveremos el archivo `PortfolioContainer.js` a una nueva carpeta llamada `portfolio` para una mejor organización.

### Crear el Componente Funcional

1. **Crear la carpeta `portfolio`**:
   - Dentro de `src/components`, crea una nueva carpeta llamada `portfolio`.

2. **Mover `PortfolioContainer.js`**:
   - Mueve el archivo `PortfolioContainer.js` a la carpeta `portfolio`.

3. **Actualizar la Ruta de Importación** en `App.js`:
   - Modifica la importación para reflejar la nueva ruta.

```javascript
import PortfolioContainer from './components/portfolio/PortfolioContainer';
```

### Crear el Componente Funcional `PortfolioItem`

1. **Crear el archivo `PortfolioItem.js`**:
   - Dentro de la carpeta `portfolio`, crea un archivo llamado `PortfolioItem.js`.

2. **Definir el Componente Funcional**:

```javascript
import React from 'react';

const PortfolioItem = () => {
  return (
    <div>
      <h3>Portfolio Item</h3>
    </div>
  );
}

export default PortfolioItem;
```

3. **Actualizar `PortfolioContainer` para usar `PortfolioItem`**:
   - Importa y usa `PortfolioItem` dentro de `PortfolioContainer`.

```javascript
import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        <PortfolioItem />
      </div>
    );
  }
}

export default PortfolioContainer;
```

### Diferencias Clave entre Componentes de Clase y Funcionales

1. **Componente de Clase**:
   - **Definición**: Extiende `React.Component`.
   - **Uso del Estado**: Puede manejar estados usando `this.state`.
   - **Ciclo de Vida**: Tiene métodos de ciclo de vida como `componentDidMount`, `componentDidUpdate`, etc.
   - **Sintaxis**:

```javascript
import React, { Component } from 'react';

class PortfolioContainer extends Component {
  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
      </div>
    );
  }
}

export default PortfolioContainer;
```

2. **Componente Funcional**:
   - **Definición**: Una función que retorna JSX.
   - **Uso del Estado**: No maneja estados directamente (a menos que se utilicen hooks como `useState`).
   - **Ciclo de Vida**: No tiene métodos de ciclo de vida (a menos que se utilicen hooks como `useEffect`).
   - **Sintaxis**:

```javascript
import React from 'react';

const PortfolioItem = () => {
  return (
    <div>
      <h3>Portfolio Item</h3>
    </div>
  );
}

export default PortfolioItem;
```

### Cuándo Usar Cada Tipo de Componente

- **Componentes de Clase**:
  - **Estado**: Necesitas manejar estado interno.
  - **Ciclo de Vida**: Necesitas métodos de ciclo de vida.
  - **Ejemplo**: Formularios, componentes que interactúan con APIs.

- **Componentes Funcionales**:
  - **Presentación**: Solo necesitas renderizar contenido basado en props.
  - **Simplicidad**: Prefieres una sintaxis más simple y menos código.
  - **Ejemplo**: Botones, elementos de lista, componentes de UI simples.

### Ventajas de Componentes Funcionales

1. **Simplicidad**: Menos código y más fácil de leer.
2. **Performance**: Menos overhead comparado con componentes de clase.
3. **Hooks**: Con React 16.8, los hooks permiten manejar estados y efectos secundarios en componentes funcionales.

### Resumen

Hemos aprendido cómo crear y utilizar componentes funcionales en React y entendemos las diferencias clave con los componentes de clase. Los componentes funcionales son ideales para presentaciones simples, mientras que los componentes de clase son más adecuados para lógica más compleja que involucra estados y ciclos de vida. Este conocimiento te permitirá tomar decisiones informadas sobre cuándo usar cada tipo de componente en tus proyectos de React.

## Uso de Constructores en Componentes de Clase en React

### Introducción

El constructor en un componente de clase de React permite configurar procesos automáticos, establecer el estado inicial y definir funciones personalizadas. En esta guía, veremos cómo usar un constructor en un componente de clase y entender su sintaxis y funcionalidad.

### Conceptos Clave

1. **Constructor**: Una palabra clave en JavaScript que se utiliza dentro de una clase para inicializar un objeto.
2. **Super()**: Una llamada a la clase base que permite acceder a las funciones y propiedades de la clase padre.

### Ejemplo Práctico

Vamos a usar el componente `PortfolioContainer` y agregar un constructor para entender su uso.

1. **Definir el Constructor**:
   - Agrega un constructor dentro del componente de clase `PortfolioContainer`.
   - Incluye una llamada a `super()` para heredar las propiedades y métodos de `React.Component`.

```javascript
import React, { Component } from 'react';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    // Puedes inicializar el estado aquí
    this.state = {
      portfolioItems: [],
    };
    // Ejemplo de una función personalizada
    this.customFunction = this.customFunction.bind(this);
    console.log('Portfolio container has rendered');
  }

  customFunction() {
    // Lógica personalizada aquí
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        {/* Aquí agregaríamos los componentes funcionales como PortfolioItem */}
      </div>
    );
  }
}

export default PortfolioContainer;
```

2. **Explicación del Constructor**:
   - **Super(props)**: Llama al constructor de la clase base (`React.Component`). Esto es necesario para poder usar `this` dentro del constructor.
   - **Inicialización del Estado**: Se puede definir el estado inicial del componente dentro del constructor.
   - **Definición de Funciones Personalizadas**: Puedes definir y enlazar (bind) funciones personalizadas.

3. **Verificar en la Consola**:
   - Al abrir la consola de JavaScript (con `Command+Option+J` en Mac o `Control+Shift+J` en Windows), deberías ver el mensaje `Portfolio container has rendered` cuando el componente se renderiza.

### Importancia del Constructor

- **Inicialización del Estado**: El constructor es el lugar ideal para inicializar el estado del componente.
- **Binding de Funciones**: En el constructor, puedes enlazar (bind) métodos personalizados al contexto `this` del componente.
- **Configuración Inicial**: Permite realizar cualquier configuración inicial necesaria para el componente antes de que se renderice.

### Errores Comunes

- **Falta de Super()**: Si omites `super()`, obtendrás un error de sintaxis. Esto es porque `super()` es necesario para acceder a `this` en un constructor.
- **No Llamar a Super(props)**: Si tu constructor necesita acceder a `this.props`, asegúrate de pasar `props` a `super()`.

### Resumen

El constructor en un componente de clase de React es esencial para configurar el estado inicial y enlazar métodos personalizados. Siempre recuerda llamar a `super(props)` dentro del constructor para asegurarte de que el componente hereda correctamente las propiedades y métodos de `React.Component`. Con este conocimiento, estarás preparado para manejar la configuración inicial de tus componentes de clase en React.

## Creación de Funciones Personalizadas en Componentes de Clase de React

### Introducción

En React, tanto en componentes de clase como en componentes funcionales, puedes crear funciones personalizadas para implementar cualquier tipo de comportamiento específico que desees. En esta guía, exploraremos cómo crear una función personalizada en un componente de clase para iterar sobre datos y renderizarlos dinámicamente en la página.

### Ejemplo Práctico

Vamos a crear un componente llamado `PortfolioContainer` que contiene una función personalizada para iterar sobre datos de una matriz y renderizar componentes `PortfolioItem`.

1. **Definir el Componente de Clase**:
   - Comienza creando el componente de clase `PortfolioContainer` con un constructor y una función de renderizado.

```javascript
import React, { Component } from 'react';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    // Estado inicial
    this.state = {
      portfolioItems: [],
    };
    // Bind de funciones personalizadas
    this.portfolioItems = this.portfolioItems.bind(this);
  }

  // Función personalizada para iterar sobre datos
  portfolioItems() {
    const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];
    return data.map((item, index) => {
      // Devuelve el componente `PortfolioItem` con una key única y datos
      return <PortfolioItem key={index} name={item} />;
    });
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
```

2. **Componente `PortfolioItem`**:
   - Define el componente `PortfolioItem` que recibe props y renderiza el nombre de cada elemento.

```javascript
import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default PortfolioItem;
```

3. **Explicación de la Función Personalizada**:
   - **Data Array**: Creamos una matriz de datos que contiene los nombres de las empresas.
   - **Map Function**: Utilizamos la función `map` para iterar sobre la matriz de datos. Para cada elemento, devolvemos un componente `PortfolioItem` con una prop `name` y una key única.
   - **Render Method**: Dentro del método `render`, llamamos a la función `portfolioItems()` que devuelve una lista de componentes `PortfolioItem`.

### Importancia de las Key en React

- Cada elemento devuelto en un bucle `map` debe tener una key única. Esto ayuda a React a identificar qué elementos han cambiado, agregado o eliminado.
- En nuestro ejemplo, usamos el índice de la iteración como key (`key={index}`). En un caso real, es mejor usar identificadores únicos de los datos si están disponibles.

### Exploración Adicional

- **Datos Dinámicos**: Más adelante, puedes reemplazar la matriz estática con datos provenientes de una API.
- **Props**: Además de `name`, puedes pasar otras props a `PortfolioItem` para renderizar información más detallada.

### Resumen

Las funciones personalizadas en los componentes de clase de React son útiles para implementar comportamientos específicos, como iterar sobre datos y renderizar componentes dinámicamente. La combinación de estas funciones con la capacidad de React para manejar colecciones de componentes hace que sea una herramienta poderosa para desarrollar interfaces de usuario dinámicas y reactivas.

## Uso de Props para Pasar Datos en Componentes de Clase y Funcionales en React

En esta sección, aprenderemos cómo pasar datos de un componente principal a un componente secundario utilizando `props` en React. Este es un concepto fundamental para crear aplicaciones React dinámicas y bien estructuradas.

### Definición de Props

Los `props` (abreviatura de propiedades) son una forma de pasar datos y funciones de un componente principal a un componente secundario. Esto permite a los componentes ser reutilizables y dinámicos.

### Ejemplo Práctico

Vamos a construir sobre nuestro ejemplo anterior con los componentes `PortfolioContainer` y `PortfolioItem`.

#### 1. Definir el Componente `PortfolioContainer`

En el componente `PortfolioContainer`, iteramos sobre una matriz de datos y pasamos los datos necesarios a cada instancia de `PortfolioItem`.

```javascript
import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    // Estado inicial
    this.state = {
      portfolioItems: ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"]
    };
  }

  // Función personalizada para iterar sobre datos
  portfolioItems() {
    return this.state.portfolioItems.map((item, index) => {
      // Devuelve el componente `PortfolioItem` con una key única y datos
      return <PortfolioItem key={index} title={item} url="https://google.com" />;
    });
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
```

#### 2. Definir el Componente `PortfolioItem`

El componente `PortfolioItem` recibe `props` y los utiliza para renderizar el título y la URL de cada elemento de cartera.

```javascript
import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  );
};

export default PortfolioItem;
```

## Explicación Detallada

### Paso 1: Pasar Props desde el Componente Principal

En el método `portfolioItems()` dentro de `PortfolioContainer`, utilizamos la función `map` para iterar sobre la matriz de `portfolioItems` en el estado del componente. A cada instancia de `PortfolioItem`, le pasamos un `prop` llamado `title` con el valor de `item` y un `prop` llamado `url` con una cadena estática.

```javascript
return <PortfolioItem key={index} title={item} url="https://google.com" />;
```

### Paso 2: Recibir Props en el Componente Secundario

En el componente `PortfolioItem`, aceptamos `props` como un argumento de la función. Luego, utilizamos estas `props` para renderizar el contenido dinámico.

```javascript
const PortfolioItem = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h4>{props.url}</h4>
    </div>
  );
};
```

## Debugging y Manejo de Errores

Cuando trabajes con `props`, es común encontrarse con errores como "Los objetos no son válidos como hijo de React". Este error generalmente ocurre cuando intentas renderizar un objeto directamente en el DOM.

```javascript
// Ejemplo incorrecto que causa el error
return <h3>{props}</h3>;
```

Para solucionarlo, asegúrate de acceder a las propiedades específicas dentro del objeto `props`.

```javascript
// Ejemplo correcto
return <h3>{props.title}</h3>;
```

## Consejos para Depurar

1. **Consola de JavaScript**: La consola es tu mejor aliada. Verifica los mensajes de error y utiliza `console.log` para inspeccionar `props`.
2. **Google**: Si el mensaje de error no es claro, busca en Google. La comunidad de desarrolladores tiene soluciones para la mayoría de los problemas que puedas encontrar.

### Resumen

Los `props` son esenciales en React para pasar datos de un componente principal a uno secundario, permitiendo la creación de componentes dinámicos y reutilizables. Al seguir los pasos adecuados para definir y pasar `props`, puedes hacer que tus componentes interactúen de manera efectiva y flexible.

## JSX: Una Introducción y su Uso en React

JSX, o JavaScript XML, es una extensión de sintaxis para JavaScript que se parece mucho a HTML. JSX facilita la creación de elementos React al permitirte escribir código que se parece mucho a HTML pero que se traduce en llamadas a funciones JavaScript detrás de escena. Aquí vamos a explorar qué es JSX, cómo se convierte en JavaScript puro y por qué es útil en el desarrollo de aplicaciones React.

## ¿Qué es JSX?

JSX es una sintaxis que permite escribir estructuras de componentes de React de manera más legible y similar a HTML. Cuando usamos JSX, en realidad estamos escribiendo una mezcla de HTML y JavaScript, que luego se transpila a JavaScript puro utilizando herramientas como Babel.

## Ejemplo de JSX

Vamos a crear un componente básico de React utilizando JSX y luego veremos cómo se transforma en JavaScript puro.

### JSX

```jsx
import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div className="card" id="5" style={{ color: 'red', fontWeight: 900 }}>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="description">
        <p>Some details...</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
```

## Conversión de JSX a JavaScript Puro

Cuando el código JSX anterior se transpila usando Babel, se convierte en código JavaScript puro que React puede interpretar.

### JavaScript Puro

```javascript
import React from 'react';

const PortfolioItem = (props) => {
  return React.createElement(
    'div',
    { className: 'card', id: '5', style: { color: 'red', fontWeight: 900 } },
    React.createElement(
      'div',
      { className: 'title' },
      React.createElement('h3', null, props.title)
    ),
    React.createElement(
      'div',
      { className: 'description' },
      React.createElement('p', null, 'Some details...')
    )
  );
};

export default PortfolioItem;
```

## Ventajas de Usar JSX

1. **Legibilidad y Mantenimiento**: JSX hace que el código sea más legible y fácil de mantener, especialmente para desarrolladores familiarizados con HTML.
2. **Más Corto y Claro**: En comparación con la creación de elementos con `React.createElement`, JSX es más conciso y claro.
3. **Ergonomía**: Permite una mejor ergonomía en el desarrollo, evitando la verbosidad y repetición del código JavaScript puro.

## JSX en Acción: Un Ejemplo Detallado

Veamos un ejemplo completo donde usamos JSX para construir un componente React y cómo se convierte en JavaScript puro.

### Componente `PortfolioContainer` en JSX

```jsx
import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioItems: ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"]
    };
  }

  renderPortfolioItems() {
    return this.state.portfolioItems.map((item, index) => (
      <PortfolioItem key={index} title={item} url="https://google.com" />
    ));
  }

  render() {
    return (
      <div>
        <h2>Portfolio items go here...</h2>
        {this.renderPortfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
```

### Componente `PortfolioItem` en JSX

```jsx
import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div className="card" id="5" style={{ color: 'red', fontWeight: 900 }}>
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="description">
        <p>Some details...</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
```

## Código Generado en JavaScript Puro

Para el componente `PortfolioItem`, el JSX se convierte en algo así:

```javascript
import React from 'react';

const PortfolioItem = (props) => {
  return React.createElement(
    'div',
    { className: 'card', id: '5', style: { color: 'red', fontWeight: 900 } },
    React.createElement(
      'div',
      { className: 'title' },
      React.createElement('h3', null, props.title)
    ),
    React.createElement(
      'div',
      { className: 'description' },
      React.createElement('p', null, 'Some details...')
    )
  );
};

export default PortfolioItem;
```

## Diferencias Clave entre JSX y HTML

1. **Atributos de Clase**: En JSX, se usa `className` en lugar de `class` porque `class` es una palabra reservada en JavaScript.
2. **Estilos en Línea**: En JSX, los estilos en línea se pasan como un objeto JavaScript, no como una cadena de texto.

### Resumen

JSX es una poderosa extensión de sintaxis para JavaScript que permite escribir estructuras de componentes React de una manera que se asemeja mucho a HTML. Aporta ventajas significativas en términos de legibilidad, mantenimiento y ergonomía en el desarrollo. La comprensión de cómo JSX se transpila a JavaScript puro es fundamental para aprovechar al máximo React y construir aplicaciones web modernas y eficientes.

## Entendiendo el Estado en React

Trabajar con el estado (state) en React es una parte fundamental del desarrollo de componentes dinámicos. A continuación, vamos a profundizar en el concepto de estado en React, cómo se define, accede y manipula, y cómo nos permite crear aplicaciones interactivas.

## Definiendo el Estado Inicial

El estado en un componente de clase en React se define en el constructor del componente. El estado inicial se establece utilizando `this.state`, que es un objeto que contiene las propiedades y valores que queremos mantener en el estado del componente.

## Ejemplo Simple

Vamos a empezar con un ejemplo sencillo donde definimos y accedemos a una propiedad de estado llamada `pageTitle`.

```jsx
import React, { Component } from 'react';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    // Definiendo el estado inicial
    this.state = {
      pageTitle: "Welcome to my portfolio"
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
      </div>
    );
  }
}

export default PortfolioContainer;
```

En este ejemplo, definimos un estado inicial con una propiedad `pageTitle` que se muestra dentro de un `<h2>` en el método `render`.

## Refactorizando para Usar el Estado

Ahora, vamos a refactorizar nuestro componente para mover los datos del portafolio al estado. Esto nos permitirá acceder y manipular estos datos de manera más flexible.

### Estado con Datos del Portafolio

```jsx
import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';

class PortfolioContainer extends Component {
  constructor(props) {
    super(props);
    // Definiendo el estado inicial con datos del portafolio
    this.state = { 
      pageTitle: "Welcome to my portfolio",
      data: [
        { title: "Quip" },
        { title: "Eventbrite" },
        { title: "Ministry Safe" },
        { title: "SwingAway" }
      ]
    };
  }

  renderPortfolioItems() {
    // Mapeando sobre los datos del estado para generar elementos de portafolio
    return this.state.data.map((item, index) => (
      <PortfolioItem key={index} title={item.title} url="https://google.com" />
    ));
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        {this.renderPortfolioItems()}
      </div>
    );
  }
}

export default PortfolioContainer;
```

### Explicación del Código

1. **Definición del Estado Inicial**: En el constructor, definimos el estado inicial con `pageTitle` y `data`, donde `data` es un array de objetos que representan elementos del portafolio.
2. **Acceso al Estado**: Utilizamos `this.state.pageTitle` para mostrar el título de la página y `this.state.data` para mapear sobre los elementos del portafolio.
3. **Renderizado de Componentes Dinámicos**: La función `renderPortfolioItems` recorre el array de datos en el estado y devuelve un componente `PortfolioItem` para cada elemento del portafolio.

### Ventajas de Usar el Estado

- **Reactividad**: React actualiza automáticamente el DOM cuando el estado cambia, lo que permite crear interfaces de usuario interactivas y dinámicas.
- **Gestión de Datos**: Mantener los datos en el estado facilita su manipulación y acceso, lo que es crucial para la creación de aplicaciones complejas.
- **Comunicación entre Componentes**: Los componentes pueden comunicarse entre sí mediante el estado, lo que permite la coordinación y sincronización de diferentes partes de la aplicación.

## Próximos Pasos

En las próximas guías, vamos a profundizar en cómo actualizar el estado y cómo estas actualizaciones se reflejan en la interfaz de usuario. Esto incluye aprender a:

1. **Actualizar el Estado**: Cómo modificar el estado usando `this.setState`.
2. **Responder a Eventos**: Cómo manejar eventos (como clics de botones) para actualizar el estado y reflejar esos cambios en la UI.

### Resumen

Trabajar con el estado en React es esencial para crear aplicaciones dinámicas y reactivas. Hemos visto cómo definir un estado inicial, acceder a él y utilizarlo para renderizar componentes dinámicos. Al comprender y dominar el uso del estado, podemos construir aplicaciones más complejas y eficientes.

# Los Props en React

**Props** (abreviatura de "properties") son un mecanismo fundamental en React para pasar datos de un componente a otro. Son inmutables, lo que significa que un componente no puede cambiar sus props; en lugar de eso, cualquier cambio en los datos debe gestionarse a través del estado (`state`). Aquí está el desglose de cómo se utilizan los props en el código proporcionado:

1. **index.js**
    - **No recibe ni pasa props.**
    - Su función principal es renderizar el componente raíz (`<App />`) en el DOM.

2. **app.js**
    - **No recibe props.**
    - **Pasa props:** Este componente principal crea dos instancias del componente `JournalList`, cada una con una prop diferente `heading`.
    ```javascript
    <JournalList heading="List 1" />
    <JournalList heading="List 2" />
    ```
    - Aquí, el valor de `heading` se establece como una cadena y se pasa a `JournalList`.

3. **journal_entry.js**
    - **Recibe props:** Este componente funcional recibe `props` y los usa para renderizar datos dinámicamente.
    ```javascript
    export const JournalEntry = props => {
      return (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      );
    };
    ```
    - `title` y `content` se pasan como props y se muestran dentro del componente.

4. **Journal_list.js**
    - **Recibe props:** El componente recibe `heading` como prop de `App`.
    ```javascript
    <h1>{this.props.heading}</h1>
    ```
    - **Pasa props:** Dentro del método `render`, el componente mapea los datos de diario (`journalData`) a instancias de `JournalEntry`, pasando `title` y `content` como props.
    ```javascript
    const journalEntries = this.state.journalData.map(journalEntry => {
      return (
        <div key={journalEntry.title}>
          <JournalEntry
            title={journalEntry.title}
            content={journalEntry.content}
          />
        </div>
      );
    });
    ```
    - **Estado y métodos de gestión:** `JournalList` también tiene estado (`state`) que controla qué datos de diario se muestran y varios métodos (`clearEntries`, `showAllEntries`, `toggleStatus`) para modificar ese estado.

## Teoría de Props

1. **Definición y Uso:**
    - Los props son parámetros que se pasan a los componentes de React, permitiendo la comunicación de datos desde un componente padre a un componente hijo.
    - Se definen como atributos HTML en el JSX y se acceden dentro del componente hijo usando `this.props` en componentes de clase o simplemente `props` en componentes funcionales.

2. **Inmutabilidad:**
    - Los props son inmutables, lo que significa que un componente hijo no puede modificar sus props. Este diseño garantiza que los componentes sean más fáciles de entender y depurar.

3. **Componentes Funcionales vs. Componentes de Clase:**
    - **Componentes Funcionales:** Reciben props como un argumento de la función.
      ```javascript
      const MyComponent = (props) => {
        return <div>{props.value}</div>;
      };
      ```
    - **Componentes de Clase:** Acceden a props usando `this.props`.
      ```javascript
      class MyComponent extends React.Component {
        render() {
          return <div>{this.props.value}</div>;
        }
      };
      ```

4. **PropTypes y DefaultProps:**
    - **PropTypes:** Se utilizan para validar las props que un componente debe recibir, ayudando a detectar errores potenciales.
      ```javascript
      MyComponent.propTypes = {
        value: PropTypes.string.isRequired,
      };
      ```
    - **DefaultProps:** Permiten definir valores por defecto para las props.
      ```javascript
      MyComponent.defaultProps = {
        value: 'Default Value',
      };
      ```

[Ejercicio ejemplo](checkpoint_14_2_ejercicio.md)


# Ciclo vida componentes

Los ciclos de vida de los componentes en React son fases específicas por las que pasan los componentes desde su creación hasta su desmontaje. Estas fases permiten a los desarrolladores ejecutar código en momentos específicos del ciclo de vida del componente, ofreciendo un control fino sobre cómo se comportan los componentes en diferentes etapas.

Aquí tienes un resumen de las fases del ciclo de vida de los componentes en los archivos que has proporcionado, estructurado para documentación en Markdown:

## Fases del Ciclo de Vida de los Componentes

### Archivo: `app.js`

#### Componente: `App`
- **Render**: El método `render` es llamado para renderizar el componente. Este componente no tiene otros métodos de ciclo de vida personalizados.

### Archivo: `discussion.js`

#### Componente: `DiscussionMessage`
- **Stateless Functional Component**: No tiene fases del ciclo de vida.

#### Componente: `DiscussionList`

- **Constructor**: Inicializa el estado del componente.
- **ComponentDidMount**: 
  - Se llama después de que el componente ha sido renderizado en el DOM.
  - Inicia un intervalo que agrega un nuevo mensaje cada 2 segundos.
- **ComponentWillUnmount**: 
  - Se llama justo antes de que el componente sea destruido.
  - Limpia el intervalo iniciado en `componentDidMount`.
- **Render**: Renderiza el componente basado en el estado actual.

#### Componente: `Discussion`

- **Constructor**: Inicializa el estado del componente.
- **ComponentDidMount**: 
  - Se llama después de que el componente ha sido renderizado en el DOM.
  - Inicia un intervalo que actualiza la hora actual cada segundo.
- **ComponentWillUnmount**: 
  - Se llama justo antes de que el componente sea destruido.
  - Limpia el intervalo iniciado en `componentDidMount`.
- **Render**: Renderiza el componente basado en el estado actual.

### Archivo: `navigation.js`

#### Componente: `Navigation`

- **Stateless Functional Component**: No tiene fases del ciclo de vida.

### Archivo: `page-content.js`

#### Componente: `PageContent`

- **Stateless Functional Component**: No tiene fases del ciclo de vida.

### Archivo: `rules.js`

#### Componente: `Rules`

- **Stateless Functional Component**: No tiene fases del ciclo de vida.

### Archivo: `workflow.js`

#### Componente: `Workflow`

- **Constructor**: 
  - Inicializa el estado del componente.
  - Se llama cuando se crea una instancia del componente.
- **GetDerivedStateFromProps**: 
  - Se llama justo antes de `render`, tanto en el montaje como en la actualización.
- **ComponentDidMount**: 
  - Se llama después de que el componente ha sido renderizado en el DOM.
- **ShouldComponentUpdate**: 
  - Decide si el componente debe actualizarse o no.
- **GetSnapshotBeforeUpdate**: 
  - Captura una snapshot del DOM justo antes de que los cambios del componente (por ejemplo, el DOM) sean aplicados.
- **ComponentDidUpdate**: 
  - Se llama después de que las actualizaciones del componente se han aplicado en el DOM.
- **ComponentWillUnmount**: 
  - Se llama justo antes de que el componente sea destruido.
- **Render**: 
  - Renderiza el componente basado en el estado actual.

[Ejercicio completo código](https://github.com/Marimar8888/ReactComponentLifecycleDeepDive-master.git)

### Resumen

En resumen, los ciclos de vida de los componentes en React permiten a los desarrolladores controlar cómo se montan, actualizan y desmontan los componentes, gestionando eficazmente recursos y asegurando un comportamiento consistente de la aplicación. Los ejemplos de código proporcionados muestran la aplicación práctica de estos conceptos, desde la inicialización del estado y la configuración de intervalos, hasta la limpieza de recursos y la actualización de la interfaz de usuario.

# Estado y Manejo del Estado en React

En resumen, el estado (state) es la información a la que un componente tiene acceso y puede ser de cualquier tipo: números, cadenas, arreglos de objetos, etc. Esto permite que los datos estén localizados dentro del componente y puedan ser usados según sea necesario.

## Cambiar el Estado

¿Cómo se puede cambiar el estado? Obtener datos es solo una parte del proceso; lo importante es poder establecer o cambiar esos datos. A continuación, se muestra un ejemplo básico sobre cómo cambiar el estado en un componente de React:

### Ejemplo Práctico: Actualización del Título de la Página

Vamos a crear una función llamada `handlePageTitleUpdate`. El objetivo de esta función es actualizar el título de la página cuando se haga clic en un botón.

1. **Crear la Función de Manejo**:
   ```jsx
   handlePageTitleUpdate = () => {
     this.setState({ pageTitle: "Otro Título" });
   };
   ```
   La función usa `setState`, que es un método integrado en React. Este método toma un objeto que contiene las propiedades del estado que deseamos actualizar.

2. **Añadir un Manejador de Eventos de Clic**:
   ```jsx
   <button onClick={this.handlePageTitleUpdate}>Cambiar Título</button>
   ```
   Se añade un manejador de eventos de clic (`onClick`) al botón, que llama a la función `handlePageTitleUpdate` cuando se hace clic.

3. **Manejo del Contexto `this`**:
   Para asegurar que `this` se refiera correctamente al componente dentro de la función de manejo, se debe hacer un enlace (binding) en el constructor del componente:
   ```jsx
   this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
   ```
NOTA: Con versiones recientes de JavaScript no hace falta hacer este código ya que la función flecha `handlePageÇtitleUpdate` ya hace el enlace del contexto `this`.

## Resumen del Proceso

1. **Definir el Estado Inicial**: El estado se define en el constructor del componente.
2. **Crear una Función de Manejo**: Se define una función que usa `setState` para actualizar el estado.
3. **Enlazar la Función**: Se enlaza la función de manejo a `this` en el constructor.
4. **Añadir un Manejador de Eventos**: Se añade un manejador de eventos que llama a la función de manejo cuando ocurre un evento (por ejemplo, un clic).

## Conceptos Clave

- **`this.setState`**: Método para actualizar el estado.
- **Binding**: Enlazar `this` al contexto del componente.
- **Manejadores de Eventos**: Añadir manejadores para eventos como clics que disparan funciones de manejo.

### Ejemplo Completo

```jsx
class MyComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Bienvenido a Mi Portafolio"
    };
   // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  handlePageTitleUpdate() {
    this.setState({ pageTitle: "Otro Título" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.handlePageTitleUpdate}>Cambiar Título</button>
      </div>
    );
  }
}
```

Este ejemplo muestra cómo definir el estado inicial, crear y enlazar una función de manejo, y actualizar el estado en respuesta a un evento. Este proceso es fundamental para trabajar con componentes en React y permite una interacción dinámica y reactiva en aplicaciones web.

# Filtrado (función Filter)

## Filtrado de Proyectos en un Portafolio

El objetivo es crear un proceso de filtrado en un portafolio. Se desea tener enlaces o botones en la parte superior que, al hacer clic en ellos, filtren automáticamente los valores mostrados a los usuarios. Esto permitirá al usuario ver solo ciertos tipos de proyectos al hacer clic en los botones correspondientes.

**Implementación Inicial**
- Se construirá la funcionalidad principal para practicar cómo establecer el estado (`setState`) de manera dinámica.
- Se eliminará el código anterior relacionado con `handlePageTitleUpdate`, el botón y su vínculo en el constructor.
- Se creará una nueva función `handleFilter` para manejar el filtrado.

**Funciones de Filtrado**
- Se agregará una categoría a cada proyecto para poder filtrar por ella. Ejemplo:
  ```javascript
  this.state = {
    pageTitle: "Bienvenido a mi portafolio",
    data: [
      { title: "Quip", category: "eCommerce" },
      { title: "Eventbrite", category: "Scheduling" },
      { title: "Ministry Safe", category: "Enterprise" },
      { title: "SwingAway", category: "eCommerce" }
    ]
  };
  ```
- Se utilizará la función `filter` de JavaScript para iterar y seleccionar los elementos según la categoría.

**Código de la Función `handleFilter`**
```javascript
handleFilter(filter) {
  this.setState({
    data: this.state.data.filter(item => {
      return item.category === filter;
    })
  });
}
```

**Explicación del Código**
- La función `handleFilter` toma un argumento `filter`, que es la categoría por la cual se desea filtrar.
- `this.setState` se usa para actualizar el estado del componente.
- `this.state.data.filter(item => { return item.category === filter; })`:
  - `this.state.data` hace referencia a la lista actual de proyectos.
  - `.filter(item => { return item.category === filter; })`:
    - La función `filter` itera sobre cada elemento `item` en `data`.
    - Solo mantiene los elementos cuyo `category` coincide con el argumento `filter`.
  - El resultado es un nuevo array con los proyectos que pertenecen a la categoría seleccionada.
- Este nuevo array se establece como el nuevo valor de `data` en el estado del componente, actualizando así los proyectos mostrados.

**Botones de Filtrado**
- Se crearán botones para cada categoría y se añadirá un listener `onClick` que pasará el argumento de la categoría correspondiente a la función `handleFilter`.

**Ejemplo de Botones**
```jsx
<button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
<button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
<button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>
```

**Resultado Parcial**
- Al hacer clic en un botón, se filtrarán los proyectos y se actualizará el estado para mostrar solo los proyectos de la categoría seleccionada.
- Actualmente, al seleccionar una categoría, los datos de las otras categorías se eliminan del estado.
- Para restablecer los datos iniciales, se debe recargar la página.

**Implementación Completa Futura**
- En una implementación completa, los datos vendrán de una API y no estarán codificados.
- La funcionalidad completa permitirá alternar entre diferentes categorías sin perder los datos.

Este enfoque demuestra cómo manipular datos y el estado en React para crear una funcionalidad de filtrado dinámica.

# Lógica Condicional en React

## Implementación de Lógica Condicional en React

En esta sección, aprenderemos a implementar lógica condicional en React, una habilidad fundamental que usarás frecuentemente. Para ilustrar este concepto, crearemos una barra de navegación (navbar) que mostrará ciertos enlaces solo a usuarios administradores.

**Ejemplo Básico de Lógica Condicional**
1. **Objetivo**: Mostrar un mensaje de "cargando" mientras se espera la respuesta de una API y mostrar los datos una vez recibidos.
2. **Contexto**: A veces, cuando se accede a datos externos, estos no estarán disponibles inmediatamente, lo cual puede confundir al usuario si no se maneja adecuadamente.

**Implementación en el Método `render`**
- Añadiremos una condición para mostrar un mensaje de "cargando" antes de que los datos estén disponibles.
- Utilizaremos el estado (`state`) del componente para gestionar esta condición.

**Código**
```javascript
// Dentro del método render
if (this.state.isLoading) {
  return <div>Loading...</div>;
}
```
- Este código verifica si `isLoading` en el estado es `true`. Si lo es, devuelve un `div` con el texto "Loading...".
- Esto "corta" el proceso de renderizado hasta que `isLoading` sea `false`.

**Inicialización del Estado**
```javascript
// Inicializando el estado en el constructor o directamente en el componente
this.state = {
  pageTitle: "Bienvenido a mi portafolio",
  isLoading: true,
  data: [
    { title: "Quip", category: "eCommerce" },
    { title: "Eventbrite", category: "Scheduling" },
    { title: "Ministry Safe", category: "Enterprise" },
    { title: "SwingAway", category: "eCommerce" }
  ]
};
```
- Aquí hemos agregado `isLoading: true` al estado inicial.

**Simulación de la Lógica Condicional**
- En una aplicación real, `isLoading` se actualizaría tras recibir los datos de un servicio externo.
- Una vez que los datos son recibidos, actualizaríamos el estado para cambiar `isLoading` a `false`.

```javascript
// Simulación de actualización del estado tras recibir datos
this.setState({ isLoading: false });
```

**Probando la Condición**
- Inicialmente, al tener `isLoading: true`, solo se muestra el mensaje de "cargando".
- Cambiando `isLoading` a `false` en el estado inicial nos permite ver los datos inmediatamente.

```javascript
// Cambiar isLoading a false para ver los datos inmediatamente
this.state = {
  pageTitle: "Bienvenido a mi portafolio",
  isLoading: false,
  data: [
    { title: "Quip", category: "eCommerce" },
    { title: "Eventbrite", category: "Scheduling" },
    { title: "Ministry Safe", category: "Enterprise" },
    { title: "SwingAway", category: "eCommerce" }
  ]
};
```

**Próximos Pasos**
- La guía se dividirá en dos partes. En la siguiente, agregaremos la barra de navegación inicial.

Este enfoque demuestra cómo utilizar la lógica condicional dentro de un componente React para mejorar la experiencia del usuario al manejar la carga de datos.

## Implementación de Condicionales en React: Componente de Navegación

En esta sección, aprenderemos a implementar condicionales en un componente de React, y crearemos un componente de navegación que muestra diferentes enlaces según el estado del usuario (admin o no admin).

### Paso 1: Configuración del Componente de Navegación

1. **Crear el Archivo del Componente**
    - Crea un nuevo directorio llamado `navigation` dentro del directorio `components`.
    - Dentro de `navigation`, crea un archivo llamado `navigation-container.js`.

2. **Definir el Componente de Clase**
    - Definimos un componente de clase porque necesitaremos manejar estado y lógica más avanzada.

```javascript
import React, { Component } from 'react';

export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null}
            </div>
        );
    }
}
```

### Paso 2: Importar el Componente en `App.js`

1. **Importar y Utilizar el Componente**
    - Actualiza `App.js` para importar y utilizar el nuevo componente de navegación.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationComponent from './navigation/navigation-container';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationComponent />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

### Paso 3: Implementar Lógica Condicional

1. **Usar el Operador Ternario**
    - Usamos un operador ternario para mostrar el botón "Add Blog" solo si el usuario es admin.

```javascript
render() {
    return (
        <div>
            <button>Home</button>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
            {true ? <button>Add Blog</button> : null}
        </div>
    );
}
```

2. **Explicación del Operador Ternario**
    - El operador ternario permite implementar una condición en una sola línea. 
    - Sintaxis: `condición ? resultado_si_true : resultado_si_false`

### Paso 4: Practicar y Validar

1. **Probar en el Navegador**
    - Asegúrate de que el componente de navegación se renderice correctamente en el navegador.
    - Ajusta la condición a `false` para ver cómo desaparece el botón "Add Blog".

```javascript
{false ? <button>Add Blog</button> : null}
```

### Paso 5: Resumen de Métodos de Implementación Condicional

1. **Método de Retorno Temprano (Short Circuit)**
    - Útil para manejar estados iniciales como "cargando".

```javascript
render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }
    return <div>Contenido cargado</div>;
}
```

2. **Operador Ternario**
    - Ideal para condicionales dentro de JSX.

```javascript
render() {
    return (
        <div>
            {this.state.isAdmin ? <button>Add Blog</button> : null}
        </div>
    );
}
```

### Conclusión

Hemos visto dos métodos principales para implementar lógica condicional en React: el retorno temprano en el método `render` y el operador ternario dentro de JSX. Ambos son herramientas valiosas que te permitirán manejar condiciones de manera efectiva y elegante en tus aplicaciones React.

### Introducción al Enrutamiento en React

El enrutamiento en aplicaciones web se refiere a la navegación entre diferentes vistas o páginas. En aplicaciones tradicionales de múltiples páginas (MPA), esto implica cargar nuevos documentos HTML para cada ruta. Sin embargo, en Aplicaciones de Página Única (SPA) como las que se construyen con React, el enrutamiento no implica cargar nuevos documentos. En su lugar, la aplicación actualiza dinámicamente la vista actual.

### Configuración del React Router

Para gestionar el enrutamiento en una aplicación React, usamos la biblioteca `react-router-dom`, que proporciona herramientas para manejar el enrutamiento.

#### Instalación
Primero, asegúrate de que `react-router-dom` esté instalado. Si no, instálalo usando npm o yarn:
```bash
npm install react-router-dom
```
o
```bash
yarn add react-router-dom
```

### Configuración Básica de las Rutas

1. **Importar Componentes Necesarios**: Importa los componentes necesarios desde `react-router-dom`.
    ```javascript
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    ```

2. **Crear Componentes de Página**: Crea componentes básicos para las páginas a las que quieres enrutar. Por ejemplo, `Home.js` y `About.js`.

    **Home.js**
    ```javascript
    const Home = () => {
        return (
            <div>
                <h1>Página Principal</h1>
            </div>
        );
    };

    export default Home;
    ```

    **About.js**
    ```javascript
    const About = () => {
        return (
            <div>
                <h1>Página de Sobre Nosotros</h1>
            </div>
        );
    };

    export default About;
    ```

3. **Configurar Rutas en App.js**: Usa `Router`, `Switch`, y `Route` para definir rutas en tu `App.js`.

    **App.js**
    ```javascript
    import React from 'react';
    import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
    import Home from './pages/Home';
    import About from './pages/About';

    const App = () => {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Inicio</a>
                            </li>
                            <li>
                                <a href="/about">Sobre Nosotros</a>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </Switch>
                </div>
            </Router>
        );
    };

    export default App;
    ```

### Explicación

1. **Router**: Actúa como el componente raíz que mantiene tu UI sincronizada con la URL.
2. **Switch**: Renderiza el primer `Route` o `Redirect` hijo que coincida con la ubicación.
3. **Route**: Renderiza un componente de UI basado en la ruta URL. Toma `path` y `component` como props. La palabra clave `exact` asegura que la ruta coincida exactamente.

### Manejo de Enlaces

Usar etiquetas `a` para la navegación refresca la página, lo cual no es ideal en SPAs. En su lugar, usa `Link` de `react-router-dom`.

1. **Importar Link**:
    ```javascript
    import { Link } from "react-router-dom";
    ```

2. **Reemplazar etiquetas `a` con componentes `Link`**:
    ```javascript
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/about">Sobre Nosotros</Link>
            </li>
        </ul>
    </nav>
    ```

### Ejemplo Completo de Código

Así es como podría verse tu `App.js` con componentes `Link`:

```javascript
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/about">Sobre Nosotros</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
```

### Resumen

- **Enrutamiento**: Involucra mapear rutas URL a componentes.
- **Aplicación de Página Única (SPA)**: Usa enrutamiento del lado del cliente para actualizar dinámicamente la vista sin refrescar la página.
- **`react-router-dom`**: Una biblioteca que proporciona componentes como `Router`, `Route`, `Switch`, y `Link` para gestionar el enrutamiento en React.
- **Componentes de Página**: Definir páginas individuales como componentes de React.
- **Enlaces**: Usa `Link` de `react-router-dom` para la navegación y evitar refrescar la página.

Siguiendo estos pasos, crearás una configuración básica de enrutamiento en una aplicación React, permitiendo una navegación fluida entre diferentes vistas o páginas.

## Crear el Componente de Navegación

Vamos a modificar nuestro componente de barra de navegación para usar `NavLink` en lugar de etiquetas `<a>`.

#### `NavigationContainer.js`

```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationContainer = () => {
  return (
    <nav>
      <NavLink exact to="/" > Home </NavLink>
      <NavLink to="/about" > About </NavLink>
    </nav>
  );
};

export default NavigationContainer;
```

### Explicación del Código

1. **Importar `NavLink`**:
    ```javascript
    import { NavLink } from 'react-router-dom';
    ```
    Importamos el componente `NavLink` desde `react-router-dom`.

2. **Usar `NavLink` para Navegación**:
    ```javascript
    <NavLink exact to="/" > Home  </NavLink>
    <NavLink to="/about" > About </NavLink>
    ```
    - **Propiedad `to`**: Define la ruta a la que apunta el enlace.
    - **Propiedad `exact`**: Utilizada en la ruta raíz (`/`) para asegurar que este enlace se active solo cuando la ruta sea exactamente `/`.

### Paso 2: Configurar las Rutas

Ahora, vamos a configurar las rutas para que estos enlaces funcionen. Asegúrate de tener un componente principal que envuelva la aplicación con `BrowserRouter` y defina las rutas.

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Explicación del Código

1. **Envolver la Aplicación con `Router`**:
    ```javascript
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
    ```
    - **`Router`**: `BrowserRouter` es un componente que envuelve toda la aplicación y habilita el enrutamiento.
    - **`Switch`**: Componente que envuelve las rutas y garantiza que solo una ruta se renderice a la vez.
    - **`Route`**: Define una ruta específica y el componente que se renderiza cuando la URL coincide con el `path`.

### Comportamiento de `NavLink` vs. Etiqueta `<a>`

Al utilizar `NavLink`, React Router intercepta el clic en el enlace y actualiza la URL sin recargar toda la página, manteniendo el estado de la aplicación y proporcionando una experiencia de usuario más fluida. 

Por otro lado, una etiqueta `<a>` recarga toda la página y rompe el comportamiento de SPA de React. 

### Ejemplo de Etiqueta `<a>` y su Problema

Para ilustrar el problema de usar etiquetas `<a>`, añadimos un enlace `<a>` en nuestro componente de navegación y observamos el comportamiento.

### Observación del Comportamiento

1. **Enlaces `NavLink`**:
    - Navegación sin recarga de página.
    - Estado de la aplicación conservado.

2. **Enlace `<a>`**:
    - Causa una recarga completa de la página.
    - Estado de la aplicación se pierde.
    - Interrumpe el flujo de la SPA.

### Inspección de los Enlaces

Al inspeccionar los elementos del DOM, podemos ver que `NavLink` genera internamente una etiqueta `<a>`, pero React Router intercepta el evento de clic para manejar la navegación de manera eficiente sin recargar la página.

### Conclusión

Al usar `NavLink` y `Link` de React Router en lugar de etiquetas `<a>`, aseguramos una navegación fluida y eficiente dentro de nuestra aplicación React, manteniendo el comportamiento de SPA y evitando recargas innecesarias de la página.

### Creación de Componentes de Contacto y Blog en React

Para profundizar en el uso de `NavLink` y explorar su funcionalidad activa, vamos a crear componentes adicionales para una página de contacto y un blog, y luego los integraremos en nuestra aplicación.

### Paso 1: Crear los Componentes de Contacto y Blog

Primero, vamos a crear componentes funcionales simples para Contacto y Blog.

#### `Contact.js`

```javascript
import React from 'react';

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
```

#### `Blog.js`

```javascript
import React from 'react';

const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;
```

### Paso 2: Actualizar el Componente de Navegación

A continuación, actualizaremos nuestro componente de navegación para incluir enlaces a las nuevas páginas de Contacto y Blog.

#### `NavigationContainer.js`

```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationContainer = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="nav-link-active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="nav-link-active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="nav-link-active">
        Contact
      </NavLink>
      <NavLink to="/blog" activeClassName="nav-link-active">
        Blog
      </NavLink>
    </nav>
  );
};

export default NavigationContainer;
```

### Paso 3: Definir las Rutas en `App.js`

Vamos a asegurarnos de que las nuevas rutas estén definidas en nuestro componente principal de la aplicación.

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Explicación del Estado Activo de `NavLink`

El componente `NavLink` tiene una característica especial que aplica automáticamente una clase CSS activa a los enlaces que corresponden a la ruta actual. Esto es útil para resaltar el enlace de navegación correspondiente a la página en la que se encuentra el usuario.

#### Inspección del Comportamiento Activo

1. **Clase Activa Predeterminada**:
   - `NavLink` agrega automáticamente la clase `active` al enlace cuando la ruta coincide con la URL actual.
   - Esto permite estilizar el enlace activo sin necesidad de lógica adicional.

2. **Personalización de la Clase Activa**:
   - Podemos personalizar la clase activa utilizando la propiedad `activeClassName`.
   - Por ejemplo, en nuestro código hemos utilizado `activeClassName="nav-link-active"`:
   
   ```javascript
   <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
   ```

### Ejemplo de CSS para Enlaces Activos

Podemos definir estilos específicos para los enlaces activos en nuestro archivo CSS.

#### `App.css`

```css
.nav-link-active {
  font-weight: bold;
  color: blue;
  text-decoration: underline;
}
```

### Implementación Completa

Aquí está el código completo actualizado para nuestros componentes y la configuración de navegación:

#### `Contact.js`

```javascript
import React from 'react';

const Contact = () => {
  return <div>Contact</div>;
};

export default Contact;
```

#### `Blog.js`

```javascript
import React from 'react';

const Blog = () => {
  return <div>Blog</div>;
};

export default Blog;
```

#### `NavigationContainer.js`

```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationContainer = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="nav-link-active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="nav-link-active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="nav-link-active">
        Contact
      </NavLink>
      <NavLink to="/blog" activeClassName="nav-link-active">
        Blog
      </NavLink>
    </nav>
  );
};

export default NavigationContainer;
```

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Conclusión

El uso de `NavLink` en lugar de etiquetas `<a>` estándar no solo evita recargas innecesarias de la página, sino que también proporciona funcionalidades adicionales como la gestión automática de clases activas. Esto permite una navegación fluida y eficiente dentro de las aplicaciones React, mejorando tanto el rendimiento como la experiencia del usuario.

### Uso del Componente `Link` en React Router y Limpieza del Código

Vamos a extender nuestro conocimiento del enrutamiento en React utilizando el componente `Link`, además de reorganizar nuestro código para que la página de inicio muestre los elementos del portafolio.

### Paso 1: Usar el Componente `Link`

El componente `Link` es similar a `NavLink`, pero no tiene las capacidades de gestión de la clase activa. Es útil para enlaces simples que no necesitan estilos activos.

#### Ejemplo de Uso de `Link`

Vamos a agregar un enlace en nuestro componente `Blog` que lleva a la página "About Me".

#### `Blog.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <div className="sidebar">
        <Link to="/about">Read more about me</Link>
      </div>
    </div>
  );
};

export default Blog;
```

### Paso 2: Limpiar el Código y Mover el Contenido a la Página de Inicio

Vamos a mover el contenido del portafolio desde nuestro componente de navegación a la página de inicio.

#### `Home.js`

Primero, asegurémonos de que nuestro componente `Home` importe y use `PortfolioContainer`.

```javascript
import React from 'react';
import PortfolioContainer from '../portfolio/PortfolioContainer';

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <PortfolioContainer />
    </div>
  );
};

export default Home;
```

#### `NavigationContainer.js`

A continuación, eliminaremos la llamada a `PortfolioContainer` de `NavigationContainer` si está allí, asegurándonos de que solo contiene enlaces de navegación.

```javascript
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationContainer = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="nav-link-active">
        Home
      </NavLink>
      <NavLink to="/about" activeClassName="nav-link-active">
        About
      </NavLink>
      <NavLink to="/contact" activeClassName="nav-link-active">
        Contact
      </NavLink>
      <NavLink to="/blog" activeClassName="nav-link-active">
        Blog
      </NavLink>
    </nav>
  );
};

export default NavigationContainer;
```

### Paso 3: Configurar las Rutas en `App.js`

Asegurémonos de que `App.js` incluya las rutas necesarias para todos los componentes.

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Estructura del Proyecto

Asegúrate de que tu estructura de proyecto tenga los siguientes archivos y directorios:

```
/src
  /components
    NavigationContainer.js
  /pages
    Home.js
    About.js
    Contact.js
    Blog.js
  /portfolio
    PortfolioContainer.js
  App.js
  index.js
```

### Conclusión

Hemos aprendido a usar el componente `Link` de React Router para crear enlaces simples y hemos reorganizado nuestro código para que el contenido del portafolio esté en la página de inicio. También vimos cómo `NavLink` y `Link` difieren en términos de características y cuándo es apropiado usar cada uno. Ahora, tu aplicación debe estar mejor organizada y lista para estilos adicionales y funcionalidades futuras.

## Creación de una Página de Detalles del Portafolio con Enrutamiento Dinámico en React

En este tutorial, aprenderemos cómo crear enlaces dinámicos para los elementos de un portafolio que redirigen a una página de detalles específica para cada elemento utilizando React Router. Esto permitirá compartir enlaces directos a cada elemento del portafolio con una URL única.

### Paso 1: Crear el Componente de Detalles del Portafolio

Primero, crearemos un componente para mostrar los detalles de un elemento del portafolio. Este componente estará en el directorio de portafolio.

#### `portfolio-detail.js`

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const { slug } = useParams();

  return (
    <div>
      <h2>Portfolio Detail for {slug}</h2>
      {/* Aquí puedes agregar más información sobre el proyecto */}
    </div>
  );
};

export default PortfolioDetail;
```

### Paso 2: Añadir la Ruta Dinámica en `App.js`

Vamos a añadir una nueva ruta dinámica en `App.js` que permitirá navegar a los detalles de cada elemento del portafolio.

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PortfolioDetail from './portfolio/portfolio-detail';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio/:slug" component={PortfolioDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Paso 3: Actualizar el Contenedor de Portafolio

Vamos a actualizar nuestro contenedor de portafolio para que cada elemento tenga un slug y podamos crear enlaces dinámicos.

#### `PortfolioContainer.js`

```javascript
import React from 'react';
import PortfolioItem from './portfolio-item';

class PortfolioContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { title: "Quip", category: "SaaS", slug: "quip" },
        { title: "Eventbrite", category: "Event Management", slug: "eventbrite" },
        { title: "Ministry Safe", category: "Safety", slug: "ministry-safe" },
        { title: "Swingaway", category: "Sports", slug: "swingaway" }
      ]
    };
  }

  render() {
    const portfolioItems = this.state.data.map(item => {
      return <PortfolioItem key={item.slug} {...item} />;
    });

    return (
      <div>
        <h2>Portfolio</h2>
        {portfolioItems}
      </div>
    );
  }
}

export default PortfolioContainer;
```

### Paso 4: Actualizar el Componente del Elemento del Portafolio

En `portfolio-item.js`, actualizaremos cada elemento del portafolio para que incluya un enlace dinámico que redirige a la página de detalles.

#### `PortfolioItem.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioItem = ({ title, category, slug }) => {
  return (
    <div>
      <h3>
        <Link to={`/portfolio/${slug}`}>{title}</Link>
      </h3>
      <p>{category}</p>
    </div>
  );
};

export default PortfolioItem;
```

### Revisión Final

#### Estructura del Proyecto

Asegúrate de que tu estructura de proyecto tenga los siguientes archivos y directorios:

```
/src
  /components
    NavigationContainer.js
  /pages
    Home.js
    About.js
    Contact.js
    Blog.js
  /portfolio
    PortfolioContainer.js
    portfolio-item.js
    portfolio-detail.js
  App.js
  index.js
```

### Explicación

1. **Componente de Detalles del Portafolio**: Creamos `portfolio-detail.js` que usa `useParams` para obtener el slug de la URL y mostrar los detalles correspondientes.
2. **Ruta Dinámica**: Añadimos una ruta en `App.js` que usa el parámetro de ruta `:slug` para mostrar el componente `PortfolioDetail`.
3. **Enlaces Dinámicos**: Actualizamos `PortfolioContainer.js` y `PortfolioItem.js` para crear enlaces dinámicos basados en el slug de cada elemento del portafolio.

Ahora, si haces clic en cualquier título del portafolio, deberías ser redirigido a una página de detalles específica para ese elemento, y la URL reflejará el slug del elemento seleccionado, permitiendo enlaces directos y compartibles.

### Manejo de Rutas No Encontradas (404) en una Aplicación React

En aplicaciones de una sola página (SPA) como las que se crean con React, es importante manejar adecuadamente las rutas que no existen. A diferencia de los frameworks MVC tradicionales como Ruby on Rails o Django, donde una ruta inexistente generalmente produce un error 404 del servidor, en React debemos gestionar estas rutas para proporcionar una mejor experiencia de usuario. En este tutorial, crearemos una página 404 personalizada para manejar estas situaciones.

### Paso 1: Crear el Componente NoMatch

Primero, crearemos un componente simple para la página 404. Este componente informará al usuario que la página no existe y proporcionará un enlace para volver a la página de inicio.

#### `no-match.js`

```javascript
import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <h2>No pudimos encontrar esa página</h2>
      <Link to="/">Volver a la página de inicio</Link>
    </div>
  );
};

export default NoMatch;
```

### Paso 2: Añadir la Ruta NoMatch en `App.js`

Ahora, añadiremos esta ruta en nuestro archivo `App.js`. Esta ruta capturará cualquier ruta que no coincida con las rutas definidas y mostrará el componente `NoMatch`.

#### `App.js`

```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationContainer from './NavigationContainer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';

const App = () => {
  return (
    <Router>
      <div>
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio/:slug" component={PortfolioDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
```

### Explicación

1. **Componente NoMatch**: Creamos un componente funcional `NoMatch` que muestra un mensaje de error y un enlace para volver a la página de inicio.
2. **Ruta NoMatch**: Añadimos una ruta sin `path` al final del `Switch` en `App.js`. Esta ruta capturará cualquier URL que no coincida con las rutas anteriores y mostrará el componente `NoMatch`.

### Manejo de Slugs No Existentes

Es posible que quieras asegurarte de que los slugs proporcionados en las URLs también se manejen correctamente. Aquí te mostramos cómo ajustar la ruta de los detalles del portafolio para que solo coincida exactamente con los slugs válidos.

#### `portfolio-detail.js`

Aquí podrías agregar lógica adicional para manejar slugs no válidos.

```javascript
import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const { slug } = useParams();
  const validSlugs = ["quip", "eventbrite", "ministry-safe", "swingaway"];

  if (!validSlugs.includes(slug)) {
    return (
      <div>
        <h2>No pudimos encontrar ese proyecto</h2>
        <Link to="/">Volver a la página de inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Portfolio Detail for {slug}</h2>
      {/* Aquí puedes agregar más información sobre el proyecto */}
    </div>
  );
};

export default PortfolioDetail;
```

### Revisión Final

#### Estructura del Proyecto

Asegúrate de que tu estructura de proyecto tenga los siguientes archivos y directorios:

```
/src
  /components
    NavigationContainer.js
  /pages
    Home.js
    About.js
    Contact.js
    Blog.js
    no-match.js
  /portfolio
    PortfolioContainer.js
    portfolio-item.js
    portfolio-detail.js
  App.js
  index.js
```

### Explicación Adicional

- **Ruta General**: La ruta sin `path` en el `Switch` actúa como un comodín y captura todas las rutas no definidas previamente. Es importante colocarla al final del `Switch` para que no sobrescriba otras rutas.
- **Exact Matching**: Para asegurarse de que una ruta específica como `/portfolio/:slug` coincida exactamente con los slugs válidos, puedes usar una lógica interna en el componente para verificar la validez del slug.

## Trabajar con una API. 

### Configuración de Axios

Trabajar con APIs puede ser confuso si nunca lo has hecho antes, por lo que esta guía está diseñada para dividir el proceso en pasos más manejables. En esta primera etapa, nos enfocamos en instalar y configurar Axios en nuestro proyecto.

1. **Instalar Axios:**
   - Visita [npmjs.com](https://www.npmjs.com) y busca Axios.
   - Axios es una biblioteca npm que permite realizar llamadas a API y manejar los datos obtenidos en nuestra aplicación.

2. **Comando de Instalación:**
   - El comando para instalar Axios es:
     ```bash
     npm install axios
     ```
   - Alternativamente, puedes usar:
     ```bash
     npm i axios
     ```
   - Este comando añade Axios a las dependencias de tu archivo `package.json`.

3. **Verificar la Instalación:**
   - Después de la instalación, verifica que Axios aparezca en la lista de dependencias de tu `package.json`.

4. **Resultado:**
   - Axios se ha añadido correctamente a tu proyecto y ahora está disponible para realizar solicitudes a diferentes puntos finales de API.

### Resumen de la Integración de Axios para Llamadas a API

En esta parte de la guía, aprenderás cómo usar Axios para realizar llamadas a una API desde tu aplicación React y cómo manejar las respuestas. 

1. **Comprender Axios y su Uso:**
   - Axios es una biblioteca JavaScript para hacer solicitudes HTTP y obtener datos de una API externa.
   - La documentación de Axios proporciona ejemplos prácticos para realizar consultas a una API.

2. **Proceso de Desarrollo con Axios:**
   - **Primer Paso:** Integra y prueba el código de Axios en el componente principal de la aplicación, `app.js` para asegurarte de que funciona sin otros posibles problemas de componentes secundarios. Posteriormente ya se implementa en el componente más apropiado.
   - **Beneficio:** Facilita la depuración al aislar el código y eliminar posibles fuentes de error.

2. **Implementar Axios en React:**
   - Abre `Visual Studio Code` y en el archivo `app.js`, importa Axios:
     ```javascript
     import axios from 'axios';
     ```
   - Crea una función para obtener datos de la API. Aquí está un ejemplo de cómo hacerlo:
     ```javascript
     getPortfolioItems = () => {
       axios.get('https://your-api-endpoint.com/all-items')
         .then(response => {
           console.log("Response Data:", response.data);
         })
         .catch(error => {
           console.log("Error fetching data:", error);
         });
     };
     ```

3. **Adaptar Funciones en React:**
   - Cambia las funciones normales a funciones de flecha para mantener el contexto `this` en React:
      - Asegúrate de vincular el método en el constructor:
     ```javascript
     constructor() {
       super();
       //this.getPortfolioItems = this.getPortfolioItems.bind(this);
     }
     ```
     ```javascript
     getPortfolioItems = () => {
       axios.get('https://alonsomarimar.devcamp.space/portfolio/portfolio_items')
         .then(response => {
           console.log("Response Data:", response.data);
         })
         .catch(error => {
           console.log("Error fetching data:", error);
         });
     };
     ```

4. **Llamar a la Función en el Renderizado:**

   - Llama a `getPortfolioItems` dentro del método `render` para probar la funcionalidad:

     ```javascript
     render() {
       this.getPortfolioItems();
       return (
         <div>
           // Your component JSX here
         </div>
       );
     }
     ```

5. **Probar la Funcionalidad:**
   - Asegúrate de que el servidor de tu API esté en funcionamiento y que tengas datos de prueba en la API.
   - Abre la consola del navegador y verifica que los datos de la API se registren correctamente.

6. **Mover Código a Componentes Apropiados:**
   - **Objetivo:** Colocar el código de Axios en el componente más lógico, en este caso, `PortfolioContainer`.
   - **Pasos para Mover el Código:**
     - **Constructor y Estado:**
       - Mueve la creación del constructor y el estado al nuevo componente.
     - **Llamada a Axios:**
       - Transfiere la función `getPortfolioItems` al nuevo componente.
       - Asegúrate de llamar a esta función en el lugar adecuado, como dentro del método `render` antes del `return`.
     - **Importaciones:**
       - Importa Axios en el nuevo componente.

7. **Estructura del Código en `PortfolioContainer`:**
   - **Constructor y Estado:**
     ```javascript
     class PortfolioContainer extends React.Component {
       constructor() {
         super();
         this.getPortfolioItems = this.getPortfolioItems.bind(this);
         this.state = {
           portfolioItems: []
         };
       }

       getPortfolioItems() {
         axios.get('https://your-api-endpoint.com/all-items')
           .then(response => {
             console.log("Response Data:", response.data);
           })
           .catch(error => {
             console.log("Error fetching data:", error);
           });
       }

       render() {
         this.getPortfolioItems();
         return (
           <div>
             {/* JSX code to render portfolio items */}
           </div>
         );
       }
     }
     ```
   - **Importaciones:**
     ```javascript
     import React, { Component } from 'react';
     import axios from 'axios';
     ```

8. **Beneficios de la Arquitectura de Componentes:**
   - **Flexibilidad y Encapsulación:**
     - Permite mover y reorganizar código fácilmente entre componentes sin afectar el comportamiento general de la aplicación.
   - **Claridad y Mantenimiento:**
     - Mantiene el código organizado y más fácil de mantener al colocar funciones donde tienen más sentido lógico.

## Renderización de Datos API en React

### 1. **Actualización del Estado con Datos API:**
   - **Estado Inicial:**
     - Comienza con una matriz vacía en el estado del componente para almacenar los datos que se obtendrán de la API.
     - **Código:**
       ```javascript
       this.state = {
         portfolioItems: []
       };
       ```

### 2. **Uso de Ciclos de Vida en React:**
   - **componentDidMount:**
     - Utiliza el método del ciclo de vida `componentDidMount` para realizar la llamada API una vez que el componente ha sido montado.
     - **Código:**
       ```javascript
       componentDidMount() {
         this.getPortfolioItems();
       }
       ```

### 3. **Realizar la Llamada API y Actualizar el Estado:**
   - **Función de Llamada API:**
     - Realiza la llamada API dentro de la función `getPortfolioItems`.
     - Utiliza `axios` para obtener los datos y actualiza el estado con la respuesta de la API.
     - **Código:**
       ```javascript
        getPortfolioItems() {
          axios.get('https://alonsomarimar.devcamp.space/portfolio/portfolio_items')
            .then(response => {
              this.setState({
                data: response.data.portfolio_items, // Asegúrate de que el nombre de la propiedad es correcto
                isLoading: false
              });
            })
            .catch(err => {
              console.log(err);
              this.setState({ isLoading: false }); // Maneja el estado de carga en caso de error
            });
        }
       ```

#### 4. **Renderización de Datos desde el Estado:**
   - **Eliminación de Valores Codificados:**
     - Sustituye los valores codificados por datos dinámicos provenientes del estado.
     - **Código:**
       ```javascript
        portfolioItems() {
          return this.state.data.map(item => {
          return <PortfolioItem key={item.id} id={item.id} title={item.name} url={item.url} slug={item.id} />;
          });
        }
       render() {
         return (
            <div>
              <h2>{this.state.pageTitle}</h2>
              <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
              <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
              <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
              {this.portfolioItems()}
            </div>
         );
       }
       ```
Las claves (`key`) en React se utilizan para identificar de manera única cada elemento en una lista de componentes. Esto permite a React realizar actualizaciones eficientes y precisas del DOM.

## ¿Para qué sirven las claves (`key`)?

```javascript
        portfolioItems() {
          return this.state.data.map(item => {
          return <PortfolioItem key={item.id} id={item.id} title={item.name} url={item.url} slug={item.id} />;
          });
        }
```

1. **Identificación Única**: Las claves permiten a React identificar de manera única cada elemento en una lista. Esto es esencial cuando se añaden, eliminan o reordenan elementos en la lista.

2. **Mejora del Rendimiento**: Al tener claves únicas, React puede determinar exactamente qué elementos han cambiado, se han agregado o se han eliminado. Esto evita la necesidad de volver a renderizar toda la lista, lo que mejora el rendimiento de la aplicación.

3. **Actualización Eficiente del DOM Virtual**: React utiliza un DOM virtual para gestionar las actualizaciones del DOM real. Las claves ayudan a React a comparar el estado actual del DOM virtual con el nuevo estado, aplicando solo los cambios necesarios.

4. **Evitar Advertencias**: Sin claves, React genera advertencias en la consola para indicar que no puede realizar un seguimiento eficaz de los elementos de la lista. Proporcionar claves únicas elimina estas advertencias.

En resumen, las claves son esenciales para que React pueda manejar listas de elementos de manera eficiente y efectiva, mejorando el rendimiento y la capacidad de mantenimiento de las aplicaciones.