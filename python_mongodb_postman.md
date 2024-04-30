# Documentación Sección Python, MongoDB y Postman

## ¿Cuáles son los 4 tipos de datos en Python?

Hay más de 4 tipos de datos en Python, pero ya que se pide sólo 4 diré los siguientes:

1. `Boolean`, cuyos valores pueden ser True o False y que nos sirve para poder controlar el control del
flujo con preguntas lógicas usando if, while, do… while etc.

2. `Numbers`, divididos principalmente en enteros (int) y decimales (float).

3. `String`. Cadenas cortas o largas. Estas se tienen que crear con una coma simple o compuesta al
inicio y final de la cadena. Si dicha cadena se compusiera por un string multilinea donde existen
saltos de linea, se tienen que utilizar 3 comillas dobles al inicio y al final, convirtiéndose en un
Heredoc.

4. `Listas`. Las cuales pueden estar compuestas por string, numeros, booleanos…. Para crear la lista
debe iniciar y finalizar con un corchete.

## ¿Cuáles son los 4 tipos de datos en Python?

Hay más de 4 tipos de datos en Python, pero ya que se pide sólo 4 diré los siguientes:

1. `Boolean`, cuyos valores pueden ser True o False y que nos sirve para poder controlar el control del
flujo con preguntas lógicas usando if, while, do… while etc.

2. `Numbers`, divididos principalmente en enteros (int) y decimales (float).

3. `String`. Cadenas cortas o largas. Estas se tienen que crear con una coma simple o compuesta al
inicio y final de la cadena. Si dicha cadena se compusiera por un string multilinea donde existen
saltos de linea, se tienen que utilizar 3 comillas dobles al inicio y al final, convirtiéndose en un
Heredoc.

4. `Listas`. Las cuales pueden estar compuestas por string, numeros, booleanos…. Para crear la lista
debe iniciar y finalizar con un corchete.

## ¿Qué tipo de convención de nomenclatura debemos usar para las variables en Python?

El nombre de la variable el signo igual y el dato. Dependiendo de si se trata de un número no hay que poner nada, tan sólo el número y python autómaticamente sabe de que tipo de dato se trata.Si es una string irá entre comillas, si es un Boolean, se debe poner la primera letra en mayúsculas True o False y sabrá que se trata de un booleano.

No hace falta hacer ninguna mención al tipo de dato, como pasa en otros lenguajes como es el caso de java.

## ¿Qué es un heredoc de Python?

Se trata de una cadena multilinea, donde existen líneas en blanco entre medias. No podremos usar comillas simples o una comilla doble al inicio y final del texto, porque nos reconocería el string hasta el final del primer párrafo el resto no lo recogería.

Es por eso que hay que utilizar 3 comillas dobles al inicio y final del texto.

## ¿Qué es la interpolación de cadenas?

Con la interpolación se consigue insertar datos de forma dinámica dentro de un texto fijo. Estos datos están guardados en variables y lo que se inserta en el texto fijo es la variable en cuestión, mediante unas `{ }`.

Para que python sepa que existe interpolación se tiene que poner una f delante de las “”” comillas que van al inicio del texto y que genera un heredoc.

Un ejemplo de como utilizar esta interpolación es en los emails automáticos que se recibe después de inscribirte en una web o de realizar una compra online. Normalmente esos correos llegan al usuario de forma personalizada, con su nombre real o nombre de usuario, con el importe ha pagado o datos de productos adquiridos….

## ¿Cuándo debemos usar comentarios en Python?

El problema principal de los comentarios es que no se suelen actualizar cuando el código varía y finalmente terminan quedando obsoletos y en lugar de ayudar pueden confundir o generar problemas.

Es por eso que se recomienda que se usen sobre todo cuando se trata de comentarios que genera la aplicación y los actualiza automáticamente, ya que de esta forma estarán actualizados o para identificar la estructura en html o en las hojas de estilo css. 

Normalmente la variación de la estructura no es tan a menudo como el resto de código que hace que la web o aplicación sea
dinámica.


## ¿Para qué usamos Clases en Python?

Las clases en Python se utilizan para crear objetos que tienen propiedades y métodos específicos. Permiten organizar y estructurar el código de manera más eficiente, promoviendo la reutilización y la modularidad del código.

