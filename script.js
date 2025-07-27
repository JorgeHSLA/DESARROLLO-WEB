console.log("holaaaaaaa");
console.log("prueba de consola");
console.log("prueba de consola 2");
console.log("prueba de consola 3");
console.error("prueba error")

let category = "A";

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

// Ejemplo de template string (cadena multilínea con variables)
`esto puede ser una cadena de texto
con varias lineas
y con variables`

// crear la funcion

function saludar(nombre) {
    return `Hola, ${nombre}`;
}

// buena practica para la funcion

const multiplicar = function multisisao (a, b){
    return  a * b
}

// Función como parámetro de otra función
function operar(a, b, operacion) {
    return operacion(a, b);
}

// Ejemplo de funciones para operar
function sumar(x, y) {
    return x + y;
}

// Uso de la función operar con diferentes operaciones
console.log(operar(1, 10, sumar));         // 11
console.log(operar(1, 2, multiplicar));

let resultado = restar(1, 2, function(x, y) {
    return x - y;
});

const estudiante = {
    nombre: "Juan", 
    apellido: "Perez",
    edad: 20,
    saludar: function() {
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
}

estudiante.salon= "1A"

const {edad,apellido} = estudiante;

console.log(`el estudiante tiene ${edad} y su apellido es ${apellido}`); 



function Estudiante(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function() {
        return `Hola, soy ${this.nombre} ${this.apellido}`;
    };
}