function solve(str) {
    const upperCase = str.toUpperCase();
    const regex = /[^\W]+/g;
    const words = upperCase.match(regex);
    const result = words.join(', ')
    return result
}
console.log(solve('Hi, how are you?'));