// Función para determinar si un número es par o impar
export function esParOImpar(num) {
    if (num % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

// Función para determinar si un número es positivo o negativo
export function esPositivoONegativo(num) {
    if (num > 0) {
        return "positivo";
    } else if (num < 0) {
        return "negativo";
    } else {
        return "cero";
    }
}

// Función para determinar si un número es primo
export function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) { 
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }
    return true;
}

// Función principal que analiza el número y muestra los resultados
export function analizarNumero(num) {
    const parImpar = esParOImpar(num);
    const positivoNegativo = esPositivoONegativo(num);
    const primo = esPrimo(num) ? "primo" : "no primo";

    console.log(`El número ${num} es ${parImpar}, ${positivoNegativo} y ${primo}.`);
}
