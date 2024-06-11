# Ejemplo Uber

## Diagrama de Actividad para el Proceso de Pedido de Uber

![diagrama de actividad Uber](./images/diagramas%20ejemplos/uber/diagrama%20de%20actividad.PNG)

Este diagrama de actividad ilustra el flujo del proceso de pedido de un automóvil en la aplicación Uber. Comienza en la esquina superior izquierda cuando se ordena el automóvil. Utilizaremos ramas y decisiones para mostrar cómo avanza el flujo basado en las acciones y entradas del usuario.

### Configuración del Viaje

1. **Establecer el Punto de Partida:**
   - El primer paso es configurar el punto de partida (`set departure`). Este es un paso crucial que involucra módulos y APIs del dispositivo para determinar la ubicación actual del usuario.
   - Una vez configurado el punto de partida, el siguiente paso es establecer el destino (`set destination`). 
   - Aunque técnicamente podrían combinarse, tiene sentido dividirlos en dos actividades distintas para reflejar mejor el flujo de la aplicación Uber.

2. **Establecer el Destino:**
   - El usuario ingresa la dirección o lugar al que desea ir.
   - Con el punto de partida y el destino establecidos, el sistema puede ahora verificar si el viaje es posible.

### Verificación de la Viabilidad del Viaje

3. **Validar el Viaje:**
   - El sistema verifica si el viaje es viable. Por ejemplo, si el usuario está en Nueva York y accidentalmente escribe un destino en Australia, el sistema debe detectar que el viaje no es posible.
   - Si el viaje no es posible, se muestra un error indicando que no se puede calcular el precio y no se permite continuar.

4. **Obtener Detalles del Viaje:**
   - Si el viaje es posible, el sistema obtiene todos los detalles necesarios, como precios y conductores disponibles.

### Confirmación del Viaje

5. **Confirmar o Rechazar el Viaje:**
   - El usuario revisa los detalles del viaje y decide si quiere proceder (`confirm`) o no (`deny`).
   - Si el usuario rechaza, es redirigido al inicio del proceso.
   - Si el usuario confirma, el flujo continúa hacia la toma del automóvil.

### Compartir Detalles del Viaje

6. **Compartir Detalles del Viaje:**
   - Opcionalmente, el usuario puede elegir compartir los detalles del viaje (`share the details`) con amigos o familiares.
   - Si el usuario elige compartir, se envía un mensaje con la ETA y la ubicación en un mapa.
   - Si no, el flujo continúa hacia la siguiente decisión.

### Compartir el Pago

7. **Compartir el Pago:**
   - El usuario puede optar por compartir el pago del viaje (`share the payment`) con amigos.
   - Si elige compartir, selecciona a los amigos con los que desea dividir el costo.
   - Finalmente, se aprueba el pago y el usuario es llevado a su destino.

### Conclusión

Este diagrama, aunque sencillo, incluye múltiples puntos de decisión críticos:
- ¿Es posible el viaje?
- ¿El usuario está de acuerdo con los detalles del viaje?
- ¿El usuario desea compartir los detalles del viaje?
- ¿El usuario desea compartir el pago?

Cada una de estas decisiones afecta la lógica y el flujo de la experiencia del usuario. Este tipo de diagrama de actividad es útil para visualizar cómo organizar el código base y asegurarse de que todos los posibles caminos de flujo estén cubiertos. Nos prepara para el siguiente paso, que es construir el diagrama de paquetes.

## Diagrama de Paquetes para la Aplicación Uber

![diagrama de paquetes Uber](./images/diagramas%20ejemplos/uber/diagrama%20de%20paquetes.PNG)

Los diagramas de paquetes son una herramienta esencial en la fase de diseño de un sistema de software. Permiten organizar y visualizar los diferentes módulos y sus interacciones antes de comenzar a escribir el código. Aquí presentamos un ejemplo de diagrama de paquetes para la aplicación Uber, destacando cómo se estructuran y relacionan los diferentes módulos.

### Módulos y Sus Relaciones

#### Módulo de Usuario (`user module`)

El módulo de usuario es central en nuestro diagrama. Necesita interactuar con varios otros módulos para proporcionar la funcionalidad completa de la aplicación Uber.

1. **Autenticación (`authentication`):**
   - Este submódulo se encarga de verificar la identidad de los usuarios. Es crucial para asegurar que solo usuarios autenticados puedan acceder a la aplicación.

2. **Perfil (`profile`):**
   - Mantiene la información del usuario, como su calificación y su historial de viajes. Este submódulo permite a los usuarios ver y gestionar sus datos personales.

3. **Pago (`payment module`):**
   - Este submódulo maneja la información de pago del usuario, permitiendo pagos rápidos y seguros sin tener que ingresar la información de pago en cada viaje.

