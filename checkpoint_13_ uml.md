## Elementos del Diagrama de Casos de Uso

### Casos de Uso

- **Descripción:** Representan una funcionalidad o comportamiento específico del sistema desde la perspectiva del usuario. Un caso de uso describe una secuencia de acciones que proporciona un resultado observable y significativo para un actor.
- **Símbolo:** Un óvalo que contiene el nombre del caso de uso.

![Ejemplo diagrama caso uso](/images/uml/uml_diagrama_casos_usos_1.png)

### Actores

- **Descripción:** Representan entidades externas que interactúan con el sistema. Los actores pueden ser usuarios humanos, otros sistemas, o dispositivos.
- **Símbolo:** Un icono de "stickman" o una etiqueta con el nombre del actor.

![Ejemplo diagrama caso uso Actores](/images/uml/uml_diagrama_casos_usos_2.png)

### Subsistemas

- **Descripción:** Representan módulos o componentes del sistema que agrupan varios casos de uso relacionados. Los subsistemas ayudan a organizar y estructurar el diagrama, facilitando la comprensión de grandes sistemas.
- **Símbolo:** Un rectángulo que contiene casos de uso en este caso el dashboard.

![Ejemplo diagrama caso uso Subsistemas](/images/uml/uml_diagrama_casos_usos_3.png)

### Relaciones

- **Descripción:** Indican las interacciones y dependencias entre actores y casos de uso, así como entre diferentes casos de uso. Hay varios tipos de relaciones:
  - **Asociación:** Conecta un actor con un caso de uso, mostrando que el actor participa en el caso de uso.
  - **Símbolo:** Una línea discontinua y abierta.
  
![Ejemplo diagrama caso uso Relaciones](/images/uml/uml_diagrama_casos_usos_4.png)

  - **Inclusión:** Indica que un caso de uso incluye la funcionalidad de otro caso de uso. Es útil para modelar comportamiento común.
  - **Símbolo:** Una línea discontinua.
  
![Ejemplo diagrama caso uso](/images/uml/uml_diagrama_casos_usos_1.png)

Claro, aquí tienes una explicación de los elementos del diagrama de despliegue en formato markdown:

## Elementos del Diagrama de Despliegue

### Nodos (Nodes)

- **Descripción:** Representan los dispositivos físicos o nodos de hardware en los que se ejecutan los componentes de software.
- **Símbolo:** Un cuadrado o un rectángulo con el nombre del nodo en su interior.

![Ejemplo diagrama de despliegue Nodos](/images/uml/uml_diagrama_despliegue_1.png)

### Componentes (Components)

- **Descripción:** Representan los elementos de software que se ejecutan en los nodos.
- **Símbolo:** Un rectángulo con el nombre del componente en su interior.

![Ejemplo diagrama de despliegue Componentes](/images/uml/uml_diagrama_despliegue_2.png)
![Ejemplo diagrama de despliegue Componentes](/images/uml/uml_diagrama_despliegue_2_b.png)

### Artefactos (Artifacts)

- **Descripción:** Representan archivos o datos que son utilizados por los componentes.
- **Símbolo:** Un rectángulo con una esquina doblada y el nombre del artefacto en su interior.

![Ejemplo diagrama de despliegue artefactos](/images/uml/uml_diagrama_despliegue_3.png)

### Enlaces (Links)

- **Descripción:** Representan las conexiones físicas o lógicas entre los nodos.
- **Símbolo:** Una línea que conecta dos nodos y puede tener etiquetas para especificar el tipo de conexión.

![Ejemplo diagrama de despliegue Enlaces](/images/uml/uml_diagrama_despliegue_4.png)

### Dependencias (Dependencies)

- **Descripción:** Representan una relación en la que un cambio en un elemento puede afectar a otro.
- **Símbolo:** Una línea punteada con una flecha que apunta desde el elemento que depende hacia el elemento del que depende.

![Ejemplo diagrama de despliegue dependencias](/images/uml/uml_diagrama_despliegue_5.png)

### Asociaciones (Associations)

- **Descripción:** Representan relaciones estructurales entre nodos y componentes.
- **Símbolo:** Una línea sólida con una flecha que va desde el nodo al componente, o viceversa.

![Ejemplo diagrama de despliegue asociaciones](/images/uml/uml_diagrama_despliegue_6.png)

