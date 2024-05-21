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

# Javascript

# Guía para Principiantes: Cómo Ejecutar JavaScript en el Navegador

Esta guía te enseñará cómo hacer que tu navegador ejecute un script JavaScript. Aprenderás a incluir JavaScript directamente en un archivo HTML y a enlazar un archivo JavaScript externo.

## Requisitos

- Un navegador web (como Chrome, Firefox, Edge, etc.)
- Un editor de texto (como Notepad, VSCode, Sublime Text, etc.)

## 1. Incluir JavaScript Directamente en HTML

Primero, veamos cómo incluir JavaScript directamente en un archivo HTML.

### Paso 1: Crear un archivo HTML

Crea un archivo con el nombre `index.html` y ábrelo con tu editor de texto. 

### Paso 2: Escribir el HTML Básico

Escribe el siguiente código HTML básico:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>

    <!-- Aquí es donde incluiremos nuestro script -->
    <script>
        // Esto es un comentario en JavaScript
        alert('¡Hola desde JavaScript!');
    </script>
</body>
</html>
```

### Explicación

- `<script>`: Este elemento se utiliza para incluir código JavaScript directamente en el HTML.
- `alert('¡Hola desde JavaScript!');`: Esta línea de código JavaScript muestra una alerta en el navegador con el mensaje "¡Hola desde JavaScript!".

### Paso 3: Abrir el archivo en el Navegador

Guarda el archivo y ábrelo con tu navegador. Deberías ver una alerta con el mensaje "¡Hola desde JavaScript!".

## 2. Incluir JavaScript desde un Archivo Externo

Ahora, veamos cómo enlazar un archivo JavaScript externo a tu archivo HTML.

### Paso 1: Crear un archivo JavaScript

Crea un archivo con el nombre `script.js` y ábrelo con tu editor de texto.

### Paso 2: Escribir el Código JavaScript

Escribe el siguiente código JavaScript en el archivo `script.js`:

```javascript
// Esto es un comentario en JavaScript
alert('¡Hola desde un archivo externo de JavaScript!');
```

### Paso 3: Modificar el Archivo HTML para Enlazar el Archivo JavaScript

Abre tu archivo `index.html` y modifícalo para que incluya el archivo JavaScript externo:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <h1>¡Hola, mundo!</h1>

    <!-- Aquí enlazamos nuestro archivo JavaScript externo -->
    <script src="script.js"></script>
</body>
</html>
```

### Explicación

- `<script src="script.js"></script>`: Este elemento enlaza el archivo `script.js` al HTML. El navegador cargará y ejecutará el código JavaScript contenido en `script.js`.

### Paso 4: Abrir el Archivo HTML en el Navegador

Guarda ambos archivos (`index.html` y `script.js`) y abre `index.html` con tu navegador. Deberías ver una alerta con el mensaje "¡Hola desde un archivo externo de JavaScript!".

## Resumen

- Puedes incluir JavaScript directamente en un archivo HTML utilizando el elemento `<script>`.
- También puedes enlazar un archivo JavaScript externo utilizando el atributo `src` en el elemento `<script>`.
- Los navegadores ejecutan el código JavaScript para interactuar con las páginas web y hacerlas más dinámicas.

# Resumen instalación y uso de la extensión DevcampVSC

1. Clonar el proyecto de github `https://github.com/jordanhudgens/analytics-dashboard`.
2. Desde el terminal colocarnos dentro de la carpeta analytics-dashboard, usando `cd analytics-dashboard`.
3. Instalar npm install.
4. Si todo se ha instalado correctamente entrar a través de un navegador a la dirección de localhost aportada através del terminal. En este caso: `http://localhost:3000/`.

# Javascript snippets con VSC

Claro, aquí tienes una guía en formato Markdown que explica qué son los snippets en Visual Studio Code (VS Code), cómo crearlos y cómo llegar a la pantalla para hacerlo.

<!-- ## ¿Qué son los Snippets? -->

Los snippets son bloques de código reutilizables que puedes insertar rápidamente en tu editor de texto. En Visual Studio Code, los snippets te ayudan a escribir código más rápido y de manera más eficiente, reduciendo la cantidad de tecleo repetitivo.

## Cómo Crear Snippets en Visual Studio Code

### Paso 1: Abrir la Paleta de Comandos

1. Abre Visual Studio Code.
2. Presiona `Ctrl+Shift+P` (o `Cmd+Shift+P` en macOS) para abrir la Paleta de Comandos.

### Paso 2: Acceder a la Configuración de Snippets

1. En la Paleta de Comandos, escribe `snippets` y selecciona la opción **"Preferences: Configure User Snippets"**.
2. Aparecerá una lista de opciones. Puedes elegir:
    - **New Global Snippets file...** para crear un nuevo archivo de snippets que estará disponible en todos los lenguajes.
    - Seleccionar un lenguaje específico, por ejemplo, **JavaScript**, **HTML**, etc., para crear snippets solo para ese lenguaje.

### Paso 3: Crear un Archivo de Snippets

1. Si eliges **New Global Snippets file...**, se te pedirá que nombres el archivo. Por ejemplo, puedes llamarlo `misSnippets`.
2. VS Code creará un archivo JSON donde puedes definir tus snippets.
3. Si eliges un lenguaje, te abrirá un archivo con los snippets preparados de base. Quitando los comentarios consigues un ejemplo de como hacerlo, como el paso 4.

### Paso 4: Definir un Snippet

Aquí tienes un ejemplo de cómo definir un snippet en el archivo JSON:

```json
{
    "Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    }
}
```
### Paso 5: Utilizarlo

Una vez lo tienes creado, en el archivo HTML, al comenzar a escribir el prefix log, si lo seleccionamos, nos saltará todo el código escrito dentro del body. En este caso un console.log y el puntero estará dentro para que escribamos lo que queramos y al dar a enter continuara el puntero en una nueva linea.

### Explicación

- **Print to console**: Nombre del snippet.
- **prefix**: La abreviatura que escribirás para activar el snippet (`log` en este caso).
- **body**: El código que se insertará. Puedes usar `$1`, `$2`, etc., para definir los puntos donde el cursor se colocará después de insertar el snippet.
- **description**: Una descripción opcional para el snippet.

### Paso 5: Usar el Snippet

1. Abre un archivo del lenguaje para el cual has creado el snippet (por ejemplo, un archivo `.js` para JavaScript).
2. Escribe el prefijo del snippet (`log`) y presiona `Tab`. El snippet se expandirá al bloque de código definido.

## Resumen

- Los snippets son bloques de código predefinidos que puedes insertar rápidamente.
- Se crean y gestionan a través de la opción **"Preferences: Configure User Snippets"** en la Paleta de Comandos.
- Puedes crear snippets globales o específicos para un lenguaje.
- Los snippets se definen en un archivo JSON con propiedades como `prefix`, `body` y `description`.

# Aplicaciones para la lectura rápida

