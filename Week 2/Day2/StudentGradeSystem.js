const getTopTwoSubject=(marksArray)=>{
    const [m1,m2]=marksArray;
    let avg=(m1+m2)/2;
    return avg;
}
const printStudentInfo=(students)=>{
    const{name,marks}=students;
    console.log(`${name} : ${marks}`);
}
const getAllAverage=(students)=>{
   
    for(let i=0;i<students.length;i++){
         let avg=0;
        const{name,marks}=students[i];
        for(let j=0;j<marks.length;j++){
            avg+=marks[j];
        }
         avg=avg/marks.length;
         console.log(`${name}'s Average ${avg}`);
    }
   
}
const students=[
    {name:'Ali',age:18,marks:[18,20,24]},
     {name:'Ahmed',age:18,marks:[18,21,25]},
      {name:'Zeshan',age:18,marks:[20,20,20]}
];
console.log(`Average : ${getTopTwoSubject([18,20,25])}`);
printStudentInfo(students[0]);
getAllAverage(students);

