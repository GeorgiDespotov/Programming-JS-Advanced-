function addItem() {
    let items = document.getElementById('items');
    const input = document.getElementById('newItemText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(input));
    items.appendChild(li);
    document.getElementById('newItemText').value = '';
    //console.log(item
}