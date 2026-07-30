import {getGrade,getPassedStudents,getAverageStudents} from './gradeHelper.js';
import chalk from 'chalk';
const generateReport=(studentsArray)=>{
     studentsArray.forEach(student=> console.log(chalk.blue(student.name+" "+getGrade(student.marks))))
      let passStd=getPassedStudents(studentsArray);
      console.log("Total Passed Students: "+passStd.length);
      console.log("Average Marks: "+getAverageStudents(studentsArray));
}

export default generateReport;