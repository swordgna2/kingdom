/**
 * Получить случайное целое число в диапазоне (minimum...maximum).
 *
 * @param {Number} minimum
 * @param {Number} maximum
 * @returns {Number}
 */
export function getIntegerRandom (minimum, maximum) {
    const integerRandom = minimum - 0.5 + (maximum - minimum + 1) * Math.random();
    return Math.round(integerRandom);
}

/**
 * Получить случайное булево число: true или false.
 *
 * @returns {Boolean}
 */
export function getBooleanRandom () {
    return Math.random() > 0.5;
}

/**
 * Получить случайный коэффициент (0...1) с учётом сложности.
 *
 * @param {string} difficulty - сложность; одно из значений:
 *                              'easy' - легко, результат ближе к 1;
 *                              'normal' - нормально;
 *                              'hard' - сложно, результат ближе к 0.
 * @returns {Number}
 */
export function getKRandomWidthDifficulty (difficulty) {
    const result = Math.random();
    const hardResult = result / 2 + result * result / 2;
    if (difficulty === 'easy') {
        return 1 / hardResult;
    } else if (difficulty === 'hard') {
        return hardResult;
    }
    return result;
}
