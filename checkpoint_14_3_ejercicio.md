Claro, aquí tienes una guía paso a paso para crear un enrutamiento sencillo en React utilizando React Router. Vamos a crear dos páginas: `Home` y `Contact`. Empezaremos desde cero hasta tener dos enlaces que nos permitan navegar entre estas dos páginas.

### Paso 1.1: Crear un nuevo proyecto de React A traves de la plantilla de devcamp

1. Instala una plantilla base para una nueva aplicación de React:

    ```bash
     npm install devcamp-js-builder 
    ```

2. Crea el nuevo proyecto:

    ```bash
    js-generate
    ```

### Paso 1.2: Instalar React Router

1. Abre tu terminal y ejecuta el siguiente comando para crear una nueva aplicación de React:

    ```bash
    npx create-react-app my-app
    ```
2. Navega al directorio del proyecto:

    ```bash
    cd my-app
    ```

3. Instala `react-router-dom` que es la librería que usaremos para el enrutamiento:

    ```bash
    npm install react-router-dom
    ```

### Paso 3: Configurar las rutas

4. Abre tu proyecto en tu editor de código favorito (por ejemplo, Visual Studio Code).

5. En la carpeta `src`, crea dos nuevos archivos para las páginas `Home.js` y `Contact.js`.

    - `src/Pages/Home.js`:

        ```jsx
        import React from 'react';

        const Home = () => {
            return (
                <div>
                    <h1>Home Page</h1>
                    <p>Welcome to the Home page!</p>
                </div>
            );
        };

        export default Home;
        ```

    - `src/Pages/Contact.js`:

        ```jsx
        import React from 'react';

        const Contact = () => {
            return (
                <div>
                    <h1>Contact Page</h1>
                    <p>Welcome to the Contact page!</p>
                </div>
            );
        };

        export default Contact;
        ```

6. Abre `src/index.js` y configura el enrutador:

    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import App from './App';
    import Home from './Pages/Home';
    import Contact from './Pages/Contact';

    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
    ```

7. Puedes dejar `src/App.js` tal como está ya que no lo utilizaremos directamente en esta configuración básica.

### Paso 4: Ejecutar la aplicación

8. En tu terminal, inicia la aplicación:

    ```bash
    npm start
    ```

### Resultado

Ahora deberías ver tu aplicación funcionando en `http://localhost:3000`. Debería haber dos enlaces en la página: "Home" y "Contact". Al hacer clic en estos enlaces, deberías poder navegar entre las páginas Home y Contact sin recargar la página.

Esta es una configuración básica, pero debería darte una buena base para entender cómo funciona el enrutamiento en React utilizando React Router.