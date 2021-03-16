function solve(matrix) {
    let arr = [];
    for (const i of matrix) {
        const temp = Math.max(...i);
        arr.push(temp);
    }
    return Math.max(...arr);
}
console.log(solve([[20, 50, 10],
[8, 33, 145]]
));