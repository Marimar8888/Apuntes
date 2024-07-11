## Proceso para realizar una autenticación

### Paso 1: Actualizar `App.js`
1. **Constructor y Métodos de Autenticación:**
   - Agrega un constructor que inicializa el estado con `loggedInStatus` como `NOT_LOGGED_IN`.
   - Crea los métodos `handleSuccessfulLogin` y `handleUnsuccessfulLogin` para actualizar el estado de autenticación.

2. **Renderizado Condicional:**
   - Asegúrate de que las rutas pasen los métodos de autenticación a los componentes hijos como `Auth`.

3. **Verificación de Sesión:**
   - Implementa un método `checkLoginStatus` para verificar la sesión con el servidor al cargar la aplicación.
   - Llama a `checkLoginStatus` en `componentDidMount`.

### Paso 2: Modificar `Auth.js`
1. **Constructor y Métodos de Autenticación:**
   - Agrega un constructor que inicializa los métodos `handleSuccessfulAuth` y `handleUnsuccessfulAuth`.

2. **Pasar Métodos a `Login`:**
   - Pasa los métodos `handleSuccessfulAuth` y `handleUnsuccessfulAuth` a `Login` como props.

### Paso 3: Modificar `Login.js`
1. **HandleSubmit:**
   - En `handleSubmit`, llama a los métodos de autenticación apropiados (`handleSuccessfulAuth` y `handleUnsuccessfulAuth`) basándote en la respuesta del servidor.

2. **Form Handling:**
   - Asegúrate de que el formulario de inicio de sesión llame a `handleSubmit` en el evento `onSubmit`.

### Paso 4: Verificar Estado de Sesión
1. **Check Login Status:**
   - En `App.js`, implementa el método `checkLoginStatus` que realiza una solicitud al servidor para verificar si el usuario está autenticado.
   - Actualiza el estado de `loggedInStatus` basado en la respuesta del servidor.

### Resumen con código

¡Claro! Vamos a desglosar el código y explicar cómo funcionan las funciones `handle` y cómo se conectan entre los archivos `login.js` y `auth.js`.

### Archivos involucrados

1. `login.js` - Componente que maneja el formulario de inicio de sesión.
2. `auth.js` - Componente que maneja la autenticación y conecta el inicio de sesión con la aplicación principal.

### `login.js`

Este archivo contiene el componente `Login`, que gestiona el formulario de inicio de sesión y maneja las respuestas de autenticación.

#### Componentes principales

1. **Constructor y Estado:**
   - Inicializa el estado con `email`, `password`, y `errorText`.
   - Vincula los métodos `handleChange` y `handleSubmit` para asegurar que `this` se refiere al componente correcto dentro de estos métodos.

2. **handleChange(event):**
   - Actualiza el estado cuando el usuario escribe en los campos del formulario.
   - Limpia `errorText` cada vez que el usuario cambia algo en el formulario.

3. **handleSubmit(event):**
   - Realiza una solicitud POST a la API para iniciar sesión.
   - Dependiendo de la respuesta de la API, llama a `handleSuccessfulAuth` o `handleUnsuccessfulAuth` que fueron pasados como props desde el componente `Auth`.
   - Previene la acción predeterminada del formulario (recargar la página).

4. **render():**
   - Renderiza el formulario de inicio de sesión y muestra mensajes de error si los hay.

### `auth.js`

Este archivo contiene el componente `Auth`, que encapsula el componente `Login` y maneja la autenticación a nivel de aplicación.

#### Componentes principales

1. **Constructor:**
   - Vincula los métodos `handleSuccessfulAuth` y `handleUnsuccessfulAuth` para asegurar que `this` se refiere al componente correcto dentro de estos métodos.

2. **handleSuccessfulAuth():**
   - Llama al método `handleSuccessfulLogin` pasado como prop desde el componente principal de la aplicación.
   - Redirige al usuario a la página de inicio (`"/"`).

3. **handleUnsuccessfulAuth():**
   - Llama al método `handleUnsuccessfulLogin` pasado como prop desde el componente principal de la aplicación.

4. **render():**
   - Renderiza el componente `Login` y le pasa los métodos `handleSuccessfulAuth` y `handleUnsuccessfulAuth` como props.

### Conexión entre los componentes

- **Paso 1:** En `auth.js`, el componente `Auth` pasa `handleSuccessfulAuth` y `handleUnsuccessfulAuth` como props al componente `Login`.
  
  ```jsx
  <Login
    handleSuccessfulAuth={this.handleSuccessfulAuth}
    handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
  />
  ```

