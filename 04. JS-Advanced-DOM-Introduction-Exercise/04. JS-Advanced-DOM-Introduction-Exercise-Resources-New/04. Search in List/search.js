function search() {
   let list = document.querySelectorAll('#towns>li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');
   console.log(list);
   
   let sum = 0;
   for (const li of list) {
      if (li.textContent.includes(input)) {
         li.style.fontWeight = 'bold';
         li.style.textDecoration = 'underline';
         sum++;
      } else {
         li.style.fontWeight = '';
         li.style.textDecoration = ''
      }
      result.textContent = `${sum} matches found` 
   }
}
