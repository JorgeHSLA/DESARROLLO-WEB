# <span style="color: lightBlue ;">JAVASCRIPT</span>
 
Se puede ejecutar en nodejs o en consola de navegador

Para vinvcular el JS con html se debe ddeclarar en el head con la etiqueta script

el archivo de script muestra diferente funcionalidades qeu tiene este lenguaje

## <span style="color: #e2ff9eff ">VARIABLES</span> 

(var tiene la misma funcion que let pero es peor porque no respeto scopes let es mejor  :)

no son tipadas y son dinamicas

        let variable= "cualquier cosa"
        let variable= 1234567
    
    //let es la palabra reservada para crear las variables

para constantes (no reasignable)

        const constantes = 345

en el caso de los arreglos se puede cambiar los valores de elementos pero no la longitud

        const arreglo = [2,3,4]
        arreglo = [5,6,7]

ademas los arreglos aqui pueden cambiar su tamanio y pueden almacenar distintos datos

.table(matriz) sirve para mostrar una matriz (arreglo de arreglos)

Para agregar para un arreglo:

    .push(nuevoElemento) para agregar al final
    .unshift(nuevoElemento) para agregar al principio

Para eliminar:

    .pop() para eliminar al final
    .shift() para eliminar al principio
    .slice(pos, cantidad) // crea un segundo arreglo desde la posicion hasta la cantidad de elementos dados, y modifica la actual, es como si partiera y diera las dos partes divididas

Para concatenar:

hay dos formas:

    arrFinal= [...primerArr, ...segArr]

    arrfinal= primerArr.concat(segArr)

mejor la primera opcion

For each en el mismo arreglo

    arr.forEach(
        function (element){
            // cosas que se le quiere hacer a cada elemento del arreglo

        }
    )

Usando map, lo mismo que el for each pero puede retornar el arreglo modificado

    let arr=map.forEach(
        function (element){
            // cosas que se le quiere hacer a cada elemento del arreglo

        }
    )

### <span style="color: #00ffddff ">CONDICIONALES</span>  

El if:

    if(n > 10){
        console.log("parchado")
    }else{
        console.log("no parchado")

    }

El switch (DEFAULT ES OBLIGATORIO):

        switch (category) {

            case "A":
                console.log("A");
                break;
            case "B":
                console.log("B");  
                break;  
            case "C":
                console.log("C");
                break;
            default:
                console.log("default");
                break;
        }

### <span style="color: #00ffddff ">CICLOS: while, do-while, for </span> 

Son iguales a c++ y java, sin embargo hay unos que cabe explicar mejor.

El forEach con arreglos se explico arriba.

for of (forEach EN OTROS LENGUAJES)  // el mejor de todos

    for (let elemento of arreglo){
       // hacer algo en ese elemento
    }

for in, en vez de traer el elemento trae el indice

    for (let indice in arreglo){
        //hacer algo usando el indice y el elemento del indice
    }

###  <span style="color: #00ffddff ">STRINGS</span> 

Se pueden  crear tanto con comilla simple como con doble

Aca el string tiene funciones que nos pueden atyudar:

    let prueba = "prueba";

    // Longitud de la cadena
    prueba.length;

    // Posición de la primera aparición de "a"
    prueba.indexOf("a");

    // Convierte a mayúsculas
    prueba.toUpperCase();

    // Convierte a minúsculas
    prueba.toLowerCase();

    // Reemplaza la primera "a" por "b"
    prueba.replace("a", "b");

    // Divide la cadena en un array usando "a" como separador
    prueba.split("a");

    // Devuelve una porción de la cadena desde el índice 0 al 3
    prueba.slice(0, 3);

    // Une la cadena original con "b" al final
    prueba.concat("b");

    // Devuelve true si la cadena contiene "a"
    prueba.includes("a");

    // Devuelve true si la cadena empieza con "p"
    prueba.startsWith("p");

    // Devuelve true si la cadena termina con "b"
    prueba.endsWith("b");

    // quita espacios al principio y al final
    prueba.trim()

    // Ejemplo de template string (cadena multilínea con variables)
    `esto puede ser una cadena de texto
    con varias lineas
    y con variables`

### <span style="color: #00ffddff ">NUMEROS</span> 

Mismo tipo para decimales y entero

existe libreria Math donde se puede redondear, sacar maximos y minimos, generar un numero random, etc

###  <span style="color: #00ffddff ">IMPORTANTE</span> 

Nan, not a number
undefined, no se inicializo la variable
null, el valor es null

