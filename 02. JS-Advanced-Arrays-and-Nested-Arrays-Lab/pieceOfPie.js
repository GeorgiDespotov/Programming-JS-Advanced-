function solve(arr, strOne, strTwo) {
    const start = arr.indexOf(strOne);
    const end = arr.indexOf(strTwo) + 1;
    return arr.slice(start, end);
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));