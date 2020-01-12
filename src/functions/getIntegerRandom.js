export function getIntegerRandom (minimum, maximum) {
    const integerRandom = minimum - 0.5 + (maximum - minimum + 1) * Math.random();
    return Math.round(integerRandom);
}
