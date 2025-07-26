# JAVASCRIPT
Se puede ejecutar en nodejs o en consola de navegador

Para vinvcular el JS con html se debe ddeclarar en el head con la etiqueta script

el archivo de script muestra diferente funcionalidades qeu tiene este lenguaje

### Variables

(var tiene la misma funcion que let pero es peor porque no respeto scopes let es mejor)

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

### Condicionales

el if:

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

### Ciclos es while, do-while, for

Son iguales a c++ y java

### Strings

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

### numeros

Mismo tipo para decimales y entero

existe libreria Math donde se puede redondear, sacar maximos y minimos, generar un numero random, etc

### Importante

Nan, not a number
undefined, no se inicializo la variable
null, el valor es null

### Diferencia entre == y ===

(10 == '10') es true pero (10 === '10') es false

por buenas practicas intentar usar el triple

###