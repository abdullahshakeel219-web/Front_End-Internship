//GradeCalculator
console.log("Grade_Calculation");
function gradeCalculator(num){
if(num>=90){
    return "A";
}
else if(num>=75){
    return "B";
}
else if(num>=60){
    return "C";
}
else if(num>=45){
    return "D";
}
else {
    return "F";
}
}
console.log("Grade: "+gradeCalculator(80));

//EvenOddDetector
console.log("Even Odd Detector");
let even=0;
let odd=0;
for(let i=0;i<=20;i++){
if(i%2===0){
    even++;
}
else {
    odd++;
}
}
console.log("Even Count: "+even+"\nOdd Count: "+odd);

//SumOfMultiples
console.log("Sum Of Multiples");
let i=1;
let sum=0;
while(i<=50){
    if(i%3===0 || i%5===0){
        sum+=i;
    }
    i++;
}
console.log(sum);

//PrimeNumberDetector
console.log("Prime Number Detector");
const readLineSync=require('readline-sync');
let num=readLineSync.question('Enter a number');

let prime=PrimeNumber(num);
if(prime==='primeNumber'){
    console.log('PrimeNumber');
}
else{
console.log("NotPrimeNumber");
}
function PrimeNumber(num){
for(let i=2;i<num;i++){
    if(num%i===0){
      return 'primeNumber';
    }

}
}
