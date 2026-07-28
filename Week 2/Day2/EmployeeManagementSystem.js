const addEmployee=(employees,{name,department="General",salary})=>{
    let Emp=[...employees,{name,department,salary}];
    return Emp;
}
const getEmpSummary=(employees)=>{
    const{name,salary}=employees;
    console.log(`${name} earns ${salary}`);
}
const giveRaise=(employees,raiseAmount)=>{
    let arr=[];
    for(let i=0;i<employees.length;i++){
        
        let{salary}=employees[i];
        let inc=salary+raiseAmount;
        let newEmp={...employees[i],salary:inc};
        arr=[...arr,newEmp];
    }
    return arr;
}
const listDep=(...Departemnts)=>{
    console.log(`Departements ${Departemnts.join(",")}`);
}
let employees = [
  { name: "Hamza", department: "IT", salary: 50000 },
  { name: "Ayesha", department: "HR", salary: 45000 },
  { name: "Usman", department: "IT", salary: 55000 }
];
employees=addEmployee(employees,{name:"Ali",department:"CS",salary:60000});
employees=addEmployee(employees,{name:"Abdullah",salary:100000});
console.log(employees);
getEmpSummary(employees[0]);
let updatemp=giveRaise(employees,10000);
console.log(updatemp);
listDep("IT","CyberSecurity","HR","Accounts");