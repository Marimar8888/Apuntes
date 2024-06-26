### 1. index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

// Renderiza la aplicación dentro del elemento con clase '.app-wrapper'
ReactDOM.render(
  <App />,
  document.querySelector('.app-wrapper')
);
```

- **Explicación:**
  - **Importaciones:** Se importa React y ReactDOM, necesarios para definir y renderizar componentes React en el navegador.
  - **Renderización:** `ReactDOM.render()` se utiliza para montar el componente `<App />` en el DOM.
  - **Destino:** El componente `<App />` se renderiza dentro del elemento del DOM seleccionado por `document.querySelector('.app-wrapper')`.

### 2. app.js

```javascript
import React, { Component } from "react";
import JournalList from "./journal/journal_list";

// Componente principal de la aplicación
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React, Props, and State Deep Dive</h1>

        {/* Renderiza dos instancias de JournalList con diferentes encabezados */}
        <JournalList heading="List 1" />
        <JournalList heading="List 2" />
      </div>
    );
  }
}
```

- **Explicación:**
  - **Componente `App`:** Este es el componente principal de la aplicación.
  - **Renderizado:** Renderiza dos instancias de `<JournalList />` con diferentes encabezados (`heading` props).
  - **Props:** Los componentes `<JournalList />` reciben la prop `heading`, que se define directamente en el lugar donde se invocan (`List 1` y `List 2`).

### 3. journal_entry.js

```javascript
import React from "react";

// Componente funcional que muestra una entrada de diario
export const JournalEntry = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};
```

- **Explicación:**
  - **Componente funcional:** Define el componente `JournalEntry` como una función que recibe `props`.
  - **Props:** Muestra dinámicamente el `title` y el `content` que recibe a través de `props`.


### 4. Journal_list.js

```javascript
import React, { Component } from "react";
import { JournalEntry } from "./journal_entry";

// Datos de ejemplo de entradas de diario
const rawJournalData = [
  { title: "Post One", content: "Post content", status: "draft" },
  { title: "Post Two", content: "More content", status: "published" },
  { title: "Post Three", content: "More content", status: "published" },
  { title: "Post Four", content: "More content", status: "published" }
];

// Componente de lista de diario que gestiona el estado y las acciones
export default class JournalList extends Component {
  constructor(props) {
    super();
    // Estado inicial del componente
    this.state = {
      journalData: rawJournalData,
      isOpen: true
    };
  }

// Método para limpiar las entradas de diario
  clearEntries = () => {
    this.setState({ journalData: [], isOpen: false });
  };

// Método para mostrar todas las entradas de diario
  showAllEntries = () => {
    this.setState({ journalData: rawJournalData, isOpen: true });
  };
  
// Método para alternar el estado de visibilidad
  toggleStatus = () => {
    if (this.state.isOpen) {
      this.setState({ journalData: [], isOpen: false });
    } else {
      this.setState({ journalData: rawJournalData, isOpen: true });
    }
  };

  render() {
// Mapea los datos del estado a componentes JournalEntry
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

    return (
      <div>
        <h1>{this.props.heading}</h1> {/* Muestra el encabezado pasado como prop */}
        {journalEntries} {/* Renderiza las entradas de diario */}
        <button onClick={this.clearEntries}>Clear Journal Entries</button> {/* Botón para limpiar las entradas */}
        <button onClick={this.showAllEntries}>Show All Journal Entries</button> {/* Botón para mostrar todas las entradas */}
        <button onClick={this.toggleStatus}>Toggle Status</button> {/* Botón para alternar el estado */}
      </div>
    );
  }
}
```

- **Explicación:**
  - **Componente `JournalList`:** Gestiona una lista de entradas de diario.
  - **Estado (`state`):** Inicializa `journalData` con datos de diario crudos (`rawJournalData`) y `isOpen` como `true`.
  - **Métodos de estado:**
    - `clearEntries()`: Limpia las entradas de diario y cierra la lista.
    - `showAllEntries()`: Muestra todas las entradas de diario y abre la lista.
    - `toggleStatus()`: Alterna entre mostrar y ocultar las entradas de diario.
  - **Renderizado:** Renderiza cada entrada de diario (`JournalEntry`) según el estado actual (`journalData`).
  - **Props (`this.props.heading`):** Utiliza `heading` como prop para mostrar el título de la lista de diario. Esta prop se pasa desde el componente `App`.


### Resumen de dónde se reciben los props:

- **index.js:** No recibe ni pasa props.
- **app.js:** No recibe props, pero pasa la prop `heading` a `<JournalList />`.
- **journal_entry.js:** Recibe props (`title` y `content`) directamente desde donde se utiliza.
- **Journal_list.js:** Recibe `heading` como prop de `<App />` y pasa `title` y `content` como props a `<JournalEntry />`.

