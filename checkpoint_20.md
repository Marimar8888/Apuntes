# SQL

## Implementaciones Populares de SQL

Resumen de las cinco implementaciones más populares de SQL:

1. **MySQL**: 
   - **Descripción**: Base de datos ampliamente utilizada, de código abierto y gratuita. Evoluciona continuamente y es bastante estable.
   - **Ventajas**: Código abierto, sin costos de licencia, soporte comunitario activo.
   - **Desventajas**: Puede no ser aceptada en algunos entornos empresariales.

2. **Postgres**:
   - **Descripción**: Más reciente que MySQL, también de código abierto. Muy valorada en la comunidad Ruby on Rails y para consultas basadas en la ubicación.
   - **Ventajas**: Soporte para extensiones avanzadas, buen desempeño con datos geoespaciales.
   - **Desventajas**: Menos popular en entornos empresariales tradicionales.

3. **Oracle SQL**:
   - **Descripción**: Solución empresarial robusta pero costosa, con excelente soporte y rendimiento.
   - **Ventajas**: Rápida, actualizaciones constantes, buen soporte.
   - **Desventajas**: Alto costo, no es de código abierto.

4. **MS SQL (Microsoft SQL Server)**:
   - **Descripción**: Versión de SQL de Microsoft, ideal para entornos .NET. Ofrece buen soporte, pero requiere licencia.
   - **Ventajas**: Excelente soporte, integración con .NET.
   - **Desventajas**: Costoso, menos adecuado para proyectos pequeños o personales.

5. **MariaDB**:
   - **Descripción**: Derivada de MySQL, con crecimiento rápido en popularidad y uso en software de código abierto.
   - **Ventajas**: Más reciente, sin costos de licencia.
   - **Desventajas**: Menor soporte comunitario en comparación con MySQL, Postgres, y otras opciones más establecidas.

**Nota Final**: SQL es un lenguaje estandarizado, por lo que el código escrito para una implementación generalmente funcionará en otras. Las principales diferencias aparecen en funciones avanzadas y casos extremos. Este curso se centrará en MySQL, pero el conocimiento de SQL es transferible entre diferentes sistemas.

## Trabajar con un Mac

### Inslación de Homebrew

Para instalar Homebrew en macOS, abre la Terminal y ejecuta:

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Luego, instala MySQL usando Homebrew:

```bash
brew install mysql
```

Instala los servicios de Homebrew:

```bash
brew tap homebrew/services
```

Carga e inicia el servicio MySQL:

```bash
brew services start mysql
```

**Resultado esperado**: MySQL debería iniciar correctamente (etiqueta: `homebrew.mxcl.mysql`).

Para establecer la contraseña de root, ejecuta:

```bash
mysqladmin -u root password 'tucontraseña'
```

###  Instalación de MySQL en macOS

