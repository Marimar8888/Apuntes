# ¿Qué es Git?

Git es un sistema de control de versiones distribuido que permite a los desarrolladores rastrear cambios en sus proyectos de software. Proporciona un entorno colaborativo para trabajar en código fuente de manera eficiente.

## ¿Para qué sirve Git?

- Gestiona el historial de cambios de un proyecto.
- Facilita la colaboración entre desarrolladores.
- Permite trabajar en diferentes ramas de desarrollo.
- Ayuda a revertir cambios no deseados.
- Facilita la integración continua y la entrega continua.

## Comandos iniciales de Git

Crear un nuevo repositorio local:

```bash
git init
```
Agregar archivos nuevos al área de preparación:

```bash
git add <nombre_del_archivo>   # Agrega un archivo específico
git add .                       # Agrega todos los archivos en el directorio actual
```
Ver el estado del repositorio:

```bash
git status
```
Realizar un commit en local:

```bash
git commit -m "Mensaje descriptivo del commit"
```
### Resumen

`git init:`: Inicializa un nuevo repositorio Git.
`git add`: <nombre_del_archivo>: Agrega un archivo específico al área de preparación.
`git add .`: Agrega todos los archivos en el directorio actual al área de preparación.
`git status`: Muestra el estado actual del repositorio.
`git commit -m "<mensaje>"`: Crea un nuevo commit con un mensaje descriptivo.

## Crear un repositorio en GitHub

1. Inicia sesión en tu cuenta de GitHub.
2. Haz clic en el botón "New" en la esquina superior derecha de la página.
3. Ingresa un nombre para tu repositorio, una descripción opcional y selecciona las opciones deseadas.
4. Haz clic en el botón "Create repository".

## Conectar el repositorio local con el remoto en GitHub

1. Copia la URL del repositorio remoto en GitHub.
2. En tu terminal, navega hasta el directorio de tu repositorio local.
3. Ejecuta el siguiente comando para agregar la URL remota:

```bash
git remote add origin <URL_del_repositorio_remoto>
```

Ver las conexiones remotas configuradas:

```bash
git remote -v
```

Subir cambios al repositorio remoto:

Una vez que hayas realizado cambios en tu repositorio local y quieras subirlos al repositorio remoto en GitHub, sigue estos pasos:

1. La primera vez que se hace un push (subir): 
   
```bash
git push -u origin master
```
2. Para ver los commits realizados en tu repositorio local, puedes utilizar el siguiente comando:

```bash
git log
```

3. Ver las subidas realizadas (push):

```bash
git reflog show origin/master
```

Para las siguientes subidas a través de la rama master:

1. Añadir un archivo o todos:
   
```bash
git add <nombre_del_archivo>   # Agrega un archivo específico
git add .                       # Agrega todos los archivos en el directorio actual
```

2. Realizar un commit en local:

```bash
git commit -m "Mensaje descriptivo del commit"
```

3. Se Sube todos los cambios comiteados: 
   
```bash
git push 
```

## Contenido de .git

Dentro del directorio `.git` se encuentran todos los archivos y subdirectorios que Git utiliza para gestionar el repositorio. Aunque normalmente no es necesario modificar nada aquí directamente, entender su contenido puede ser útil para comprender cómo Git trabaja internamente.

Algunos de los elementos más importantes dentro de `.git` son:

- **hooks**: Contiene scripts que se ejecutan automáticamente en ciertos eventos de Git, como pre-commit o post-receive.
- **objects**: Almacena todos los objetos Git, como commits, árboles y blobs, de forma comprimida.
- **refs**: Contiene referencias a commits, como ramas y etiquetas.
- **config**: Archivo de configuración del repositorio.
- **HEAD**: Apunta a la rama actual en la que se encuentra el repositorio.

## Función de .gitignore

El archivo `.gitignore` se utiliza para especificar patrones de archivos que Git debe ignorar. Esto es útil cuando hay archivos o directorios en el repositorio que no queremos que sean rastreados por Git, como archivos de compilación, archivos temporales o directorios generados automáticamente.

### Cómo funciona

1. Crea un archivo llamado `.gitignore` en el directorio raíz de tu repositorio si aún no existe.
2. Dentro de `.gitignore`, lista los nombres de archivo o directorio que deseas ignorar, uno por línea.
3. Puedes usar comodines para especificar patrones más amplios, como `*.log` para ignorar todos los archivos con extensión `.log` o `logs/` para ignorar todo el contenido del directorio `logs`.
4. Guarda y cierra el archivo `.gitignore`.

Cuando ejecutas comandos como `git status` o `git add`, Git ignorará los archivos y directorios especificados en `.gitignore`.

## Ejemplo de contenido de .gitignore

Ignorar archivos de compilación:

*.o
*.out

Ignorar archivos de respaldo:

*~

Ignorar directorios de dependencias:

node_modules/

## Comprobar la última versión existente en remoto 

