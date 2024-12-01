//-- Laboratorio 3--Introducción de JavaScript--//
//--Actividad 1: Declaración de variables--//
let num1, num2, operacion;

// Paso 2: Función para realizar operaciones
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero.";
        }
        return num1 / num2;
    } else {
        return "Operación no válida.";
    }
}

// Paso 4: Bucle para realizar múltiples operaciones
while (true) {
    // Simulación con prompt
    operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    
    // Salir del bucle si el usuario ingresa "salir"
    if (operacion === "salir") {
        console.log("¡Gracias por usar la calculadora! Adiós.");
        break;
    }
    
    // Validación de la operación
    if (!["suma", "resta", "multiplicacion", "division"].includes(operacion)) {
        console.log("Operación no válida. Inténtelo de nuevo.");
        continue;
    }
    
    // Solicitar números al usuario
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    
    // Realizar la operación y mostrar el resultado
    let resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}