- **Paso 2:** En `login.js`, el componente `Login` recibe estos métodos como props y los llama según la respuesta de la solicitud de inicio de sesión.

  ```jsx
  .then(response => {
    if (response.data.status === "created") {
      this.props.handleSuccessfulAuth();
    } else {
      this.setState({
        errorText: "Wrong email or password"
      });
      this.props.handleUnsuccessfulAuth();
    }
  })
  .catch(error => {
    this.setState({
      errorText: "An error occurred"
    });
    this.props.handleUnsuccessfulAuth();
  });
  ```

### Resumen del flujo

1. El usuario ingresa su correo electrónico y contraseña en el formulario de inicio de sesión (`Login`).
2. Cuando el formulario se envía (`handleSubmit`), se realiza una solicitud POST a la API.
3. Según la respuesta de la API:
   - Si el inicio de sesión es exitoso, se llama a `this.props.handleSuccessfulAuth`.
   - Si el inicio de sesión falla, se llama a `this.props.handleUnsuccessfulAuth` y se actualiza el estado para mostrar un mensaje de error.
4. `handleSuccessfulAuth` en `Auth` actualiza el estado de la aplicación principal para reflejar que el usuario ha iniciado sesión y redirige a la página de inicio.
5. `handleUnsuccessfulAuth` en `Auth` maneja el caso de un inicio de sesión fallido, generalmente informando al usuario de que el intento de inicio de sesión falló.

## Ocultar el enlace en la barra de navegación

### Paso 1: Crear una función dinámica para los enlaces

En el componente de navegación (`NavigationComponent`), crea una función que genere dinámicamente los enlaces de navegación. Esta función tomará la ruta y el texto del enlace como argumentos y devolverá el JSX necesario para renderizar el enlace. Esto facilita la reutilización del código y la gestión de los enlaces de navegación.

### Paso 2: Pasar el estado de inicio de sesión desde el componente principal

En el componente principal de la aplicación (`App.js`), pasa el estado de inicio de sesión (`loggedInStatus`) como una propiedad al componente de navegación (`NavigationComponent`). Esto permite que el componente de navegación conozca el estado de inicio de sesión del usuario y ajuste la visualización de los enlaces de navegación en consecuencia.

### Paso 3: Condicionalmente mostrar el enlace basado en el estado de inicio de sesión

En el componente de navegación, utiliza una expresión condicional para mostrar u ocultar el enlace del blog. Si el estado de inicio de sesión es `LOGGED_IN`, muestra el enlace; de lo contrario, no lo muestres. Esto se hace utilizando un operador ternario en el JSX.

## Eliminar la ruta si el usuario no ha iniciado sesión

### Paso 1: Crear un método para obtener las páginas autorizadas

En el componente principal de la aplicación (`App.js`), debajo del método `componentDidMount()`, crea un nuevo método llamado `authorizedPages()`. Este método devolverá una lista (matriz) de rutas que solo deberían estar disponibles para los usuarios autenticados. Inicialmente, puedes devolver una matriz con una sola ruta, pero el método está diseñado para manejar múltiples rutas en el futuro.

### Paso 2: Condicionalmente definir rutas basadas en el estado de inicio de sesión

En el método `render()` del componente principal, utiliza una expresión condicional para definir las rutas protegidas. Si el estado de inicio de sesión es `LOGGED_IN`, renderiza las rutas autorizadas llamando a `this.authorizedPages()`. Si no, no renderices estas rutas (devolver `null`). Esto asegura que las rutas protegidas solo estén definidas cuando el usuario ha iniciado sesión.

### Paso 3: Redirigir a usuarios no autenticados

Para mayor seguridad, asegúrate de redirigir a los usuarios no autenticados a una página de inicio de sesión o a una página de error si intentan acceder a una ruta protegida directamente a través de la URL. Esto puede hacerse utilizando componentes de redirección en las rutas.

## Flujo de datos y conexión entre funciones

1. **Login Component**:
   - **handleSubmit**: Envía una solicitud al servidor para iniciar sesión. Si la respuesta indica un inicio de sesión exitoso, llama a `this.props.handleSuccessfulAuth`. Si falla, llama a `this.props.handleUnsuccessfulAuth` y muestra un mensaje de error.

2. **Auth Component**:
   - **handleSuccessfulAuth**: Llama a `this.props.handleSuccessfulLogin` para actualizar el estado de la aplicación principal a `LOGGED_IN` y redirige al usuario a la página de inicio.
   - **handleUnsuccessfulAuth**: Llama a `this.props.handleUnsuccessfulLogin` para manejar el inicio de sesión fallido sin redirigir.

3. **App Component**:
   - Pasa el estado de `loggedInStatus` y las funciones `handleSuccessfulLogin` y `handleUnsuccessfulLogin` al componente de autenticación (`Auth`).
   - Define un nuevo método `authorizedPages()` que devuelve una lista de rutas protegidas.
   - En el método `render()`, utiliza una expresión condicional para renderizar las rutas protegidas solo si el usuario ha iniciado sesión.