## ¿Qué son Spritz y ReadEasy?

### Spritz

Spritz es una tecnología de lectura rápida que ayuda a las personas a leer texto más rápido al mostrar las palabras de una manera

que minimiza el movimiento ocular. Utiliza una técnica llamada "Visualización de Punto Óptimo" (Optimal Recognition Point, ORP) que resalta la parte de la palabra que el cerebro necesita para reconocerla rápidamente.

### ReadEasy

ReadEasy es una aplicación de lectura que mejora la velocidad y la comprensión lectora al presentar el texto de manera optimizada. Al igual que Spritz, utiliza técnicas de visualización para facilitar la lectura rápida, pero puede tener características adicionales o diferentes métodos de presentación.

## ¿Para qué Sirven Estas Aplicaciones?

- **Mejorar la velocidad de lectura:** Ayudan a leer más rápido sin sacrificar la comprensión.
- **Reducir la fatiga ocular:** Al minimizar el movimiento ocular, se reduce la fatiga asociada a la lectura prolongada.
- **Aumentar la eficiencia:** Son útiles para estudiantes, profesionales y cualquier persona que necesite procesar grandes cantidades de información rápidamente.

## Cómo Usar Spritz

### Paso 1: Descargar e Instalar

1. Visita el sitio web de Spritz o busca la aplicación en la tienda de aplicaciones de tu dispositivo (App Store para iOS, Google Play Store para Android).
2. Descarga e instala la aplicación.

### Paso 2: Configurar la Aplicación

1. Abre la aplicación Spritz.
2. Configura tus preferencias de lectura, como la velocidad (palabras por minuto), el tamaño de la fuente y el tema.

### Paso 3: Leer con Spritz

1. Importa el texto que quieres leer. Esto puede ser un artículo, un libro electrónico, o cualquier otro tipo de texto.
2. Inicia la sesión de lectura y ajusta la velocidad según tu comodidad.
3. Spritz mostrará las palabras de manera secuencial, con la parte clave de la palabra resaltada para facilitar la lectura rápida.

### Usar la Extensión de Chrome

1. Abre el navegador Chrome.
2. Visita la Chrome Web Store y busca la extensión de Spritz.
3. Haz clic en "Agregar a Chrome" y luego en "Agregar extensión".
4. Una vez instalada, haz clic en el icono de la extensión en la barra de herramientas de Chrome.
5. Importa o selecciona el texto que deseas leer, y la extensión lo mostrará usando la tecnología Spritz.

## Cómo Usar ReadEasy

### Paso 1: Descargar e Instalar

1. Busca ReadEasy en la tienda de aplicaciones de tu dispositivo.
2. Descarga e instala la aplicación.

### Paso 2: Configurar la Aplicación

1. Abre la aplicación ReadEasy.
2. Configura tus preferencias de lectura, como la velocidad y el modo de visualización.

### Paso 3: Leer con ReadEasy

1. Importa o selecciona el texto que deseas leer.
2. Inicia la sesión de lectura y ajusta los parámetros según sea necesario.
3. La aplicación mostrará el texto de manera optimizada para mejorar tu velocidad y comprensión.

### Usar la Extensión de Chrome

1. Abre el navegador Chrome.
2. Visita la Chrome Web Store y busca la extensión de ReadEasy.
3. Haz clic en "Agregar a Chrome" y luego en "Agregar extensión".
4. Una vez instalada, haz clic en el icono de la extensión en la barra de herramientas de Chrome.
5. Importa o selecciona el texto que deseas leer, y la extensión lo mostrará usando la tecnología de ReadEasy.

## Características Principales de Spritz y ReadEasy

### Spritz

- **Visualización de Punto Óptimo (ORP):** Resalta la parte de la palabra que facilita su reconocimiento.
- **Ajuste de Velocidad:** Permite ajustar la velocidad de lectura según tus necesidades.
- **Integración con eBooks y Artículos Web:** Puede integrarse con varios formatos de texto.

### ReadEasy

- **Optimización de Texto:** Presenta el texto de manera que facilite una lectura más rápida.
- **Personalización:** Ofrece opciones para personalizar la experiencia de lectura.
- **Compatibilidad:** Funciona con varios tipos de archivos y fuentes de texto.

## Resumen

- **Spritz** y **ReadEasy** son aplicaciones diseñadas para mejorar la velocidad y eficiencia de la lectura.
- **Spritz** utiliza la técnica de Visualización de Punto Óptimo (ORP) para minimizar el movimiento ocular.
- **ReadEasy** optimiza la presentación del texto para facilitar una lectura rápida y comprensiva.
- Ambas aplicaciones permiten personalizar la experiencia de lectura según tus preferencias.
- Puedes utilizar las extensiones de Chrome para integrar estas aplicaciones en tu navegador y leer contenido web de manera más eficiente.

Claro, aquí tienes una guía en formato Markdown que incluye una explicación inicial sobre cómo navegar el DOM (Document Object Model) con JavaScript.

---

## ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación estructurada de un documento HTML o XML. Básicamente, es una interfaz que permite a los lenguajes de programación, como JavaScript, acceder y manipular el contenido, la estructura y el estilo de una página web.

El DOM organiza el documento en una jerarquía de nodos, donde cada nodo representa una parte del documento, como un elemento HTML, un atributo o un texto.

## ¿Por qué Navegar el DOM?

Navegar el DOM con JavaScript te permite:

- **Acceder y modificar elementos del documento:** Cambiar el texto, atributos, y estilos de los elementos.
- **Añadir o eliminar elementos:** Crear nuevos nodos y eliminarlos del documento.
- **Responder a eventos:** Crear interacciones dinámicas en respuesta a acciones del usuario.



## Cómo Navegar el DOM con la Consola del Navegador

- Abrir la Consola del Navegador
  * `Google Chrome`: Haz clic derecho en cualquier parte de la página web y selecciona "Inspeccionar". Luego, haz clic en la pestaña "Consola".
  * `Mozilla Firefox`: Haz clic derecho en cualquier parte de la página web y selecciona "Inspeccionar Elemento". Luego, haz clic en la pestaña "Consola".
  * `Microsoft Edge`: Haz clic derecho en cualquier parte de la página web y selecciona "Inspeccionar Elemento". Luego, haz clic en la pestaña "Consola".

## Cómo Navegar el DOM con JavaScript

![Document](/images/dom/image-1.png)

![Document](/images/dom/image-2.png)

![Document](/images/dom/image-3.png)

![Document](/images/dom/image-4.png)

![Document](/images/dom/image-5.png)

### Seleccionar Elementos del DOM

Para manipular el DOM, primero necesitas seleccionar los elementos que quieres modificar. Aquí hay algunas formas comunes de hacerlo:

### `getElementById`

Selecciona un elemento por su ID.

```javascript
const elemento = document.getElementById('miId');
```

### `getElementsByClassName`

Selecciona todos los elementos que tienen una clase específica. Devuelve una colección de elementos.