Ejemplo de una clase en Python:

```
class Calculadora:
    """
    Clase que representa una calculadora básica.

    Attributes:
    -----------
    numero1 : float
        El primer número para realizar operaciones.
    numero2 : float
        El segundo número para realizar operaciones.

    Methods:
    --------
    sumar()
        Retorna la suma de los dos números.
    restar()
        Retorna la resta de los dos números.
    multiplicar()
        Retorna la multiplicación de los dos números.
    dividir()
        Retorna la división de los dos números.
    """

    def __init__(self, numero1, numero2):
        """
        Inicializa la calculadora con dos números.

        Parameters:
        -----------
        numero1 : float
            El primer número.
        numero2 : float
            El segundo número.
        """
        self.numero1 = numero1
        self.numero2 = numero2

    def sumar(self):
        """
        Retorna la suma de los dos números.
        """
        return self.numero1 + self.numero2

    def restar(self):
        """
        Retorna la resta de los dos números.
        """
        return self.numero1 - self.numero2

    def multiplicar(self):
        """
        Retorna la multiplicación de los dos números.
        """
        return self.numero1 * self.numero2

    def dividir(self):
        """
        Retorna la división de los dos números.
        Si el segundo número es 0, se levanta una excepción ZeroDivisionError.
        """
        if self.numero2 == 0:
            raise ZeroDivisionError("No se puede dividir por cero.")
        return self.numero1 / self.numero2

```


## ¿Qué método se ejecuta automáticamente cuando se crea una instancia de una clase?

El método que se ejecuta automáticamente cuando se crea una instancia de una clase en Python es el método `__init__()`. Este método se utiliza para inicializar los atributos de la clase y puede aceptar argumentos para configurar el estado inicial del objeto.

```

class MiClase:
    def __init__(self, parametro):
        self.parametro = parametro

instancia = MiClase("Hola")

```

## ¿Qué es el polimorfismo?

El polimorfismo es la capacidad que tienen los objetos de diferentes clases, de responder al mismo método o función de manera diferente. Dicho de otra manera, permite tratar diferentes tipos de objetos de manera uniforme siempre y respondiendo a ciertos métodos o funciones de manera adecuada.

El polimorfismo se puede lograr a través del uso de la herencia y la sobreescritura de métodos. Cuando una clase hija hereda de una clase padre, puede sobrescribir los métodos de la clase padre con una implementación específica para la clase hija.

Un ejemplo de esto último sería:

```
class Animal:
    def hablar(self):
        pass

class Perro(Animal):
    def hablar(self):
        return "Guau!"

class Gato(Animal):
    def hablar(self):
        return "Miau!"

def hacer_hablar(animal):
    return animal.hablar()

# Se crean instancias de las clases guardandolas en una variable llamando a la clase correspondiente:

perro = Perro()
gato = Gato()

# Se llama a la función hacer_hablar con diferentes tipos de animales:
print(hacer_hablar(perro))  # Imprime: Guau!
print(hacer_hablar(gato))   # Imprime: Miau!

```

## ¿Qué es un método dunder?

Un método dunder o double underscore, es un método especial que está rodeado por doble guión bajo tanto al principio como al final de su nombre. Estos métodos también se conocen como "métodos mágicos" o "métodos especiales".  

Los métodos dunder son especiales porque Python los utiliza internamente para realizar diferentes operaciones o proporcionar funcionalidades específicas a los objetos de una clase. Algunos ejemplos comunes de métodos dunder incluyen __init__() para la inicialización de objetos, __str__() para representar el objeto como una cadena, __len__() para obtener la longitud de un objeto, entre otros.

Aquí hay un ejemplo simple que muestra cómo usar algunos métodos dunder en una clase:

```
class mi_clase:
    def __init__(self, nombre):
        self.nombre = nombre
    
    def __str__(self):
        return f'Objeto de MiClase con nombre: {self.nombre}'

    def __len__(self):
        return len(self.nombre)

# Creo una instancia de la clase
objeto = mi_clase('Ejemplo')

# Utilizar los métodos dunder
print(objeto)   # Imprime: Objeto de mi_clase con nombre: Ejemplo
print(len(objeto))  # Imprime: 7

```