4. **Navigation Component**:
   - Recibe el estado `loggedInStatus` como propiedad. Usa este estado para condicionalmente mostrar u ocultar enlaces de navegación basados en si el usuario ha iniciado sesión.

## Resumen del flujo:

1. **Inicio de sesión**:
   - Usuario envía formulario en `Login`.
   - `Login` maneja el envío y llama a `handleSuccessfulAuth` o `handleUnsuccessfulAuth` basado en la respuesta del servidor.
   - `Auth` maneja estas llamadas y actualiza el estado global en `App`.
   - `App` actualiza `loggedInStatus` y pasa este estado a `NavigationComponent`.
   - `NavigationComponent` muestra u oculta enlaces de navegación basado en `loggedInStatus`.

2. **Rutas protegidas**:
   - `App` define un método `authorizedPages()` que devuelve las rutas protegidas.
   - En el método `render()`, `App` usa una expresión condicional para renderizar `authorizedPages()` solo si `loggedInStatus` es `LOGGED_IN`.
   - Usuarios no autenticados son redirigidos al intentar acceder a rutas protegidas.

### Resumen del Proceso de Implementación de Logout

#### Contexto y Propósito
La sección final del curso aborda la implementación de la funcionalidad de cierre de sesión en una aplicación React. El objetivo es permitir que el usuario cierre sesión sin necesidad de reiniciar el navegador o abrir una nueva ventana de incógnito. La función de cierre de sesión se comunicará con el servidor para eliminar la cookie de sesión y actualizará el estado de la aplicación en el frontend.

#### Implementación del Controlador de Logout

1. **Creación del Controlador de Logout**
   - Se crea un nuevo método llamado `handleSuccessfulLogout` en el componente principal (`App.js`).
   - Este método se encargará de actualizar el estado de la aplicación a `NOT_LOGGED_IN` cuando el usuario cierre sesión.

2. **Enlazar el Controlador**
   - El nuevo método `handleSuccessfulLogout` se enlaza al contexto del componente en el constructor utilizando `bind`.
   - Esto asegura que el método tenga acceso al componente cuando se invoque.

3. **Pasar el Controlador como Propiedad**
   - Se pasa el controlador `handleSuccessfulLogout` como una propiedad al componente de navegación (`NavigationContainer`).
   - Esto permite que el componente de navegación invoque el método cuando sea necesario.

4. **Actualización del JSX**
   - En el JSX del componente principal (`App.js`), se añade la propiedad `handleSuccessfulLogout` al `NavigationContainer`.
   - El `NavigationContainer` ahora puede recibir y utilizar esta propiedad para gestionar el proceso de logout.

#### Mecanismo del Proceso de Logout

1. **Desencadenar el Proceso de Logout**
   - En la interfaz de usuario, se añadirá un enlace o botón de "Cerrar sesión" dentro del `NavigationContainer`.
   - Cuando el usuario haga clic en este enlace, se iniciará el proceso de logout.

2. **Comunicación con el Servidor**
   - El proceso de logout llamará al servidor para informar que el usuario desea cerrar sesión.
   - El servidor gestionará la eliminación de la cookie de sesión.

3. **Actualización del Estado en el Frontend**
   - Una vez que el servidor confirme que la sesión ha sido cerrada, se llamará al método `handleSuccessfulLogout`.
   - Este método actualizará el estado de la aplicación a `NOT_LOGGED_IN`, reflejando que el usuario ya no está autenticado.

4. **Reflejar los Cambios en la Interfaz de Usuario**
   - La actualización del estado a `NOT_LOGGED_IN` provocará que la interfaz de usuario se actualice, ocultando enlaces y rutas protegidas que solo deben estar disponibles para usuarios autenticados.

#### Componentes de Orden Superior (HOCs)
No vamos a hablar de componentes de orden superior, también conocidos como HOCs, hasta más adelante, porque si te hablara de ellos ahora mismo, tu primera pregunta podría ser por qué necesitaríamos esto, porque se ven un poco raros y, por lo tanto, no quiero confundirte de inmediato. Así que, en lugar de eso, quiero mostrarte por qué son necesarios primero. Desarrollaremos la mayor parte de nuestra implementación y luego verás por qué son necesarios y también cómo usarlos.

#### Modificaciones en `navigation-container.js`

1. **Importar Axios**
   - Importamos Axios para realizar la comunicación con el endpoint de cierre de sesión.
   ```javascript
   import axios from 'axios';
   ```

