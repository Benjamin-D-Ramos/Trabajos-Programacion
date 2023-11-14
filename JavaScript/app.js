// Convertidor de Temperatura:
// Escribe funciones para convertir entre diferentes escalas de temperatura, como Celsius, Fahrenheit y Kelvin.​

//NOTA: fuente de las formulas https://www.how-to-study.com/metodos-de-estudio/escalas-de-temperatura.asp

function calculadordeTemperatura() {

    let temperatura1 = prompt("Ingrese tipo de temperatura (Celsius, Fahrenheit o Kelvin)").toLocaleLowerCase().charAt(0)
    let num1 = parseFloat(prompt("Ingrese la temperatura"))
    let temperatura2 = prompt("Ingrese temperatura que quiera saber el resultado (Celsius, Fahrenheit o Kelvin)").toLocaleLowerCase().charAt(0)

    switch (temperatura1) {
        case "c":
            switch (temperatura2) {
                case "f":
                    alert(`El resultado de ${num1}° Celsius es: ${num1 * 1.8 + 32}° Fahrenheit`);
                    break;
                case "k":
                    alert(`El resultado de ${num1}° Celsius es: ${num1 + 273.15}° Kelvin`);
                    break;
            }
            break;

        case "f":
            switch (temperatura2) {
                case "c":
                    alert(`El resultado de ${num1}° Fahrenheit es: ${(num1 - 32) / 1.8}° Celsius`);
                    break;
                case "k":
                    alert(`El resultado de ${num1}° Fahrenheit es: ${(5 / 9) * (num1 - 32) + 273.15}° Kelvin`);
                    break;
            }
            break;

        case "k":
            switch (temperatura2) {
                case "c":
                    alert(`El resultado de ${num1}° Kelvin es: ${num1 - 273.15}° Celsius`);
                    break;
                case "f":
                    alert(`El resultado de ${num1}° Kelvin es: ${(1.8 * (num1 - 273.15)) + 32}° Fahrenheit`);
                    break;
            }
            break;
    }
}

calculadordeTemperatura();


// Suma de Números en un Rango:
// Diseña una función que calcule la suma de todos los números en un rango dado.

alert(`Sumare todos los números en un rango`)

function sumaRango() {
    let num1 = parseFloat(prompt("Ingrese el primer número"))
    let num2 = parseFloat(prompt("Ingrese el segundo número"))
    let suma = 0

    for (let i = num1; i <= num2; i++) {
        suma += i
    }

    alert(`La suma de los números en el rango es: ${suma}`)
}

sumaRango();


// Contador de Palabras:
// Escribe una función que cuente la cantidad de palabras en una cadena de texto.

alert(`Te dire cuantas palabras tiene una frase`)

function contadorPalabras() {
    let frase = prompt("Ingrese una frase")
    let palabras = frase.split(" ").length
    alert(`La frase tiene ${palabras} palabras`)
}
contadorPalabras();
