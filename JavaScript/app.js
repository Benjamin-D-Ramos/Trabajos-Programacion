// Reorganización de Elementos​
// Tienes un array de números: [10, 20, 30, 40, 50]. Mueve el último número al principio del array

let arr = [10, 20, 30, 40, 50]

arr.pop();
arr.unshift(50)

console.log(arr);


// Extracción y Unión de Arrays
// Tienes dos arrays: numeros1 con elementos [1, 2, 3] y numeros2 con elementos [4, 5, 6].
// Utiliza los métodos pop y push para mover el último elemento de numeros1 al final de numeros2, y luego muestra el array numeros2.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

arr1.pop();
arr1.push();

arr2.push(3);

console.log(arr1);
console.log(arr2);


// Inversión de Array​
// Dado un array de números: [5, 10, 15, 20, 25], crea un nuevo array que contenga los mismos elementos pero en orden inverso

let arr3 = [5, 10, 15, 20, 25]
arr3.reverse()

console.log(arr3);