Antes de realizar una subida debemos saber si tenemos la última versión del repositorio remoto.

```bash
git pull 
```

## Trabajando con Ramas

![alt text](/images/git/image-10.png)

Trabajar con ramas en Git es una práctica fundamental para la gestión eficiente del desarrollo de software. Las ramas proporcionan un entorno seguro y flexible para experimentar, desarrollar nuevas características y colaborar en proyectos de forma organizada. A continuación se detallan algunas razones clave por las que trabajar con ramas es beneficioso:

### 1. Aislamiento de cambios

Las ramas permiten a los desarrolladores trabajar en funcionalidades o correcciones de errores de forma aislada, sin afectar el código principal del proyecto. Esto significa que los cambios en una rama no impactarán en otras ramas hasta que se fusionen deliberadamente.

### 2. Experimentación segura

Crear ramas es una forma segura de experimentar con nuevas ideas o cambios radicales sin comprometer el código base del proyecto. Si la experimentación no tiene éxito, es fácil descartar la rama sin afectar al resto del código.

### 3. Facilita la colaboración

Al trabajar con ramas, múltiples desarrolladores pueden trabajar en diferentes funcionalidades simultáneamente sin interferir entre sí. Cada desarrollador puede crear su propia rama para trabajar en una tarea específica y luego fusionarla de nuevo en la rama principal cuando esté lista.

### 4. Gestión de versiones

Las ramas proporcionan un historial claro y organizado de los cambios realizados en el proyecto. Esto facilita la gestión de versiones y la identificación de qué cambios se han realizado en cada parte del código en diferentes momentos del tiempo.

### 5. Rollback sencillo

En caso de que un cambio introducido en una rama provoque problemas o errores en el código, es fácil revertir la rama a un estado anterior sin afectar al resto del proyecto. Esto permite corregir rápidamente errores y mantener la estabilidad del código.

En resumen, trabajar con ramas en Git ofrece una manera estructurada y segura de desarrollar software, permitiendo a los equipos colaborar de manera eficiente, experimentar con nuevas ideas y mantener un control preciso sobre la gestión de versiones del proyecto.

## Flujo de trabajo con Git rama feature sin subir la nueva rama al repositorio

1. Crear y cambiar a la rama feature desde la rama master:

```bash
    git checkout -b feature/readme-styling master
```
    Este comando crea una nueva rama llamada "feature/readme-styling" desde la rama "master" y automáticamente cambia al nuevo rama.

2. Realizar cambios en el archivo README.md:

    Realiza los cambios necesarios en el archivo README.md utilizando un editor de texto o un IDE.

3. Añadir los cambios al área de preparación:

```bash
    git add README.md
```
4. Realizar el commit de los cambios:

```bash
    git commit -m "Estilizado del archivo README"
```
    Este comando crea un nuevo commit con los cambios realizados en el archivo README.md en la rama "feature/readme-styling".

1. Cambiar a la rama master:

```bash
    git checkout master
```
6. Fusionar la rama feature con la rama master:

```bash
    git merge feature/readme-styling
```
    Este comando fusiona los cambios de la rama "feature/readme-styling" en la rama "master".

7. Resolver conflictos (si los hay):

    Si hay conflictos durante la fusión, se deben resolver manualmente. Una vez resueltos, se debe agregar el archivo modificado al área de preparación y realizar un nuevo commit.

8. Eliminar la rama feature (opcional):
   
```bash
    git branch -d feature/readme-styling
```
    Este comando elimina la rama "feature/readme-styling" después de haberla fusionado con éxito en la rama master.

9. Subir la nueva versión de la rama master al repositorio:
    
```bash
    git push
```

## Crear una nueva rama de feature y subirla a GitHub

1. Crear y cambiar a la rama feature desde la rama master:

```bash
    git checkout -b feature/another-feature master
```

Este comando crea una nueva rama llamada "feature/another-feature" desde la rama "master" y automáticamente cambia a la nueva rama.

2. Realizar cambios en el código:
   
    Realiza los cambios necesarios en el código según los requisitos de la nueva característica.

3. Añadir los cambios al área de preparación y realizar el commit:
   
```bash
    git add .
    git commit -m "Implementación de la nueva característica"
```
4. Subir la rama a GitHub:
   
```bash
    git push -u origin feature/another-feature
```
Este comando sube la rama "feature/another-feature" al repositorio remoto en GitHub.

5. Realizar el merge en GitHub
    
    Una vez que la rama de feature está subida a GitHub, puedes realizar el merge a través de la interfaz web de GitHub:

- Abre la página del repositorio en GitHub. Aparece la nueva rama para comparar y hacer pull request.
  ![alt text](/images/git/image-11.png)
- Pulsa la pestaña "compare & Pull Requests".
  ![alt text](/images/git/image-12.png)
- Compara los cambios respecto a la rama master.
  ![alt text](/images/git/image-13.png)
