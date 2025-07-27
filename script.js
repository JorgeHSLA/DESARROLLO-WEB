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

///////////////////////////////////////////////////////////////

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