```javascript
const elementos = document.getElementsByClassName('miClase');
```

### `getElementsByTagName`

Selecciona todos los elementos con un nombre de etiqueta específico. Devuelve una colección de elementos.

```javascript
const elementos = document.getElementsByTagName('div');
```

### `querySelector`

Selecciona el primer elemento que coincide con un selector CSS.

```javascript
const elemento = document.querySelector('.miClase');
```

### `querySelectorAll`

Selecciona todos los elementos que coinciden con un selector CSS. Devuelve una NodeList.

```javascript
const elementos = document.querySelectorAll('.miClase');
```

### Manipular Elementos del DOM

Una vez que has seleccionado los elementos, puedes manipularlos de varias maneras.

### Cambiar el Contenido de Texto

```javascript
const elemento = document.getElementById('miId');
elemento.textContent = 'Nuevo texto';
```

### Cambiar Atributos

```javascript
const elemento = document.querySelector('img');
elemento.src = 'nueva-imagen.jpg';
elemento.alt = 'Descripción de la nueva imagen';
```

### Cambiar Estilos

```javascript
const elemento = document.getElementById('miId');
elemento.style.color = 'red';
elemento.style.backgroundColor = 'yellow';
```

### Añadir y Eliminar Elementos

#### Crear un Nuevo Elemento

```javascript
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Hola, soy un nuevo div';
```

#### Añadir el Nuevo Elemento al DOM

```javascript
const contenedor = document.getElementById('contenedor');
contenedor.appendChild(nuevoElemento);
```

#### Eliminar un Elemento

```javascript
const elementoAEliminar = document.getElementById('miId');
elementoAEliminar.parentNode.removeChild(elementoAEliminar);
```

### Responder a Eventos

Puedes añadir event listeners para responder a eventos del usuario, como clics, movimientos del ratón, etc.

```javascript
const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
    alert('¡Botón clicado!');
});
```

## Ejemplo Completo

Aquí tienes un ejemplo completo que muestra cómo seleccionar un elemento, cambiar su contenido de texto, añadir un nuevo elemento, y responder a un evento de clic.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo DOM</title>
</head>
<body>
    <h1 id="titulo">Título original</h1>
    <div id="contenedor"></div>
    <button id="miBoton">Haz clic aquí</button>

    <script>
        // Seleccionar el elemento y cambiar su texto
        const titulo = document.getElementById('titulo');
        titulo.textContent = 'Título modificado';

        // Crear un nuevo elemento
        const nuevoElemento = document.createElement('div');
        nuevoElemento.textContent = 'Hola, soy un nuevo div';

        // Añadir el nuevo elemento al contenedor
        const contenedor = document.getElementById('contenedor');
        contenedor.appendChild(nuevoElemento);

        // Añadir un event listener al botón
        const boton = document.getElementById('miBoton');
        boton.addEventListener('click', function() {
            alert('¡Botón clicado!');
        });
    </script>
</body>
</html>
```

## Resumen

- El DOM es una estructura jerárquica que representa el documento HTML.
- Navegar el DOM con JavaScript te permite seleccionar, modificar, añadir y eliminar elementos, así como responder a eventos.
- Métodos comunes para seleccionar elementos incluyen `getElementById`, `getElementsByClassName`, `getElementsByTagName`, `querySelector`, y `querySelectorAll`.
- Puedes cambiar el contenido, atributos y estilos de los elementos, así como crear nuevos elementos y responder a eventos.

Claro, aquí tienes una explicación detallada sobre las diferencias entre `window` y `document` en JavaScript, adecuada para la documentación de un desarrollador:

## Diferencias entre `window` y `document` en JavaScript

### `window`
El objeto `window` es el objeto global en el contexto de un navegador web. Representa la ventana del navegador y sirve como el contexto global para todo el código JavaScript ejecutado en una página web. Aquí hay algunos puntos clave sobre el objeto `window`:

1. **Global Scope**:
   - Todos los objetos, funciones y variables globales se convierten en propiedades del objeto `window`.
   - Ejemplo: `var foo = 'bar';` es equivalente a `window.foo = 'bar';`.

2. **Propiedades y Métodos del Navegador**:
   - `window` contiene muchas propiedades y métodos que permiten interactuar con el navegador, tales como `window.innerHeight`, `window.innerWidth`, `window.alert()`, `window.open()`, etc.
   - Ejemplo: `window.alert('Hello, world!');` muestra una alerta en la ventana del navegador.

3. **Timers y Eventos**:
   - Métodos como `setTimeout()`, `setInterval()`, `requestAnimationFrame()` son accesibles a través del objeto `window`.
   - Ejemplo: `window.setTimeout(function() { console.log('Hello!'); }, 1000);`.

4. **Acceso al Documento**:
   - `window` tiene una propiedad `document` que hace referencia al objeto `document` que representa la estructura del documento HTML.
   - Ejemplo: `window.document.getElementById('myElement');`.

### `document`
El objeto `document` representa el documento HTML o XML cargado en la ventana del navegador. Es el punto de entrada principal para acceder y manipular el contenido de la página. Aquí hay algunos puntos clave sobre el objeto `document`:

1. **Estructura del DOM**:
   - `document` proporciona la representación del Documento Object Model (DOM) del contenido HTML.
   - Ejemplo: `document.getElementById('myElement');` selecciona el elemento con el id `myElement`.

2. **Manipulación del Contenido**:
   - Permite crear, eliminar y modificar elementos y contenido en la página.
   - Ejemplo: `document.createElement('div');` crea un nuevo elemento `div`.

3. **Eventos del Documento**:
   - Permite gestionar eventos del documento, como `DOMContentLoaded`, `click`, `keypress`, etc.
   - Ejemplo: `document.addEventListener('DOMContentLoaded', function() { console.log('Document is ready!'); });`.

4. **Propiedades de Información del Documento**:
   - Proporciona acceso a información sobre el documento, como `document.title`, `document.URL`, `document.referrer`.
   - Ejemplo: `console.log(document.title);` muestra el título de la página en la consola.

## Comparación

| Característica            | `window`                                          | `document`                                         |
|---------------------------|---------------------------------------------------|---------------------------------------------------|
| Representación            | La ventana del navegador y el contexto global     | El contenido del documento HTML/XML               |
| Propiedades y Métodos     | Interacción con la ventana del navegador          | Manipulación del contenido del documento          |
| Scope Global              | Sí                                                | No                                                |
| Acceso a Timers y Eventos | Sí (`setTimeout`, `setInterval`, etc.)            | No                                                |
| Acceso al Documento       | A través de `window.document`                     | Directamente                                      |
| Ejemplo de Uso            | `window.alert('Hello!');`                         | `document.getElementById('myElement');`           |

### Conclusión

- **`window`** es el objeto principal que representa la ventana del navegador y proporciona métodos y propiedades globales para controlar el navegador y el contexto global de JavaScript.
- **`document`** es una propiedad del objeto `window` que proporciona acceso al contenido del documento HTML o XML cargado en la ventana, permitiendo su manipulación y gestión.

Un `iframe` (inline frame) es un elemento HTML que permite incrustar otro documento HTML dentro de la página actual. Es esencialmente una ventana dentro de otra ventana, lo que permite cargar contenido separado y distinto del documento principal.

## ¿Qué es un `iframe`?

Un `iframe` es un elemento HTML que se utiliza para incrustar otro documento HTML dentro de la página principal. Se utiliza comúnmente para incrustar contenido de otras páginas web, como videos, anuncios, mapas y otros recursos externos. Aquí tienes un ejemplo básico de cómo se define un `iframe` en HTML:

```html
<iframe src="https://www.example.com" width="600" height="400"></iframe>
```

Este `iframe` incrusta la página `https://www.example.com` dentro de la página actual, con un tamaño de 600x400 píxeles.