- Edita el texto del merge y y haz clic en el botón "Create pull request" 
  ![alt text](/images/git/image-14.png)
- No hay conflicto pulsa el botón Merge pull request.
  ![alt text](/images/git/image-15.png)
- Vuelvo al código para comprobar los cambios en la rama master.
  ![alt text](/images/git/image-16.png)
  ![alt text](/images/git/image-17.png)
  ![alt text](/images/git/image-18.png)

## Git Rebase

El comando `git rebase` es una herramienta poderosa pero potencialmente peligrosa en Git que se utiliza para reorganizar, modificar o combinar ramas en un historial de commits. 

### ¿Para qué se utiliza?

El propósito principal de `git rebase` es mantener un historial de commits limpio y fácil de entender al reorganizar los commits en una rama para que parezca que se han aplicado en secuencia directa. Se utiliza comúnmente para:

1. **Integrar cambios de una rama a otra:** En lugar de fusionar una rama con otra, puedes reorganizar los commits de una rama sobre los de otra usando `git rebase`.
   
2. **Mantener un historial lineal:** Reescribir la historia de la rama en la que estás trabajando para mantener un historial de commits más limpio y fácil de entender, en lugar de tener ramificaciones complejas.

Un ejemplo de como cambia el historial de la rama topic respecto a la rama master (rama-base), después de usar git rebase:

![alt text](/images/git/image-19.png)
![alt text](/images/git/image-20.png)

En estas imagenes se puede ver como los commits de la rama topic pasan a estar como si fuesen después de los commits de la rama master.


### ¿Cuándo no usar?

Es importante tener en cuenta que `git rebase` reescribe la historia de la rama, lo que puede causar problemas si otros colaboradores también están trabajando en la misma rama. Por lo tanto, evita usar `git rebase` en ramas que se comparten de manera pública o en colaboración con otros, a menos que tengas una comprensión clara de los posibles impactos y hayas comunicado claramente tus intenciones.

### Pasos para usar git rebase:

1. **Actualizar tu rama base:** Antes de comenzar el rebase, asegúrate de tener la última versión de la rama base.
   
```bash
   git checkout <rama-base>
   git pull origin <rama-base>
```

2. **Ir a la rama que deseas reorganizar:** Cambia a la rama que deseas reorganizar.
   
```bash
   git checkout <tu-rama>
```

3. **Iniciar el rebase:** Ejecuta el comando `git rebase` seguido del nombre de la rama base.
   
```bash
   git rebase <rama-base>
```

4. **Resolución de conflictos (si es necesario):** Si hay conflictos durante el rebase, Git te pedirá que los resuelvas.

5. **Continuar el rebase:** Después de resolver los conflictos, continúa el rebase.
   
```bash
   git rebase --continue
 ```

6. **Finalizar el rebase:** Una vez completado el rebase, puedes finalizarlo con el comando:
   
```bash
   git rebase --skip
```

7. **Actualizar la rama remota (opcional):** Si ya has compartido la rama reorganizada, es posible que necesites forzar la actualización de la rama remota.
   
```bash
   git push origin <tu-rama> --force
```

## Git Stash

El comando `git stash` se utiliza para almacenar temporalmente los cambios en el directorio de trabajo y en el área de preparación (staging area) de Git. Estos cambios pueden ser restaurados más tarde, permitiéndote trabajar en otra tarea o cambiar de rama sin comprometer los cambios actuales.

### ¿Para qué se utiliza?

`git stash` es útil cuando necesitas cambiar de contexto rápidamente. Algunos casos comunes de uso incluyen:

1. **Cambiar de rama:** Cuando estás trabajando en una rama y necesitas cambiar a otra rápidamente sin realizar un commit de los cambios actuales.
   
2. **Guardar cambios temporales:** Si estás en medio de una tarea pero necesitas trabajar en otra cosa urgentemente, puedes usar `git stash` para guardar tus cambios y continuar más tarde.

### ¿Qué pasa si haces un cambio en una rama  sin hacer un stash?

Si realizas cambios en una rama y cambias a otra rama sin hacer un stash de esos cambios, los cambios no comprometidos pueden interferir con el cambio de rama. Esto puede provocar conflictos o la pérdida de trabajo no guardado. Es recomendable hacer un stash de los cambios antes de cambiar de rama para evitar este tipo de problemas.

### Pasos para usar git stash:

1. **Guardar cambios:** Guarda los cambios actuales en el stash.
   
```bash
   git stash
```
Los cambios que había pendientes para commitear desaparecen si ejecutamos `git status` podemos verlo

![alt text](/images/git/image-21.png)

1. **Mostrar los cambios** almacenados en el stash. 

```bash
   git stash show [<stash@{n}>]
```

![alt text](image-22.png)

3. **Listar stashes:** Muestra una lista de los stashes guardados.
   
```bash
   git stash list
```
![alt text](/images/git/image-23.png)

