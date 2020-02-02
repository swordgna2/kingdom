/**
 * Преобразовать коэффициент в процент.
 *
 * @param {Number} k
 * @param {Number} precision
 * @returns {string}
 */
export function convertKToPercent (k, precision) {
    k = isNaN(k) ? 0 : k;
    precision = isNaN(precision) ? 0 : precision.toFixed(0);
    return (k * 100).toFixed(precision);
}

/**
 * Получить среднее арифметическое из массива чисел.
 *
 * @param {Object} numbers
 * @returns {Number}
 */
export function average (numbers) {
    numbers = Object.values(numbers);
    if (numbers.length) {
        return numbers.reduce((a, b) => (a + b)) / numbers.length;
    } else {
        return NaN;
    }
}
