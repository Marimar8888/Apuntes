# COMERCIO ELECTRÓNICO (Servicio de Pedidos de Café)

## Diagrama de Actividad

Ssolución para el diagrama de actividades del servicio de pedidos de café. Este diagrama es crucial para entender cómo funciona un sistema de comercio electrónico, un proceso común que los desarrolladores deben modelar. Este tipo de diagrama no solo nos ayuda a rastrear a un usuario de una página a otra, sino que también nos permite visualizar qué sucede cuando las cosas no salen bien.

Es fácil imaginar un sistema donde todo funciona a la perfección. Sin embargo, la verdadera complejidad surge cuando modelamos situaciones en las que algo falla. Capturar y modelar estos casos es esencial para construir un sistema robusto.

## Descripción del Proceso

![diagrama de actividad comercio electrónico](./images/diagramas%20ejemplos/comercio%20electronico/Ejemplo_diagrama_actividad.PNG)

### Inicio del Proceso

El usuario tiene varias opciones desde el comienzo:
1. Buscar un producto.
2. Explorar categorías.
3. Ver artículos guardados previamente.

Cada una de estas opciones lleva a una página correspondiente.

### Visualización del Producto

Tras buscar un producto y encontrarlo, el usuario es dirigido a la página "Ver producto". Aquí puede:
1. Ver el producto.
2. Configurar parámetros del producto (cantidad, tamaño, etc.).
3. Agregar el producto al carrito.

### Registro del Usuario

El sistema verifica si el usuario está registrado:
- Si no está registrado, se le dirige a una página de registro.
- Si está registrado, se le lleva directamente a la página del carrito.

### Verificación del Carrito

En la página del carrito, el usuario verifica su contenido:
1. Si todo está correcto, procede al pago.
2. Si necesita realizar cambios, puede actualizar el carrito.

### Proceso de Pago

El usuario selecciona el tipo de pago y sigue el proceso:
1. Si el pago es exitoso, se le redirige a una página de confirmación.
2. Si el pago falla, se le envía a una página de error para intentar de nuevo o actualizar el carrito.

## Conclusión

Este diagrama de actividad proporciona una visualización completa del proceso de pedidos en un sistema de comercio electrónico. Al analizarlo, podemos identificar las páginas necesarias, los elementos de datos y las funcionalidades a incorporar. Esto nos permite traducir las historias de usuario en una base de código sólida y bien estructurada.

## Diagrama de Clases para un Sistema de Comercio Electrónico

Uno de los aspectos más importantes de este proyecto es modelar cómo debería lucir una base de datos para un sistema de comercio electrónico. Se debe comenzar por estructurar un modelo bien estructurado que nos ayudará a entender mejor la aplicación.

## Elementos Clave

### Normalización de Datos

Uno de los conceptos importantes en la creación de bases de datos es la normalización de datos, que consiste en estructurar la base de datos siguiendo las mejores prácticas de la industria. Esto incluye definir las relaciones entre tablas y asegurarse de que los datos estén organizados de manera eficiente.

![diagrama de clases comercio electrónico](./images/diagramas%20ejemplos/comercio%20electronico/Ejemplo_diagrama_clases.PNG)

### Taxonomía

En este sistema, la taxonomía representa una clase abstracta de alto nivel. No creamos instancias de taxonomía directamente, sino que creamos categorías y etiquetas que heredan de esta clase. Esto es fundamental en la programación orientada a objetos, ya que permite definir reglas comunes para las clases derivadas.

### Categorías y Etiquetas

Las categorías y las etiquetas son tipos de taxonomía, pero tienen sus propias características únicas. Por ejemplo:
- **Categorías:** Podrían representar tipos de productos, como "Blends de café de Sudamérica".
- **Etiquetas:** Podrían representar atributos específicos, como "peso mayor a una libra".

Las clases derivadas heredan atributos y métodos de la clase taxonomía, como `ID`, `nombre` y `descripción`. Además, añaden sus propias propiedades específicas.

### Visibilidad de Atributos y Métodos

- **Públicos (+):** Disponibles para cualquier clase.
- **Protegidos (#):** Solo disponibles para la clase misma y sus derivadas.

### Conexión de Productos con Taxonomías

Los productos pueden tener categorías y etiquetas a través de una tabla de unión `InventoryCategory`. Esta tabla maneja relaciones de muchos a muchos entre productos y taxonomías derivadas.

## Usuarios y Direcciones

La clase `User` tiene una relación de muchos a muchos con `Address`, lo que permite a un usuario tener múltiples direcciones y una dirección estar asociada con múltiples usuarios. Esto refleja situaciones del mundo real, como cuando alguien se muda y otra persona ocupa su antigua dirección.

### Clases de Ciudad y País

Estas clases ayudan a validar datos y prevenir errores de entrada del usuario. Mantener ciudades y países en tablas separadas permite un mejor control y validación de los datos.

## Pagos

### Interfaz de Pago

Se crea una interfaz de pago que puede ser implementada por diferentes clases de métodos de pago, como `CreditCard` y `PayPal`. Cada método de pago maneja sus propias conexiones y validaciones.

### Estado del Pago

La clase `PaymentStatus` rastrea el estado de los pagos. Esto es crucial para asegurarse de que no haya errores en transacciones financieras y que el sistema maneje correctamente los pagos rechazados.

## Conclusión

Este diagrama de clases proporciona una estructura detallada para un sistema de comercio electrónico. Al dividir el sistema en clases específicas y manejar las relaciones y visibilidades adecuadas, se facilita la construcción y el mantenimiento del sistema. Esto asegura que los desarrolladores puedan trabajar en diferentes partes del sistema sin preocuparse por causar errores en otras áreas, lo que lleva a un sistema más robusto y fácil de gestionar a largo plazo.