## Interacción entre `window` y `iframe`

Cuando trabajas con `iframe`s en JavaScript, es importante entender cómo interactúan los diferentes contextos de `window`. Cada `iframe` tiene su propio objeto `window`, que está anidado dentro del `window` principal de la página.

### Acceder al `iframe` desde el `window` principal

Desde el `window` principal, puedes acceder al contenido del `iframe` utilizando la propiedad `contentWindow` del elemento `iframe`. Aquí tienes un ejemplo de cómo hacerlo:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document with iFrame</title>
</head>
<body>
    <iframe id="myIframe" src="https://www.example.com" width="600" height="400"></iframe>

    <script>
        // Seleccionar el elemento iframe
        var iframe = document.getElementById('myIframe');
        
        // Acceder al objeto window del iframe
        var iframeWindow = iframe.contentWindow;
        
        // Acceder al objeto document del iframe
        var iframeDocument = iframe.contentDocument || iframeWindow.document;

        // Mostrar la URL del documento del iframe
        console.log(iframeDocument.URL);
    </script>
</body>
</html>
```

En este ejemplo:

1. **Seleccionar el `iframe`**: `document.getElementById('myIframe')` selecciona el elemento `iframe`.
2. **Acceder al objeto `window` del `iframe`**: `iframe.contentWindow` obtiene el objeto `window` del `iframe`.
3. **Acceder al objeto `document` del `iframe`**: `iframe.contentDocument` (o `iframeWindow.document`) obtiene el objeto `document` del `iframe`.

### Acceder al `window` principal desde el `iframe`

Del mismo modo, puedes acceder al `window` principal desde el `iframe` utilizando la propiedad `parent` del objeto `window`. Aquí tienes un ejemplo:

```html
<!-- Documento cargado dentro del iframe -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Iframe Content</title>
</head>
<body>
    <script>
        // Acceder al objeto window del documento principal
        var parentWindow = window.parent;
        
        // Mostrar la URL del documento principal
        console.log(parentWindow.document.URL);
    </script>
</body>
</html>
```

En este ejemplo:

1. **Acceder al `window` principal**: `window.parent` obtiene el objeto `window` del documento principal.
2. **Acceder al objeto `document` del `window` principal**: `parentWindow.document` obtiene el objeto `document` del documento principal.

## Restricciones de Seguridad

Ten en cuenta que hay restricciones de seguridad (debido a la política de mismo origen) cuando intentas acceder al contenido de `iframe`s que cargan documentos desde diferentes dominios. Si los documentos no comparten el mismo origen (protocolo, dominio y puerto), el navegador bloqueará el acceso para prevenir ataques de cross-site scripting (XSS).

### Conclusión

Un `iframe` permite incrustar un documento HTML dentro de otro, proporcionando una manera de cargar contenido externo en una página web. Los objetos `window` y `document` de un `iframe` pueden interactuar con el `window` y `document` principal, permitiendo acceso y manipulación de contenido, aunque con restricciones de seguridad para prevenir accesos no autorizados a contenido de diferentes orígenes.

Claro, aquí tienes una explicación detallada sobre las diferentes formas de seleccionar múltiples elementos en el DOM utilizando JavaScript, junto con ejemplos prácticos basados en el código que has proporcionado.

## Selección de Múltiples Elementos en el DOM

### 1. `document.querySelector`
`document.querySelector` selecciona el primer elemento que coincide con un selector CSS dado. Devuelve un único elemento, o `null` si no se encuentra ningún elemento que coincida.

**Ejemplo:**
```javascript
const mainHeading = document.querySelector('.mainHeading');
console.log(mainHeading);
```
**Resultado:**
- Devuelve el primer elemento con la clase `mainHeading`.
- Si no hay elementos que coincidan, devuelve `null`.

**Uso:**
- Útil para seleccionar un único elemento específico.
- Se puede trabajar directamente con el elemento devuelto.

### 2. `document.querySelectorAll`
`document.querySelectorAll` selecciona todos los elementos que coinciden con un selector CSS dado. Devuelve una NodeList, que es una colección estática de elementos.

**Ejemplo:**
```javascript
const headings = document.querySelectorAll('div');
console.log(headings);
```
**Resultado:**
- Devuelve una NodeList que contiene todos los elementos `<div>` en el documento.
- Si no hay elementos que coincidan, devuelve una NodeList vacía.

**Uso:**
- Útil para seleccionar múltiples elementos y aplicar acciones a cada uno.
- Se puede iterar sobre la NodeList utilizando `forEach` o transformarla en un array si es necesario.

### 3. `document.getElementsByClassName`
`document.getElementsByClassName` selecciona todos los elementos que tienen una clase específica. Devuelve una HTMLCollection, que es una colección en vivo de elementos.

**Ejemplo:**
```javascript
const elements = document.getElementsByClassName('mainHeading');
console.log(elements);
```
**Resultado:**
- Devuelve una HTMLCollection con todos los elementos que tienen la clase `mainHeading`.
- La HTMLCollection se actualiza automáticamente si el DOM cambia.

**Uso:**
- Útil para seleccionar elementos por clase.
- Se puede iterar sobre la HTMLCollection usando un bucle `for`.

### 4. `document.getElementsByTagName`
`document.getElementsByTagName` selecciona todos los elementos con un nombre de etiqueta específico. Devuelve una HTMLCollection.

**Ejemplo:**
```javascript
const divs = document.getElementsByTagName('div');
console.log(divs);
```
**Resultado:**
- Devuelve una HTMLCollection con todos los elementos `<div>` en el documento.
- La HTMLCollection se actualiza automáticamente si el DOM cambia.

**Uso:**
- Útil para seleccionar todos los elementos de un tipo específico.

## Comparación de Resultados y Uso

- **NodeList vs HTMLCollection**:
  - **NodeList**: Estática, no se actualiza automáticamente si el DOM cambia. Puede iterarse con `forEach`.
  - **HTMLCollection**: En vivo, se actualiza automáticamente si el DOM cambia. Necesita un bucle `for` o transformarse en un array para usar `forEach`.

## Ejemplo Práctico

#### HTML
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>DOM Selection</title>
  <style>
    .hideElement {
      visibility: hidden;
    }
    .showElement {
      display: block;
    }
  </style>
</head>
<body>
  <div class="widget showElement">
    <div class="mainHeading">
      <h1>Hi there</h1>
    </div>
    <div class="subHeading">
      My Amazing subheading...
    </div>
  </div>
  <button onclick="contentToggle()">Toggle Content</button>
  <script>
    // Selección de elementos
    const widget = document.querySelector('.widget');
    const mainHeading = document.querySelector('.mainHeading');
    const headings = document.querySelectorAll('div');

    // Función para alternar la visibilidad del contenido
    function contentToggle() {
      if (widget.classList.contains('showElement')) {
        widget.classList.remove('showElement');
        widget.classList.add('hideElement');
      } else {
        widget.classList.remove('hideElement');
        widget.classList.add('showElement');
      }
    }

    // Alternativa utilizando querySelectorAll para múltiples elementos
    function contentToggleMultiple() {
      headings.forEach((heading) => {
        if (heading.classList.contains('showElement')) {
          heading.classList.remove('showElement');
          heading.classList.add('hideElement');
        } else {
          heading.classList.remove('hideElement');
          heading.classList.add('showElement');
        }
      });
    }
  </script>
</body>
</html>
```

