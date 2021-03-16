function solve(k, n) {
    let arr = [1];
    for (let i = 0; i < k - 1; i++) {
        let result = 0;
        if (n >= arr.length) {
            result = arr.reduce((a, b) => a + b, 0);
            arr.push(result);
        } else {
            let temp = arr.slice(- n);
            result = temp.reduce((a, b) => a + b, 0);
            arr.push(result);
        }
    }
    return arr
}
console.log(solve(8, 2));