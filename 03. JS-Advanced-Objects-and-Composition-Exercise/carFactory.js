function factory(list) {
    const result = {
        model: list.model,
        engine: pickEngine(list),
        carriage: pickCarriage(list),
        wheels: pickWheels(list)
    }
    function pickWheels(list) {
        let wheelSize = list.wheelsize % 2 === 0 ? list.wheelsize -= 1 : list.wheelsize;
        let result = [0, 0, 0, 0];
        return result.fill(wheelSize);
    }
    function pickCarriage(list) {
        let chois = [
            { type: 'hatchback', color: list.color },
            { type: 'coupe', color: list.color }
        ];
        let result;
        for (const obj of chois) {
            if (obj.type === list.carriage) {
                result = obj;
                break;
            }
        }
        return result;
    }
    function pickEngine(list) {
        let chois = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ];
        for (const obj of chois) {
            if (obj.power >= list.power) {
                return obj;

            }
        }

    }
    return result
}
console.log(factory({
    model: 'VW Golf II',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));