En este ejemplo, ```__init__()``` se llama cuando se crea un nuevo objeto de la __clase mi_clase__, ```__str__()``` se llama cuando el objeto se convierte en una cadena, por ejemplo al imprimirlo, y ``` __len__()``` se llama cuando se solicita la longitud del objeto. Estos métodos dunder permiten que los objetos de la clase se comporten de manera más intuitiva y se integren mejor con el resto del código de Python.

Aunque en el video de Jordan dice que sirven como los private o protected de otros lenguajes, por lo que he podido leer no tiene porqué ser así, pero por si acaso lo he querido poner, ya que así lo dice Jordan. Dichos métodos tendrían limitada su visibilidad fuera de la clase en la que se definen si esto fuese así y no es el caso.


## ¿Qué es un decorador de python?

Un decorador en Python es una función que toma otra función como argumento y devuelve una nueva función, generalmente extendiendo o modificando el comportamiento de la función original de alguna manera. Los decoradores proporcionan una buena forma de modificar o extender la funcionalidad de funciones o métodos sin modificar su código.

Los decoradores se utilizan comúnmente en Python para agregar funcionalidades como registro, validación, control de acceso, entre otros, a funciones o métodos existentes.

Aquí hay un ejemplo básico de cómo se ve un decorador en Python:

```
def asegurar_numero_positivo(funcion):
    def wrapper(numero):
        if numero < 0:
            print("Error: El número debe ser positivo.")
            return None
        else:
            return funcion(numero)
    return wrapper

@asegurar_numero_positivo
def calcular_raiz_cuadrada(numero):
    return numero ** 0.5

# Probando la función decorada
print(calcular_raiz_cuadrada(25))  # Imprime: 5.0
print(calcular_raiz_cuadrada(-25))  # Imprime: Error: El número debe ser positivo. None


```
En este ejemplo, definimos un decorador llamado asegurar_numero_positivo que toma una función como argumento y define una función interna llamada wrapper. Esta función wrapper verifica si el número pasado a la función original (calcular_raiz_cuadrada) es positivo. Si lo es, llama a la función original y devuelve su resultado. Si no lo es, imprime un mensaje de error y devuelve None.

Al aplicar el decorador @asegurar_numero_positivo sobre la función calcular_raiz_cuadrada, nos aseguramos de que la función solo reciba números positivos como argumento. Este es un ejemplo simple pero práctico de cómo los decoradores pueden usarse para agregar funcionalidades adicionales a las funciones existentes de manera transparente y sin modificar su lógica interna.

## ¿Cuál es la diferencia entre una lista y una tupla en Python?

__En el `código`:__

1. La tupla se crea mediante parentesis () y la lista mediante corchetes [].

__Por sus `características`:__

1. La lista es mutable y la tupla es inmutable.

Por ejemplo una lista podría ordenarla por orden alfabético, una tupla si lo intento me dará error. Por eso también si añado un elemento a la tupla, creará un nuevo objeto, porque el original es inmutable.

2. La tupla no me deja eliminar directamente un elemento que no sea el primero o el último.
   
Para poder hacerlo, primero tendría que convertir la tupla en una lista y eliminar el elemento en cuestion. Después tendré que volver a convertirlo en tupla (No es recomendado hacerlo).

En la lista no hay ningún problema para eliminar cualquier elemento.

## ¿Cuál es el orden de las operaciones?

`__PEMDAS__` (Para recordar mejor el orden)

    El orden será el siguiente primero se calcula lo que hay dentro de los ()
    P → ()
    Después los exponentes
    E → **
    Después las multiplicaciones
    M → *
    Después las divisiones
    D → /
    Después las adiciones
    A → +
    Y por último las restas aunque estas dos últimas pueden operarse según aparecen de
    izquierda a derecha. No tienen porque ser primero las sumas y luego las restas.
    S → -

## ¿Qué es un diccionario Python?

Una colección de elementos con clave:valor. Es similar a un diccionario de papel. Para buscar el valor o significado de algo lo hacemos a través de la clave. Se crea usando llaves { CLAVE: VALOR }

Cada elemento puede a su vez tratarse de otro diccionario, una lista, un número o un string.

