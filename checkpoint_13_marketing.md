# Ejemplo marketing: Control de la vida de un posible cliente

## Diagrama de Casos de Uso:

![diagrama de casos de usos Marketing](./images/diagramas%20ejemplos/marketing/diagrama_casos_uso.PNG)

### Actores:

- **Marketing Specialist**: Principal usuario del sistema.
- **System Notification Engine**: Módulo del sistema encargado de enviar notificaciones.
- **Customer**: Usuario que interactúa de manera mínima, solo enviando un formulario.

### Casos de Uso:

  1. **Especialista en Marketing:**
     - Ver informes
     - Gestionar contactos
     - Administrar formularios
     - Enviar comunicación (correo electrónico, SMS, HipChat, Slack)
  2. **Cliente Potencial/Cliente:**
     - Enviar formulario
     - Notificar al especialista en marketing (automático)
  3. **Sistema:**
     - Enviar recordatorios
     - Enviar ofertas especiales
     - Enviar comunicación (entrada)

- **Consideraciones Clave:**
  - Solo el especialista en marketing interactuará directamente con el sistema.
  - Los clientes potenciales/clientes solo recibirán comunicaciones del sistema, no interactuarán con él.


### Comunicación del Sistema

- **Enviar Comunicación**: Módulo contenedor para la acción de enviar mensajes en diferentes formatos (correo electrónico, SMS, etc.). 
- **Interacción de Componentes**: Los componentes del sistema interactúan a través del módulo de comunicación, que enruta los mensajes al destino adecuado.
   
- **Notificación de Eventos**:
- **Ejemplo Real**: Un cliente potencial que inicia una cadena de comunicación y el sistema de notificación envía ofertas especiales a usuarios registrados, como promociones de un restaurante.

### Escalabilidad y Flexibilidad

- **Diseño Modular**: Se resalta la importancia de diseñar sistemas que puedan cerrarse y extenderse, permitiendo que los módulos puedan realizar múltiples tareas, más allá de su función principal.

### Conclusión

- **Interacción del Marketing Specialist**: El actor principal interactúa extensamente con el sistema, gestionando contactos, formularios y comunicaciones.
- **Modelado de Interacciones Limitadas**: Importancia de modelar incluso las interacciones mínimas de los usuarios, como los clientes que solo envían formularios.
- **Contenedor Abstracto**: Utilización de contenedores abstractos como "Enviar Comunicación" para construir sistemas escalables y flexibles.


## Diagrama de Casos de Actividades:

El texto se enfoca en la creación de un diagrama de actividades avanzado, incorporando nodos de bifurcación y unión para modelar procesos complejos en sistemas modernos. Estos componentes son esenciales para representar tareas que se ejecutan en paralelo y se sincronizan, reflejando arquitecturas de desarrollo actuales.

![diagrama de actividades Marketing](./images/diagramas%20ejemplos/marketing/diagrama_actividad.PNG)


- **Flujo del Viaje de Marketing:**
  - **Actividades de Ejemplo:**
    - Correo electrónico de bienvenida
    - Retraso 1 semana
    - Notificación al especialista en marketing
  - **Decisiones de Ejemplo:**
    - ¿Producto comprado por el usuario?
    - ¿Se abrió el correo electrónico?

- **Investigación:**
  - Nodos de bifurcación: permiten tomar diferentes caminos basados en condiciones.
  - Unir nodos: permiten fusionar caminos divergentes en un único flujo.

### Proceso de Registro y Comunicación Inicial

1. **Inicio del Proceso**: 
   - El usuario completa un formulario de registro, activando el envío de un correo electrónico de bienvenida.

2. **Primer Nodo de Bifurcación**:
   - **Correo Electrónico de Bienvenida**: Inicia dos actividades paralelas:
     - **Retraso de un Día**: Introduce un retraso antes de la siguiente acción.
     - **Notificación al Especialista en Marketing**: Envía una notificación por correo electrónico o SMS.

