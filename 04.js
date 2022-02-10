function solution() {
    const recapy = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock(material, quantity) {
            stock[material] += Number(quantity);
            return `Success`
        },
        prepare(product, quantity) {
            for (const materials in recapy[product]) {
                for (const molekuls in stock) {
                    if (materials == molekuls) {
                       
                        if ((recapy[product][materials] * Number(quantity)) <= stock[molekuls]) {
                            stock[materials] -= recapy[product][materials] * Number(quantity);
                        } else {
                            return `Error: not enough ${materials} in stock`
                        }
                    }
                }
            }
            return `Success`
        },
        report() {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    }
    return function output(str) {
        let [action, material, quantity] = str.split(' ');
        return commands[action](material, quantity)

    }

}
let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