## ¿Cuál es la diferencia entre el método ordenado y la función de ordenación?
 
El método .sort() ordena los elementos de un listado por orden alfabético, pero no devuelve un valor y por ello, no podemos guardar en una variable la nueva lista.

La función sorted() ordena los elementos de una lista por orden alfabético y lo podemos guardar en una variable porque devuelve el resultado.

## ¿Qué es un operador de asignación?

El operador de asignación es un símbolo que se utiliza para asignar un valor a una variable, como es el operador =.

También existen otros operadores de asignación que además de asignar un valor, realizan una operación.

+= → Realiza una operación de suma, asignando además el resultado final a dicha variable. 

Ejemplo: X = 10
X += 1 → X pasa a valer 11 ya que le suma al valor de X, 1 y le asigna el resultado final 11.

Lo mismo sucedería con el resto de operaciones posibles para la resta -=, para la multiplicación *=, para la división /= etc.

## ¿Qué es un condicional?

Es una estructura de control que permite tomar decisiones en función de si una condición es verdadera o falsa. Es decir, te permite ejecutar un bloque de código si la condición resulta ser verdadera u otro bloque de código, si la condición es falsa.

Hay varios tipos de condicionales que te permiten controlar el flujo de ejecución del programa. Los principales son:

- __if__: Es la estructura condicional básica que permite ejecutar un bloque de código si una condición es verdadera.

- __if-else__: Permite ejecutar un bloque de código si la condición evaluada es verdadera, y otro bloque de código si la condición es falsa.

- __if-elif-else__: Cuando necesitas evaluar múltiples condiciones de manera secuencial. Se prueba cada condición en orden y se ejecuta el bloque de código correspondiente al primer resultado verdadero. Si ninguna condición es verdadera, se ejecuta el bloque de código dentro del "else".

- __Operador ternario__ (if-else en una línea): Permite escribir condicionales simples en una sola línea de código, lo que resulta útil en situaciones donde la lógica es breve y clara.

- __Nested if__ (if anidados): Consiste en colocar un condicional dentro de otro condicional. Esto se usa cuando necesitas realizar pruebas adicionales dentro de una rama condicional.

Ejemplo simple:

Intento de autenticación de un usuario. 

El usuario introduce los datos que le pide la aplicación, por ejemplo, nombre de usuario y contraseña.

La aplicación realizará una consulta a la base de datos devolviendo True si esos datos son correctos, es decir, si los datos se encuentran en la base de datos y False si no los encuentró.

Si el resultado es verdadero, la aplicación le permitirá acceder a las partes de la aplicación que necesitan autenticarse. Si devuelve falso, le dará un mensaje de error con la posibilidad de que recupere la contraseña y/o nombre de usuario, si ese ha sido el motivo del error, además le  propondrá que genere una cuenta de usuario, si es que aún no la tiene.

Ejemplo de __código condicional__:

```
# Método para consultar los datos introducidos por el usuario
def autenticar(usuario, contraseña):
    # Se produce una consulta a la base de datos  donde nos devolverá True o False
      ……….
    # Verificamos con un condicional el resultado de la autenticación
    if autenticado: # Si la autenticación recibida es True
    	print("¡Bienvenido! Autenticación exitosa.")
   else: # Si el resultado ha sido False
    	print("Lo siento, la autenticación falló. Verifique su nombre de usuario y contraseña.")
```

Ejemplo __Operador ternario__:

```
resultado_si_verdadero if condición else resultado_si_falso
Ejemplo sencillo:
resultado = "par" if  X % 2 == 0 else "impar"
```

En este caso si el número X  es par el resultado guardará el string “par”, sino guardará el  string “impar”.


## ¿Cuáles son los diferentes tipos de bucles en python? ¿Por qué son útiles?

En Python hay principalmente dos tipos de bucles, “for” y “while”. Estos bucles te permiten repetir un bloque de código varias veces. Se diferencian principalmente, en la forma en que se controla dicha repetición.

__“for”__

El bucle “for” se utiliza para iterar sobre una secuencia, como puede ser una lista, tupla, diccionario, cadena o un objeto iterable.

La sintaxis básica de un bucle `for` es la siguiente:     

`for` elemento `in` `secuencia`:

Un ejemplo simple:

