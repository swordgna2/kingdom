export function convertKToPercent (k, precision) {
    k = isNaN(k) ? 0 : k;
    precision = isNaN(precision) ? 0 : precision.toFixed(0);
    return (k * 100).toFixed(precision);
}

export function average (numbers) {
    numbers = Object.values(numbers);
    if (numbers.length) {
        return numbers.reduce((a, b) => (a + b)) / numbers.length;
    } else {
        return NaN;
    }
}
