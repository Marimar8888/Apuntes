# PREGUNTAS


## 1.- ¿Cuál es un objetivo primordial?

Para poder construir una nueva aplicación o una nueva funcionalidad de una aplicación, es muy importante saber la intención de uso, que pretende conseguir con ello, para qué la quieren utilizar, a que tipo de usuario final va dirigido, de lo contrario es muy probable que trabajemos en balde, porque finalmente no se conseguirá crear algo que sea útil o aprovechable.

Es por ello, que antes de comenzar a hacer cualquier cosa, es importante una buena comunicación con el cliente para que defina claramente todo ello y podamos crear algo que cumpla con esas expectativas.

## 2.- ¿Qué son los wireframes de baja fidelidad?

Los wireframes son diagramas. Los hay de diferentes tipos y el de baja fidelidad, lo que muestra principalmente son los objetos que debe tener cada pantalla para el uso correcto y completo por parte del usuario. Pueden ser botones, barra de busqueda, enlaces, una foto del perfil de usuario...., pero sin dar detalles concretos de la apariencia de cada uno de ellos.

## 3.- ¿Qué es Git?

Se trata de un control de versiones de código abierto y distribuido.

Nos permite guardar cada nueva versión del código de la aplicación, pero solo los cambios realizados en cada una de esas versiones, no replica la aplicación por completo, sino las líneas que se han modificado. De esta forma es mucho más fácil de revertir en caso de problemas y de revisar el mismo en caso de errores.

Es de código abierto. ya que está creado y mantenido por la comunidad de desarrolladores y se puede utilizar sin ningún coste.

Es distribuido. Existe un servidor que dispone del repositorio con las versiones, pero también hay una copia de dicho repositorio en local, en cada ordenador de trabajo. Permite trabajar sin estar conectado, cada desarrollador puede ir creando sus versiones sin tener que subirlo directamente al servidor. Es más seguro ya que al tener copias en diferentes ordenadores es más difícil que se pueda perder.

## 4.- ¿Qué es un sitemap?

Sería el esquema que debería responder a cada historia de usuario y por tanto habría que hacer un sitemap por cada una de ellas.

Todos los usuarios no suelen tener la posibilidad de realizar todas las funcionalidades que hay en la aplicación, no todos los usuarios tienen acceso a todas las partes de la aplicación/web y por tanto hay que hacer un esquema/diagrama, que explique a que páginas puede acceder y que acciones puede realizar dentro de ellas.
 

 # Wireframe CodePen

 Realizado con Lucid Chart.

 # Colores

 ## Identificar dos o tres colores del sitio web:

 https://sebkay.com/ 

 Para el fondo de pantalla de toda la página web utiliza una imagen en el elemento html:
 background-image: linear-gradient(to bottom,rgba(75,108,193,.1) 0vh,rgb(255,255,255) 100vh);

 Para los textos utiliza diferentes tonalidades del negro por ejemplo:
 - Para los enlaces del menu_item utiliza para el texto el color: #5E5E5E
 - Para el texto del logo utiliza la clase logo_text, cuyo color: #191A1D
 - Para los textos de la página utiliza principalmente el color: #333333

Combinado con el texto que hace de enlace que utiliza tonalidades de azul como por ejemplo #4B6CC1

Para la etiquita de categorias utiliza un color rojo #F9322C

# Historia de Usuario

### Como usuario de Youtube sin inicio de sesión.

### Quiero poder ver videos relevantes rápido y de forma segura.

### Para poder acceder rápido y fácilmente al contenido que me interesa sin necesidad de crear una cuenta o iniciar sesión.

### Criterios de aceptación:

1.- La reproducción automática de videos debería basarse en el historial de reproducciones y las tendencias de Youtube, en lugar de en datos específicos de la cuenta de usuario, ya que no hay una sesión iniciada, donde si se puede personalizar la experiencia del usuario.

2.- Si el usuario nunca ha utilizado Youtube anteriormente, la reproducción automática debería comenzar con contenido popular o tendencias relevantes.

3.- La reproducción automática no debe incluir contenido inapropiado y debe ser apto para todas las edades, asegurando que la experiencia para el usuario sea segura y apropiada para cualquier edad.

4.- Cuando un video llega a su fin, la aplicación debería comenzar automáticamente a reproducir un video relacionado en función del contenido del video que acaba de finalizar. 

5.- La reproducción debe detenerse si el usuario pausa manualmente el video o si visualizar otro contenido.

6.- La reproducción automática debe poder desactivarse fácilmente y estar disponible incluso para los usuarios que no tengan sesión iniciada.


# El objetivo principal de Youtube

El objetivo principal es proporcionar una plataforma lider en línea, donde los usuarios puedan visualizar, compartir y cargar videos de una gran variedad de temas. Ofrecer una experiencia de entretenimiento, informativa y educativa en todo el mundo. Conectando a personas de todo el mundo con los contenidos que les interesa y les entretenga.


# ¿Cuáles son las diferencias entre las aplicaciones monolíticas y de microservicios?

Las aplicaciones monolíticas tienen una estructura única, todos los componentes de la aplicación se encuentran integrados en una base, donde todo afecta a todo. Cuando falla algo termina afectando a toda la aplicación. También son mucho más difíciles de mantener y extender.

Las aplicaciones microservicios se componen de capas y cada servicio es independiente, con lo que si una parte de la aplicación falla no afecta al resto. Esto lo hace mucho más fácil de mantener y de extender.