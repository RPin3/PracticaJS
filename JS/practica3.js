//practicaIII
document.getElementById('calcularCotizacion').addEventListener('click', function() {
    const precio = parseFloat(document.getElementById('precio').value);
    const porcentajePagoInicial = parseFloat(document.getElementById('porcentajePagoInicial').value);
    const plazo = parseInt(document.getElementById('plazo').value);

    if (isNaN(precio) || isNaN(porcentajePagoInicial) || isNaN(plazo)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const pagoInicial = (precio * (porcentajePagoInicial / 100)).toFixed(2);
    const totalFinanciar = (precio - pagoInicial).toFixed(2);
    const pagoMensual = (totalFinanciar / plazo).toFixed(2);

    // Formatear los números con comas para separar los miles
    const formattedPagoInicial = formatNumberWithCommas(pagoInicial);
    const formattedTotalFinanciar = formatNumberWithCommas(totalFinanciar);
    const formattedPagoMensual = formatNumberWithCommas(pagoMensual);

    document.getElementById('pagoInicial').textContent = formattedPagoInicial;
    document.getElementById('totalFinanciar').textContent = formattedTotalFinanciar;
    document.getElementById('pagoMensual').textContent = formattedPagoMensual;
});

function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}