3. **Primer Nodo de Unión**:
   - Las actividades paralelas (retraso y notificación) se sincronizan antes de continuar con el siguiente paso del flujo.

### Importancia del Procesamiento en Segundo Plano

  - **Tareas en Segundo Plano**: Es fundamental para aplicaciones modernas permitir que el sistema ejecute tareas de procesamiento intensivo en segundo plano sin afectar la funcionalidad principal.
  - **Ejemplo de Aprendizaje Automático**: Algoritmos que requieren tiempo de procesamiento considerable se ejecutan en segundo plano, visualizados mediante nodos de bifurcación y unión.

### Decisiones Basadas en la Interacción del Usuario

1. **Punto de Decisión: Apertura del Correo Electrónico de Bienvenida**:
   - **Si se Abre**: El flujo se retrasa una semana antes de continuar.
   - **Si No se Abre**: Envía un correo electrónico de oferta especial y verifica su apertura.

2. **Punto de Decisión: Apertura del Correo Electrónico de Oferta Especial**:
   - **Si se Abre**: Continua el flujo.
   - **Si No se Abre**: Envía un SMS con la oferta especial.

3. **Evaluación Final: Compra del Usuario**:
   - **Si Compra**: Finaliza el proceso.
   - **Si No Compra**: Se introduce un retraso de una semana y se repite el ciclo de comunicaciones.

### Objetivo del Sistema de Marketing

- **Embudo de Marketing**: El sistema está diseñado para crear viajes de marketing dinámicos y adaptables, donde se pueden establecer retrasos, notificaciones y acciones basadas en las interacciones del usuario.
- **Proceso Circular**: Los usuarios se mantienen en el ciclo de marketing hasta que realizan una compra, con la posibilidad de cancelar el proceso si se desuscriben.

### Consideraciones Finales

- **Fin del Proceso**: Aunque no se menciona explícitamente, se asume que si un usuario se desuscribe, el viaje de marketing se detiene por completo.
- **Enfoque en la Compra**: El flujo está orientado a seguir al usuario desde el registro hasta la compra, asegurando múltiples puntos de contacto y decisiones intermedias.

### Conclusión

El diagrama de actividades descrito es crucial para modelar sistemas complejos donde las tareas se ejecutan en paralelo y se sincronizan en puntos específicos. Los nodos de bifurcación y unión permiten visualizar y gestionar procesos dinámicos y escalables, esenciales en el desarrollo de aplicaciones modernas de marketing y otros ámbitos.

### Información adicional sobre Nodos

**Nodos de Bifurcación (Branch Nodes):**
- En un diagrama de actividad, un nodo de bifurcación se utiliza para representar un punto en el flujo donde se toma una decisión basada en una condición.
- Este nodo divide el flujo de actividad en múltiples caminos, cada uno de los cuales se sigue según el resultado de la condición evaluada.
- Ejemplos de condiciones que podrían requerir una bifurcación incluyen la validación de datos, la comprobación de estados de variables o la respuesta a eventos externos.
- Los nodos de bifurcación se representan típicamente con un rombo o diamante y pueden tener múltiples salidas, cada una etiquetada con la condición que debe cumplirse para seguir ese camino específico.

**Nodos de Unión (Merge Nodes):**
- Los nodos de unión se utilizan en un diagrama de actividad para fusionar múltiples flujos de actividad en uno solo después de que se hayan seguido caminos divergentes.
- Este nodo combina los flujos divergentes y permite que la actividad continúe en un único camino unificado.
- La función principal de un nodo de unión es sincronizar los flujos de actividad divergentes en un punto común.
- Los nodos de unión se representan típicamente con un círculo y pueden tener múltiples entradas, indicando los flujos de actividad que se están fusionando en ese punto.

