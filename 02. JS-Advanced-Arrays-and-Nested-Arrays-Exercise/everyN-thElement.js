function solve(arr, num) {
    let result = arr.filter((el, i) => {
        if (i % num === 0) {
            return el;
        }
    }
        , [])
    return result;
}
console.log(solve(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));