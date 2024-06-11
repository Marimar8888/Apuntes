# Ejempñlo librería de códigos

## Diagrama de paquetes

En esta lección, analizaremos la solución del diagrama de paquetes para el proyecto del analizador telefónico. Ahora bien, esta fue una base de código que le proporcionaron y el analizador telefónico será uno de los diagramas UML más simples que realizará a lo largo de todo este curso.

La razón de esto es que es uno de los componentes de más alto nivel. Normalmente, cuando voy a construir este tipo de diagrama de paquete, es cuando pienso por primera vez en lo que voy a construir.

Ahora, debido a la forma en que está estructurado este curso, quería que desarrollaras una mentalidad y un marco mental para desarrollar y descubrir cómo puedes organizar el código. Estás construyendo este sistema después de mirar el código, que con suerte es un poco más sencillo que hacerlo desde cero, pero en la construcción futura, este tipo de diagrama será lo primero que hagas antes de haber ingresado una sola línea de código en su editor.

Entonces, lo que tenemos aquí es un analizador de teléfonos. Puedes ver que tenemos algunos módulos. Tenemos el módulo de análisis de teléfonos y luego incorporamos el módulo de código de país. No tienes que preocuparte por la versión; eso simplemente dicta la versión de esta biblioteca de códigos en particular.

Es relativamente simple lo que hay dentro de esto. La idea de usar esto como ejemplo no era brindarle un problema demasiado complejo, sino brindarle un estudio de caso realmente interesante que pueda utilizar para proyectos futuros.

![diagrama de paquetes libreria de códigos](./images/diagramas%20ejemplos/libreria_codigos/diagrama_paquetes_libreria_codigos.PNG)

Observe que agregué un marco aquí y usé la versión más corta del paquete, simplemente 'pkg', para que cualquiera que vea esto sepa instantáneamente que es un diagrama de paquete. Dentro de él, solo tenemos dos módulos que, si nos fijamos en el código base, eso es todo lo que tenemos allí también. Tenemos PhoneParser y luego tenemos CountryCodes.

Ahora estoy dibujando esta línea de puntos con una flecha porque un analizador de teléfono tiene una dependencia. Depende del código del país. Esa es una de las partes más importantes de todo este proyecto: poder ver y visualizar dónde están las dependencias en su sistema. Porque si tuviera que construir este tipo de sistema, si comenzara con este diagrama de paquete y luego comenzara a codificar, instantáneamente me diría que este analizador telefónico no puede vivir por sí solo. Tendrá que tener una llamada a este módulo CountryCodes.

CountryCodes puede vivir por sí solo. Esta es simplemente una biblioteca auxiliar. No realiza ninguna llamada a PhoneParser. Esto podría fácilmente eliminarse y aplicarse en una aplicación diferente. Y no necesita PhoneParser. Sin embargo, si observa la biblioteca de códigos de PhoneParser, verá que requiere CountryCodes. Y eso es parte de cómo realiza la parte del código de país de la validación.

La funcionalidad de esta gema Ruby en particular no es la parte más importante del proyecto. La parte más importante es poder ver cómo están organizados. Tenemos dos módulos, por lo que tiene sentido que tengamos dos paquetes y luego podamos agregar algunos elementos para que podamos mostrar que habrá un número, un código de país y algunos de los otros métodos que se encuentran dentro de cada uno de estos elementos. Y también tal vez mostrar con qué tipo de estructura de datos estamos trabajando.

Pero aquí me preocupa mucho menos agregar muchos detalles. Este sigue siendo un nivel muy alto. Si tuviera que construir esto y regresar y comenzar a construir el proyecto después (que es en realidad lo que hice), este sería el mismo diagrama UML que usé antes de escribir toda la biblioteca. Luego puedo venir y tener una muy buena idea de inmediato sobre qué tipo de sistemas tendré que incorporar en cada uno de estos módulos. Y como mencioné, una de las partes más críticas de toda esta parte del proyecto es poder delinear las dependencias, porque la otra parte de esto que es muy importante es: imagina que vamos a hacer algunos cambios significativos más adelante. . Vamos a decir que esta biblioteca de analizadores de teléfonos debe renovarse para agregar 10 funciones nuevas. Si no tengo un diagrama de paquete aquí que muestre las diferentes validaciones, entonces podría estar en una situación en la que podría romper esta conexión por accidente. Entonces podría retirar la llamada a CountryCodes, o podría retirar la biblioteca CountryCode por completo o algo así.