**Importancia de los Nodos de Bifurcación y Unión:**
- Los nodos de bifurcación y unión son fundamentales para modelar la lógica de decisión y el flujo de actividad en un sistema.
- Permiten representar la ramificación y convergencia del flujo de actividad, lo que es crucial para capturar la complejidad de los procesos que implican toma de decisiones y múltiples caminos posibles.
- Al comprender y utilizar eficazmente los nodos de bifurcación y unión, los diseñadores de sistemas pueden crear diagramas de actividad más precisos y comprensibles, lo que facilita la implementación y la comunicación de los requisitos del sistema a los desarrolladores y otras partes interesadas.

## Diagrama del Paquete:

El texto describe la creación de un diagrama de paquetes enfocado en un sistema de automatización de marketing, destacando la importancia de gestionar la comunicación con servicios externos de manera organizada y eficiente.

![diagrama de paquete Marketing](./images/diagramas%20ejemplos/marketing/diagrama_paquetes.PNG)

### Estructura General del Diagrama de Paquetes

1. **Marco Principal: `package marketing automation`**:
   - Contiene todos los componentes del sistema de automatización de marketing.

2. **Paquetes Internos**:
   - **`journeys`**: Maneja los viajes del usuario a través del sistema de automatización de marketing.
   - **`insights`**: Almacena y gestiona los datos sobre las interacciones del usuario, como la apertura de correos electrónicos y la respuesta a mensajes.
   - **`channels`**: Gestiona los distintos canales de comunicación.

3. **Subpaquetes dentro de `channels`**:
   - **`app drivers`**: Controladores de aplicaciones externas.
     - **`slack`**: Módulo para la comunicación con la API de Slack.
     - **`hipchat`**: Módulo para la comunicación con la API de Hipchat.
   
   - **`aggregate`**: Asocia y gestiona los distintos controladores de aplicaciones externas.

### Comunicación con Servicios Externos

- **Desafío de la Comunicación con Múltiples APIs**:
  - Cada servicio externo, como Slack, Hipchat, Twitter o Facebook, tiene su propia API única.
  - Implementar comunicación con cada API de manera directa generaría código desordenado y difícil de mantener.

- **Solución: Creación de Conectores**:
  - **Conector de Comunicación**: Un módulo dedicado que gestiona toda la comunicación de datos con los servicios externos.
  - **Controlador de Aplicaciones**: Un paquete que se encarga de enviar mensajes y gestionar respuestas de manera segura.
  - **Interacción Abstraída**: Los módulos internos, como `journeys`, no necesitan conocer los detalles de la comunicación con los servicios externos. Solo interactúan con el controlador de aplicaciones.

### Dependencias y Relaciones

- **`journeys`**:
  - **Dependencia de `insights`**: Necesita saber cuándo ocurrió la última comunicación con un usuario y los detalles de las interacciones del usuario.
  - **Dependencia de `channels`**: Para enviar comunicaciones a través de diversos canales.

- **`insights`**:
  - Almacena datos críticos sobre las interacciones del usuario que son necesarios para gestionar los `journeys`.

- **`channels`**:
  - Facilita la comunicación, esencial para la funcionalidad de los `journeys`.

### Importancia de la Abstracción y Escalabilidad

- **Modularidad y Escalabilidad**:
  - Crear módulos y conectores que gestionen la comunicación permite un sistema más limpio y escalable.
  - Facilita la adición de nuevos canales de comunicación sin afectar a los módulos internos.
  
- **Patrones de Diseño Sólidos**:
  - El uso de controladores de aplicaciones y módulos de comunicación centralizados sigue buenos patrones de diseño, promoviendo sistemas que son fáciles de mantener y extender.

### Conclusión

El diagrama de paquetes descrito es fundamental para visualizar la estructura y las dependencias de un sistema de automatización de marketing, especialmente en lo que respecta a la comunicación con servicios externos. La creación de conectores y módulos de comunicación permite un sistema organizado, escalable y fácil de mantener, asegurando una integración eficiente y flexible con múltiples APIs externas.

## Diagrama de Implementación para el Sistema de Automatización de Marketing

