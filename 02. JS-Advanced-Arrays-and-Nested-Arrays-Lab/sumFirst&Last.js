function solve(arr) {
    let sum = 0;
    const first = Number(arr.slice(0, 1));
    const last = Number(arr.slice(- 1));
    return first + last
}
console.log(solve(['20', '30', '40']));