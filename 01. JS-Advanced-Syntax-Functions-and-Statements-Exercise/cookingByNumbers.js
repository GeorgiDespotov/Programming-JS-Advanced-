function solve(str1, str2, str3, str4, str5, str6) {
    let number = Number(str1);
    let arr = [str2, str3, str4, str5, str6];
    for (const action of arr) {
        switch (action) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number, 2);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }
        console.log(number);
    }
}
console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));