Este diagrama de implementación ilustra cómo diversos componentes y servicios interactúan en un sistema de automatización de marketing. La implementación muestra la integración con servicios externos, el uso de balanceadores de carga, y la comunicación con APIs y bases de datos, garantizando una estructura robusta y escalable.

![diagrama de implementación Marketing](./images/diagramas%20ejemplos/marketing/diagrama_implementacion.PNG)

### Componentes Clave del Diagrama

1. **Usuario Externo**:
   - **Interacción Inicial**: Un usuario realiza una solicitud que llega a través de Internet.
   - **Ícono del Usuario**: Representa a un usuario real interactuando desde su computadora personal.

2. **Integración con Salesforce**:
   - **Cliente Externo**: Similar a un usuario, pero representando una integración con otro sistema, como Salesforce.
   - **Actualización de Registros**: El sistema de automatización de marketing se comunica con Salesforce para actualizar registros en función de los datos recibidos.

3. **Balanceador de Carga**:
   - **Distribución del Tráfico**: Recibe las solicitudes entrantes y las distribuye entre múltiples servidores de aplicaciones.
   - **Escalabilidad**: Permite la expansión del sistema al agregar más servidores de aplicaciones según sea necesario.

4. **Servidores de Aplicaciones**:
   - **Código Consistente**: Todos los servidores de aplicaciones ejecutan el mismo código, asegurando una experiencia de usuario consistente.
   - **Comunicación con la Base de Datos**: Todos los servidores interactúan con una base de datos compartida.

5. **Base de Datos Compartida**:
   - **Base de Datos Maestra**: Interactúa directamente con los servidores de aplicaciones.
   - **Base de Datos Esclava**: Sistema de replicación para respaldar la base de datos maestra y asegurar la continuidad del servicio en caso de fallos.

6. **Servidor de Correo Electrónico**:
   - **Servicios Externos**: Utiliza servicios como Sparkpost o SendGrid para manejar las solicitudes de correo electrónico.
   - **Procesamiento de Correos**: Gestiona todas las solicitudes de correo electrónico de manera externa.

7. **Puerta de Enlace SMS**:
   - **Integración con Twilio**: Utiliza la API de Twilio para enviar mensajes SMS.
   - **Contenedor de Comunicación**: Los servidores de aplicaciones no se comunican directamente con Twilio; en su lugar, un contenedor o aplicación independiente gestiona la interacción.

### Arquitectura y Buenas Prácticas

1. **Contenedores de Comunicación**:
   - **Aislamiento de APIs Externas**: Los contenedores manejan la comunicación con servicios externos, protegiendo el código principal de cambios en las APIs.
   - **Gestión de Errores**: Permiten manejar errores y cambios en los servicios externos de manera centralizada y eficiente.

2. **Balance de Carga y Escalabilidad**:
   - **Expansión Dinámica**: La configuración permite agregar más servidores de aplicaciones para manejar incrementos en la carga de trabajo.
   - **Distribución Eficiente del Tráfico**: El balanceador de carga asegura que las solicitudes se distribuyan uniformemente entre los servidores disponibles.

3. **Replicación de Bases de Datos**:
   - **Alta Disponibilidad**: La base de datos esclava asegura que haya una copia de respaldo en caso de fallos en la base de datos maestra.
   - **Consistencia de Datos**: La replicación asegura que los datos estén siempre disponibles y actualizados.

4. **Independencia de Servicios Externos**:
   - **Mantenimiento Simplificado**: Los contenedores permiten realizar cambios en la comunicación con servicios externos sin afectar el código base.
   - **Robustez del Sistema**: Evita que fallos en servicios externos impacten directamente en la funcionalidad principal del sistema.

### Conclusión

El diagrama de implementación para el sistema de automatización de marketing presenta una arquitectura robusta, escalable y mantenible. Utiliza contenedores de comunicación para gestionar la interacción con servicios externos y balanceadores de carga para distribuir eficientemente el tráfico. La replicación de bases de datos y la independencia de servicios externos aseguran una alta disponibilidad y facilidad de mantenimiento, proporcionando una solución sólida y adaptable para la automatización de marketing.