#### Módulo de Pago (`payment module`)

El módulo de pago es utilizado por el módulo de usuario para gestionar los aspectos financieros del sistema.

1. **Pago Único (`single payment`):**
   - Maneja los pagos individuales de los viajes.

2. **Pago Compartido (`shared payment`):**
   - Permite dividir el costo del viaje entre varios usuarios.

#### Módulo de Viaje (`trip module`)

El módulo de viaje gestiona todos los aspectos relacionados con la planificación y ejecución de los viajes.

1. **Usuario (`user module`):**
   - El módulo de viaje necesita acceder a la información del usuario para organizar y gestionar los viajes. Esta dependencia es necesaria ya que un viaje no puede existir sin un usuario.

2. **Motor de Reservas (`booking engine`):**
   - Este submódulo se encarga de registrar y gestionar las reservas de los viajes, incluyendo los detalles de origen y destino.

3. **Búsqueda (`search`):**
   - Proporciona funcionalidades para buscar destinos, puntos de interés, y direcciones.

4. **Pasarela SMS (`SMS gateway`):**
   - Permite enviar mensajes de texto, por ejemplo, para notificar a los usuarios sobre el estado de su viaje o compartir detalles del viaje.

#### Pasarela SMS (`SMS gateway`)

Aunque la pasarela SMS es un componente importante, se importa como una biblioteca de terceros en lugar de ser desarrollada internamente. Esto se debe a que muchas de sus funcionalidades pueden ser proporcionadas por servicios externos especializados.

### Conclusión

Este diagrama de paquetes proporciona una visión clara de cómo se estructuran e interrelacionan los diferentes módulos de la aplicación Uber. Aunque simplificado, captura los elementos esenciales que un desarrollador necesitaría considerar al diseñar un sistema similar. El enfoque modular permite una mejor organización del código y facilita la colaboración y el mantenimiento del sistema a medida que se expande y evoluciona.

## Diagrama de Casos de Uso para la Aplicación Uber

![diagrama de casos de usos Uber](./images/diagramas%20ejemplos/uber/diagrama%20de%20casos%20de%20usos.PNG)

El diagrama de casos de uso es una herramienta fundamental para entender cómo los diferentes actores interactúan con un sistema y cuáles son las funcionalidades a las que tienen acceso. En este diagrama, mostramos las interacciones entre los pasajeros, conductores y el sistema Uber, destacando los casos de uso principales que soporta la aplicación.

### Actores

#### Pasajero (`Passenger`)

El pasajero es el actor que más interacciones tiene con el sistema. Los casos de uso a los que tiene acceso son:

1. **Buscar Detalles del Viaje (`search for trip details`):**
   - El pasajero puede buscar información sobre posibles viajes, incluyendo rutas y tiempos estimados de llegada.

2. **Solicitar un Viaje (`request a ride`):**
   - El pasajero puede solicitar un viaje a través de la aplicación.

3. **Cancelar un Viaje (`cancel a ride`):**
   - El pasajero puede cancelar un viaje que ya ha sido solicitado.

4. **Reservar un Viaje (`book a ride`):**
   - Una vez que un viaje ha sido solicitado, el sistema reserva el viaje para el pasajero.

5. **Dejar una Propina (`leave a tip`):**
   - Después de completar un viaje, el pasajero tiene la opción de dejar una propina para el conductor.

#### Conductor (`Driver`)

El conductor interactúa con el sistema de manera más limitada en comparación con el pasajero, pero sus interacciones son cruciales para la operación de Uber.

1. **Reservar un Viaje (`book a ride`):**
   - El conductor puede aceptar solicitudes de viaje de los pasajeros.

2. **Calificar el Viaje (`rate the ride`):**
   - Después de completar un viaje, el conductor puede calificar su experiencia con el pasajero.

#### Sistema (`System`)

El sistema Uber gestiona la mayor parte de la lógica y procesamiento necesarios para operar la aplicación. Los casos de uso del sistema son:

1. **Motor de Búsqueda Geoespacial (`Geospatial search engine`):**
   - Procesa las búsquedas de los pasajeros para encontrar rutas y tiempos estimados de llegada.

2. **Motor de Navegación (`Navigation engine`):**
   - Gestiona la navegación durante el viaje, actualizando la ubicación y el estado en tiempo real.

### Interacciones y Dependencias

#### Casos de Uso del Pasajero

- **Buscar Detalles del Viaje**: El sistema utiliza el motor de búsqueda geoespacial para proporcionar detalles de rutas y tiempos estimados.
- **Solicitar un Viaje**: El pasajero interactúa con el motor de navegación para solicitar un viaje.
- **Cancelar un Viaje**: El pasajero puede cancelar un viaje solicitado, pero debe haber un viaje en proceso para que esta acción sea válida.
- **Reservar un Viaje**: Una vez solicitado, el sistema reserva el viaje para el pasajero.
- **Dejar una Propina**: Después de completar el viaje, el pasajero puede dejar una propina, interactuando nuevamente con el sistema.

