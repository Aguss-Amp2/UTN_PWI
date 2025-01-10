const calcularIVA = (precio) => {
    const precio_sinIva = precio / 1.21
    return precio - precio_sinIva
}

module.exports = {
    calcularIVA
}