## Diagrama de Máquina de Estados:

### Diagrama de Máquina de Estados para la Gestión de Estado en un Sistema de Automatización de Marketing

El diagrama de máquina de estados es crucial para gestionar adecuadamente el estado de los usuarios en un sistema de automatización de marketing. Asegura que los usuarios no reciban mensajes inapropiados y que el sistema cumpla con las leyes, como la Ley de Spam.

![diagrama de estados Marketing](./images/diagramas%20ejemplos/marketing/diagrama_estado.PNG)

### Componentes del Diagrama de Máquina de Estados

1. **Estado Inicial**:
   - **Visitor (Visitante)**: Estado inicial cuando un usuario llega al sitio web.

2. **Transiciones de Estado**:
   - **Submit Form (Enviar Formulario)**: Si el usuario envía el formulario, su estado cambia de "Visitor" a "Prospect (Cliente Potencial)".
   - **No Submit (No Enviar)**: Si el usuario no envía el formulario, su estado permanece como "Visitor".

3. **Estados de Cliente Potencial**:
   - **Qualified for CRM Conditions (Calificado para Condiciones de CRM)**:
     - **Si**: El estado cambia a "Lead (Cliente Potencial)".
     - **No**: El estado cambia a "Disqualified Prospect (Prospecto Descalificado)".
   - **Lead (Cliente Potencial)**:
     - **Qualified for CRM Opportunity (Calificado para Oportunidad de CRM)**:
       - **Si**: El estado cambia a "Opportunity (Oportunidad)".
       - **No**: El estado cambia a "Failed Lead (Cliente Potencial Fallido)".

4. **Estados de Oportunidad**:
   - **Opportunity (Oportunidad)**:
     - **Not Interested (No Interesado)**: El estado cambia a "Lost Opportunity (Oportunidad Perdida)".
     - **Interested (Interesado)**: El estado cambia a "Won Opportunity (Oportunidad Ganada)".

### Detalles y Razonamiento

1. **Visitor (Visitante)**:
   - **Inicio**: El usuario comienza en el estado de visitante.
   - **Transición**: Envío del formulario cambia el estado a "Prospect".

2. **Prospect (Cliente Potencial)**:
   - **Condiciones de CRM Iniciales**: Evaluación inicial basada en información básica como el país.
   - **Descalificación**: Si no cumple con los criterios iniciales, el usuario se convierte en "Disqualified Prospect".
   - **Calificación**: Si cumple, el estado cambia a "Lead".

3. **Lead (Cliente Potencial)**:
   - **Condiciones de Oportunidad de CRM**: Evaluación más avanzada basada en información adicional proporcionada.
   - **Calificación Avanzada**: Si cumple con los criterios, el estado cambia a "Opportunity".
   - **Fallido**: Si no cumple, el usuario se convierte en "Failed Lead".

4. **Opportunity (Oportunidad)**:
   - **Evaluación por Vendedores**: El vendedor determina si el usuario está interesado.
   - **Oportunidad Perdida**: Si el usuario no está interesado, el estado cambia a "Lost Opportunity".
   - **Oportunidad Ganada**: Si el usuario está interesado y realiza una compra, el estado cambia a "Won Opportunity".

### Importancia de la Gestión de Estados

1. **Cumplimiento Legal**:
   - **Ley de Spam**: Garantiza que no se envíen mensajes a usuarios que no desean recibirlos.

2. **Experiencia del Usuario**:
   - **Evitar Repetición de Mensajes**: Asegura que los usuarios no reciban mensajes inapropiados o repetitivos.

3. **Claridad y Mantenimiento**:
   - **Diagrama Claro y Efectivo**: Representa claramente el estado del usuario, facilitando la comprensión y el mantenimiento del sistema.

### Conclusión