```
	for num in range(1:11):
		print(num) // Imprimiría los números del 1 al 10.
```

La variable “num” podría llamarse de cualquier forma, aunque lo aconsejable es que sea en singular y que además el propio nombre aporte una descripción sobre lo que se va a guardar en ella. Esta variable irá cambiando de valor, según va iterando sobre la secuencia de números del 1 al 10. Primer valor será 1 y lo imprimirá, segundo valor 2 y lo imprimirá y así hasta llegar a 10.

__“while”__

El bucle “while” se utiliza para repetir un bloque de código, mientras la condición del while sea verdadera. No se conoce el número de veces que se va a iterar sobre el mismo. 

La sintaxis  básica de un bucle “while” es la siguiente:

`while` condición:
    # Cuerpo del bucle
    # Se ejecuta mientras la condición sea verdadera

Un ejemplo simple:

```
	import random

	// Generar un número aleatorio entre 1 y 100
	numero_secreto = random.randint(1, 100)

	// Bucle para que el usuario adivine el número
		while True:
    		// Pedir al usuario que ingrese un número
   			intento = int(input("Intenta adivinar el número secreto: "))

    		// Comprobar si el número coincide con el número secreto
    			if intento == numero_secreto:
        			print("¡Felicidades! Has adivinado el número secreto.")
        			break  # Salir del bucle si el número es correcto
    			else:
        			print("Número incorrecto. ¡Inténtalo de nuevo!")
```

Se trataría de un juego para adivinar el número secreto. Si no lo aciertas sigues teniendo la oportunidad de volver a introducir otro número y si lo aciertas te felicita y sales del bucle “while”. 

Los bucles son útiles porque permiten ejecutar un bloque de código varias veces de manera eficiente y controlada, con las siguientes __diferencias__:

Bucle `for`

    • Se utiliza para iterar sobre secuencias. Perfecto cuando sabes la cantidad exacta de elementos a recorrer o deseas iterar sobre una secuencia de datos, como son listas, tuplas, diccionarios…
    • Tiene una sintaxis simple y fácil de entender, repitiendo operaciones en cada elemento a recorrer.
    • Es menos propenso a errores, ya que al iterar sobre una secuencia definida, es más difícil que se produzcan errores relacionados con la condición de salida del bucle.	

Bucle `while`

    • Es un bucle más flexible que el bucle “for”. Te permite ejecutar un bloque de código mientras la condición sea verdadera. Útil para cuando no sabes exactamente cuantas iteraciones necesitas para que se cumpla la condición de salida.
    • Mayor control sobre la iteración, pudiendo poner una variedad de condiciones como condición de salida.
    • Es muy útil para realizar tareas repetitivas.

## ¿Qué es una comprensión de listas en python?

Es una expresión concisa para crear listas a partir de cualquier tipo de secuencia o iterable, aplicando una expresión a cada elemento de la secuencia.

La sintaxis básica es la siguiente:

nueva_lista = [expresión for elemento in iterable if condicion]

- `expresión` es la operación, elemento… que se te ocurra, que se aplica a cada elemento del iterable, creando una nueva lista.
- `elemento` es la variable que representa cada elemento del iterable.
- `iterable` es la secuencia, lista, rango u otro tipo de iterable sobre el cual iterar.
- `condición` es una expresión opcional que filtra los elementos del iterable (puede ser omitida).

Un ejemplo simple:

```
	cuadrados = [x ** 2 for x in range(1, 6)]
	print(cuadrados)  // Salida: [1, 4, 9, 16, 25]
```
Para cada valor “x” en el rango del 1 al 5, elevamos “x” al cuadrado y agregamos el resultado a la lista cuadrados. 

## ¿Qué es un argumento en Python?

Un argumento es un valor que se le pasa a una función o método cuando se le llama. Se trata de información que necesita para que el método o función sea ejecutado correctamente.

Hay varios `tipos` de argumentos:

* Argumentos __posicionales__: Son los valores que se pasan a una función en el orden en el que aparecen en la definición de la misma. También deben cumplir con el mismo número de parámetros que están definidos.

Ejemplo:		

