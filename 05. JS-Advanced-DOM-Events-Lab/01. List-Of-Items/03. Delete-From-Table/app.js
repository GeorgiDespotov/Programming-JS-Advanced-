function deleteByEmail() {
    let tableBody = document.querySelectorAll('tbody>tr');
    let input = document.querySelector('input');
    let output = document.getElementById('result');
    let isFound = false;
    for (const row of tableBody) {
        
        if (row.children[1].innerHTML === input.value) {
            isFound = true;
            output.textContent = 'Deleted.';
            row.remove();
        }
    }
    if (!isFound) {
        output.textContent = 'Not found.';
    }
    input.value = '';
   // console.log(input.value);
}