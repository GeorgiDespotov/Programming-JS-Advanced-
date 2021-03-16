function solve(arr) {
    let comands = ['SumA', 'Sum1devA', 'ConcatA', 'end'];
    let actions = {
        SumA(arr) {
            let result = arr.reduce((a, b) => a + b);
            console.log(result);
        },
        Sum1devA(arr) {
            let result = arr.map(el => 1 / el).reduce((a, b) => a + b);
            console.log(result);
        },
        ConcatA(arr) {
            let result = '';
            for (const iterator of arr) {
                result += iterator;
            }
            console.log(result);
        }
    };
    let line;
    while ((line = comands.shift()) !== 'end') {
        actions[line](arr);
    }
}
solve([2, 4, 8, 16])