5. **Aplicar un stash:** Aplica los cambios de un stash específico o si hay un único stash.
   
Específico:

```bash
   git stash apply <stash@{n}>
```

Un único stash

```bash
   git stash apply
```

![alt text](/images/git/image-24.png)
![alt text](/images/git/image-25.png)


1. **Eliminar un stash:** Elimina un stash específico.
   
```bash
   git stash drop <stash@{n}>
```

7. **Limpiar todos los stashes:** Elimina todos los stashes guardados y comprobar si se ha eliminado.
 
```bash
   git stash clear
```
```bash
   git stash list
```

![alt text](/images/git/image-26.png)

### Importante limpiar cuando se haga un commit definitivamente

Es una buena práctica limpiar el stash una vez que hayas aplicado los cambios guardados. Puedes limpiar el stash usando `git stash clear` después de haber aplicado los cambios y haber verificado que todo funciona como se espera. Esto ayuda a mantener limpio el historial de stash y evita confusiones en el futuro.

## Git Fetch

El comando `git fetch` se utiliza para recuperar los cambios desde un repositorio remoto sin aplicarlos a tu rama local ni modificar tu directorio de trabajo. Descarga los cambios remotos y actualiza las referencias locales, permitiéndote revisar los cambios antes de fusionarlos en tu rama local.

### Diferencia con Git Pull:

- **`git fetch`:** Descarga los cambios remotos y actualiza las referencias locales sin fusionar los cambios en tu rama local automáticamente.
  
- **`git pull`:** Descarga los cambios remotos y los fusiona automáticamente en tu rama local.

### Pasos para hacer un git fetch con la rama `stash-demo` y los datos en la rama `master`:

1. **Actualizar tu rama base:** Asegúrate de tener la última versión de la rama base (`master`).

* __Comando__: git checkout master
* __Descripción__: Cambia a la rama master, la cual será tu rama base.
* __Comando__: git pull origin master
* __Descripción__: Actualiza la rama master con los cambios más recientes del repositorio remoto.

```bash
   git checkout master
   git pull origin master
```

2. **Realizar el fetch:** Descarga los cambios remotos sin fusionarlos automáticamente en tu rama local.
   
+ __Comando__: git fetch origin
* __Descripción__: Descarga los cambios remotos sin fusionarlos automáticamente en tu rama local.
   
```bash
   git fetch origin
```

3. **Ver los cambios descargados:** Puedes ver los cambios descargados utilizando el comando `git log` o `git diff` para comparar las diferencias entre las ramas locales y remotas.

* __Rama__: Puedes estar en cualquier rama para verificar los cambios descargados.
* __Comando__: git log origin/master..master
* __Descripción__: Muestra los cambios entre la rama local y la rama remota master.
   
```bash
   git log origin/master..master
```

4. **Fusionar los cambios (si es necesario):** Después de revisar los cambios descargados, puedes fusionarlos en tu rama local si lo deseas.
   
* __Rama__: Debes estar en la rama donde deseas fusionar los cambios.
* __Comando__: git merge origin/master
* __Descripción__: Fusiona los cambios de la rama remota master en tu rama local actual.
  
```bash
   git merge origin/master
```

5. **Actualizar la rama `stash-demo`:** Si también deseas actualizar la rama `stash-demo` con los cambios remotos, puedes hacerlo después de realizar el fetch.

* __Comando__: git checkout stash-demo
* __Descripción__: Cambia a la rama stash-demo, donde deseas aplicar los cambios.
* __Comando__: git pull origin stash-demo
* __Descripción__: Actualiza la rama stash-demo con los cambios más recientes del repositorio remoto.
   
```bash
   git checkout stash-demo
   git pull origin stash-demo
```

### Ejemplo de cómo hacer un git fetch:

```bash
# Paso 1: Actualizar la rama master
git checkout master
git pull origin master

# Paso 2: Realizar el fetch
git fetch origin

# Paso 3: Ver los cambios descargados
git log origin/master..master

# Paso 4: Fusionar los cambios (si es necesario)
git merge origin/master

# Paso 5: Actualizar la rama stash-demo
git checkout stash-demo
git pull origin stash-demo
```

## Eliminar una rama en local y en remoto

Cuando tienes una rama en local que ya ha sido fusionada en la rama master y subida al repositorio remoto, es una buena práctica eliminar esta rama tanto en local como en remoto para mantener un repositorio limpio y organizado.

### Pasos para eliminar una rama en local y en remoto:

Para aplicar estos comandos y eliminar la rama tanto en local como en remoto, debes ejecutarlos estando en cualquier rama distinta a la que deseas eliminar. No necesitas estar específicamente en la rama que quieres eliminar. Puedes estar en cualquier otra rama o incluso en la rama master. Los comandos eliminarán la rama especificada tanto en local como en remoto independientemente de la rama en la que te encuentres al ejecutarlos.

