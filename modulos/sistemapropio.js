// Funciones flecha para operaciones básicas
export const sumar = (a, b) => a + b;

export const multiplicar = (a, b) => a * b;

export const potencia = (base, exp) => Math.pow(base, exp);

// Funciones tradicionales para otras operaciones
export function restar(a, b) {
    return a - b;
}

export function dividir(a, b) {
    if (b === 0) {
        throw new Error("Error: División por cero no permitida.");
    } else if (a === 0) {
        throw new Error("Error: El dividendo no puede ser cero.");
    }
    return a / b;
}

// Función para validar que los argumentos sean números
export function validarNumeros(...args) {
    for (let arg of args) {
        if (typeof arg !== 'number' || isNaN(arg)) {
            throw new Error("Error: Todos los argumentos deben ser números válidos.");
        }
    }
}

// Función principal de la calculadora (modularizada)
export function ejecutarCalculadora() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt(
            "Seleccione una operación:\n" +
            "1. Suma\n" +
            "2. Resta\n" +
            "3. Multiplicación\n" +
            "4. División\n" +
            "5. Potencia\n" +
            "6. Salir"
        );

        if (opcion === '6') {
            continuar = false;
            console.log("Gracias por usar la calculadora.");
            break;
        }

        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        try {
            validarNumeros(num1, num2);
            let resultado;
            switch (opcion) {
                case '1':
                    resultado = sumar(num1, num2);
                    console.log(`Resultado de ${num1} + ${num2} = ${resultado}`);
                    break;
                case '2':
                    resultado = restar(num1, num2);
                    console.log(`Resultado de ${num1} - ${num2} = ${resultado}`);
                    break;
                case '3':
                    resultado = multiplicar(num1, num2);
                    console.log(`Resultado de ${num1} * ${num2} = ${resultado}`);
                    break;
                case '4':
                    resultado = dividir(num1, num2);
                    console.log(`Resultado de ${num1} / ${num2} = ${resultado}`);
                    break;
                case '5':
                    resultado = potencia(num1, num2);
                    console.log(`Resultado de ${num1} ^ ${num2} = ${resultado}`);
                    break;
                default:
                    console.log("Opción no válida. Intente de nuevo.");
            }
        } catch (error) {
            console.log(error.message);
        }
    }
}