## Ejemplo completo un reproductor de canciones

![Ejemplo diagrama de despliegue asociaciones](/images/uml/uml_diagrama_despliegue_7.png)

Aquí tenemos un servicio de solicitud de música, este servicio permitirá a los usuarios iniciar sesión y luego crear listas de reproducción basadas en diferentes canciones que quieran elegir. Esta es una aplicación del mundo real. 

Comencemos con el nodo superior izquierdo, tenemos un servicio web normal, esta será la interfaz de usuario para todo el sistema. Podemos ver que necesita estar en algún tipo de dispositivo, ese es el artefacto. Agregué algunos detalles adicionales para que tengamos un sistema operativo Linux y luego tengamos un componente interno que aprovechará angular.

Esto tiene algunas dependencias. Depende de la API en sí, que será el backend que administra todos los datos y la mayor parte de la lógica empresarial, y luego también depende del sistema de autenticación.

Entonces se conectará a dos sistemas diferentes.

Uno gestiona el proceso de inicio de sesión, verificando si un usuario está registrado y si tiene permiso para estar en el sistema.
Uno administra el backend y un par de artefactos más que son protocolos (JSON y API restful)

Con este diagrama cualquier desarrollador podría ver que tienes una interfaz angular que se comunica con una API Rails y un sistema de autenticación. 

Hablando de dependencias. Tenemos una interfaz Angular (hemos cubierto sus dependencias) pero el sistema de autenticación técnicamente no tiene un conjunto de dependencias. La razón de esto es la forma en que funcionan las dependencias en general. La dependencia realmente significa que el sistema no podría funcionar correctamente sin aquello de lo que depende.

La interfaz Angular necesita dependencias, imagínese si fuera a ella y no tuviera datos, no podría iniciar sesión. Al sistema de autenticación, por otro lado, no le importa la interfaz angular, podría intercambiarla con una interfaz de reacción y no le importaría en lo más mínimo. Simplemente acepta solicitudes y da respuestas, no depende de esos otros sistemas.

Un sistema entre nodos es la API de Rails. Técnicamente no le importa ni depende del front-end. Simplemente es una API que recibe solicitudes y luego da respuestas. Sin embargo, depende del sistema de autenticación, la razón es que a veces llegan respuestas y se comunicará con ese sistema de autenticación para garantizar que se trata de una solicitud válida.

Ese es un patrón muy común que verá donde tendrá una interfaz de JavaScript con una parte posterior de Rails, muchas veces entre los dos habrá algún tipo de sistema de autenticación.

Cada uno de estos nodos es muy similar en cuanto a su estructura. Tiene un conjunto de artefactos y componentes en su interior. Puede usar notas y comentarios para brindar más descripciones a los desarrolladores. Noté que esto usará tokens JWT para la comunicación de autenticación.


## Diagramas de Paquetes UML


Los diagramas de paquetes en un nivel alto son simplemente formas de envolver algunos de los otros componentes de otros diagramas y lo que representan.

Entonces, mientras tienes algo así como un diagrama de clases:

- Desea enumerar detalladamente cada uno de los atributos.
- Desea enumerar las diferentes operaciones.
- La conectividad entre ambos.
- Si tienen multiplicidad o no.
- Todo tipo de cosas que son de muy bajo nivel. Hablan directamente de cómo se debe escribir el código en sí.

Los diagramas de paquetes son muy diferentes. En primer lugar, llevarán una serie de elementos abstractos:

- Tipos
- Clasificadores

También puede contener algunos elementos más concretos:

- Clase
- Caso de uso
- Componente
- Paquete
- Dependencia
- Evento

Su diagrama de paquete es algo que le permite tomar sus otros componentes diferentes dentro de su sistema y mostrar cómo se relacionan entre sí y puede mostrar dependencias y algunos elementos diferentes como esos. Ejemplos de uso de un diagrama de paquetes algún tipo de biblioteca de terceros, para mostrar dónde están las dependencias y cómo se relaciona cada uno de los módulos entre sí. 

Esto es diferente a un diagrama de implementación. Esos diagramas comunican y muestran cómo tienes todos estos nodos que están conectados, pero por lo general tienen que lidiar con cómo tienes realmente un sistema implementado, servidores y diferentes cosas por el estilo. Los diagramas de paquetes son muy diferentes, simplemente representan la estructura de su software a un nivel muy alto y muestran cómo se puede componer y también cómo se interconecta cada uno de los elementos.