1. **Eliminar la rama en local:**
   
   - **Comando:** `git branch -d nombre_de_la_rama`
   - **Descripción:** Borra la rama en tu repositorio local. Si la rama contiene cambios que aún no se han fusionado, este comando no eliminará la rama a menos que uses la opción `-D` en lugar de `-d`.

2. **Eliminar la rama en remoto:**
   
   - **Comando:** `git push origin --delete nombre_de_la_rama`
   - **Descripción:** Borra la rama en el repositorio remoto. Esto eliminará la rama tanto en el servidor remoto como en tu repositorio local, lo que asegura que no haya rastros de la rama eliminada en ninguna parte.

### Ejemplo de cómo eliminar una rama en local y en remoto:

```bash
# Paso 1: Eliminar la rama en local
git branch -d nombre_de_la_rama

# Paso 2: Eliminar la rama en remoto
git push origin --delete nombre_de_la_rama
```

# Resolución de Conflictos al Usar Git Fetch

Cuando utilizas `git fetch` para obtener cambios desde un repositorio remoto, es posible que encuentres conflictos si los cambios descargados entran en conflicto con los cambios locales en tu rama. La resolución de conflictos es una parte importante del trabajo colaborativo en Git y se puede llevar a cabo siguiendo estos pasos básicos:

1. **Realizar Git Fetch:**
   - Ejecuta `git fetch` para obtener los cambios desde el repositorio remoto sin fusionarlos automáticamente en tu rama local.

2. **Verificar Cambios Descargados:**
   - Utiliza `git log` o `git diff` para revisar los cambios descargados y compararlos con tu rama local.

3. **Fusionar los Cambios (Si Es Necesario):**
   - Si los cambios descargados no entran en conflicto con tu rama local, puedes fusionarlos utilizando `git merge` o `git rebase`.

4. **Resolver Conflictos (Si Ocurren):**
   - Si `git fetch` encuentra conflictos entre los cambios descargados y tu rama local, debes resolver estos conflictos manualmente.
   - Abre los archivos afectados en tu editor de código y busca las secciones marcadas con conflictos.
   - Modifica manualmente las secciones en conflicto para resolverlos, manteniendo solo las partes necesarias y eliminando las líneas de marcado.
   - Una vez resueltos los conflictos, guarda los cambios en los archivos modificados.

5. **Realizar Commit de los Cambios Resueltos:**
   - Después de resolver los conflictos, realiza un commit de los cambios utilizando `git commit`.
   - Asegúrate de incluir un mensaje de commit descriptivo que explique los cambios realizados para resolver los conflictos.

6. **Continuar con el Flujo de Trabajo:**
   - Una vez resueltos los conflictos y realizados los commits necesarios, puedes continuar con tu flujo de trabajo habitual, como realizar pruebas, hacer más cambios o enviar tus cambios al repositorio remoto.

Recuerda que la resolución de conflictos es una parte normal del trabajo colaborativo en Git y puede surgir en situaciones donde múltiples personas están modificando el mismo archivo o línea de código simultáneamente. Es importante comunicarse con tu equipo y estar preparado para resolver conflictos de manera efectiva cuando sea necesario.


### Ejemplo con pantallazos

__1º.__ Se han modificado dos archivos en el repositorio remoto en la rama master. 
   
Archivo README.md. Otro desarrollador añade una liena (linea 3):

![alt text](/images/git/image-27.png)

Archivo my_file.py Otro desarrollador modifica el print de la línea 10.:

![alt text](/images/git/image-28.png)

__2º.__ Yo estoy trabajando en la rama master en local, y había cambiado justo las dos mismas líneas de los dos archivos, pero con otro texto distinto al que ahora hay en la rama master del remoto.

![alt text](/images/git/image-29.png)
![alt text](/images/git/image-30.png)

__3º.__ Si miro el estado de mi repositorio local en la rama master me dirá que he modificado eso dos archivos.

![alt text](/images/git/image-31.png)

__4º.__ Realizo un commit en local de los cambios que he realizado

![alt text](/images/git/image-32.png)

__5º.__ Ahora tengo un problema porque los datos que hay en local y master chocan al trabajarse con los mismos ficheros y lineas. Al bajarme el código de la rama master con fetch. Me lo baja pero no me lo fusiona automáticamente como ya hemos visto que hace fetch. 

![alt text](/images/git/image-33.png)

Es por eso que no hay conflicto todavía. Al intentar ver el estado de la rama en local con  `git status` me dice que hay dos commit diferentes y que use pull para hacer un merge de la rama remota en la mía. Con fetch te aseguras que no se hace la fusión automática para que yo pueda comprobar los posibles conflictos.

![alt text](/images/git/image-34.png)

__6º.__ Si hago un merge origin me dirá donde está el o los conflictos y falla la fusión:

![alt text](/images/git/image-35.png)

7º. Si veo el estado de la rama:

![alt text](/images/git/image-36.png)

