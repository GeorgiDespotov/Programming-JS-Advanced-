function solve(matrix) {
    let fitstDiagonal = 0;
    let secodDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        fitstDiagonal += matrix[i][i];
        secodDiagonal += matrix[i][matrix[i].length - 1 - i];
    }
    return `${fitstDiagonal} ${secodDiagonal}`
}
console.log(solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
));