function solve(num) {
    if (num == '') {
        num = 5;
    }
    let result = '';
    for (let i = 0; i < num; i++) {
        result += `${'* '.repeat(num)}\n`;
    }
    console.log(result);
}
solve('')