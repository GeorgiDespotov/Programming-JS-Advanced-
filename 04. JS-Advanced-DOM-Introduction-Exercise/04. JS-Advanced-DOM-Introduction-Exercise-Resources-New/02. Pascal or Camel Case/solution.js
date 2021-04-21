function solve() {
  let text = document.getElementById('text').value;
  const type = document.getElementById('naming-convention').value;

  if (type == 'Camel Case') {
    text = text.toLowerCase();
    let arrStr = text.split(' ');
    const first = arrStr.shift();
    text = arrStr.map(el => el.toLowerCase()).map(i=> {
      return i[0].toUpperCase() + i.slice(1);
    }).join('');
    document.getElementById('result').textContent = first + text;
  } else if (type == 'Pascal Case') {
    text = text.split(' ').map(el => el.toLowerCase()).map(i=> {
      return i[0].toUpperCase() + i.slice(1);
    }).join('')
    document.getElementById('result').textContent = text;
  } else {
    document.getElementById('result').textContent = 'Error!';

  }

}