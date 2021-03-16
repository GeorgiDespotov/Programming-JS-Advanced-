function solve(type, weight, priceKilo) {
    let weigthInKilo = weight / 1000;
    let bill = weigthInKilo * priceKilo;
    return `I need $${bill.toFixed(2)} to buy ${weigthInKilo.toFixed(2)} kilograms ${type}.`
}
console.log(solve('orange', 2500, 1.80));