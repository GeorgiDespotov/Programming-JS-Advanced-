function solve(arr) {
    let list = {};
    for (const line of arr) {
        let [name, product, price] = line.split(' | ');
        price = Number(price);
        if (!list[product] || list[product].price > price) {

            list[product] = { name: name, price: price };
        } else {
            if (list[product] && list[product].name == name) {
                list[product].price = price;
            }
        }
    }
    let result = [];
    Object.entries(list).forEach(el => {
        result.push(`${el[0]} -> ${el[1].price} (${el[1].name})`);
    })
    return result.join('\n');
}
console.log(solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 4',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
));