Eso puede parecer inverosímil, y se debe principalmente a que aquí solo tenemos dos módulos, pero imagina una aplicación que tiene 20 módulos diferentes o 100 módulos. Se vuelve sorprendentemente fácil extraer un tipo de módulo, o un tipo de clase, y no darse cuenta de que era una dependencia y que estaba siendo llamado desde otro módulo, por lo que si tiene un diagrama de paquete, podrá hacerlo más adelante. hacer cambios tengo una pequeña lista de verificación y digo que cuando hago cambios en esta biblioteca del analizador telefónico tengo que tener cuidado porque sé que depende de los códigos de país. Para mí, personalmente, uno de los elementos más importantes de un diagrama de paquete es poder visualizar esas dependencias.

### Diagrama de secuencias

Si observa la página de GitHub de este proyecto y baja a uso , verá que tenemos varias llamadas diferentes que podemos realizar. Podemos llamar Parser:parse(). También tenemos condicionales, por lo que si se proporciona un código de país, nos mostrará qué hacer en ese momento y tiene todo tipo de características diferentes que debemos modelar aquí mismo.

No tenía que hacer nada más que mostrar cómo el sistema podía recibir datos y cómo podía enviar mensajes entre métodos y módulos.

![diagrama de secuencia libreria de códigos](./images/diagramas%20ejemplos/libreria_codigos/diagrama_secuencia_libreria_codigos.PNG)

Aquí podrá ver, en primer lugar, quiénes son los participantes. Este es un sistema relativamente pequeño.

Recuerda que lo que presentan estas líneas es el papel que va a jugar ese módulo o proceso en particular dentro del sistema. Entonces, cuando uno de estos elementos se comunica con el otro, tendrá una línea. Y lo que esto normalmente representa es que un módulo o método envía un mensaje a otro módulo o método. Ese es uno de los componentes clave para comprender cómo funciona un diagrama de secuencia: poder comprender cómo funcionará el componente de envío de mensajes de la aplicación.

Empecemos desde el principio. Representamos un punto de partida al decir que esto es cuando un cliente o usuario pasa datos a Parser:parse(). Lo primero que obtiene es algún tipo de datos de cadena. Ahora lo que estamos haciendo es comprobar si puede eliminar todos los símbolos excepto los números. Eliminamos paréntesis, puntos, guiones y nos queda una simple cadena de números. El sistema de análisis tiene la capacidad de limpiar cualquier elemento que no sea número.

Observe cómo Parser:parse()se envía un mensaje a sí mismo. Siempre que tengas un módulo que se comunica consigo mismo, así es como debes visualizarlo.

Después de haber realizado este proceso, envía un mensaje de validación de la longitud del número. Envía la cadena al Parser:digit_length_validator()módulo. Esto simplemente verificará si la cantidad de dígitos es válida. Recibiremos un error por cualquier valor inferior a 10 dígitos.

La forma en que funcionan los mensajes es que tiene una línea continua para cuando envías un mensaje y luego la respuesta está en una línea de puntos. La razón es que necesitamos poder visualizar que estas respuestas pueden ser diferentes.

Una vez que recibimos la respuesta de Parser:digit_length_validator(), enviamos una solicitud a CountryCodes:country_code_validator()para verificar si tiene un código de país válido. Devolverá un error si el código de país no es válido, o dará el visto bueno si es válido.

El último elemento, que va a nuestro punto final, devuelve un número de teléfono analizado.

Ese es un diagrama de secuencia básico en UML.