El diagrama de máquina de estados para la gestión del estado de usuarios en un sistema de automatización de marketing es esencial para asegurar una comunicación adecuada y cumplir con las leyes. Este diagrama proporciona una visión clara y efectiva de cómo cambia el estado de un usuario a lo largo de su interacción con el sistema, garantizando una experiencia de usuario positiva y el cumplimiento normativo.


## Diagrama de Clases para un Sistema de Automatización de Marketing

Este diagrama de clases resume los diversos componentes que hemos cubierto durante el curso y muestra cómo integrar diferentes aspectos de un sistema de automatización de marketing. A continuación se explica en detalle cada componente y su relación.

![diagrama de clases Marketing](./images/diagramas%20ejemplos/marketing/diagrama_clases.PNG)

### Componentes del Diagrama

1. **Form (Formulario)**:
   - **Relación**: `1..*` con `MarketingRep`.
   - **Detalle**: Un formulario puede existir sin usuarios, reflejado en la relación `1..0..*`.

2. **MarketingRep (Representante de Marketing)**:
   - **Relación**: `1..1` con `User`.
   - **Detalle**: Cada representante de marketing es un usuario, pero no todos los usuarios son representantes de marketing. Esto permite flexibilidad para agregar otros tipos de usuarios en el futuro.

3. **User (Usuario)**:
   - **Detalle**: Clase base para diferentes tipos de usuarios. Se puede extender para incluir administradores, clientes que inician sesión, etc.

4. **Message (Mensaje)**:
   - **Relación de Herencia**: `EmailMessage`, `SMSMessage`, `ExternalChannelMessage`.
   - **Detalle**: La clase `Message` es una clase principal que se extiende a diferentes tipos de mensajes (correo electrónico, SMS, canales externos). Cada tipo de mensaje es un tipo de mensaje.

5. **Customer (Cliente)**:
   - **Relación**: Independiente.
   - **Detalle**: Los clientes no son usuarios que inicien sesión, sino que son individuos registrados a través de formularios.

6. **EmailMessage (Mensaje de Correo Electrónico)**:
   - **Herencia**: `Message`.
   - **Detalle**: Especialización de `Message` para manejar correos electrónicos.

7. **SMSMessage (Mensaje SMS)**:
   - **Herencia**: `Message`.
   - **Detalle**: Especialización de `Message` para manejar mensajes SMS.

8. **ExternalChannelMessage (Mensaje de Canal Externo)**:
   - **Herencia**: `Message`.
   - **Detalle**: Especialización de `Message` para manejar mensajes en canales externos como Slack, HipChat, etc.

### Diagrama Visual

![diagrama de clases Marketing](./images/diagramas%20ejemplos/marketing/diagrama_clases.PNG)

### Detalles y Razonamiento

1. **Multiplicidad**:
   - **`1..0..*`**: Indica que un formulario puede existir sin usuarios (ej. `Form` a `Customer`), pero puede tener muchos usuarios asociados.
   - **`1..*`**: Indica que un representante de marketing debe tener al menos un formulario, pero puede tener muchos.

2. **Herencia**:
   - **`Message`**: Clase base con `EmailMessage`, `SMSMessage`, y `ExternalChannelMessage` como subclases, siguiendo la regla de que un tipo de mensaje es una especialización de `Message`.

3. **Independencia del Cliente**:
   - **`Customer`**: Clase independiente, ya que los clientes no necesitan iniciar sesión o interactuar con el sistema como usuarios tradicionales.

4. **Flexibilidad del Usuario**:
   - **`User`**: Clase base para todos los usuarios. Permite añadir fácilmente otros tipos de usuarios como administradores o clientes que podrían iniciar sesión en el futuro.

### Conclusión

Este diagrama de clases proporciona una estructura clara y extensible para un sistema de automatización de marketing. Define relaciones claras entre formularios, representantes de marketing, mensajes y clientes, asegurando que el sistema sea robusto y capaz de adaptarse a futuros cambios y expansiones.