### Ejemplo de un diagrama de paquetes:


![Ejemplo diagrama de paquetes](/images/uml/uml_diagrama_paquetes_1.png)

Tenemos este sistema de automatización de marketing y, como puede ver, tiene varios paquetes en su interior. Contamos con automatización de marketing que incluye:

- Viajes
- Perspectivas
- Canales
- Controladores de aplicaciones

Y luego los controladores de la aplicación se conectan a algunos otros elementos.

La forma en que esto funciona es que tenemos una aplicación y esa aplicación tiene varios componentes de software diferentes que la componen. Esto no significa que los viajes y los conocimientos sean aplicaciones diferentes; esa sería la forma en que lo configuraríamos si tuviéramos la arquitectura de servicio de Micro y tuviéramos esta configuración completa. La razón para usar diagramas de paquetes principalmente cuando no estamos seguro acerca de la arquitectura; puede haber un momento en el que quieras dividir estos diferentes servicios en sus propias aplicaciones.

Un patrón muy común a seguir es, primero empiezar con una sola aplicación e integrar la mayor cantidad de funcionalidad posible en esa aplicación. Más adelante se puede decidir extraerlo y convertirlo en su propia aplicación y luego poder conectarse a través de API. Lo bueno de esto es que si haces bien tu trabajo cuando construyes un diagrama de paquete, no deberías tener que cambiarlo más adelante. Eso no significa que no lo tengas que hacer, hay muchas veces te puedes dar cuenta de que has perdido un componente clave y luego tendrás que actualizar el diagrama y agregarlo.

Por ahora, lo que pueden pensar es que estos son sus módulos de alto nivel. No tenemos detalles como los nombres de tus clases o diferentes actividades ni nada por el estilo. Este es uno de los diagramas de estructura de más alto nivel que puedes utilizar. Este podría ser uno de los primeros diagramas que dibujes cuando comiences un nuevo proyecto. Aquí mismo puedes decir que necesitas esta aplicación a gran escala y luego intentas cargar los módulos que calcules que se necesitarán. Ahí es donde pondrás cosas como viajes y controladores de aplicaciones y cuando pienses tener una holgura y una integración de HipChat, entonces necesitarás alguna forma de conectarlos. Puedes ver que tenemos un artefacto que crea una conexión entre los controladores de nuestra aplicación con aquellos como la API de Slack o HipChat.

Esto es algo que, como podéis notar, es de un nivel muy alto. Es una excelente manera de poder comenzar a planificar la forma en que funciona su aplicación. Es una herramienta muy recomendada para estudiantes y desarrolladores cuando no están seguros de cuál será la estructura de la aplicación y quieren tener una idea de todos los diversos componentes que la conformarán.

Claro, aquí tienes el texto adaptado a un estilo de libro de texto y en formato Markdown:


## Diagramas de Secuencia en la Programación

Al estudiar libros de programación, especialmente aquellos que abordan la implementación de patrones de diseño y otros temas avanzados, es común encontrar numerosos diagramas de secuencia. Estos diagramas son fundamentales porque permiten a los desarrolladores analizar no solo las actividades, los datos y sus relaciones, sino también visualizar todos los mensajes que se intercambian entre los distintos componentes del sistema.

Una de las prácticas más beneficiosas para los desarrolladores es descomponer un sistema o una característica hasta su nivel más básico, es decir, identificar las entradas y salidas de cada componente específico. Al llegar a este nivel, se facilita la construcción del sistema, ya que se puede diseñar un método con una entrada y una salida simples, lo cual simplifica significativamente el proceso de desarrollo. La complejidad aumenta cuando se manejan múltiples ideas y elementos dispersos dentro de la aplicación.

Los diagramas de secuencia ayudan a profundizar en el sistema, permitiendo seleccionar y aislar todos los elementos, así como entender cómo deben comunicarse entre sí. Los elementos que componen un diagrama de secuencia son:

- Roles de clase o participantes
- Ocurrencias de activación o ejecución
- Mensajes
- Líneas de vida

A continuación, se explican cada uno de estos elementos.

### Roles de Clase o Participantes