Dice que los dos archivos han sido modificados. `both modified`: README.md y my_file.py. Esto significa que nuestra versión local ha sido modificada y también la versión remota. Y que estos conflictos han de ser corregidos.

__7º.__ Entro en el proyecto y en los fichero my_file.py y luego README.md.

![alt text](/images/git/image-37.png)

La parte que enta dentro de <<<<< HEAD     ====== Es lo que yo he modificado en local. Lo que está entre =====      >>>>>> origin/master es la versión del remoto.

Tendremos que elegir que versión es la correcta. Limpiar lo que Git me ha añadido, los simbolos y HEAD Y origin/master, dejando solo la línea que es correcta y quitando la incorrecta. En este caso se queda con la versión del remoto. Y el conflicto se resuelve por completo.

![alt text](/images/git/image-38.png)

Lo mismo con el archivo README.md. Elijo que versión es la correcta y elimino todo lo demás:

![alt text](/images/git/image-39.png)

En este caso elijo la versión de local:

![alt text](/images/git/image-40.png)

__8º.__ Miro el estado de mi repositorio local.

![alt text](/images/git/image-41.png)

__9º.__ Añado los archivos, creo un commit y lo subo:

![alt text](/images/git/image-42.png)

__10º.__ Si miro el repositorio remoto, veré los cambios en decididos en la resolución del conflicto.

![alt text](/images/git/image-43.png)

![alt text](/images/git/image-44.png)


# Revertir Cambios sin Commit en Git

A veces, realizamos cambios en archivos que aún no hemos comprometido con un commit en Git y queremos deshacer esos cambios. Aquí tienes los pasos para revertir cambios no confirmados:

1. **Verificar el Estado de los Archivos Modificados:**
   
```bash
   git status
```
- Utiliza `git status` para verificar los archivos que han sido modificados pero aún no han sido confirmados. Esto te mostrará los archivos modificados y te ayudará a identificar los cambios que deseas deshacer.

2. **Consultar las Modificaciones en los Archivos:**

```bash
   git diff
   git diff nombre_del_archivo
```
- Para ver las modificaciones realizadas en los archivos, puedes utilizar `git diff`. Por ejemplo, `git diff nombre_del_archivo` te mostrará las diferencias entre la versión actual del archivo y la versión anterior.

1. **Revertir Cambios en Archivos Específicos:**

```bash
   git checkout -- nombre_del_archivo
```
- Utiliza `git checkout -- nombre_del_archivo` para revertir los cambios en un archivo específico. Esto descarta los cambios no confirmados en el archivo y lo restaura a su estado anterior.
  
1. **Revertir Todos los Cambios no Confirmados:**
   
```bash
   git checkout .
```
- Utililzar `git checkout .` si deseas revertir todos los cambios no confirmados.


# Pasos para Realizar Cambios en Archivos Seguidos por Git

Si deseas realizar cambios en archivos que ya están siendo seguidos por Git, sigue estos pasos:

1. **Verificar el Estado de los Archivos:**

```bash
   git status
```

- Utiliza `git status` para verificar el estado de los archivos. Esto te mostrará los archivos modificados, los archivos que están siendo seguidos por Git y los archivos que son nuevos y aún no están siendo seguidos.

2. **Eliminar el archivos:**

```bash
   rm nombre del archivo
```

- Con el comando` git checkout .` , no se consigue elimiar un archivo nuevo que aún no está siendo seguido por git. Es por eso que hace falta eliminar dicho archivo usando `rm nombre del archivo`.

# Revertir un Archivo Concreto de un Commit Antiguo en Git

A veces, necesitamos deshacer los cambios realizados en un archivo específico y restaurarlo a una versión anterior de un commit antiguo en Git. Aquí tienes los pasos para hacerlo de manera efectiva:

1. **Asegurarse copiar el archivo actual en otro**

```bash
   cp nombre del archivo nombre del nuevo archivo
```

- Este comando crear un nuevo archivo con el segundo nombre ejemplo copia_xxxx.py.

2. **Identificar el Commit Antiguo:**

```bash
   git log
```
   - Utiliza `git log` para revisar el historial de commits y encuentra el hash del commit antiguo que contiene la versión anterior del archivo que deseas restaurar.

2. **Revertir el Archivo al Estado Anterior:**
   - Utiliza `git checkout <hash_del_commit> -- nombre_del_archivo` para revertir el archivo al estado que tenía en el commit antiguo. Esto sobrescribirá el archivo actual con la versión del archivo en el commit antiguo.

3. **Verificar los Cambios Revertidos:**
   - Utiliza `git status` para verificar que el archivo ha sido revertido al estado anterior correctamente. Asegúrate de revisar los cambios pendientes y que el archivo se encuentre en el estado deseado.

4. **Agregar los Cambios al Área de Preparación (Opcional):**
   - Si deseas confirmar los cambios revertidos en un nuevo commit, agrega el archivo al área de preparación utilizando `git add nombre_del_archivo`.

