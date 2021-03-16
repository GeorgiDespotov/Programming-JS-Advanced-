function solve(x, y, z) {
    let largest = 0;
    if (x >= y && x >= z) {
        largest = x;
    } else if (y >= x && y >= z) {
        largest = y;
    } else if (z >= x && z >= y) {
        largest = z;
    } 
    console.log(`The largest number is ${largest}.`);
}
solve(5, -3, 16);