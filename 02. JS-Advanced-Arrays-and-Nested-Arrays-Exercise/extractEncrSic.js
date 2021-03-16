function solve(arr) {
    return arr.reduce((acc, val) => {

        if (val >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(val);
        }
        return acc;
    }, []);

}
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));