export const numberFormated = (number) => {
    const objFormatNumeric = new Intl.NumberFormat('es-AR');
    return objFormatNumeric.format(parseFloat(number).toFixed(2));
}