function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let rows = document.querySelectorAll('tbody tr');
   function onClick() {
      let input = document.querySelector('#searchField').value;
      for (const row of rows) {
         if (row.textContent.includes(input)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
   }
}