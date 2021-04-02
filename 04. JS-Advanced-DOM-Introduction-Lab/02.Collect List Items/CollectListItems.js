function extractText() {
    let items = document.querySelectorAll("ul#items li");
    let area = document.querySelector("#result");
    for (const node of items) {
        area.value += node.textContent + '\n'
    }
}