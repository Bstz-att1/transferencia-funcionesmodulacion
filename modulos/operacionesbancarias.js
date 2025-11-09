// Variable global para mantener el saldo
let saldo = 0;

// Función para depositar dinero
export function depositar(cantidad) {
    if (cantidad > 0) {
        saldo += cantidad;
        console.log(`Depósito exitoso. Nuevo saldo: ${saldo}`);
        return true;
    } else {
        console.log("La cantidad a depositar debe ser positiva.");
        return false;
    }
}

// Función para retirar dinero
export function retirar(cantidad) {
    if (cantidad > 0 && cantidad <= saldo) {
        saldo -= cantidad;
        console.log(`Retiro exitoso. Nuevo saldo: ${saldo}`);
        return true;
    } else if (cantidad > saldo) {
        console.log("Saldo insuficiente para realizar el retiro.");
        return false;
    } else {
        console.log("La cantidad a retirar debe ser positiva.");
        return false;
    }
}

// Función para consultar saldo
export function consultarSaldo() {
    console.log(`Saldo actual: ${saldo}`);
    return saldo;
}

// Función principal para simular operaciones bancarias
export function simularOperaciones() {
    let continuar = true;
    while (continuar) {
        const opcion = prompt("Seleccione una operación:\n1. Depositar\n2. Retirar\n3. Consultar saldo\n4. Salir");
        switch (opcion) {
            case '1':
                const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
                depositar(deposito);
                break;
            case '2':
                const retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                retirar(retiro);
                break;
            case '3':
                consultarSaldo();
                break;
            case '4':
                continuar = false;
                console.log("Gracias por usar el simulador de operaciones bancarias.");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    }
}
