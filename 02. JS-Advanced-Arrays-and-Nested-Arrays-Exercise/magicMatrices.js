function solve(matrix) {
    const row = matrix.map(el => el.reduce((acc, val) => acc + val, 0))
    const cow = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let y = 0; y < matrix.length; y++) {
            sum += matrix[y][i]
        }
        cow.push(sum);
    }
    return cow.concat(row).every((el, i, arr) => el === arr[0]);

}
console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));