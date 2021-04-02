function colorize() {
    let row = document.querySelectorAll('table tr');
    for (let i = 1; i < row.length; i += 2) {
        row[i].style.background = 'teal';

    }
}