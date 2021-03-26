function rectangle(width, height, color) {
    color = color[0].toUpperCase() + color.substring(1)
    let rect = {
        width,
        height,
        color,
        calcArea() {
            return width * height
        }
    }
    return rect
}
console.log(rectangle(1, 2, 'red'));
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