### Explicación del Código

1. **Selección de un único elemento**:
   ```javascript
   const mainHeading = document.querySelector('.mainHeading');
   ```
   - Selecciona el primer elemento con la clase `mainHeading`.
   
2. **Selección de múltiples elementos**:
   ```javascript
   const headings = document.querySelectorAll('div');
   ```
   - Selecciona todos los elementos `<div>`, devolviendo una NodeList.

3. **Alternar la visibilidad de contenido**:
   ```javascript
   const widget = document.querySelector('.widget');
   
   function contentToggle() {
     if (widget.classList.contains('showElement')) {
       widget.classList.remove('showElement');
       widget.classList.add('hideElement');
     } else {
       widget.classList.remove('hideElement');
       widget.classList.add('showElement');
     }
   }
   ```
   - Alterna entre mostrar y ocultar el contenido del elemento con la clase `widget`.

4. **Alternativa con múltiples elementos**:
   ```javascript
   function contentToggleMultiple() {
     headings.forEach((heading) => {
       if (heading.classList.contains('showElement')) {
         heading.classList.remove('showElement');
         heading.classList.add('hideElement');
       } else {
         heading.classList.remove('hideElement');
         heading.classList.add('showElement');
       }
     });
   }
   ```
   - Alterna la visibilidad de todos los elementos `<div>` seleccionados.

Este enfoque te permite trabajar con diferentes métodos de selección de elementos en el DOM y comprender cómo manipular los elementos seleccionados según tus necesidades.

## Aplicar  Event Listener

Partimos del siguiente código html y script:

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title></title>
</head>

<style>
  img {
    width: 400px;
  }
  .container {
    position: relative;
    text-align: center;
    color: white;
  }
  .show-img-overlay {
    position: relative;
    bottom: 60px;
    font-size: 21px;
    font-family: Arial, Helvetica, sans-serif;
  }
  .hide-img-overlay {
    position: relative;
    bottom: 60px;
    font-size: 21px;
    color: transparent;
  }
</style>
<body>

  <div class="container">
    <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/laptop.jpg" class="site-img" alt="Laptop">
    <div class="hide-img-overlay">Image Description</div>
  </div>

  <div class="container">
    <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/another-laptop.jpg" class="site-img" alt="Laptop">
    <div class="hide-img-overlay">Some Other Image Description</div>
  </div>

</body>

<script>
  const img = document.getElementsByClassName('site-img')[0];
  img.addEventListener('click', (e) => {
    debugger;
  });
  const imgs = document.querySelectorAll('.site-img');
  imgs.forEach(img => {
    img.addEventListener('mouseover', (event) => {
      const captionElement = event.target.parentElement.children[1];
      captionElement.className = 'show-img-overlay';
    });
  });
  imgs.forEach(img => {
    img.addEventListener('mouseout', (event) => {
      const captionElement = event.target.parentElement.children[1];
      captionElement.className = 'hide-img-overlay';
    });
  });
</script>
</html>

```

## Explicación del código

### Desglose del Código HTML y CSS

El HTML crea dos contenedores (`<div class="container">`), cada uno con una imagen (`<img class="site-img">`) y un elemento de descripción (`<div class="hide-img-overlay">`):

```html
<div class="container">
  <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/laptop.jpg" class="site-img" alt="Laptop">
  <div class="hide-img-overlay">Image Description</div>
</div>

<div class="container">
  <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/another-laptop.jpg" class="site-img" alt="Laptop">
  <div class="hide-img-overlay">Some Other Image Description</div>
</div>
```

### Desglose del Código JavaScript

1. **Seleccionar y añadir eventos a las imágenes**:

```javascript
const imgs = document.querySelectorAll('.site-img');
```

- Selecciona todas las imágenes con la clase `site-img`.

2. **Agregar el evento `mouseover`**:

```javascript
imgs.forEach(img => {
  img.addEventListener('mouseover', (event) => {
    const captionElement = event.target.parentElement.children[1];
    captionElement.className = 'show-img-overlay';
  });
});
```

- **Evento**: Al pasar el ratón sobre cualquier imagen (`mouseover`), se ejecuta la función.
- **`event.target`**: Hace referencia a la imagen (`<img>`) que disparó el evento.
- **`event.target.parentElement`**: Hace referencia al elemento padre de la imagen, que es el `<div class="container">`.
- **`parentElement.children[1]`**: Accede al segundo hijo del `<div class="container">`, que es el `<div class="hide-img-overlay">`.

3. **Agregar el evento `mouseout`**:

```javascript
imgs.forEach(img => {
  img.addEventListener('mouseout', (event) => {
    const captionElement = event.target.parentElement.children[1];
    captionElement.className = 'hide-img-overlay';
  });
});
```

- **Evento**: Al mover el ratón fuera de cualquier imagen (`mouseout`), se ejecuta la función.
- **`captionElement.className`**: Cambia la clase del segundo hijo (`children[1]`) del contenedor para ocultar la descripción.

### Explicación Detallada

- **`event.target`**: En el contexto de un evento, `event.target` es el elemento que disparó el evento. En este caso, es la imagen sobre la que se pasó el ratón o fuera de la cual se movió el ratón.
- **`event.target.parentElement`**: Este accede al padre del elemento que disparó el evento, que es el contenedor `<div class="container">`.
- **`parentElement.children`**: Este accede a la colección de hijos del contenedor. `children` es una HTMLCollection que contiene todos los elementos hijos.
- **`children[1]`**: Accede al segundo hijo del contenedor (índice 0 es el primer hijo, índice 1 es el segundo). En ambos casos, el segundo hijo es el `<div class="hide-img-overlay">` que contiene la descripción de la imagen.

### Visualización de la Estructura del DOM

Para el primer contenedor:

```html
<div class="container">
  <img src="..." class="site-img">
  <div class="hide-img-overlay">Image Description</div>
