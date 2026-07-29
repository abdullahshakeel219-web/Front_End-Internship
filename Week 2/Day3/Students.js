let students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 45 },
  { name: "Hamza", marks: 60 },
  { name: "Ayesha", marks: 92 },
  { name: "Bilal", marks: 38 }
];
let passStudents=students.filter(student=>student.marks>=50);
console.log("Pass Students List ",passStudents);

let studentsNames=students.map(student=>student.name);
console.log("Students Names List: ",studentsNames);

let studentsGrade=students.map(student=> ({
    name:student.name,
    grade:student.marks>=80?"A":"B"
}));
console.log("Students Grade list ",studentsGrade);

let studentsAvg=students.reduce((avg,student)=>avg+student.marks,0);
let avg=studentsAvg/students.length;
console.log(`Students Average ${avg}`);