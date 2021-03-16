function solve(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const result = sorted.slice(0, 2);
    return result.join(' ')
}
console.log(solve([30, 15, 50, 5]));