```
	def saludar(nombre, saludo):
    	print(f"{saludo}, {nombre}!")

		saludar("Juan", "Hola") // Al llamar a la función se le pasan los parámetros definidos en la función saludar.
```

En este ejemplo, "Juan" es el primer argumento (que corresponde al primer parámetro nombre), y "Hola" es el segundo argumento (que corresponde al segundo parámetro saludo).

* Argumentos de __palabra clave__ (keyword arguments):  Son argumentos que se pasan a una función con el nombre del parámetro al que se van a asignar. Por esta razón no importa el orden de los parámetros.

Ejemplo: 		

```
	saludar(saludo="Hola", nombre="Juan")
```
			
* Argumentos __predeterminados__ (`default arguments`): Son argumentos que tienen un valor predeterminado en la definición de la función y por tanto pueden ser omitidos al llamar a dicha función.

Ejemplo:	

```
	def saludar(nombre, saludo="Hola"):
        print(f"{saludo}, {nombre}!")
				 
		saludar("Juan")
```
				

* Argumentos __indefinidos__: Cuando lo que queremos es pasar una cantidad indefinida de argumentos, se utiliza la expresión `*args`, como nombre en la definición del método o función. Si además lo que queremos es que sean argumentos clave = valor lo que se pase se usará `**kwargs`.  

Ejemplo para 3 tipos de variables:

```
    def greeting(time_of_day, *args, **kwargs):
        print(f"Hi {' '.join(args)}, I hope that you're having a good {time_of_day}.")

        if kwargs:
                print('Your tasks for the day are:')
            for key, val in kwargs.items():
                    print(f'{key} -> {val}')

    greeting('Morning',
                    'Kristine', 'Hudgens',
                    first = 'Empty dishwasher', 
                    second = 'Take pupper out',
                    third = 'math homework')

```

En este ejemplo 'Morning' será un argumento posicional, tiene que ir el primero porque así está definido. Seguido van dos argumentos, 'Kristine', 'Hudgens', que se corresponden con argumentos indefinidos, que se definien en la función como *arg. Y por último en tercer lugar van los argumentos con clave, first = 'Empty dishwasher', second = 'Take pupper out',  third = 'math homework', que se corresponden con los argumentos indefinidos definidos en la función como **kwargs.

## ¿Qué es una función de Python Lambda?

Se trata de una función anónima, esto significa que no tiene nombre. Esta función se crea utilizando la palabra clave lambda, seguida de una lista de parámetros y una expresión que define lo que la función debe devolver.

Es muy útil para pasar una función, como argumento a otra función, como son las funciones de orden superior map(), filter() y reduce(). 

La sintaxis general de una función lambda es la siguiente:

lambda parametros: expresion

  1. `parametros` representa los parámetros que la función lambda puede tomar.
  2. `expresion` es el valor que la función devuelve basado en esos parámetros.

Un ejemplo simple:

```
suma = lambda x, y: x + y
     print(suma(3, 5))  // 8
```
En este caso, la función recibe dos parámetros “x” e “y” en este caso 3 y 5 respectivamente y devuelve la suma de ambos parámetros.

Ejemplo pasando como argumento a una función:

```
	numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	even_numbers = list(filter(lambda x: x % 2 == 0, numbers)) //Filtra y crea una lista partiendo de numbers con pares
	print(even_numbers)  // Imprime [2, 4, 6, 8, 10]
```
Se imprime una lista con los números que cumplen la condición, es decir los números pares.

## ¿Qué es un paquete pip?

Un paquete pip es un conjunto de archivos que contienen código Python, que permite que sea fácilmente distribuido e instalado usando la herramienta pip.

Pip es un sistema de gestión de paquetes estándar para Python que facilita  la instalación y gestión de los paquetes y dependencias de Python.

Los paquetes pip son distribuidos a través del Python Package Index (PyPI), que es un repositorio centralizado de software de Python de código abierto. PyPI contiene miles de paquetes que cubren una amplia gama de funcionalidades, desde bibliotecas para ciencia de datos y desarrollo web hasta herramientas de automatización etc...

Algunos ejemplos de paquetes pip populares incluyen:

    1. NumPy y pandas para computación científica y análisis de datos.
    2. Django y Flask para desarrollo web.
    3. TensorFlow y PyTorch para aprendizaje profundo y machine learning.
    4. Matplotlib y Seaborn para visualización de datos.

