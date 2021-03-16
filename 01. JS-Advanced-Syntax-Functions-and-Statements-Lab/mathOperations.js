function solve(firstNum, secondNum, operator) {
    // '+', '-', '*', '/', '%', '**'
    let result = 0;
    switch (operator) {
        case '+': result = firstNum + secondNum; break;
        case '-': result = firstNum - secondNum; break;
        case '*': result = firstNum * secondNum; break;
        case '/': result = firstNum / secondNum; break;
        case '%': result = firstNum % secondNum; break;
        case '**': result = Math.pow(firstNum, secondNum); break; 
    }
    console.log(result);
}
solve(5, 2, '**')