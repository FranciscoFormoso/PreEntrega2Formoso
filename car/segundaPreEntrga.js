// Captura de entrada de dos números y la operación
var num1 = parseFloat(prompt("Ingresa el primer número:"));
var num2 = parseFloat(prompt("Ingresa el segundo número:"));
var operacion = prompt("Selecciona la operación (+, -, *, /):").toLowerCase();

// Función para realizar la operación
function realizarOperacion(numero1, numero2, operador) {
switch (operador) {
    case "+":
        return numero1 + numero2;
    case "-":
        return numero1 - numero2;
    case "*":
      return numero1 * numero2;
    case "/":
        if (numero2 !== 0) {
            return numero1 / numero2;
        } else {
            return "No se puede dividir por cero";
        }
    default:
        return "Operación no válida";
}
}

//Para realizar la operación y obtener el resultado
var resultado = realizarOperacion(num1, num2, operacion);

//Para mostrar el resultado 
alert("El resultado de la operación es: " + resultado);

