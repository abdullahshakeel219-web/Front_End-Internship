export const getMax=(...numbers)=>{
    return Math.max(...numbers);
}
export const getMin=(...numbers)=>{
    return Math.min(...numbers);
}
export const getAvg=(...numbers)=>{
    let avg=numbers.reduce((sum,num)=>sum+num,0);
    return avg/numbers.length;
}