#### Casos de Uso del Conductor

- **Reservar un Viaje**: El conductor acepta la solicitud de viaje del pasajero, completando la reserva.
- **Calificar el Viaje**: Ambos, el pasajero y el conductor, pueden calificar el viaje una vez completado.

#### Casos de Uso del Sistema

- **Motor de Búsqueda Geoespacial**: Interactúa cuando el pasajero busca detalles del viaje.
- **Motor de Navegación**: Gestiona la navegación durante el viaje y actualiza en tiempo real.

### Conclusión

Este diagrama de casos de uso proporciona una visión clara de cómo los diferentes actores interactúan con el sistema Uber y cuáles son las funcionalidades clave que soporta la aplicación. Aunque simplificado, captura los elementos esenciales para el diseño y desarrollo de un sistema como Uber, asegurando que todas las interacciones y dependencias críticas están bien definidas y comprendidas.

## Diagrama de Implementación para la Aplicación Uber en Android

![diagrama de implementación Uber](./images/diagramas%20ejemplos/uber/diagrama%20de%20implementacion.PNG)

El diagrama de implementación es esencial para visualizar cómo los componentes de software se distribuyen en el hardware y los nodos de ejecución. En este caso, exploramos la implementación de la aplicación Uber en un dispositivo Android, con enfoque en la comunicación entre la aplicación móvil y las APIs que maneja el backend.

### Componentes Principales

#### Dispositivo (`Device`)

Este nodo representa el smartphone Android donde se ejecuta la aplicación de Uber. Es el entorno físico que interactúa con el usuario final.

#### Entorno de Ejecución (`Execution Environment`)

El entorno de ejecución para Android, representado como `Android Execution Environment`, es crucial para ejecutar la aplicación. Para una implementación similar en iOS, se requeriría un entorno de ejecución de iOS debido a las diferencias significativas en los lenguajes de programación (Java para Android y Swift/Objective-C para iOS) y en los procesos de despliegue.

#### Aplicación Uber (`Uber App`)

El nodo `Uber App` representa la aplicación instalada en el dispositivo Android. Esta aplicación depende de varios recursos y componentes:

- **Compilados (`Compiled`)**: Código Java que se compila antes de ejecutarse.
- **Descompilados (`Uncompiled`)**: Datos dinámicos que se manejan en tiempo de ejecución, como JSON recibido de la API.

#### API Connection

La conexión con la API es fundamental para el funcionamiento de la aplicación. Todas las solicitudes de datos, como la búsqueda de ubicaciones o la solicitud de viajes, se realizan a través de esta conexión. El nodo `API` es responsable de manejar estas solicitudes y devolver las respuestas correspondientes.

### Flujo de Implementación

1. **Inicio en el Dispositivo**: La aplicación Uber se ejecuta en un dispositivo Android (`Device`) dentro del entorno de ejecución de Android (`Android Execution Environment`).

2. **Conexión API**: La aplicación interactúa continuamente con la API para recuperar y enviar datos. Esto incluye buscar detalles del viaje, solicitar un viaje y actualizar la ubicación del conductor en tiempo real.

3. **Manejo de Datos**:
   - **Compilados**: El código Java de la aplicación se compila y ejecuta en el dispositivo.
   - **Descompilados**: Datos dinámicos como las respuestas JSON de la API se manejan sin necesidad de compilación.

4. **Especificación de Implementación**: Cada actualización de la aplicación sigue una especificación detallada que incluye los cambios realizados y los números de versión. Este proceso asegura que cada despliegue se realice de manera controlada y eficiente.

### Consideraciones Importantes

- **Diferencias entre Android e iOS**: El proceso de desarrollo y despliegue varía significativamente entre las plataformas Android e iOS. Android utiliza Java y tiene un proceso de despliegue más rápido, mientras que iOS utiliza Swift/Objective-C y tiene un proceso de revisión más riguroso para la App Store.

- **Dependencia de la API**: La funcionalidad de la aplicación Uber depende en gran medida de la conexión con la API. Sin esta conexión, la aplicación no podría ofrecer sus servicios.

### Conclusión

Este diagrama de implementación proporciona una visión clara de cómo se estructura y despliega la aplicación Uber en un entorno Android. Aunque simplificado, captura los componentes y conexiones esenciales que permiten que la aplicación funcione eficientemente. Modelar estos sistemas es fundamental para entender las dependencias y asegurar un despliegue exitoso en el entorno de producción.
