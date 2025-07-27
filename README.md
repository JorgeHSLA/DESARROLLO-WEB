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

### <span style="color: #00ffddff ">CLASES</span> 

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

### <span style="color: #e091b9ff ">METODOS DE ARREGLOS</span> 

