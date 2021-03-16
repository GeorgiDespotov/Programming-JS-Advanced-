function solve(arr) {
    let newArr = [];
    for (const i of arr) {
        if (i < 0) {
            newArr.unshift(i);
        } else {
            newArr.push(i)
        }
    }
    return newArr.join('\n')
}
console.log(solve([7, -2, 8, 9]));