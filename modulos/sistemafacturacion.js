// Función para calcular el subtotal de un producto
export function calcularSubtotal(precio, cantidad) {
    return precio * cantidad;
}

// Función para calcular el total sin IVA
export function calcularTotalSinIVA(subtotales) {
    return subtotales.reduce((total, subtotal) => total + subtotal, 0);
}

// Función para calcular el IVA total (19%)
export function calcularIVATotal(totalSinIVA) {
    return totalSinIVA * 0.19;
}

// Función para calcular el total a pagar
export function calcularTotalPagar(totalSinIVA, ivaTotal) {
    return totalSinIVA + ivaTotal;
}

// Función principal (flecha) que recibe la lista de productos y calcula todo
export const calcularFactura = (productos) => {
    // Calcular subtotales por producto
    const subtotales = productos.map(producto => ({
        nombre: producto.nombre,
        subtotal: calcularSubtotal(producto.precio, producto.cantidad)
    }));

    // Calcular total sin IVA
    const totalSinIVA = calcularTotalSinIVA(subtotales.map(p => p.subtotal));

    // Calcular IVA total
    const ivaTotal = calcularIVATotal(totalSinIVA);

    // Calcular total a pagar
    const totalPagar = calcularTotalPagar(totalSinIVA, ivaTotal);

    // Retornar objeto con todos los cálculos
    return {
        subtotales,
        totalSinIVA,
        ivaTotal,
        totalPagar
    };
};
