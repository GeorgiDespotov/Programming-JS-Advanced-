function solve(arr) {
    let list = arr.slice();
    let heroes = [];
    while (list.length) {
        let hero = {}
        let [name, level, ...inventory] = list.shift().split(' / ');
        hero.name = name;
        hero.level = Number(level);
        hero.items = inventory.length > 0 ? inventory.join('').split(', ') : inventory;

        heroes.push(hero);
    }
    return JSON.stringify(heroes);
}
console.log(solve([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));