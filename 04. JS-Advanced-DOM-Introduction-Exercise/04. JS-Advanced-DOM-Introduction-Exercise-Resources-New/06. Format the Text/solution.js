function solve() {
  let input = document.getElementById('input');
  let output = document.getElementById('output');
  let arrInput = input.value.split('.').filter(x => x !== '');
  let paragraph = [];
  for (let i = 0; i < arrInput.length; i++) {
    let sentance = arrInput[i];
    paragraph.push(sentance);
    if (paragraph.length == 3 || i == arrInput.length - 1) {
      let p = document.createElement('p');
      for (const text of paragraph) {
        p.textContent += text + '.';
      }
      output.appendChild(p);
      paragraph = [];
    }
  }
  
}