</div>
```

- `children[0]`: `<img src="..." class="site-img">`
- `children[1]`: `<div class="hide-img-overlay">Image Description</div>`

Para el segundo contenedor:

```html
<div class="container">
  <img src="..." class="site-img">
  <div class="hide-img-overlay">Some Other Image Description</div>
</div>
```

- `children[0]`: `<img src="..." class="site-img">`
- `children[1]`: `<div class="hide-img-overlay">Some Other Image Description</div>`

En ambos casos, `children[1]` se refiere al `<div>` que contiene la descripción de la imagen, lo cual explica por qué el índice `1` funciona correctamente en el código.

### Diferentes Formas de Manejar Eventos en JavaScript

Existen dos formas principales de manejar eventos en JavaScript:

1. **Incrustando el manejador de eventos directamente en el HTML** usando el atributo `onclick`.
2. **Añadiendo el manejador de eventos en JavaScript** utilizando métodos como `addEventListener`.

### Ejemplo Completo

#### HTML
```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Event Handling Example</title>
</head>
<body>
  <div id="dateComponent"></div>
  <button id="dateBtn">Click for Date</button>
  <!-- <button onclick="renderDate()">Click for Date</button> -->
</body>
<script>
  const dateElement = document.getElementById('dateComponent');
  const dateBtn = document.getElementById('dateBtn');

  // Forma 1: Agregar el manejador de eventos directamente en el HTML (comentado)
  // function renderDate() {
  //   dateElement.innerHTML = Date();
  // }

  // Forma 2: Agregar el manejador de eventos usando JavaScript
  dateBtn.addEventListener('click', (event) => {
    dateElement.innerHTML = Date();
  });
</script>
</html>
```

## Formas de Añadir un eventListener

### 1. Usando el Atributo `onclick` en el HTML

```html
<button onclick="renderDate()">Click for Date</button>
```

- **Ventajas**:
  - Simplicidad: Es fácil de entender y de implementar rápidamente.
  - Visibilidad: El código HTML muestra claramente qué elemento está asociado con qué función de JavaScript.

- **Desventajas**:
  - **Mantenimiento**: El código JavaScript mezclado con HTML puede dificultar la lectura y el mantenimiento del código, especialmente en proyectos grandes.
  - **Escalabilidad**: Si necesitas agregar múltiples manejadores de eventos o cambiar la lógica, se vuelve complicado.
  - **Separación de Responsabilidades**: No sigue la buena práctica de mantener la estructura del documento (HTML), el estilo (CSS) y el comportamiento (JavaScript) separados.

### 2. Usando `addEventListener` en JavaScript

```javascript
const dateBtn = document.getElementById('dateBtn');
dateBtn.addEventListener('click', (event) => {
  const dateElement = document.getElementById('dateComponent');
  dateElement.innerHTML = Date();
});
```

- **Ventajas**:
  - **Separación de Responsabilidades**: Mantiene el HTML limpio y separado del comportamiento. Facilita la lectura y el mantenimiento del código.
  - **Flexibilidad**: Permite agregar múltiples eventos al mismo elemento sin sobrescribir los anteriores.
  - **Escalabilidad**: Es más fácil de gestionar en aplicaciones más grandes y complejas.

- **Desventajas**:
  - **Inicialización**: Requiere que el DOM esté completamente cargado antes de que se adjunten los manejadores de eventos, aunque esto se puede manejar fácilmente con eventos como `DOMContentLoaded`.

### Buenas Prácticas y Recomendaciones

**Recomendación**: Usar `addEventListener` en JavaScript es generalmente considerado una mejor práctica por las siguientes razones:

1. **Separación de Responsabilidades**: Mantiene el HTML, CSS y JavaScript separados, lo que mejora la legibilidad y mantenibilidad del código.
2. **Mantenibilidad**: Facilita el mantenimiento del código, especialmente en proyectos grandes o cuando trabajas en equipo.
3. **Flexibilidad**: Permite añadir, modificar y eliminar manejadores de eventos de manera más flexible y sin modificar el HTML.
4. **Escalabilidad**: Es más adecuado para aplicaciones grandes donde se requiere una gestión más compleja de eventos.

### Conclusión

Aunque ambos métodos son válidos y tienen sus usos, el uso de `addEventListener` es generalmente preferible para proyectos más complejos y profesionales debido a su flexibilidad, mejor separación de responsabilidades y facilidad de mantenimiento.

Para lograr cambiar el estilo de borde mediante clases CSS ya definidas en lugar de manipular directamente el estilo en el `addEventListener`, puedes agregar y quitar clases en los eventos `mouseover` y `mouseout`. Esto es una práctica recomendada ya que mantiene la separación de responsabilidades y facilita el mantenimiento del código.

A continuación, te muestro cómo hacerlo:

1. **Definir las clases CSS para los diferentes estados**:
   - `border-red`: Para cuando el borde debe ser rojo.
   - `border-transparent`: Para cuando el borde debe ser transparente (esta clase es la predeterminada).

2. **Agregar y quitar las clases CSS en los eventos de ratón**.

## Cambio de estilo a un elemento

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title>Change Border Style</title>

  <style>
    img {
      width: 400px;
    }
    .site-img {
      border-right: 40px solid transparent; /* Predeterminado */
    }
    .border-red {
      border-right: 40px solid red;
    }
    .border-transparent {
      border-right: 40px solid transparent;
    }
  </style>
</head>
<body>
  <div class='container'>
    <img src="https://s3.amazonaws.com/bottega-devcamp/browser-js/laptop.jpg" class="site-img border-transparent" alt="Laptop">
  </div>
</body>

<script>
  const laptop = document.querySelector('.site-img');

  laptop.addEventListener('mouseover', () => {
    laptop.classList.remove('border-transparent');
    laptop.classList.add('border-red');
  });

  laptop.addEventListener('mouseout', () => {
    laptop.classList.remove('border-red');
    laptop.classList.add('border-transparent');
  });
</script>
</html>
```

### Explicación

1. **CSS**:
   - La clase `.border-red` establece el borde derecho en rojo.
   - La clase `.border-transparent` establece el borde derecho en transparente.
   - La clase `.site-img` tiene un ancho de borde derecho predeterminado de 40px.

2. **JavaScript**:
   - `laptop.addEventListener('mouseover', () => { ... })`: Cuando el ratón pasa sobre la imagen, se quita la clase `border-transparent` y se agrega la clase `border-red`.
   - `laptop.addEventListener('mouseout', () => { ... })`: Cuando el ratón sale de la imagen, se quita la clase `border-red` y se agrega la clase `border-transparent`.

