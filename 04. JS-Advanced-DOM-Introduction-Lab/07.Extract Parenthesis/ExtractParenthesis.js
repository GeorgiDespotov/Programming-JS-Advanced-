function extract(content) {
   let param = document.getElementById(content).textContent;
    let result = [];
    let regex = /\(([^)]+)\)/g;
    let match = regex.exec(param);
    while (match) {
        result.push(match[1]);
        match = regex.exec(param);
    }
    return result.join(';');
}
console.log(extract('The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill).'));