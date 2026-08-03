import {getAdvice} from './api.js';

let btn=document.getElementById("btn");
let result=document.getElementById("result");

btn.addEventListener("click",async()=>{
    let advice=await getAdvice();
    result.textContent=advice;
})