Esto mantiene tu HTML y CSS más limpios y hace que tu JavaScript sea más manejable y fácil de mantener, ya que separa claramente el estilo del comportamiento.

Otra forma de cambiar las clases sería así:

```javascript
  const laptop = document.querySelector('.site-img');

  laptop.addEventListener('mouseover', () => {
    if (!laptop.classList.contains('border-red')) {
      laptop.classList.add('border-red');
    }
  });

  laptop.addEventListener('mouseout', () => {
    if (laptop.classList.contains('border-red')) {
      laptop.classList.remove('border-red');
    }
  });
```
Siempre teniendo como pasa en este código aportado de html, que solo devuelve un elemento, no varios. De tratarse de varios elementos:

```javascript
 const laptops = document.querySelectorAll('.site-img');

  laptops.forEach(laptop => {
    laptop.addEventListener('mouseover', () => {
      if (!laptop.classList.contains('border-red')) {
        laptop.classList.add('border-red');
      }
    });

    laptop.addEventListener('mouseout', () => {
      if (laptop.classList.contains('border-red')) {
        laptop.classList.remove('border-red');
      }
    });
  });
```

## Aparecer y desaparecer parte del DOM 

```html
   <!DOCTYPE html>
   <html lang='en'>
      <head>
      <meta charset='UTF-8'>
      <title></title>
      </head>

      <style>
      .hidden {
         display: none;
      }
      </style>
      <body>

         <button id="toggleBtn">Toggle Me</button>

         <div id="mainHeading" class="hidden">
            Hi there
         </div>

      </body>

      <script>
         const heading = document.getElementById('mainHeading');
         const btn = document.getElementById('toggleBtn');
         btn.addEventListener('click', (e) => {
            heading.classList.toggle('hidden'); // Elimina la clase hidden
         });
      </script>
   </html>

```

Este código muestra un botón que, cuando se hace clic, alterna la visibilidad de un elemento `div` con un identificador `mainHeading`. El elemento `div` tiene una clase inicial llamada `hidden`, que establece su estilo para que no sea visible (`display: none;`). Cuando se hace clic en el botón, se agrega o elimina dinámicamente la clase `hidden` del elemento `div`, lo que resulta en la aparición o desaparición del elemento según su estado actual.

### Ejercicio para contar caracteres en un input y deshabilitar el input cuando llegue al límite:

```html
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <title></title>
</head>
<body>
  <input type="text" class="msgInput">

  <div>
    Characters left <span class="msgCounter"></span>
  </div>
</body>

<script>
  const getCurrentContentLength = (content, max) => {
    const maxLength = max;
    if (content.length > maxLength) {
      return false;
    } else {
      return true;
    }
  }
  const msgInput = document.querySelector('.msgInput');
  const counter = document.querySelector('.msgCounter');
  const max = 20;
  // Nope
  // msgInput.addEventListener('keyup', (e) => {
  //   console.log(e);
  // });
  msgInput.onkeyup = function() {
    counter.innerHTML = max - this.value.length;
    if(!getCurrentContentLength(this.value, (max - 1))) {
      msgInput.disabled = true;
    }
  }
</script>
</html>
```
Este código JavaScript se encarga de mostrar un contador de caracteres en tiempo real mientras el usuario escribe en un campo de entrada (`<input type="text" class="msgInput">`). El contador muestra cuántos caracteres quedan disponibles para escribir en el campo y se actualiza dinámicamente mientras el usuario escribe.

### Explicación del Script:

1. **Función `getCurrentContentLength(content, max)`**:
   - Esta función toma dos argumentos: `content`, que representa el contenido actual del campo de entrada, y `max`, que representa el número máximo de caracteres permitidos.
   - La función comprueba si la longitud del contenido (`content.length`) es mayor que la longitud máxima permitida (`max`). Si es mayor, devuelve `false`, indicando que se ha excedido el límite de caracteres. De lo contrario, devuelve `true`.

2. **Selección de elementos**:
   - `msgInput` y `counter` son variables que almacenan referencias al campo de entrada y al elemento `<span>` que mostrará el contador de caracteres, respectivamente.

3. **Definición de la longitud máxima**:
   - `max` se establece en 20, lo que significa que el número máximo de caracteres permitidos en el campo de entrada es 20.

4. **Evento `onkeyup`**:
   - Se asigna un evento `onkeyup` al campo de entrada (`msgInput`). Este evento se activa cada vez que se suelta una tecla mientras se escribe en el campo de entrada.
   - En cada evento `onkeyup`, se actualiza el contenido del contador de caracteres (`counter.innerHTML`) para mostrar cuántos caracteres quedan disponibles. Se calcula restando la longitud del valor actual del campo de entrada (`this.value.length`) del límite máximo (`max`).
   - Si la longitud del valor actual del campo de entrada supera `(max - 1)`, se deshabilita el campo de entrada (`msgInput.disabled = true;`). Esto asegura que no se puedan ingresar más caracteres una vez que se alcanza el límite máximo.

### Uso de Funciones Flecha:

La función `getCurrentContentLength` está definida como una función tradicional en lugar de una función flecha. Esto se debe a que la función necesita acceder a la palabra clave `this` para obtener el valor del argumento `content`. Dentro de una función flecha, `this` se enlaza léxicamente y no cambia según el contexto de ejecución, lo que puede causar problemas en este escenario. Por lo tanto, para garantizar que `this` se refiera al objeto correcto (en este caso, al campo de entrada), se utiliza una función tradicional en lugar de una función flecha.

## Encapsular funciones

Este código JavaScript se encarga de mostrar un contador de caracteres en tiempo real mientras el usuario escribe en dos campos de entrada de texto (`<input type="text">`). Uno de los campos es para mensajes (`msgInput`) y el otro es para etiquetas (`tagsInput`).

### Explicación del Script:

1. **Función `getCurrentContentLength(content, max)`**:
   - Esta función toma dos argumentos: `content`, que representa el contenido actual del campo de entrada, y `max`, que representa el número máximo de caracteres permitidos.
   - La función comprueba si la longitud del contenido (`content.length`) es mayor que la longitud máxima permitida (`max`). Si es mayor, devuelve `false`, indicando que se ha excedido el límite de caracteres. De lo contrario, devuelve `true`.

2. **Selección de elementos**:
   - `msgInput`, `msgCounter`, `tagsInput` y `tagsCounter` son variables que almacenan referencias a los elementos HTML correspondientes: los campos de entrada (`msgInput` y `tagsInput`) y los contadores de caracteres (`msgCounter` y `tagsCounter`).

3. **Definición de la longitud máxima**:
   - Se establece un límite máximo de caracteres para cada campo de entrada: 144 caracteres para el campo de mensajes (`msgInput`) y 42 caracteres para el campo de etiquetas (`tagsInput`).