1. **Instalar Homebrew**: Si aún no tienes Homebrew, visita [brew.sh](https://brew.sh) y sigue las instrucciones para instalarlo. Pega la línea de código proporcionada en tu Terminal.

2. **Abrir la Terminal**: Si nunca has usado la Terminal, presiona `Cmd + Espacio`, busca "Terminal" y presiona Enter.

3. **Actualizar Homebrew**: Si ya tienes Homebrew instalado, ejecuta `brew update` para actualizarlo a la última versión.

4. **Instalar MySQL**: Usa el comando `brew install mysql` para instalar MySQL. Si ya está instalado, podrás continuar con el curso sin problemas.

5. **Verificar y Iniciar MySQL**: Usa `sudo mysql.server start` para iniciar el servidor MySQL. Si ves mensajes de inicio exitoso, MySQL está funcionando. Para detener el servidor, usa `sudo mysql.server stop`.

6. **Problemas de Conexión**: Si encuentras problemas de conexión, asegúrate de que el servidor esté en funcionamiento con `sudo mysql.server start`.

## Uso de MySQL Workbench en macOS

### Instalación y Configuración

1. **Instalar Homebrew**: Si aún no tienes Homebrew.
2. **Instalar MySQL**: Luego, instala MySQL.
 3. **Iniciar MySQL**: Carga e inicia el servicio MySQL:
   ```bash
   brew services start mysql
   ```
4. **Establecer Contraseña de Root**: Configura la contraseña de root:
   ```bash
   mysqladmin -u root password 'tucontraseña'
   ```

### Problemas con MySQL Workbench

- **Versión Recomendada**: MySQL Workbench 8.0.32 tiene problemas en macOS (a fecha de 14/12/22). Se recomienda usar la versión 8.0.33 (ARM para chip Apple, x86 para Intel) o seleccionar Archivos > Versión del producto 8.0.31.

### Descargar e Instalar MySQL Workbench

1. **Descargar MySQL Workbench**: Visita [dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/) y selecciona tu sistema operativo. Descarga e instala el archivo (aproximadamente 100 MB).

2. **Abrir MySQL Workbench**: Usa Spotlight para buscar y abrir MySQL Workbench.

3. **Configurar Conexión**:
   - **Verificar MySQL**: Asegúrate de que MySQL esté en funcionamiento. Si no está iniciado, usa el comando:
     ```bash
     mysql.server start
     ```
   - **Agregar Nueva Conexión**: En MySQL Workbench, haz clic en el signo más junto a "Conexiones MySQL" para configurar una nueva conexión. Asigna un nombre y usa `127.0.0.1` como el nombre de host para la conexión local. Haz clic en "Probar conexión" para verificar que todo esté configurado correctamente.

4. **Configuración Adicional**:
   - **Estado del Servidor**: Puedes ver el estado del servidor en MySQL Workbench. Si ves un indicador de error o que el servicio no está en ejecución, inicia el servidor MySQL desde la línea de comandos.
   - **Detalles de Conexión**: Verifica la configuración, como el host, el puerto, y otros parámetros. Estos detalles son cruciales para conectar a servicios externos y para una correcta administración de datos.

## Preparar Windows para Usar MySQL y MySQL Workbench

Para configurar un entorno en Windows para usar MySQL y MySQL Workbench, sigue estos pasos:

### 1. Visualizar el video

[Video explicativo paso a paso](https://www.youtube.com/watch?v=r6NOwBv5r-Y)


## Creación y Configuración de un Esquema de Base de Datos en MySQL Workbench

Ahora que hemos instalado MySQL y configurado MySQL Workbench, podemos comenzar a preparar nuestro entorno para el curso. Aquí te explico cómo crear un esquema de base de datos en MySQL Workbench:

1. **Abrir MySQL Workbench**:
   - Abre MySQL Workbench y haz doble clic en la conexión SQL que creaste anteriormente para acceder a la base de datos.

2. **Crear un Nuevo Esquema**:
   - En el panel izquierdo, localiza la sección de esquemas. Para crear un nuevo esquema, haz clic en el botón "Crear un nuevo esquema en el servidor conectado" en la esquina superior izquierda de MySQL Workbench.
   - Se abrirá un cuadro de diálogo. Introduce el nombre del esquema, por ejemplo, `devcamp_sql_course_schema`. Puedes usar cualquier nombre que desees.

3. **Aplicar el Esquema**:
   - Haz clic en "Aplicar". Aparecerá un cuadro que muestra el script SQL que se aplicará. En este caso, el script será algo como `CREATE SCHEMA devcamp_sql_course_schema;`.
   - Presiona "Aplicar" nuevamente. Verás un mensaje indicando que la declaración SQL se aplicó correctamente.

4. **Visualizar el Esquema**:
   - Una vez creado, el esquema aparecerá en el panel izquierdo bajo "Esquemas". Si el nombre del esquema es largo, puedes ajustar el tamaño de la barra para verlo completo.

5. **Explorar el Esquema**:
   - Al hacer clic en el esquema `studyOnline`, podrás ver las secciones de tablas, vistas, procedimientos almacenados y funciones.
   - Inicialmente, no habrá tablas ya que no hemos creado ninguna. Para ver las tablas en otros esquemas, como "sample_two", expande las secciones correspondientes para ver las tablas y su contenido, incluyendo columnas, índices y claves externas.

### Resumen: Creación de una Tabla en MySQL

**Objetivo**: Crear una tabla llamada `usuarios` en un esquema de base de datos.

1. **Acceso y Creación de la Tabla**:
   - Asegúrate de estar trabajando en el esquema deseado.
   - Puedes crear una nueva tabla haciendo clic en "crear una nueva tabla en el esquema activo" desde la esquina izquierda, o haciendo clic derecho en "Tablas" y seleccionando "crear tabla".

2. **Configuración de la Tabla**:
   - **Nombre de la Tabla**: Define el nombre de la tabla como `usuarios`.
   - **Columnas**: Añade las columnas necesarias.
     - **users_id**: 
       - Tipo de dato: `INT` (entero).
       - Configuración: Clave principal, único, no nulo, con incremento automático (AI).
     - **users_name**:
       - Tipo de dato: `VARCHAR` (cadena de caracteres).
       - Longitud sugerida: 100 caracteres.
       - Configuración: No clave principal, puede ser nulo, no único.
     - **users_email**:
       - Tipo de dato: `VARCHAR`.
       - Longitud sugerida: 80 caracteres.
       - Configuración: No clave principal, no nulo, único.
    - **users_password**:
       - Tipo de dato: `VARCHAR`.
       - Longitud sugerida:  caracteres.
       - Configuración: No clave principal, no nulo, único.

3. **Consideraciones Importantes**:
   - **Clave Principal**: `users_id` se utiliza para identificar de manera única cada registro. Es preferible usar un tipo de dato entero para una mejor eficiencia y facilidad de incremento.
   - **Tipos de Datos**: Selecciona el tipo adecuado para cada columna para evitar errores en el almacenamiento y consulta de datos. Por ejemplo, usar `VARCHAR` para cadenas y `INT` para números.
   - **Índices**: Se crean automáticamente para la clave principal (`users_id`). Los índices ayudan a mejorar la velocidad de las consultas. Los índices para otras columnas se pueden agregar más adelante si es necesario.

4. **Aplicación de Cambios**:
   - Una vez configurada la tabla, haz clic en "Aplicar" para ejecutar el script de creación de la tabla.
   - Revisa la ejecución con el indicador verde que confirma que la acción fue exitosa.
   - La tabla creada aparecerá en la lista de tablas dentro del esquema seleccionado.

5. **Verificación**:
   - Accede a la tabla `usuarios` para verificar que se hayan creado las columnas y configuraciones correctamente.
   - Puedes explorar las columnas, índices y otras propiedades de la tabla a través del panel de navegación.

### Resumen: Creación de una Tabla de Direcciones y Claves Externas en MySQL

**Objetivo**: Crear una tabla de direcciones que esté relacionada con la tabla de usuarios mediante claves externas.

1. **Creación de la Tabla de Direcciones**:
   - **Acceso**: En la lista de esquemas, haz clic derecho en "Tablas" y selecciona "Crear tabla".
   - **Nombre de la Tabla**: Llámala `direcciones`.

2. **Definición de Columnas**:
   - **addresses_id**:
     - Tipo: `INT`
     - Configuración: Clave principal, único, no nulo, con incremento automático (AI).
   - **addresses_street_name**:
     - Tipo: `VARCHAR(45)`
     - Configuración: No nulo. Es el primer campo de dirección.
   - **addresses_street_rest**:
     - Tipo: `VARCHAR(45)`
     - Configuración: Opcional (puede ser nulo). Para información adicional de dirección como apartamento o unidad.
   - **addresses_city**:
     - Tipo: `VARCHAR(45)`
     - Configuración: No nulo. Es obligatorio.
   - **addresses_providence**:
     - Tipo: `VARCHAR(45)`
     - Configuración: No nulo. Se limita a dos caracteres (abreviatura del estado).
   - **addresses_postal_code**:
     - Tipo: `VARCHAR(6)`
     - Configuración: No nulo. Permite flexibilidad para códigos postales con guiones o extensiones.
   - **addresses_users_id**:
     - Tipo: `INT`
     - Configuración: No clave principal, no único, no nula.. Conecta con la tabla de usuarios.

3. **Definición de la Clave Externa**:
   - Ve a la pestaña de **Claves Externas** en el cuadro de diálogo de creación de la tabla.
   - Selecciona `addresses_users_id` como la columna de la clave externa.
   - Asocia `addresses_users_id` con la columna `user_id` de la tabla `usuarios`.
   - Configura la opción **En Cascada** para la eliminación. Esto asegura que, si se elimina un usuario, todas las direcciones asociadas a ese usuario también se eliminarán automáticamente.

4. **Aplicación de Cambios**:
   - Revisa el script generado para la creación de la tabla, que incluirá la definición de columnas, la clave principal, y las configuraciones de la clave externa.
   - Haz clic en "Aplicar" para ejecutar el script y crear la tabla de direcciones.
   - Verifica que se haya creado correctamente. Ahora deberías tener dos tablas en tu esquema: `usuarios` y `direcciones`.

### Edición de una Tabla en MySQL para Corregir el Atributo `NOT NULL`

**Contexto**: En una guía anterior, se creó una tabla de direcciones con una columna `addresses_users_id` que fue definida como **nullable** (es decir, se permitió que fuera `NULL`). Esto no es ideal, ya que cada dirección debería estar obligatoriamente asociada a un usuario. Vamos a corregir este problema editando la tabla existente.

**Pasos para Editar la Tabla**:

1. **Abrir la Tabla en MySQL Workbench**:
   - Localiza la tabla `direcciones` en la lista de esquemas.
   - Haz clic en el pequeño icono de llave inglesa al pasar el cursor sobre la tabla para abrir el editor de la tabla en una nueva pestaña.

2. **Modificar la Columna**:
   - En el editor de la tabla, localiza la columna `addresses_users_id`.
   - Marca la casilla "No nulo" para asegurarte de que la columna no acepte valores `NULL`. Esto significa que cada dirección debe estar asociada a un usuario.

3. **Aplicar los Cambios**:
   - Haz clic en "Aplicar" para ejecutar los cambios. Esto actualizará la estructura de la tabla y modificará la columna para que sea obligatoria.
   - Ten en cuenta que se eliminará la clave externa en el proceso. Aunque esto es importante, se vuelve a agregar después de aplicar los cambios.

4. **Consideraciones para Grandes Bases de Datos**:
   - Si trabajas con una base de datos grande con muchos registros (por ejemplo, un millón de direcciones), modificar la estructura de la tabla puede ser más complejo y potencialmente disruptivo.
   - En tales casos, es recomendable usar técnicas avanzadas de administración de bases de datos o hacer cambios fuera de línea para evitar problemas de rendimiento.

5. **Verificación y Cierre**:
   - Después de aplicar los cambios, asegúrate de que la tabla ahora se configura correctamente.
   - Verifica que la columna `addresses_users_id` esté ahora marcada como "No nulo" y que la integridad de los datos esté asegurada.


### Resumen: Creación y Edición de la Tabla de Guías en MySQL

**Objetivo**: Agregar una nueva tabla llamada "guías" a nuestro esquema de base de datos y configurar una clave externa para relacionarla con la tabla de usuarios. Además, veremos cómo editar la tabla para añadir nuevas columnas.

**Pasos para Crear la Tabla de Guías**:

1. **Crear la Tabla**:
   - Haz clic derecho en la lista de tablas y selecciona "Crear tabla".
   - Nombra la nueva tabla "guías".

2. **Definir las Columnas**:
   - **`guides_id`**: 
     - Tipo: Entero (INT)
     - Propiedades: Clave principal, única, de incremento automático, no nula.
   - **`guides_revenue`**:
     - Tipo: Decimal
     - Propiedades: No nula. Se usa Decimal en lugar de VARCHAR para permitir operaciones matemáticas como sumas y promedios.
   - **`guides_users_id`**:
     - Tipo: Entero (INT)
     - Propiedades: No nula. Se utilizará para la clave externa.

3. **Configurar la Clave Externa**:
   - En la pestaña de claves externas, selecciona `guides_users_id` como la clave externa.
   - Configura la referencia para que apunte a `users_id` en la tabla de usuarios.
   - Establece la acción de eliminación en "Cascada" (cualquier guía asociada a un usuario será eliminada si se elimina el usuario). Alternativamente, puedes configurar la opción para establecer el valor en `NULL`, aunque esto podría complicar la gestión de datos en la aplicación.

4. **Aplicar Cambios**:
   - Revisa el script generado para asegurarte de que todo esté configurado correctamente.
   - Haz clic en "Aplicar" para ejecutar el script y crear la tabla.

**Añadir una Columna Nueva**:

1. **Editar la Tabla de Guías**:
   - Abre la tabla de guías en MySQL Workbench.
   - Agrega una nueva columna llamada `guides_title`.

2. **Configurar la Nueva Columna**:
   - **`guides_title`**:
     - Tipo: VARCHAR
     - Longitud: 150 caracteres.
     - Propiedades: No nula.

3. **Aplicar Cambios**:
   - Haz clic en "Aplicar" para añadir la columna a la tabla.
   - Verifica que la nueva columna `guides_title` se ha añadido correctamente a la tabla.

### Análisis Profundo de Tipos de Datos en SQL

**Objetivo**: Explorar los principales tipos de datos en SQL, entender cuándo y cómo usarlos, y conocer sus ventajas y desventajas.

### Tipos de Datos en SQL

1. **Caracteres (CHAR)**:
   - **Descripción**: Almacena cadenas de longitud fija. Se reserva el espacio completo definido, independientemente de la longitud real de la cadena.
   - **Uso adecuado**: Para datos con longitud fija, como números de teléfono, códigos de país, o números de seguridad social.
   - **Uso inadecuado**: No es adecuado para cadenas con longitud variable, como nombres o descripciones, ya que puede desperdiciar espacio de almacenamiento.
   - **Ejemplo**: `CHAR(10)` para almacenar un número de teléfono que siempre tendrá 10 dígitos.

2. **Caracteres Variables (VARCHAR)**:
   - **Descripción**: Almacena cadenas de longitud variable. Solo utiliza el espacio necesario para los datos almacenados más un pequeño espacio adicional para la longitud de la cadena.
   - **Uso adecuado**: Para datos de longitud variable como nombres, direcciones, o descripciones.
   - **Uso inadecuado**: Para datos con longitud fija o que se usan en cálculos donde la longitud es predecible y constante.
   - **Ejemplo**: `VARCHAR(255)` para almacenar nombres de personas o direcciones.

3. **Booleanos (BOOLEAN)**:
   - **Descripción**: Almacena valores `TRUE` o `FALSE`.
   - **Uso adecuado**: Para campos que solo pueden tener dos estados, como una bandera de estado (activo/inactivo) o una respuesta binaria.
   - **Uso inadecuado**: No se deben usar valores numéricos como `0` o `1`, o cadenas como "sí" o "no".
   - **Ejemplo**: `BOOLEAN` para una columna que indica si una publicación está activa.

4. **Enteros Pequeños (SMALLINT)**:
   - **Descripción**: Almacena enteros en el rango de -32,768 a 32,767.
   - **Uso adecuado**: Para números enteros que no superan este rango, como edades o conteos pequeños.
   - **Uso inadecuado**: Para valores que superan el rango de `SMALLINT`.
   - **Ejemplo**: `SMALLINT` para un campo de edad en una aplicación.

5. **Enteros (INT)**:
   - **Descripción**: Almacena enteros en el rango de -2,147,483,648 a 2,147,483,647.
   - **Uso adecuado**: Para números enteros más grandes, como identificadores de registros o conteos más grandes.
   - **Uso inadecuado**: Para números decimales o valores que requieren precisión exacta.
   - **Ejemplo**: `INT` para un campo de ID de usuario o cantidad de ventas.

6. **Decimales (DECIMAL)**:
   - **Descripción**: Almacena números decimales con precisión exacta. Define la precisión total y la escala (dígitos a la derecha del punto decimal).
   - **Uso adecuado**: Para datos financieros y situaciones que requieren precisión exacta en los cálculos, como precios o cantidades monetarias.
   - **Uso inadecuado**: Para cálculos que no requieren precisión exacta.
   - **Ejemplo**: `DECIMAL(10, 2)` para almacenar precios como 12345.67.

7. **Flotantes (FLOAT)**:
   - **Descripción**: Almacena números en formato de punto flotante, permitiendo representar valores muy grandes o muy pequeños con una precisión aproximada.
   - **Uso adecuado**: Para cálculos científicos o ingenieriles que no requieren una precisión exacta, donde la variación pequeña es aceptable.
   - **Uso inadecuado**: Para datos financieros o cualquier situación donde se necesita precisión exacta.
   - **Ejemplo**: `FLOAT` para almacenar medidas científicas como 0.000123.

8. **Fecha y Hora (DATE, TIME, DATETIME)**:
   - **Descripción**: Almacena valores de fecha y hora. 
     - **DATE**: Solo fecha (YYYY-MM-DD).
     - **TIME**: Solo hora (HH:MM:SS).
     - **DATETIME**: Fecha y hora combinadas (YYYY-MM-DD HH:MM:SS).
   - **Uso adecuado**: Para registrar eventos, transacciones o cualquier dato relacionado con tiempo.
   - **Uso inadecuado**: Almacenar fechas y horas como cadenas de texto.
   - **Ejemplo**: `DATETIME` para registrar la fecha y hora en que se realiza una transacción.

9. **Character Large Object (CLOB)**:
   - **Descripción**: Almacena grandes cantidades de texto, con un tamaño que puede llegar hasta varios gigabytes.
   - **Uso adecuado**: Para almacenar grandes bloques de texto como documentos o artículos extensos.
   - **Uso inadecuado**: Para textos cortos o datos que no requieren mucho espacio.
   - **Ejemplo**: `CLOB` para almacenar el texto completo de un libro.

10. **Binary Large Object (BLOB)**:
    - **Descripción**: Almacena grandes cantidades de datos binarios, como imágenes o archivos.
    - **Uso adecuado**: Para almacenar archivos binarios como imágenes, videos o documentos.
    - **Uso inadecuado**: Para almacenar datos que se pueden manejar de manera más eficiente en archivos externos o sistemas de almacenamiento dedicados.
    - **Ejemplo**: `BLOB` para almacenar imágenes en una base de datos.


