let employees = [
  { name: "Ahmed", department: "Sales", salary: 45000, experience: 3 },
  { name: "Fatima", department: "IT", salary: 80000, experience: 5 },
  { name: "Usman", department: "Sales", salary: 38000, experience: 1 },
  { name: "Zainab", department: "IT", salary: 95000, experience: 7 },
  { name: "Bilal", department: "HR", salary: 42000, experience: 2 }
];
let {name,salary}=employees[0];
console.log(name,salary);

let {name:empName}=employees[1];
console.log(empName);

const getBonus=(salary,bonusPercent=10)=>{
    let percent=salary*(bonusPercent/100);
    return percent;
}
console.log(`Bonus Percentage Of Salary ${getBonus(50000)}`);

let newEmployee = { name: "Sara", department: "IT", salary: 55000, experience: 2 };
employees=[...employees,newEmployee];
console.log(employees);

let salaryChange={...employees[0],salary:50000};
console.log(salaryChange);

const sum=(...numbers)=>{
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total=total+numbers[i];
    }
    return total;
}
console.log(sum(10,20,30,40,50));