2. **Crear la Función `handleSignOut`**
   - Se crea una función `handleSignOut` que hará una petición DELETE al endpoint de cierre de sesión.
   ```javascript
   const handleSignOut = () => {
     axios.delete("https://api.devcamp.space/logout", { withCredentials: true })
       .then(response => {
         if (response.status === 200) {
           props.history.push("/");
           props.handleSuccessfulLogout();
         }
         return response.data;
       })
       .catch(error => {
         console.log("Error signing out", error);
       });
   };
   ```

3. **Agregar el Enlace de Cierre de Sesión en el JSX**
   - Se añade un enlace de "Cerrar sesión" que llama a `handleSignOut` cuando se hace clic, visible solo si el usuario está autenticado.
   ```javascript
   <div className="right-side">
     JORDAN HUDGENS
     {props.loggedInStatus === "LOGGED_IN" ? (
       <a onClick={handleSignOut}>Cerrar sesión</a>
     ) : null}
   </div>
   ```

4. **Uso de Componentes de Orden Superior para Manejar el Historial**
   - Se usa el HOC `withRouter` de `react-router` para envolver el componente de navegación, permitiendo el acceso a `props.history`.
   ```javascript
   import { withRouter } from 'react-router';
   
   export default withRouter(NavigationComponent);
   ```

## Crear el Componente `PortfolioManager`

Lo siguiente que quiero hacer es crear un **contenedor de administrador de cartera**, que será el componente que reúna todas las funciones de nuestro administrador de cartera. Este componente contendrá el formulario, actualizará el estado, y manejará otras tareas relacionadas con la administración de carteras.

Vamos a crear este componente en el directorio de `pages` ya que consideramos que una página es una parte importante de la aplicación. Si tu aplicación fuera más grande, podrías tener subdirectorios adicionales para organizar mejor las páginas, pero para nuestro caso actual, esto funcionará bien.

Primero, vamos a crear el archivo `portfolio-manager.js` dentro del directorio `pages`. Aquí está la estructura básica del componente:

```jsx
// src/pages/portfolio-manager.js
import React, { Component } from "react";

export default class PortfolioManager extends Component {
  render() {
    return (
      <div>
        <h1>Gestor de Cartera</h1>
        <h1>Gestor de Cartera</h1>
      </div>
    );
  }
}
```

**Explicación:**

1. **Importar React y Componente:** Importamos `React` y `Component` desde `react` para definir nuestra clase `PortfolioManager`.
2. **Definir el Componente:** Creamos una clase `PortfolioManager` que extiende `Component` y define el método `render()` que devuelve un JSX simple con dos etiquetas `<h1>` para prueba.

### Agregar la Ruta al `PortfolioManager`

Ahora que tenemos el componente `PortfolioManager`, debemos agregar una ruta para él en nuestra aplicación. Primero, importamos el componente en `App.js`:

```jsx
import PortfolioManager from "./pages/portfolio-manager";
```

Luego, agregamos una ruta a `PortfolioManager` dentro del `Switch` en el archivo `App.js`:

```jsx
<Switch>
  {/* Otras rutas */}
  <Route exact path="/portfolio-manager" component={PortfolioManager} />
</Switch>
```

**Explicación:**

- **Ruta para `PortfolioManager`:** La ruta `/portfolio-manager` renderizará el componente `PortfolioManager` cuando el usuario navegue a esa URL.

### Agregar `PortfolioManager` a las Páginas Autorizadas

Ahora, agreguemos `PortfolioManager` a las páginas autorizadas para que solo los usuarios autenticados puedan acceder a ella. 

Primero, actualiza `authorizedPages` en `App.js`:

```jsx
const authorizedPages = [
 //Eliminamos blog ya que va a ser visible no hace falta loguearse
  { linkText: "Portfolio Manager", route: "/portfolio-manager" }
];
```

**Explicación:**

- **Páginas Autorizadas:** Solo los usuarios autenticados podrán ver el enlace al `PortfolioManager`.

### Actualizar el Componente de Navegación

Vamos a actualizar el componente de navegación para incluir un enlace a `PortfolioManager`. Modifica `navigation-container.js` para agregar un nuevo enlace en la barra de navegación.

```jsx
<div className="nav-link-wrapper">
  <NavLink to="/portfolio-manager" activeClassName="nav-link-active">
    Portfolio Manager
  </NavLink>
</div>
```

**Explicación:**

- **Nuevo Enlace:** Agregamos un enlace `NavLink` que dirige a `/portfolio-manager` con el texto "Portfolio Manager".

Ahora el componente de navegación debería verse así:

```jsx
<div className="nav-link-wrapper">
  <NavLink to={route} activeClassName="nav-link-active">
    {linkText}
  </NavLink>
</div>
```
[Codigo portfolio sin acabar con insert nuevo item](https://github.com/Marimar8888/mariadelmar-alonso-portfolio/tree/9e234ab2e08c407a2a9d0599c488b514ab641bc5/)

