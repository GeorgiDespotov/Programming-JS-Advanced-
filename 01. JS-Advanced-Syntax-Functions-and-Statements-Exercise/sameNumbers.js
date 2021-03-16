function solve(num) {
    const arr = num.toString().split('').map(Number);
    let sum = arr.reduce((a, b) => a + b, 0);
    let isValid = true;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            isValid = false;
            return `${isValid}\n${sum}`
        }
    }
    return `${isValid}\n${sum}`
}
console.log(solve(22222224));