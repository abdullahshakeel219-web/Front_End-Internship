export const getAdvice=async()=>{
    let response=await fetch("https://api.adviceslip.com/advice");
    let advice=await response.json();
    return advice.slip.advice;
}
