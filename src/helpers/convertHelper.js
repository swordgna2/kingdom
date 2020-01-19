export function convertKToPercent (k, precision) {
    k = isNaN(k) ? 0 : k;
    precision = isNaN(precision) ? 0 : precision.toFixed(0);
    return (k * 100).toFixed(precision);
}