###  <span style="color: #c7ffb6ff ">Diferencia entre == y ===</span> 

(10 == '10') es true pero (10 === '10') es false

por buenas practicas intentar usar el triple



## <span style="color: #e2ff9eff ">FUNCIONES</span> 

Esta es la declaracion de la funcion, se llama igual que en otros lenguajes, pero si la declaras dos veces se vaaa preferir la ultima que colocaste

        // crear la funcion

        function saludar(nombre) {
            return `Hola, ${nombre}`;
        }


Una buena practica es crear una variable constante como funcion, asi se sabe si ya existe una funcion con ese nombre

    // buena practica para la funcion

    const multiplicar = (a, b) => { // esto es un arrow function
        return  a * b
    }

    //o 

    const multiplicar2 = function multi (a, b) {
        return  a * b
    }   


Se puede mandar una funcion por otra funcion

    // Función como parámetro de otra función
    function operar(a, b, operacion) {
        return operacion(a, b);
    }
En este ejemplo se le puede mandar diferenetes operaciones a operar, por ejemplo:

    // Uso de la función operar con diferentes operaciones
    console.log(operar(1, 10, sumar));       
    console.log(operar(1, 2, multiplicar));


Hay metodos muy buenos para arreglos pero primero toca ver clases



 ## <span style="color: #e2ff9eff ">POO: Programacion Orientada a Objetos </span> 

Asi se puede crear un objeto, este puede tener funciones y atributos:

    const estudiante = {
        nombre: "Juan", 
        apellido: "Perez",
        edad: 20,

        saludar: function() {
            return `Hola, soy ${this.nombre} ${this.apellido}`;
        }

        perro:
        {
            nombre: "firu"
            raza: "asdas"
        }
    }

En JS se pueden agregar atributos de una manera parecida a llave valor, por eejemplo si al extudiante creado anteriormente quiero agregarle un salon se podria hacer asi:


    estudiante.salon= "1A"

### <span style="color: #00ffddff ">DESTRUCTURING</span> 

sirve para sacar propiedades de un objeto en vez de constantemente llamar a un objeto:

        
    const {edad,apellido} = estudiante;

    console.log(`el estudiante tiene ${edad} y su apellido es ${apellido}`); 

### <span style="color: #00ffddff ">Objeto definido</span> 

Se crea un constructor:


    function Estudiante(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.saludar = function() {
            return `Hola, soy ${this.nombre} ${this.apellido}`;
        };
    }

    const estudianteConConstructor = new Estudiante(paco, paquisimo, 22)

La herencia esta mas adelante porque primero se deben ver otros terminos


### <span style="color: #e091b9ff ">METODOS DE ARREGLOS</span> 

METODOS QUE PUEDEN AYUDAR:


    const estudiantes = [
        { nombre: "Ana", edad: 20 },    
        { nombre: "Luis", edad: 22 },
        { nombre: "Marta", edad: 19 }
    ];

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Métodos de arreglos

    let encontrado = meses.includes("Enero"); // boleano\

    // para objetos

    let estudianteEncontrado = estudiantes.some((estudiante) => estudiante.nombre === "Ana"); // boleano

    //encontrar indice de un elemento
    let indice = meses.indexOf("Enero"); // devuelve el indice del elemento

    //encontrar indice de un objeto
    let indiceEstudiante = estudiantes.findIndex((estudiante) => estudiante.nombre === "Ana");

    //sumar valores de un arreglo
    let suma = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0); // devuelve la suma de las edades

    //filtrar elementos de un arreglo
    let mayoresDe20 = estudiantes.filter((estudiante) => estudiante.edad > 20); // devuelve un arreglo con los estudiantes mayores de 20

    //buscar algo en la lista
    let estudianteBuscado = estudiantes.find((estudiante) => estudiante.nombre === "Ana"); //devuelve el primer estudiante que cumple la condición


### <span style="color: #00ffddff ">PROTOTIPOS</span> 

la forma correcta de asignar metodos y funciones a las clases para optimizar la memoria.

    Clase.prototype.accion = function() {
        //contenido
    }

### <span style="color: #00ffddff ">HERENCIA</span> 

La herencia es un poco diferente a lo acostumbrado en diferentes lenguajes

En este caso es para heredar los atributos del padre

    function Gatito (nombre, raza, edad, color){ 
        Gato.call(this, nombre, raza, edad)     //llama al padre y le manda los atributos, si o si debe tener el this
        this.color = color

    }

