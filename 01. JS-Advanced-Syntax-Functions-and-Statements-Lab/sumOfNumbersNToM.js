function solve(start, end) {
    start = Number(start);
    end = Number(end);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(solve('1', '5'))