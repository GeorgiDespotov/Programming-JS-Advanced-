function addItem() {
    let items = document.getElementById('items');
    let input = document.getElementById('newText').value;
    if (input.length === 0) {
        return
    }
    let li = document.createElement('li');
    li.textContent = input;
    document.getElementById('newText').value = '';
    let remove = document.createElement('a');
    let link = document.createTextNode('[Delete]');
    remove.appendChild(link);
    remove.href = '#';
    li.appendChild(remove);
    items.appendChild(li);
    remove.addEventListener('click', deleteItem);
    function deleteItem() {
        li.remove();
    }
}