5. **Confirmar los Cambios (Opcional):**
   - Utiliza `git commit -m "Mensaje de commit"` para confirmar los cambios revertidos en un nuevo commit. Proporciona un mensaje descriptivo que explique los cambios realizados.

Con estos pasos, podrás revertir un archivo concreto de un commit antiguo en Git y restaurarlo a una versión anterior de manera efectiva en tu repositorio.

Recuerda que revertir un archivo específico de un commit antiguo modificará el historial de commits, por lo que es importante considerar las implicaciones antes de realizar este procedimiento.


Pasos:

1. En Github debo comprobar cual es la última versión del archivo que funcionaba. Y conseguir el hash del commit de dicha versión. Entro gen Github y pulso encima de commit:

![alt text](/images/git/image-45.png)

2. Compruebo los cambios realizados en cada commit pulsando en el nombre del commit:

![alt text](/images/git/image-46.png)

![alt text](/images/git/image-47.png)

3. Cuando tengo claro que versión del archivo necesito, consigo el hash. Lo copio y lo pego en una libreta:

![alt text](/images/git/image-48.png)

4. Creo una copia del archivo que voy a sustituir por si acaso.

```bash
   cp nombre del archivo nombre del nuevo archivo
```

5. Puedo recuperar poniendo el comando y el hash conseguido o consulto en el repositorio los commit para asegurarme que ese commit existe mediante `git log`.

![alt text](/images/git/image-49.png)

En este caso es el commit del 09 de mayo de 2024.

6. Con el siguiente comando `git checkout <hash_del_commit> -- nombre_del_archivo` podremos traer la versión de ese archivo concreto:

![alt text](/images/git/image-50.png)

7. Comprobar el estado del repositorio local donde se verá que el archivo ha sido modificado.

![alt text](/images/git/image-51.png)

Podremos comprogar abriendo en el editor de textos que el archivo ha sido modificado.

Entendido. Aquí está la versión revisada sin la parte de resolución de conflictos y con la opción de crear una rama desde un commit específico:

## Revertir un Commit Concreto en Git

Revertir un commit concreto en Git te permite deshacer los cambios introducidos por ese commit específico sin modificar el historial de commits. Esto se hace utilizando el comando `git revert`. Es recomendable hacer estas pruebas en una nueva rama para evitar posibles problemas en tu rama de trabajo. Aquí tienes los pasos para hacerlo:

### Pasos para Revertir un Commit Concreto en una Nueva Rama

1. **Crear una Nueva Rama para Pruebas y Moverse a Ese Commit:**
   - Si ya conoces el hash del commit que deseas revertir, puedes crear una nueva rama desde ese commit y moverte a ella en un solo paso.
   ```bash
   git checkout -b revert-pruebas <hash_del_commit>
   ```

2. **Revertir el Commit en la Nueva Rama:**
   - Utiliza `git revert <hash_del_commit>` para crear un nuevo commit que deshace los cambios del commit especificado en la nueva rama.
   ```bash
   git revert <hash_del_commit>
   ```

3. **Probar el Proyecto:**
   - Realiza las pruebas necesarias en la nueva rama para asegurarte de que los cambios revertidos funcionan como se espera. Verifica el estado del proyecto y asegúrate de que todo funcione correctamente.

4. **Identificar el Archivo a Recuperar:**
   - Una vez que sepas qué archivo específico deseas recuperar, toma nota de su estado en el commit revertido.

5. **Eliminar la Rama de Pruebas:**
   - Vuelve a tu rama de trabajo y elimina la rama de pruebas.
   ```bash
   git checkout <nombre_de_tu_rama_de_trabajo>
   git branch -D revert-pruebas
   ```

6. **Recuperar el Archivo Específico:**
   - Recupera el archivo específico del commit revertido utilizando `git checkout <hash_del_commit> -- nombre_del_archivo`.
   ```bash
   git checkout <hash_del_commit> -- nombre_del_archivo
   ```

7. **Confirmar los Cambios Recuperados:**
   - Agrega el archivo al área de preparación y realiza un commit para confirmar los cambios recuperados.
   ```bash
   git add nombre_del_archivo
   git commit -m "Recuperado nombre_del_archivo desde el commit <hash_del_commit>"
   ```

### Ejemplo Completo:

1. **Crear una Nueva Rama para Pruebas y Moverse a Ese Commit:**

 ```bash
   git checkout -b revert-pruebas abc1234
   ```
```bash
   git checkout abc1234 -b revert-pruebas
```
2. **Revertir el Commit Específico:**
   
```bash
   git revert abc1234
```

3. **Probar el Proyecto en la Nueva Rama.**

4. **Eliminar la Rama de Pruebas:**
  
 ```bash
   git checkout <nombre_de_tu_rama_de_trabajo>
   git branch -D revert-pruebas
 ```