Los roles de clase o participantes son elementos fundamentales que representan las diferentes entidades involucradas en la interacción del sistema. En la parte superior del diagrama, se pueden observar pequeños rectángulos de colores etiquetados como "Panel de usuario", "Configuración de comisiones" y "Motor de validación de comisiones". Estos rectángulos de colores son ejemplos de participantes o roles de clase.

Una de las principales ventajas de los diagramas de secuencia es su capacidad para aislar y clarificar todos los distintos sucesos de comunicación que ocurren entre los participantes.

![Ejemplo diagrama de secuencias Roles de clase](/images/uml/uml_diagrama_secuencias_1.png)


### Ocurrencia de Activación o Ejecución

El siguiente elemento fundamental en un diagrama de secuencia es la **Activación** o **Ocurrencia de Ejecución**. Estos elementos, representados como tuberías verticales en el diagrama (uno gris y el otro blanco), indican los sucesos de ejecución. 

Una ocurrencia de ejecución es esencialmente el evento que ocurre cuando un componente del sistema recibe o envía un mensaje. Desde la perspectiva de un desarrollador, estos sucesos indican que debe existir algún método, módulo o componente que gestione esa comunicación.

#### Interpretación para Desarrolladores

Al observar una ocurrencia de ejecución en un diagrama de secuencia, el desarrollador puede deducir que:

- Se requiere un método para manejar el mensaje recibido o enviado.
- Es necesario un módulo o componente capaz de gestionar la interacción.
- El flujo de comunicación debe ser claramente definido y gestionado por el sistema.

Estas ocurrencias son cruciales para comprender el comportamiento y la dinámica de los diferentes componentes dentro del sistema, facilitando la identificación de responsabilidades y la estructura necesaria para manejar la comunicación entre ellos.

Si miras esos elementos que parecen tuberías verticales, uno es gris y el otro conjunto es blanco. Esos son sucesos de ejecución.

![Ejemplo diagrama de secuencias ocurrencia de activación](/images/uml/uml_diagrama_secuencias_2.png)


### Mensajes

En los diagramas de secuencia, los mensajes están representados por líneas con flechas que indican la dirección en la que se envía el mensaje. Estos mensajes también pueden llevar nombres que describen la acción realizada. Por ejemplo:

- Solicitud de argumento
- Solicitud de valor
- Solicitud combinada

En cada uno de estos casos, los mensajes tienen una respuesta asociada.

#### Mensajes como Métodos

Un mensaje en un diagrama de secuencia puede considerarse como un método que tiene la capacidad de recibir una entrada, procesar una solicitud y generar una salida. En algunos casos, el mensaje puede incluso esperar una respuesta.

Por ejemplo, en sistemas asincrónicos como aquellos que utilizan interfaces Angular o React, un mensaje puede ser un método que llama a una API y espera una respuesta. En un escenario del mundo real, esto se podría visualizar de la siguiente manera:

1. El usuario escribe una entrada en un formulario.
2. El sistema envía un mensaje a la API.
3. El sistema espera una respuesta de la API.
4. Si se recibe un valor, se muestra algo en la pantalla.

Este flujo de mensajes es crucial para comprender cómo se comunica un sistema y cómo se gestionan las respuestas en aplicaciones modernas.


### Líneas de Vida

En un diagrama de secuencia, las **líneas de vida** son líneas de puntos que se extienden desde el participante hacia abajo a lo largo del diagrama. Estas líneas facilitan la visualización de cada una de las etapas del proceso y proporcionan un marco de referencia para el envío de mensajes.

#### Función de las Líneas de Vida

Las líneas de vida no realizan ninguna acción específica; su función principal es servir como una guía visual que indica en qué etapa se envía un mensaje a uno de los participantes. Son esenciales para mantener el orden y la claridad en el diagrama, asegurando que los desarrolladores puedan seguir fácilmente el flujo de comunicación entre los componentes.

#### Representación en UML

En la construcción de diagramas UML, las líneas de vida se representan siempre con líneas de puntos. Esta representación ayuda a diferenciarlas de otros elementos, como las ocurrencias de activación, que son eventos más específicos dentro del diagrama. La utilización de líneas de puntos para las líneas de vida evita confusiones y mantiene la distinción clara entre los diferentes tipos de elementos en el diagrama.


![Ejemplo diagrama de secuencias Lineas de vida](/images/uml/uml_diagrama_secuencias_4.png)


