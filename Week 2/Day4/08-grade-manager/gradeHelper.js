export const getGrade=(marks)=>{
    if(marks>=90){
        return "A";
    }
    else if(marks>70 && marks<90){
        return "B";
    }
    else if(marks>50 && marks<=70){
        return "C";
    }
    else{
        return "Fail";
    }
}
export const getPassedStudents=(studentsArray) =>{
    return studentsArray.filter(student=>student.marks>=50);
}
export const getAverageStudents=(studentsArray)=>{
   let total= studentsArray.reduce((sum,student)=>
        sum+student.marks,0);
        return total/studentsArray.length;
}