En este caso es para heredar los prototipos del padre

    Gatito.prototype = Object.create(Gato.prototype)


### <span style="color: #00ffddff ">CLASES</span> 

las clases usan por debajo los prototuipos, por ende es una buena opcion para que sea mas legible el codigo

    class Empleado{

        constructor(nombre, apellido, salario) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.salario = salario;


        }

        saludar() {
            return `Hola, soy ${this.nombre} ${this.apellido} y mi salario es ${this.salario}`;
        }
    }

La herencia en las clases si es parecida a java:

     class Desarrollador extends Empleado {
        constructor(nombre, apellido, salario, lenguaje) {
            super(nombre, apellido, salario);
            this.lenguaje = lenguaje;
        }

        static bienvenido() {
            console.log("Bienvenido al curso de JavaScript");
        }
    }


### <span style="color: #00ffddff ">ENCAPSULAMIENTO</span>

Para un atributo privado se le agrega el #

    #atributo

Hay get y set, sin embargo se usan palabras reservadas, como ejemplo:

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

El encapsulamiento es una buena práctica cuando:



#### <span style="color: #fffb00ff ">TEORIA DEL ENCAPSULAMIENTO</span>
Quieres proteger los atributos internos de una clase para evitar que sean modificados directamente desde fuera.

- Necesitas controlar o validar los valores antes de asignarlos (por ejemplo, usando un setter para validar datos).

- Planeas cambiar la implementación interna en el futuro sin afectar el código que usa la clase.

- Quieres mantener una interfaz clara y segura para los usuarios de tu clase.

Es mala práctica o innecesario cuando:

- El atributo es completamente público y no necesitas control ni validación sobre su acceso o modificación.

- El encapsulamiento agrega complejidad innecesaria a clases muy simples o de uso interno.

- Usas getters y setters que solo exponen el atributo sin agregar lógica extra, haciendo el código más largo sin beneficio real.

Resumen:
Usa encapsulamiento cuando aporta seguridad, control o flexibilidad. Evítalo si solo complica el código sin aportar valor.


# JS en el HTML

El archivo java script como buena practica se debe agregar al final del html:

<img width="280" height="71" alt="image" src="https://github.com/user-attachments/assets/ba599dbc-1b8c-43bc-8685-db061710a092" />


## DOM

Arbol que expresa el codigo que escribimos.

El nodo raiz de la pagina es document, y con este podemos entrar a cualquier rama de nuestra pagina:
<img width="404" height="248" alt="image" src="https://github.com/user-attachments/assets/6f75109b-0819-40fa-b038-4985713cea0e" />


## Traer objetos

### Por ID

    const objeto = document.getElementById("idQueQueremos")

### Por tag

    const objeto = document.getElementsByTagName("TagQueQueremos")

### Por Clase

    const listaDeObjetos = document.getElementsByClassName("ClassQueQueremos")

### querySelector
 Este sirve para buscar tanto ID, como Tag, como Clase usando nomenclatura de CSS

    const objeto = document.querySelector(".clase / #id / tag (aqui dentro tambien funciona la herencia y las , de CSS)")

se usa querySelectorAll cuando hay muchos

## Modificar html de los objetos

El html se puede modificar desde JS usando:

    objeto.InnerHTML = " lo que quieras poner para reemplazar el html ya existente "

El InnerHTML tambien tiene ciertos metodos que ayudan al programador:

    // todos los texto dentro de objeto pasaran a ser mayusculas
    objeto.InnerHTML.ToUpperCase();
 
## Modificar style (CSS) de objetos

se usa style y luego de un punto la variable de css

    // hace que las fuentes del objeto se pongan en negrila
    objeto.style.fontWeight = "bold"

## Modificar src de objetos

    objeto.src= "/nueva ruta"
## Agregar cualidades

    objeto.add("claseQueSeQuieraAgregar")

## Explorar el arbol de DOM
En esta imagne se ve como se mueve a hermanos, padres, e hijos
<img width="480" height="256" alt="image" src="https://github.com/user-attachments/assets/8a0c8f32-ae12-4655-bef9-c3a16f44e470" />


# Botones
 Asi se llama para hacer click
 
 <img width="412" height="125" alt="image" src="https://github.com/user-attachments/assets/be5d4293-168c-4428-b8f3-099e179b20ac" />
 
 asi para deteccion del mause
 
 <img width="377" height="246" alt="image" src="https://github.com/user-attachments/assets/d32fccd8-535c-4f1c-b486-48af3daaff36" />

 