### Ejemplo Práctico: Motor de Comisiones

Para ilustrar el uso de diagramas de secuencia, consideremos un motor de comisiones en el que se trabajó. Este motor es parte de un sistema CRM y se visualiza de una manera holística. A continuación, se detallan los participantes clave y el flujo de interacción entre ellos.

![Ejemplo diagrama de secuencias Mensajes](/images/uml/uml_diagrama_secuencias_3.png)

#### Participantes del Diagrama

- **Panel de Usuario**
- **Configuración de Comisiones**
- **Motor de Validación de Comisiones**

#### Abstracción de Funcionalidades

En lugar de centrarse en clases o módulos específicos, se abstraen las funcionalidades completas del sitio. Esto permite enfocarse en cómo debe funcionar el sistema a un nivel general antes de profundizar en los detalles.

#### Flujo de Interacción

1. **Panel de Usuario**: El primer paso es seleccionar o crear un usuario. Esta acción es autorreferencial, lo que significa que el mensaje se envía internamente dentro del panel de usuario. El sistema verifica si el usuario tiene permisos de configuración para continuar.

2. **Verificación de Permisos**: Nuevamente, esta es una acción autorreferencial. El panel de usuario se comunica consigo mismo para procesar esta solicitud, y podría involucrar varios módulos dentro de una aplicación Rails (modelo, vista y controlador).

3. **Interacción con el Sistema Externo**: La primera vez que el panel de usuario se comunica con un sistema externo es cuando envía el mensaje para procesar el formulario de configuración de comisiones. Este formulario puede estar anidado dentro del panel de usuario o ser un panel completo dedicado.

#### Uso de Marcos para Bucles

Se utiliza un marco para mostrar que el proceso de enviar mensajes puede repetirse varias veces. Esto indica que el sistema debe estar preparado para manejar múltiples versiones de los argumentos, valores y combinaciones, lo que sugiere la necesidad de un formulario dinámico.

#### Motor de Validación de Comisiones

Los mensajes enviados al motor de validación de comisiones aseguran que se puedan establecer las reglas de comisión. Este motor verifica si la empresa permite ciertas configuraciones y responde en consecuencia. Si en algún punto se encuentra una configuración no permitida, se devuelve una respuesta negativa, proporcionando retroalimentación al usuario.


#### Guardar Configuraciones

Una vez que se completa el ciclo y el usuario deja de agregar configuraciones, se presiona el botón de guardar. El último mensaje enviado guarda todas las configuraciones y devuelve la información al panel de usuario.

## Diagramas de Máquinas de Estado en Programación

Los diagramas de máquinas de estado son una herramienta poderosa y constituyen uno de los conceptos fundamentales que han contribuido significativamente al desarrollo actual de la informática y la tecnología. Vale la pena dedicar tiempo a investigar sobre ellos. Aunque existen similitudes, los diagramas de máquinas de estado fueron creados con la idea de las máquinas de estado de alto nivel en mente. Es importante hacer esa distinción y también recomendar aprender qué son las máquinas de estado desde una perspectiva pura de ciencias de la computación.

### Objetivo de Construir una Máquina de Estado

Cuando construimos una máquina de estado, nuestro objetivo es visualizar cómo se verá nuestra aplicación (o una función de nuestra aplicación) y cómo puede pasar de un estado a otro. Esto puede ser desde un nivel muy bajo, como representar cómo se ve un botón o qué acciones se pueden realizar en un botón según cómo esté configurado el rol del usuario. También puede ser un concepto de alto nivel, similar a un diagrama de actividad, donde se puede ver cómo un usuario puede navegar de una página a otra.

### Elementos de las Máquinas de Estado

En esta guía, hablaremos de cada uno de los elementos que componen las máquinas de estado. Por lo tanto, vamos a hablar de:

- Puntos de entrada
- Decisiones
- Restricciones
- Estados
- Transiciones

#### Puntos de Entrada

El punto de entrada es el inicio de la máquina de estado. En una aplicación web o móvil, puede ser cuando el usuario llega a la página o ve la pantalla. En una API, puede ser cuando se recibe una solicitud y se pasa la información. Se representa con un punto negro relleno.

![Ejemplo diagrama maquina de estado punto de entrada](/images/uml/uml_diagrama_estado_maquina_1.png)

#### Decisiones

