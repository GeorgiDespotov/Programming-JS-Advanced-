function solve(speed, arrea) {
    let limit = 0;
    switch (arrea) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }
    let difference = limit - speed;
    if (difference >= 0) {
        return `Driving ${speed} km/h in a ${limit} zone`
    }
    let status = '';
    difference = Math.abs(difference);
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference > 20 && difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }
    return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
}
console.log(solve(40, 'city'));
console.log(solve(21, 'residential'));
console.log(solve(120, 'interstate'));
console.log(solve(200, 'motorway'));