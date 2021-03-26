function solve(input) {
    let arr = input.slice();
    let newArr = [];
    for (const el of arr) {
        let [...params] = el.split('|');
        let x = [...params]
        x = x.filter(el => el !== '').map(el => el.trim());
        newArr.push(x)
    }
    newArr = newArr.map(el => el.join('|'));

    let [town, latitude, longitude] = newArr.shift().split('|');

    let result = [];
    for (const el of newArr) {
        let [city, lat, long] = el.split('|');
        lat = Number(lat).toFixed(2);
        long = Number(long).toFixed(2);
        let currentTown = {};
        currentTown[town] = city;
        currentTown[latitude] = Number(lat);
        currentTown[longitude] = Number(long);
        result.push(currentTown);
    }
    return JSON.stringify(result);

}
console.log(solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));