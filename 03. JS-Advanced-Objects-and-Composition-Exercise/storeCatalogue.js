function solve(arr) {
    arr = arr.sort((a, b) => a.localeCompare(b));
    let catalogue = {};
    for (const line of arr) {
        let [name, price] = line.split(' : ');
        price = Number(price);
        let later = name[0];
        if (!catalogue[later]) {
            catalogue[later] = [];
        }
        catalogue[later].push(line);
    }
    let result = [];
    let matrix = Object.entries(catalogue);
    for (const arr of matrix) {
        result.push(arr[0]);
        for (const el of arr[1]) {
            let [name, price] = el.split(' : ');
            result.push(`  ${name}: ${Number(price)}`)
        }
    }
    return result.join('\n')
}
console.log(solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));