5. **Recuperar el Archivo Específico:**
   
```bash
   git checkout abc1234 -- nombre_del_archivo
```

6. **Confirmar los Cambios Recuperados:**
  
```bash
   git add nombre_del_archivo
   git commit -m "Recuperado nombre_del_archivo desde el commit abc1234"
```

## Revertir Todo el Proyecto a una Versión Anterior en Git

Revertir todo el proyecto a una versión anterior implica volver al estado del proyecto en un commit específico. Antes de hacer esto, es recomendable probar la versión anterior en una nueva rama para asegurarte de que todo funciona correctamente. Aquí tienes los pasos para hacerlo y algunas precauciones importantes, especialmente si trabajas en equipo.

### Pasos para Revertir Todo el Proyecto a una Versión Anterior

1. **Crear una Nueva Rama para Pruebas y Moverse a Ese Commit:**
  
   - Crea una nueva rama desde el commit específico que deseas revertir.
   
```bash
   git checkout -b revert-pruebas <hash_del_commit>
   ```
O también: 

```bash
   git checkout <hash_del_commit> -b revert-pruebas 
   ```

2. **Probar el Proyecto en la Nueva Rama:**
  
   - Realiza las pruebas necesarias en la nueva rama para asegurarte de que el proyecto funciona correctamente en esta versión anterior.

3. **Eliminar la Rama de Pruebas:**
   
   - Una vez que hayas verificado que la versión anterior funciona correctamente, elimina la rama de pruebas.

```bash
   git checkout <nombre_de_tu_rama_de_trabajo>
   git branch -D revert-pruebas
   ```

4. **Revertir la Versión en la Rama de Trabajo:**
   
   - Vuelve a tu rama de trabajo y utiliza `git revert` para revertir todos los commits desde el commit actual hasta el commit deseado. Esto creará un nuevo commit que deshace todos los cambios entre esos dos puntos. Head apuntará a un ID diferente.
   
```bash
   git reset --hard <hash_del_commit>
   ```
Si hiciese un `git log`, podría ver donde apunta el HEAD y todo los commit que he reverdido.
Si hiciese `git status`, nos dirá que no hay cambios que guardar y subir al repositorio remoto. Pero si nos dirá que el HEAD está XX commit por debajo de el master orinal y que si hicieramos `git pull`, nos devolvería al estado que tenía antes de revertir a la versión elegida.

5. **Forzar la subida de esta reversión al master original en remoto**
   
   - Con este comando modificarás el HEAD del master original en remoto.
    
```bash
   git push -f origin master
   ```
Con esto el master original del remoto coincidirá con el que tengo en el local y eliminará los commit del repositorio.


### Ejemplo Completo:

1. **Crear una Nueva Rama para Pruebas y Moverse a Ese Commit:**
   
```bash
   git checkout -b revert-pruebas abc1234
   ```

2. **Probar el Proyecto en la Nueva Rama.**

3. **Eliminar la Rama de Pruebas:**
   
```bash
   git checkout <nombre_de_tu_rama_de_trabajo>
   git branch -D revert-pruebas
   ```

4. **Revertir la Versión en la Rama de Trabajo:**
   
```bash
   git reset --hard abc1234..HEAD
   ```
5. **Forzar la subida de esta reversión al master original en remoto**
   
   - Con este comando modificarás el HEAD del master original en remoto.
    
```bash
   git push -f origin master
   ```

### ¿Qué Sucede con los Commits Entre la Versión Actual y la Recuperada?

- **Commits Revertidos:** El comando `git revert` crea un nuevo commit que deshace todos los cambios introducidos por los commits entre el commit actual y el commit al que estás revirtiendo. Esto significa que el historial de commits sigue intacto, pero con un nuevo commit que revierte los cambios.
- **Historial Intacto:** El historial de commits no se borra ni se sobrescribe, lo cual es útil para mantener un registro claro de todos los cambios realizados.
- **Conflictos Potenciales:** Si los commits intermedios incluyen cambios conflictivos, tendrás que resolver esos conflictos durante el proceso de revert.

### Precauciones a Tomar, Especialmente si Trabajas en Equipo

1. **Comunicación:** Informa a tu equipo antes de realizar cambios significativos como este. Asegúrate de que todos estén al tanto de lo que vas a hacer y por qué.
2. **Respaldo:** Realiza un respaldo de la rama actual antes de revertir, creando una copia de seguridad en una nueva rama.
   ```bash
   git checkout -b backup-branch
   ```
3. **Resolución de Conflictos:** Prepárate para resolver conflictos que puedan surgir durante el proceso de revert.
4. **Coordinación:** Coordina con tu equipo para asegurarte de que nadie esté trabajando en la misma rama mientras realizas el revert. Esto evitará problemas de integración y conflictos.
5. **Revisión de Cambios:** Después de revertir, revisa los cambios cuidadosamente para asegurarte de que todo funciona como se espera.

