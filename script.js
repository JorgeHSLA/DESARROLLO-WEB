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