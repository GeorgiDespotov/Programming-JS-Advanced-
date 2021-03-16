function solve(matrix) {
    let result = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let i = 0; i < matrix[x].length; i++) {

            if (matrix[x][i] === matrix[x][i + 1]) {
                result++;
            }
            if ((x + 1) < matrix.length) {
                if (matrix[x][i] === matrix[x + 1][i]) {
                    result++;
                }
            }
        }
    }
    return result;
}
console.log(solve([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]

));