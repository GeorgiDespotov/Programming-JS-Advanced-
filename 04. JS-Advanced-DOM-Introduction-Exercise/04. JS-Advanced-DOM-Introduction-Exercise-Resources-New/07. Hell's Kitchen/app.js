function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs>textarea');
   let outputsbestRest = document.querySelector('#bestRestaurant>p');
   let bestStaff = document.querySelector('#workers>p');
   function onClick() {
      let arr = JSON.parse(input.value);
      let restourants = {};
      for (const line of arr) {
         let [name, ...tokens] = line.split(' - ');
         let workers = [];
         let workersArr = tokens[0].split(', ');
         for (const line of workersArr) {
            let [name, salary] = line.split(' ');
            salary = Number(salary);
            let worker = { name, salary };
            workers.push(worker);
         }
         if (restourants[name]) {
            workers = workers.concat(restourants[name].workers);
         }
         workers.sort((a, b) => b.salary - a.salary);
         let bestSalary = workers[0].salary;
         let sumSalary = workers.reduce((acc, curr) => acc += curr.salary, 0)
         let averageSalary = (sumSalary / workers.length);

         restourants[name] = { workers, bestSalary, averageSalary }

      }
      let bestResourant;
      let current = 0;
      for (const name in restourants) {
         if (restourants[name].averageSalary > current) {
            bestResourant = {
               name,
               bestSalary: restourants[name].bestSalary,
               averageSalary: restourants[name].averageSalary,
               workers: restourants[name].workers 
            }
         }
         current = restourants[name].averageSalary;
      }
      let staff = [];
      for (const worker of bestResourant.workers) {
         staff.push(`Name: ${worker.name} With Salary: ${worker.salary}`);
      }
      outputsbestRest.textContent = `Name: ${bestResourant.name} Average Salary: ${bestResourant.averageSalary.toFixed(2)} Best Salary: ${bestResourant.bestSalary.toFixed(2)}`
      bestStaff.textContent = staff.join(' ');
   }

}