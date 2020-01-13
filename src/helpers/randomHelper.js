export function randomHelper (minimum, maximum) {
    const integerRandom = minimum - 0.5 + (maximum - minimum + 1) * Math.random();
    return Math.round(integerRandom);
}

export function getBooleanRandom () {
    return Math.random() > 0.5;
}