4. **Función `textFieldLengthValidator`**:
   - Esta función toma tres argumentos: `textField` (campo de entrada de texto), `counter` (contador de caracteres) y `maxCount` (límite máximo de caracteres).
   - Se asigna un evento `onkeyup` al campo de entrada (`textField`). Este evento se activa cada vez que se suelta una tecla mientras se escribe en el campo de entrada.
   - En cada evento `onkeyup`, se actualiza el contenido del contador de caracteres (`counter.innerHTML`) para mostrar cuántos caracteres quedan disponibles. Se calcula restando la longitud del valor actual del campo de entrada (`this.value.length`) del límite máximo (`maxCount`).
   - Si la longitud del valor actual del campo de entrada supera `(maxCount - 1)`, se deshabilita el campo de entrada (`textField.disabled = true;`). Esto asegura que no se puedan ingresar más caracteres una vez que se alcanza el límite máximo.

5. **Aplicación de la función `textFieldLengthValidator`**:
   - Se aplica la función `textFieldLengthValidator` dos veces: una vez para el campo de mensajes (`msgInput`) y otra vez para el campo de etiquetas (`tagsInput`). Cada aplicación de la función configura el contador de caracteres y el límite máximo para el campo de entrada correspondiente.

### Uso de Funciones Flecha:

El código proporcionado demuestra un enfoque de reutilización del código mediante la creación de una función (`textFieldLengthValidator`) que encapsula la lógica común para validar la longitud de un campo de entrada de texto y actualizar un contador de caracteres. Esta abstracción permite reutilizar esta funcionalidad para múltiples campos de entrada sin tener que duplicar el código.

### Ventajas de la Reutilización del Código:

1. **Escalabilidad y Mantenimiento:**
   - Al encapsular la lógica de validación y actualización del contador en una función reutilizable, se facilita la adición de nuevos campos de entrada en el futuro. Si se necesita aplicar la misma funcionalidad a otro campo de entrada, simplemente se puede llamar a la función `textFieldLengthValidator` con los parámetros adecuados, en lugar de tener que escribir el código nuevamente para cada campo de entrada adicional. Esto hace que el código sea más escalable y fácil de mantener.

2. **Consistencia:**
   - Al utilizar la misma función para validar y actualizar los campos de entrada y los contadores de caracteres, se garantiza una consistencia en el comportamiento en toda la aplicación. Esto ayuda a evitar errores y asegura una experiencia de usuario coherente.

3. **Abstracción de la Lógica:**
   - Al abstraer la lógica común en una función separada, se mejora la legibilidad y la comprensión del código. En lugar de tener un código repetitivo disperso por diferentes partes del script, la lógica está encapsulada en una única función, lo que hace que el código sea más fácil de entender y mantener.

4. **Facilita la Modificación:**
   - Si se necesita modificar la lógica de validación o la presentación del contador de caracteres en el futuro, solo se necesita hacer cambios en una única ubicación: la función `textFieldLengthValidator`. Esto asegura que los cambios se reflejen de manera consistente en todos los campos de entrada donde se utiliza la función.

## Insertar elementos dentro de un DOM

### Insertar un párrafo `p` dentro de un div

```javascript
   <div id='parent'></div>

- const newParagraph = document.createElement('p'); // Crea un nuevo elemento de párrafo
- const newContent = document.createTextNode('Hello'); // Crea un nodo de texto con el contenido "Hello"
- newParagraph.appendChild(newContent); // Agrega el nodo de texto al nuevo párrafo
- const containerDiv = document.querySelector('#parent'); // Selecciona el div con el id 'parent'
- containerDiv.appendChild(newParagraph); // Inserta el nuevo párrafo dentro del div seleccionado
```




## Crear atajos de teclado en Javascript:

Este documento HTML incluye un campo de entrada (`input`) y un script en JavaScript que define un comportamiento específico cuando se presionan ciertas teclas (combinación de teclas). A continuación se desglosa el código y su funcionalidad:

#### HTML

```html
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='UTF-8'>
  <title></title>
</head>

<body>

  <input type="text" id="searchBar" />

</body>

<script>
  const hotKeys = (e) => {
    let windowEvent = window.event ? event : e;
    if (windowEvent.keyCode == 66 && windowEvent.ctrlKey) {
      const searchBar = document.querySelector('#searchBar');
      searchBar.focus();
    }
  }
  document.onkeydown = hotKeys;
</script>

</html>
```

## Descripción del Código

### HTML

1. **Campo de Entrada:**
   - `<input type="text" id="searchBar" />`: Define un campo de texto con el identificador `searchBar`.

### JavaScript

1. **Definición de la Función `hotKeys`:**
   - `const hotKeys = (e) => { ... }`: Define una función de flecha llamada `hotKeys` que recibe un evento `e` como parámetro.

__El Problema de Compatibilidad__

En navegadores modernos, el objeto evento se pasa como parámetro a la función de evento (e en este caso). Sin embargo, en versiones antiguas de Internet Explorer (antes de IE9), el objeto evento no se pasa como parámetro. En su lugar, está disponible como una propiedad global window.event.


__La Solución__

1. **Manejo del Evento:**
   - `let windowEvent = window.event ? event : e;`: Comprueba si `window.event` está definido (para compatibilidad con IE) y asigna el evento correspondiente a `windowEvent`.

La línea `let windowEvent = window.event ? event : e;` soluciona este problema de compatibilidad al hacer lo siguiente:

* Comprueba si window.event está definido:

   `window.event ? event : e` utiliza un operador ternario para verificar si window.event existe.
   Si window.event está definido (lo cual es cierto en navegadores antiguos como IE), asigna event (que es el objeto evento global) a la variable windowEvent.

* De lo contrario, utiliza el parámetro e:

   Si window.event no está definido (lo cual es el caso en navegadores modernos), asigna el parámetro e (el objeto evento pasado a la función) a windowEvent.
   
2. **Detección de la Combinación de Teclas:**
   - `if (windowEvent.keyCode == 66 && windowEvent.ctrlKey) { ... }`: Comprueba si la tecla presionada es 'B' (código de tecla 66) y si la tecla 'Control' está presionada al mismo tiempo.
   
3. **Enfoque en el Campo de Entrada:**
   - `const searchBar = document.querySelector('#searchBar');`: Selecciona el elemento con el identificador `searchBar`.
   - `searchBar.focus();`: Establece el foco en el campo de entrada `searchBar`.

4. **Asignación del Manejador de Eventos:**
   - `document.onkeydown = hotKeys;`: Asigna la función `hotKeys` como manejador del evento `keydown` del documento.

### Funcionalidad

Cuando el usuario presiona la combinación de teclas `Ctrl + B` en cualquier lugar del documento, el foco se trasladará automáticamente al campo de entrada de texto con el identificador `searchBar`.

### Propósito del Script

Este script es útil para mejorar la accesibilidad y la usabilidad del sitio web, permitiendo a los usuarios navegar rápidamente al campo de búsqueda mediante una combinación de teclas, sin necesidad de usar el mouse.

## Inserción de elementos en el DOM

