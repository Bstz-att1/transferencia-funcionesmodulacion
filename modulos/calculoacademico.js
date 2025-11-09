export const validarPositivo = (numero) => {
    if (numero >= 0) {
        return true;
    }
    return false;
}


// Función para calcular el promedio de tres notas
export function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

// Función para determinar si aprueba o reprueba basado en el promedio
export function determinarAprobacion(promedio) {
    if (promedio >= 3.0) {
        return "aprueba";
    } else {
        return "reprueba";
    }
}

// Función principal que registra el estudiante y muestra el resultado
export function registrarEstudiante(nombre, nota1, nota2, nota3) {
    const promedio = calcularPromedio(nota1, nota2, nota3);
    const resultado = determinarAprobacion(promedio);
    const mensaje = `El estudiante ${nombre} ${resultado} con un promedio de ${promedio.toFixed(2)}.`;
    console.log(mensaje);
    return mensaje;
}