Las decisiones son donde se realizan preguntas. Por ejemplo, podemos tener una decisión sobre si un visitante ha enviado un formulario. Si lo ha enviado, su estado cambia; si no, su estado permanece igual. Se representan con un cuadrado de 45 grados.

![Ejemplo diagrama maquina de estado decisiones](/images/uml/uml_diagrama_estado_maquina_2.png)

#### Restricciones

Las restricciones determinan el flujo basándose en condiciones. Por ejemplo, en el caso del formulario, la restricción puede ser "Sí" o "No", dependiendo de si el formulario se envió. También se conocen como "guardias".

![Ejemplo diagrama maquina de estado restricciones](/images/uml/uml_diagrama_estado_maquina_3.png)

#### Estados

Los estados son una parte fundamental del diagrama, representados por un rectángulo redondeado. En nuestro ejemplo, tenemos dos estados: "Visitante" y "Convertido".

![Ejemplo diagrama maquina de estado Estados](/images/uml/uml_diagrama_estado_maquina_4.png)

#### Transiciones

Las transiciones muestran cómo se pasa de un estado a otro. Se representan con una línea y una flecha indicando la dirección de la transición.

![Ejemplo diagrama maquina de estado Transiciones](/images/uml/uml_diagrama_estado_maquina_5.png)

Estos son los elementos clave que componen un diagrama de máquina de estado. En la próxima guía, veremos cómo podemos construir uno.

Aquí tienes el texto traducido al español y formateado en markdown:

### Ejemplo Sistema de Automatización de Marketing


Este será el sistema de automatización de marketing, la parte que gestiona la conexión con el CRM. Este es relativamente sencillo, mi preferencia personal es mantener mis diagramas de máquinas de estado lo más simples posible. Cuando construyo uno de estos diagramas, intento tomar un comportamiento complejo y visualizarlo de manera que pueda ver cada uno de los estados en los que un usuario o cliente (o cualquier tipo de componente que intento rastrear) cambia y ver qué podría provocar ese cambio.

![Ejemplo diagrama maquina de estado ejemplo](/images/uml/uml_diagrama_estado_maquina_6.png)

#### Inicio

Comenzando desde arriba, nuestro punto de partida es un usuario (el primer estado de ese usuario es ser un visitante). Primero, verifico si han enviado el formulario, si no lo han hecho, su estado no ha cambiado y siguen siendo visitantes. Si han enviado el formulario (para este caso hice un ejemplo sencillo, asumimos que un formulario significa que se han registrado y están avanzando en el proceso). Podemos tener diferentes ramas, basadas en la decisión, podrían no ser solo un visitante o convertido, podrían ser un visitante convertido y dependiendo de su decisión, podrían entrar en una lista de No contactar. Para el ejemplo, vamos a decir que tenemos una opción donde su primer estado es un visitante, luego envían un formulario y su estado es convertido.

#### Verificación de Calificación para el CRM

Ahora hacemos otra pregunta y vemos si califican para las condiciones del CRM. Si no lo hacen, pueden estar convertidos pero no son un lead. Esto significa que permanecerían en ese estado convertido y tendríamos una manera de rastrear eso.

Parte de la razón por la que me gusta este ejemplo es porque es similar a cómo funcionaba el diagrama de secuencia. Nota cómo este tipo de diagrama no da instrucciones específicas sobre cómo construir el sistema, no da instrucciones sobre cuál debe ser el nombre de la clase o qué lenguaje de programación debe usarse ni nada a nivel bajo como eso.

#### Uso de Diagramas de Máquinas de Estado

Me gusta usar diagramas de máquinas de estado para construir una lista de requisitos para un cliente o para la empresa con la que estoy trabajando. Como puedes ver, este es un diagrama que no necesita ser comprendido por un ingeniero para entender cómo funciona. Muchas veces he construido un diagrama de máquina de estado para un cliente freelance que no podía dar una buena idea del comportamiento del proyecto que querían. Construí este tipo de diagrama para ellos y les dije: "Ok, he escuchado lo que has dicho y esto es lo que creo que estabas tratando de describir. Estos son todos los diferentes estados potenciales en los que podría estar un usuario y estas son las preguntas más importantes que estamos haciendo o verificando en los datos."

