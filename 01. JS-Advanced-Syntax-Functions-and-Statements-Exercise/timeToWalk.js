function solve(steps, footLEngth, speedKmH) {
    const speed = speedKmH / 3.6;
    const deestance = steps * footLEngth;
    const rest = Math.floor(deestance / 500);
    const time = (deestance / speed) + (rest * 60);
    const hours = Math.floor(time / 60 / 60).toFixed(0).padStart(2, '0');
    const minutes = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    const seconds = (time % 60).toFixed(0).padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));