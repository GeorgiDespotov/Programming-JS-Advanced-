function solve(nam, pop, tres) {
    let city = {};
    city.name = nam;
    city.population = pop;
    city.treasury = tres;
    return city;
}
console.log(solve('Tortuga', 7000, 15000));