Para instalar un paquete pip, generalmente se utiliza el comando `pip install` seguido del `nombre del paquete` que se desea instalar. Por ejemplo, para instalar el paquete requests, que es comúnmente utilizado para realizar solicitudes HTTP en Python, se ejecutaría el siguiente comando en la línea de comandos:

```
    pip install requests
```
Una vez instalado, el paquete estará disponible para ser importado y utilizado en  el programa Python que estás desarrollando.

Los paquetes pip facilitan mucho la gestión de dependencias y la distribución de software, permitiendo a los desarrolladores utilizar y compartir código de manera eficiente y efectiva.


Áreas de mejora: (propuestas)

Ejemplos más específicos: Aunque los ejemplos proporcionados son útiles, podrían ser más específicos en algunos casos. Por ejemplo, el ejemplo de la comprensión de listas podría incluir cómo se aplicaría en un escenario real, como filtrar y transformar datos en un conjunto de datos.
Explicación de errores comunes: Aunque se mencionan los tipos de argumentos en las funciones, sería beneficioso incluir ejemplos de errores comunes que podrían ocurrir al usar argumentos, como pasar argumentos en el orden incorrecto o olvidar pasar argumentos requeridos.

Mejores prácticas: Aunque se describen los conceptos, no se mencionan explícitamente las mejores prácticas en la documentación. Por ejemplo, se podría incluir recomendaciones sobre cuándo usar cada tipo de bucle o condicional, o cómo estructurar argumentos en funciones para mejorar la legibilidad y mantenibilidad del código.

Uso de software para documentación: No se menciona el uso de software específico para la generación de documentación. Herramientas como Sphinx o MkDocs podrían ser útiles para crear documentación más profesional y fácil de mantener.

SEGUIR POR EL CHECKPOINT 6

#### Bibliografía:

- Python.org. (s.f.). The Python Tutorial.
- MongoDB Documentation. (s.f.). MongoDB Manual.
- Fielding, R. T. (2000). Architectural Styles and the Design of Network-based Software Architectures. University of California, Irvine.
- Postman Documentation. [https://learning.postman.com/docs](https://learning.postman.com/docs)
- "What is Postman?" por DZone. [https://dzone.com/articles/what-is-postman](https://dzone.com/articles/what-is-postman)
- https://ellibrodepython.com/polimorfismo-en-programacion
- https://ellibrodepython.com/decoradores-python
- https://geekflare.com/es/magic-methods-in-python/
  
Puedes consultar más información sobre los condicionales con ejemplos y diagramas de flujo. Estas serían algunas de las páginas:

https://www.mclibre.org/consultar/python/lecciones/python-if-else.html
https://ellibrodepython.com/if-python
https://docs.python.org/3/reference/compound_stmts.html#patterns


Puedes consultar más información sobre los bucles con ejemplos, diagramas de flujo y diferencias entre for y while, en las páginas siguientes:

https://ellibrodepython.com/estructuras-control-python
https://medium.com/@diego.coder/ciclos-en-python-for-y-while-20cbe73f7193
https://www.geeksforgeeks.org/difference-between-for-loop-and-while-loop-in-python/
¿Qué es una comprensión de listas en python?


Puedes consultar más información sobre las listas de comprensión en las páginas siguientes:

https://ellibrodepython.com/list-comprehension-python
https://docs.python.org/es/dev/tutorial/datastructures.html
https://codigospython.com/listas-por-comprension-en-python-explicacion-y-ejemplos/


Puedes consultar más información sobre las argumentos en las páginas siguientes:

https://recursospython.com/guias-y-manuales/argumentos-args-kwargs/
https://www.learnpython.org/es/Multiple%20Function%20Arguments

Para consultar fundiones lambda

https://www.freecodecamp.org/espanol/news/expresiones-lambda-en-python/
https://ellibrodepython.com/lambda-python
https://atareao.es/pyldora/las-maravillas-de-las-funciones-lambda-en-python/

Documentación

Para más información sobre el paquete pip, su instalación, documentación, código…:

https://pypi.org/project/pip/


#### Nota: Documentación realizada con la extension markdown de Visual Studio Code.

