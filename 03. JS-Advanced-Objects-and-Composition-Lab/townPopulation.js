function solve(arr) {
    let cities = {};
    for (let line of arr) {
        let [city, population] = line.split(' <-> ');
        if (!cities.hasOwnProperty(city)) {
            cities[city] = 0;
        }
        cities[city] += Number(population);
    }
    return Object.entries(cities).map((el) => el.join(' : ')).join('\n');

}
console.log(solve([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
));