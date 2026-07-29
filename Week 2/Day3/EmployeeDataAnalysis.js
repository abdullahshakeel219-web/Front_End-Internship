let employees = [
  { name: "Ahmed", department: "Sales", salary: 45000, experience: 3 },
  { name: "Fatima", department: "IT", salary: 80000, experience: 5 },
  { name: "Usman", department: "Sales", salary: 38000, experience: 1 },
  { name: "Zainab", department: "IT", salary: 95000, experience: 7 },
  { name: "Bilal", department: "HR", salary: 42000, experience: 2 },
  { name: "Hina", department: "IT", salary: 60000, experience: 3 },
  { name: "Kashif", department: "Sales", salary: 52000, experience: 4 }
];
let departmentIT=employees.filter(employee=>employee.department==="IT");
console.log("IT Employees List ",departmentIT);

let empStatus=employees.map(employee=>({
    name:employee.name,
    level:employee.experience>=5?"Senior":"Junior"
}));
console.log("Employee Status List ",empStatus);

let filterSalary=employees.filter(employee=>employee.salary>50000);
let empHighSalary=filterSalary.map(employee=>employee.name);
console.log(`Higher Salary Employees ${empHighSalary}`);

let depITSalary=employees.reduce((total,employee)=>{
    if(employee.department==="IT"){
      return  total+employee.salary;
    }
    return total;
},0);
console.log(`IT Department Total Salary : ${depITSalary}`);