El primer ítem fue si enviaron un formulario. Eso es algo que estamos verificando contra la acción y el comportamiento del usuario. El siguiente pregunta si califican para las condiciones del CRM, lo cual no es una pregunta que le hacemos al usuario, sino una pregunta que hacemos a los datos.

#### Proceso de Calificación

Digamos que el visitante llega al sitio, llena ese formulario y luego el siguiente paso es que están convertidos. Luego ejecutamos una verificación contra los requisitos del sistema para ver si califican. Aquí es donde las cosas son muy diferentes de un diagrama de actividad, puede parecer similar donde tenemos un usuario que es un visitante, luego va a otra página y llena un formulario y luego realiza estas otras acciones. Sin embargo, este no es el caso aquí. En este caso, solo nos importa el estado del usuario.

## Cambios de Estado

Comenzaron como un visitante, luego se convirtieron. Eso no significa que fueron a una página diferente ni nada por el estilo, todo esto podría suceder mientras están llenando el formulario. Podría ser algo tan sencillo como decir que enviaron el formulario y durante ese proceso se verificó y podría haber cambiado su estado a convertido, pero no los ha convertido en un lead. Esto es algo donde la calificación para las condiciones del CRM probablemente sea solo una consulta a la base de datos o una API.

#### Verificación de Oportunidades

Avanzando, podemos ver que tenemos un lead y otra decisión, verificamos si califican para una condición de oportunidad del CRM.

Tenemos un par de validaciones, primero vemos que cumplen con el primer conjunto de condiciones (esto podría ser tan sencillo como verificar si viven en EE.UU. cuando eres una empresa estadounidense que solo hace negocios a nivel nacional) y una vez que llega a esta otra etapa, no queremos realizar una gran cantidad de consultas hasta que hayan pasado esa etapa.

Imagina que esto es para una compañía hipotecaria. Si dices que estás interesado en una hipoteca y llenas un formulario en línea, pasarás de ser un visitante a convertido. Luego serás un lead, sin embargo, aún no has ingresado ninguna información que la compañía hipotecaria necesite saber para poder darte un préstamo. Puede que hayas ingresado tu código postal o algo y saben que potencialmente pueden hacer negocios contigo, pero no saben si te han convertido en alguien hasta el punto donde tienes una puntuación de crédito que coincida y todos esos otros criterios. Tu estado ha cambiado, eres un visitante convertido y luego un lead. Todos estos ítems probablemente sean solo una columna en la base de datos como un enum o algo que se ha actualizado a medida que se han realizado las validaciones.

### Ejemplo de la Industria Hipotecaria

Usando el mismo ejemplo de la industria hipotecaria, ahora se verifica si eres una oportunidad calificada, pueden pedir al usuario su número de seguro social, dirección e ingresos y esos tipos de valores y verificar si eres una oportunidad completa.

Desde allí tu estado ha cambiado, luego el sistema continúa hasta si el vendedor cerró con ese individuo o si decidieron no seguir adelante con ellos. Este es un proceso muy estándar en muchos tipos de sistemas CRM donde necesitas gestionar estados.

### Uso en Motores de Aprobación

Otro gran ejemplo de cuándo usar un diagrama de máquina de estado es construir un motor de aprobación. Esto es algo que he tenido que construir muchas veces, algo para verificar si un objeto en una base de datos está aprobado o no.

Construí un sistema para una empresa donde querían ver si un determinado proveedor podía ser aprobado, tenían cientos de ubicaciones diferentes y la ubicación estaba a cargo de enviar una solicitud de aprobación de proveedor. Ese fue el formulario inicial que se envió, estaba en estado pendiente. Luego pasaba por una serie de diferentes verificaciones.

Algunas de ellas eran automáticas, verificaban si estaba por debajo de un cierto monto umbral. Si era así, se aprobaba automáticamente, si era por un monto mayor, pasaba por otros estados.

Cada vez que tenía que cambiar el estado, tenía que reflejar eso en la base de datos. Hacía algo como preguntar a un supervisor "uno" y si se aprobaba, pasaba al siguiente y se actualizaba para la aprobación número dos y ese tipo de cosas. Cada situación va a ser un poco diferente, pero ese es otro ejemplo de cuándo construir un diagrama de máquina de estado es una excelente manera de visualizar el flujo de datos en el sentido de cómo tus datos van a cambiar a medida que ocurren diferentes eventos.

