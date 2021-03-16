function solve(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const result = sorted.slice(sorted.length / 2);
    return result;
}
console.log(solve([4, 7, 2, 5]));