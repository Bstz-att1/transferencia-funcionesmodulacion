import { registrarEstudiante, validarPositivo, simularOperaciones, calcularFactura, analizarNumero, ejecutarCalculadora } from './modulos/index.js';

// Ejecutar la calculadora propia
ejecutarCalculadora();

// // Código existente para el registro de estudiante
// let nota1 = 0;
// let nota2 = 0;
// let nota3 = 0;
// let contador = 1;

// let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
// while (contador <= 3) {
//     if (contador == 1){
//         nota1 = parseFloat(prompt("Ingrese la primera nota:"));
//         if (validarPositivo(nota1)){
//             contador++;
//         }
//     } else if (contador == 2){
//         nota2 = parseFloat(prompt("Ingrese la segunda nota:");
//         if (validarPositivo(nota2)){
//             contador++;
//         }
//     } else if (contador == 3){
//         nota3 = parseFloat(prompt("Ingrese la tercera nota:");
//         if (validarPositivo(nota3)){
//             contador++;
//         }
//     }
// }
// // Llamar a la función principal para registro de estudiante
// registrarEstudiante(nombreEstudiante, nota1, nota2, nota3);

// // Simular operaciones bancarias
// simularOperaciones();

// Ejemplo de uso del sistema de facturación
// const productos = [
//     { nombre: 'Producto A', precio: 10000, cantidad: 2 },
//     { nombre: 'Producto B', precio: 5000, cantidad: 3 },
//     { nombre: 'Producto C', precio: 20000, cantidad: 1 }
// ];

// const factura = calcularFactura(productos);
// console.log('Subtotales por producto:', factura.subtotales);
// console.log('Total sin IVA:', factura.totalSinIVA);
// console.log('IVA total (19%):', factura.ivaTotal);
// console.log('Total a pagar:', factura.totalPagar);

// Ejemplo de uso del análisis de números
// const numero = parseInt(prompt("Ingrese un número entero:"));
// analizarNumero(numero);

// Ejemplo uso calculadora propia
ejecutarCalculadora();
