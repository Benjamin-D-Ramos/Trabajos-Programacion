// Ejercicio de Bucle For: Imprimir los números del 1 al 10 en la consola.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Ejercicio de Bucle While: Imprimir los números pares del 2 al 20 en la consola.​

// let count = 0;

// while (count < 20) {
//     count += 2;
//     console.log(count);
// }

// Ejercicio de Bucle Do-While: Pedir al usuario que ingrese un número y
// seguir solicitando un nuevo número hasta que ingrese un número negativo.
// Imprimir la suma de los números ingresados. O detener el bucle y que muestre un mensaje diciendo muchas gracias!

let i = 0;
let num;

do {
    num = parseInt(prompt("Ingrese un número:"));
    if (num >= 0) {
        i += num;
    }
} while (num >= 0);

alert("La suma de los números ingresados es: " + i);
