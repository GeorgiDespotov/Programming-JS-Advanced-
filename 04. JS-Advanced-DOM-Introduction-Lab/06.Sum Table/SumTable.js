function sumTable() {
    let table = [...document.querySelectorAll('table tr')].slice(1,-1);
    document.getElementById('sum').textContent = table.reduce((sum, row) => {
        return sum + Number(row.lastElementChild.textContent)
    }, 0)
    
   
}